import { BasePrompt } from './base.js';
import { createAnsiSurface } from '../visuals/ansi.js';

const GRID_CONFIG = {
  originX: 18,
  originY: 6,
  stepWidth: 2,
  rowsPerTrack: 3,
};

export class Day04 extends BasePrompt {
  constructor(p5Instance, bridge) {
    super(p5Instance, bridge);
    this.ansi = createAnsiSurface(p5Instance, { cols: 64, rows: 32 });
    this.buffer = this.ansi.buffer;
    this.renderer = this.ansi.renderer;
    this.palette = this.ansi.palette;

    this.patternLength = 16;
    this.cursor = { track: 0, step: 0 };
    this.playheadStep = -1;
    this.sequenceId = 'day04-sequencer';
    this.bpm = 92;

    this.audioGroups = { noise: null, bass: null, lead: null };
    this.groupsCreated = false;
    this.audioReady = false;
    this.nextNodeId = 7100;
    this.pendingTimeouts = [];

    this.tracks = this.createTracks();
    this.trackActivity = new Array(this.tracks.length).fill(0);
  }

  createTracks() {
    const hatsPattern = Array.from({ length: this.patternLength }, (_, idx) => idx % 2 === 0);
    return [
      {
        id: 'bass',
        name: 'BASS',
        type: 'bass',
        color: this.palette[10],
        steps: this.seedPattern([0, 4, 8, 12]),
        notes: [36, 36, 34, 39],
      },
      {
        id: 'snare',
        name: 'SNARE',
        type: 'noise-mid',
        color: this.palette[9],
        steps: this.seedPattern([4, 12]),
      },
      {
        id: 'hats',
        name: 'HATS',
        type: 'noise-hi',
        color: this.palette[15],
        steps: hatsPattern,
      },
      {
        id: 'lead',
        name: 'LEAD',
        type: 'lead',
        color: this.palette[12],
        steps: this.seedPattern([2, 6, 10, 14]),
        notes: [72, 74, 76, 79],
      },
    ];
  }

  seedPattern(activeSteps) {
    return Array.from({ length: this.patternLength }, (_, idx) => activeSteps.includes(idx));
  }

  setup() {
    this.p5.noSmooth();
    this.p5.frameRate(60);
    this.bridge.sequencer.setBPM(this.bpm);
  }

  setupAudio() {
    if (!this.audio) {
      return;
    }

    this.ensureAudioGroups();
    this.audioReady = true;
    this.bridge.sequencer.setBPM(this.bpm);
    this.schedulePattern();
  }

  ensureAudioGroups() {
    if (!this.audio || this.groupsCreated) {
      return;
    }
    const baseGroup = 5200;
    this.audio.send('/g_new', baseGroup, 0, 0);
    this.audio.send('/g_new', baseGroup + 1, 3, baseGroup);
    this.audio.send('/g_new', baseGroup + 2, 3, baseGroup + 1);
    this.audioGroups = {
      noise: baseGroup,
      bass: baseGroup + 1,
      lead: baseGroup + 2,
    };
    this.groupsCreated = true;
  }

  schedulePattern() {
    if (!this.bridge.sequencer) {
      return;
    }
    this.bridge.sequencer.unschedule(this.sequenceId);
    this.bridge.sequencer.schedule(this.sequenceId, (event) => {
      this.handleSequencerStep(event);
    }, '16n');
  }

  handleSequencerStep() {
    if (!this.audioReady) {
      return;
    }
    const stepIndex = (this.playheadStep + 1) % this.patternLength;
    this.playheadStep = stepIndex;

    this.tracks.forEach((track, trackIndex) => {
      if (!track.steps[stepIndex]) {
        this.trackActivity[trackIndex] *= 0.85;
        return;
      }

      this.trackActivity[trackIndex] = 1;
      switch (track.type) {
        case 'bass':
          this.triggerBass(track, stepIndex);
          break;
        case 'noise-mid':
          this.triggerNoise(track, stepIndex, 420, 0.28);
          break;
        case 'noise-hi':
          this.triggerNoise(track, stepIndex, 1800, 0.12);
          break;
        case 'lead':
          this.triggerLead(track, stepIndex);
          break;
        default:
          break;
      }
    });
  }

  triggerBass(track, stepIndex) {
    if (!this.audio) {
      return;
    }
    const note = track.notes?.[stepIndex % track.notes.length] ?? 36;
    this.audio.synth('sonic-pi-chipbass', {
      note,
      amp: 0.4,
      attack: 0.005,
      decay: 0.15,
      sustain: 0.2,
      release: 0.5,
      pan: this.p5.random(-0.2, 0.2),
    }, { target: this.audioGroups.bass ?? 0 });
  }

  triggerNoise(track, stepIndex, freqBand, amp) {
    if (!this.audio) {
      return;
    }
    const pan = this.p5.map(Math.sin(stepIndex * 0.5), -1, 1, -0.5, 0.5);
    this.audio.synth('sonic-pi-chipnoise', {
      amp,
      attack: 0.002,
      decay: 0.05,
      sustain: 0.05,
      release: 0.05,
      freq_band: freqBand,
      pan,
    }, { target: this.audioGroups.noise ?? 0 });
  }

  triggerLead(track) {
    if (!this.audio) {
      return;
    }
    const notes = track.notes ?? [72, 76, 79];
    notes.forEach((note, idx) => {
      this.scheduleTimeout(() => {
        if (!this.audio) {
          return;
        }
        this.audio.synth('sonic-pi-chiplead', {
          note,
          amp: 0.12,
          attack: 0.01,
          decay: 0.05,
          sustain: 0.15,
          release: 0.08,
          width: 0.3 + idx * 0.1,
          pan: this.p5.map(idx, 0, notes.length - 1, -0.4, 0.4),
        }, { target: this.audioGroups.lead ?? 0 });
      }, idx * 35);
    });
  }

  scheduleTimeout(callback, delay) {
    const id = setTimeout(() => {
      callback();
      this.pendingTimeouts = this.pendingTimeouts.filter((timer) => timer !== id);
    }, delay);
    this.pendingTimeouts.push(id);
    return id;
  }

  draw() {
    this.bridge.updateState();
    this.p5.background(6, 80, 8, 1);
    this.buffer.clear(' ', { fg: this.palette[7], bg: '#04070D' });

    this.drawChrome();
    this.drawGrid();
    this.drawMeters();
    this.drawFooter();

    this.renderer.render(this.buffer);
  }

  drawChrome() {
    const title = 'SYS/04 LOW-RES SEQUENCER';
    this.buffer.drawBox(1, 1, 62, 30, { fg: this.palette[8] });
    this.buffer.write(3, 2, title.padEnd(40), { fg: this.palette[15] });
    this.buffer.write(44, 2, `BPM:${String(this.bpm).padStart(3, '0')}`, { fg: this.palette[11] });
  }

  drawGrid() {
    const originX = GRID_CONFIG.originX;
    const originY = GRID_CONFIG.originY;
    const stepWidth = GRID_CONFIG.stepWidth;
    const rowsPerTrack = GRID_CONFIG.rowsPerTrack;

    for (let col = 0; col < this.patternLength; col++) {
      const measureMarker = col % 4 === 0;
      const markerChar = measureMarker ? '|' : ':';
      this.buffer.set(originX + col * stepWidth, originY - 1, markerChar, { fg: this.palette[5] });
    }

    this.tracks.forEach((track, trackIndex) => {
      const rowY = originY + trackIndex * rowsPerTrack + 1;
      const labelStyle = { fg: track.color };
      this.buffer.write(originX - 12, rowY, `>${track.name}`.padEnd(10), labelStyle);

      for (let step = 0; step < this.patternLength; step++) {
        const cellX = originX + step * stepWidth;
        const isActive = track.steps[step];
        const isCursor = this.cursor.track === trackIndex && this.cursor.step === step;
        const isPlayhead = this.playheadStep === step;
        const chars = isActive ? '[]' : '..';
        const style = this.getCellStyle(track.color, isActive, isCursor, isPlayhead);
        this.buffer.write(cellX, rowY, chars, style);
      }
    });
  }

  getCellStyle(color, isActive, isCursor, isPlayhead) {
    let fg = isActive ? color : this.palette[7];
    let bg = null;
    if (isPlayhead && !isCursor) {
      bg = '#0E1C33';
    }
    if (isCursor) {
      bg = isActive ? '#223B4F' : '#14344F';
      fg = isActive ? color : this.palette[15];
    }
    return { fg, bg };
  }

  drawMeters() {
    const meterX = 4;
    const startY = 6;
    this.tracks.forEach((track, idx) => {
      const level = this.trackActivity[idx] ?? 0;
      const meterWidth = Math.round(level * 8);
      for (let i = 0; i < 8; i++) {
        const char = i < meterWidth ? '#' : '-';
        const fg = i < meterWidth ? track.color : this.palette[7];
        this.buffer.set(meterX + i, startY + idx * GRID_CONFIG.rowsPerTrack + 1, char, { fg });
      }
      this.trackActivity[idx] *= 0.92;
    });
  }

  drawFooter() {
    const infoY = 28;
    this.buffer.write(4, infoY, 'ARROWS MOVE  | SPACE:TOGGLE | -/+ BPM | R: RANDOM ROW', { fg: this.palette[13] });
    this.buffer.write(4, infoY + 1, 'CLICK STEPS TO PAINT | ANSI UI PROTOTYPE', { fg: this.palette[11] });
  }

  keyPressed(event) {
    switch (event.key) {
      case 'ArrowRight':
        this.moveCursor(1, 0);
        break;
      case 'ArrowLeft':
        this.moveCursor(-1, 0);
        break;
      case 'ArrowUp':
        this.moveCursor(0, -1);
        break;
      case 'ArrowDown':
        this.moveCursor(0, 1);
        break;
      case ' ':
      case 'Enter':
        this.toggleCurrentStep();
        break;
      case '-':
        this.adjustBPM(-2);
        break;
      case '=':
      case '+':
        this.adjustBPM(2);
        break;
      case 'r':
      case 'R':
        this.randomizeRow(this.cursor.track);
        break;
      default:
        break;
    }
  }

  mousePressed() {
    const cell = this.getGridCellFromPointer(this.p5.mouseX, this.p5.mouseY);
    if (!cell) {
      return;
    }
    this.cursor = cell;
    this.toggleCurrentStep();
  }

  getGridCellFromPointer(px, py) {
    const metrics = this.renderer.getMetrics();
    if (!metrics || !metrics.cellSize) {
      return null;
    }
    const col = Math.floor((px - metrics.offsetX) / metrics.cellSize);
    const row = Math.floor((py - metrics.offsetY) / metrics.cellSize);
    const originX = GRID_CONFIG.originX;
    const originY = GRID_CONFIG.originY;

    const relX = col - originX;
    const relY = row - originY;
    if (relX < 0 || relY < 0) {
      return null;
    }

    const step = Math.floor(relX / GRID_CONFIG.stepWidth);
    const track = Math.floor(relY / GRID_CONFIG.rowsPerTrack);

    if (
      step < 0 || step >= this.patternLength ||
      track < 0 || track >= this.tracks.length
    ) {
      return null;
    }
    return { track, step };
  }

  moveCursor(dx, dy) {
    const nextTrack = this.p5.constrain(this.cursor.track + dy, 0, this.tracks.length - 1);
    const nextStep = (this.cursor.step + dx + this.patternLength) % this.patternLength;
    this.cursor = { track: nextTrack, step: nextStep };
  }

  toggleCurrentStep() {
    const track = this.tracks[this.cursor.track];
    if (!track) {
      return;
    }
    track.steps[this.cursor.step] = !track.steps[this.cursor.step];
  }

  adjustBPM(delta) {
    this.bpm = this.p5.constrain(this.bpm + delta, 40, 180);
    this.bridge.sequencer.setBPM(this.bpm);
  }

  randomizeRow(trackIndex) {
    const track = this.tracks[trackIndex];
    if (!track) {
      return;
    }
    for (let step = 0; step < this.patternLength; step++) {
      let probability = 0.35;
      if (track.id === 'hats') {
        probability = 0.85;
      } else if (track.id === 'snare') {
        probability = 0.5;
      }
      track.steps[step] = this.p5.random() < probability;
    }
  }

  cleanup() {
    if (this.bridge?.sequencer) {
      this.bridge.sequencer.unschedule(this.sequenceId);
    }
    if (this.pendingTimeouts.length) {
      this.pendingTimeouts.forEach((id) => clearTimeout(id));
      this.pendingTimeouts = [];
    }
    if (this.audio && this.groupsCreated) {
      const { noise, bass, lead } = this.audioGroups;
      [noise, bass, lead].forEach((groupId) => {
        if (groupId) {
          this.audio.send('/g_free', groupId);
        }
      });
      this.groupsCreated = false;
      this.audioGroups = { noise: null, bass: null, lead: null };
    }
  }
}
