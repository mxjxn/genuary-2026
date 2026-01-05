import { BasePrompt } from './base.js';
import { createAnsiSurface } from '../visuals/ansi.js';

const GRID_CONFIG = {
  originX: 18,
  originY: 6,
  stepWidth: 2,
  rowsPerTrack: 3,
};

// ANSI glyph sets inspired by vintage terminal palettes and
// shading techniques outlined in https://hbfs.wordpress.com/2017/11/14/ansi-art/
const ANSI_THEMES = [
  {
    id: 'dots',
    name: 'DOT MATRIX',
    emptyChars: '..',
    activeChars: '[]',
    tieChars: '--',
    cursorTieChars: '==',
    playheadTieChars: '--',
    cursorEmptyChars: '<>',
    cursorActiveChars: '##',
    playheadBg: '#0E1C33',
    cursorBgEmpty: '#14344F',
    cursorBgActive: '#223B4F',
    inactiveFg: '#7C8DAA',
    activeFg: null,
    tieFg: '#FFC857',
    cursorTieFg: '#FFFFFF',
    cursorFgEmpty: '#F5F7FA',
    cursorFgActive: null,
    markerMajor: '|',
    markerMinor: ':',
    markerColor: '#5A8FD1',
    meterFillChar: '#',
    meterEmptyChar: '-',
    meterEmptyColor: '#486079',
  },
  {
    id: 'bricks',
    name: 'BRICK TONES',
    emptyChars: '..',
    activeChars: '##',
    tieChars: '--',
    cursorTieChars: '[]',
    playheadTieChars: '<>',
    cursorEmptyChars: '<>',
    cursorActiveChars: '[]',
    playheadBg: '#1A0F22',
    cursorBgEmpty: '#2B1533',
    cursorBgActive: '#3E1E46',
    inactiveFg: '#B0A0C3',
    activeFg: '#F8F1FF',
    tieFg: '#FFB74D',
    cursorTieFg: '#FFFFFF',
    cursorFgEmpty: '#F8F1FF',
    cursorFgActive: '#FFFFFF',
    markerMajor: '#',
    markerMinor: ':',
    markerColor: '#C18DF2',
    meterFillChar: '#',
    meterEmptyChar: '.',
    meterEmptyColor: '#5E4C72',
  },
  {
    id: 'scanlines',
    name: 'SCANLINES',
    emptyChars: '//',
    activeChars: '||',
    tieChars: '==',
    cursorTieChars: '<>',
    playheadTieChars: '||',
    cursorEmptyChars: '<>',
    cursorActiveChars: '[]',
    playheadBg: '#102119',
    cursorBgEmpty: '#1E3A2D',
    cursorBgActive: '#27513F',
    inactiveFg: '#6FAF8F',
    activeFg: '#B3FFD5',
    tieFg: '#9CFFCB',
    cursorTieFg: '#FFFFFF',
    cursorFgEmpty: '#D2F8E4',
    cursorFgActive: '#FFFFFF',
    markerMajor: '+',
    markerMinor: ':',
    markerColor: '#5EC09F',
    meterFillChar: '=',
    meterEmptyChar: '-',
    meterEmptyColor: '#32604A',
  }
];

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
    this.themeIndex = 0;
    this.theme = ANSI_THEMES[this.themeIndex];
    this.voiceState = { bass: null, lead: null };
  }

  getTheme() {
    return ANSI_THEMES[this.themeIndex % ANSI_THEMES.length];
  }

  setTheme(index) {
    const count = ANSI_THEMES.length;
    if (!count) {
      return;
    }
    this.themeIndex = (index + count) % count;
    this.theme = this.getTheme();
  }

  cycleTheme(direction = 1) {
    this.setTheme(this.themeIndex + direction);
  }

  getStepDurationSeconds() {
    return 60 / this.bpm / 4;
  }

  getPrevStepIndex(index) {
    return (index - 1 + this.patternLength) % this.patternLength;
  }

  createTracks() {
    const hatsPattern = Array.from({ length: this.patternLength }, (_, idx) => idx % 2 === 0);
    const createTieArray = () => Array.from({ length: this.patternLength }, () => false);
    return [
      {
        id: 'bass',
        name: 'BASS',
        type: 'bass',
        color: this.palette[10],
        steps: this.seedPattern([0, 4, 8, 12]),
        notes: [36, 36, 34, 39],
        ties: createTieArray(),
      },
      {
        id: 'snare',
        name: 'SNARE',
        type: 'noise-mid',
        color: this.palette[9],
        steps: this.seedPattern([4, 12]),
        ties: createTieArray(),
      },
      {
        id: 'hats',
        name: 'HATS',
        type: 'noise-hi',
        color: this.palette[15],
        steps: hatsPattern,
        ties: createTieArray(),
      },
      {
        id: 'lead',
        name: 'LEAD',
        type: 'lead',
        color: this.palette[12],
        steps: this.seedPattern([2, 6, 10, 14]),
        notes: [60, 70, 74, 76, 79],
        ties: createTieArray(),
      },
    ];
  }

  isVoiceTrack(track) {
    if (!track) {
      return false;
    }
    return track.type === 'bass' || track.type === 'lead';
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
        if (this.isVoiceTrack(track)) {
          this.releaseVoice(track.id);
        }
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
    const pool = (track.notes && track.notes.length) ? track.notes : [36];
    const note = pool[stepIndex % pool.length];
    this.handleVoiceStep(track, stepIndex, note, {
      synth: 'sonic-pi-chipbass',
      group: this.audioGroups.bass ?? 0,
      slide: 0.22,
      params: {
        amp: 0.4,
        attack: 0.01,
        decay: 0.08,
        sustain: 0.35,
        release: 0.2,
        pan: this.p5.random(-0.2, 0.2),
      },
    });
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
      release: 0,
      freq_band: freqBand,
      pan,
    }, { target: this.audioGroups.noise ?? 0 });
  }

  triggerLead(track, stepIndex) {
    if (!this.audio) {
      return;
    }
    const pool = (track.notes && track.notes.length) ? track.notes : [72];
    const note = pool[stepIndex % pool.length];
    this.handleVoiceStep(track, stepIndex, note, {
      synth: 'sonic-pi-chiplead',
      group: this.audioGroups.lead ?? 0,
      slide: 0.14,
      params: {
        amp: 0.18,
        attack: 0.02,
        decay: 0.08,
        sustain: 0.25,
        release: 0.18,
        width: 0.45,
        pan: this.p5.map(stepIndex % this.patternLength, 0, this.patternLength - 1, -0.5, 0.5),
      },
    });
  }

  handleVoiceStep(track, stepIndex, note, options = {}) {
    if (!this.audio) {
      return;
    }
    const trackId = track.id;
    const tie = Boolean(track.ties?.[stepIndex]);
    const prevIndex = this.getPrevStepIndex(stepIndex);
    const prevTie = Boolean(track.ties?.[prevIndex] && track.steps?.[prevIndex]);
    const gateFraction = tie ? 1 : (options.gateFraction ?? 0.5);
    const voice = this.voiceState[trackId];
    const slide = options.slide ?? 0.18;

    if (voice && prevTie) {
      this.cancelVoiceRelease(trackId);
      this.audio.send('/n_set', voice.nodeId, 'note', note);
    } else {
      this.releaseVoice(trackId);
      const nodeId = this.spawnSynth(options.synth, {
        ...(options.params ?? {}),
        note,
        note_slide: slide,
      }, options.group ?? 0);
      if (!nodeId) {
        return;
      }
      this.voiceState[trackId] = { nodeId, releaseTimer: null };
    }

    this.scheduleVoiceRelease(trackId, gateFraction);
  }

  scheduleTimeout(callback, delay) {
    const id = setTimeout(() => {
      callback();
      this.pendingTimeouts = this.pendingTimeouts.filter((timer) => timer !== id);
    }, delay);
    this.pendingTimeouts.push(id);
    return id;
  }

  cancelTimeout(id) {
    if (!id) {
      return;
    }
    clearTimeout(id);
    this.pendingTimeouts = this.pendingTimeouts.filter((timer) => timer !== id);
  }

  scheduleVoiceRelease(trackId, gateFraction = 0.5) {
    const voice = this.voiceState[trackId];
    if (!voice) {
      return;
    }
    const durationMs = Math.max(10, this.getStepDurationSeconds() * gateFraction * 1000);
    this.cancelVoiceRelease(trackId);
    voice.releaseTimer = this.scheduleTimeout(() => {
      this.releaseVoice(trackId);
    }, durationMs);
  }

  cancelVoiceRelease(trackId) {
    const voice = this.voiceState[trackId];
    if (!voice || !voice.releaseTimer) {
      return;
    }
    this.cancelTimeout(voice.releaseTimer);
    voice.releaseTimer = null;
  }

  releaseVoice(trackId) {
    const voice = this.voiceState[trackId];
    if (!voice) {
      return;
    }
    this.cancelVoiceRelease(trackId);
    if (this.audio) {
      this.audio.send('/n_free', voice.nodeId);
    }
    this.voiceState[trackId] = null;
  }

  releaseAllVoices() {
    Object.keys(this.voiceState).forEach((trackId) => {
      this.releaseVoice(trackId);
    });
  }

  draw() {
    this.bridge.updateState();
    this.theme = this.getTheme();
    this.p5.background(6, 80, 8, 1);
    this.buffer.clear(' ', { fg: this.palette[7], bg: '#04070D' });

    this.drawChrome();
    this.drawGrid();
    this.drawMeters();
    this.drawFooter();

    this.renderer.render(this.buffer);
  }

  drawChrome() {
    const theme = this.theme ?? this.getTheme();
    const title = 'SYS/04 LOW-RES SEQUENCER';
    this.buffer.drawBox(1, 1, 62, 30, { fg: this.palette[8] });
    this.buffer.write(3, 2, title.padEnd(40), { fg: this.palette[15] });
    this.buffer.write(44, 2, `BPM:${String(this.bpm).padStart(3, '0')}`, { fg: this.palette[11] });
    const themeLabel = `THEME:${theme?.name ?? 'UNKNOWN'}`.padEnd(26);
    this.buffer.write(3, 3, themeLabel, { fg: theme?.markerColor ?? this.palette[13] });
  }

  drawGrid() {
    const originX = GRID_CONFIG.originX;
    const originY = GRID_CONFIG.originY;
    const stepWidth = GRID_CONFIG.stepWidth;
    const rowsPerTrack = GRID_CONFIG.rowsPerTrack;
    const theme = this.theme ?? this.getTheme();

    for (let col = 0; col < this.patternLength; col++) {
      const measureMarker = col % 4 === 0;
      const markerChar = measureMarker ? (theme?.markerMajor ?? '|') : (theme?.markerMinor ?? ':');
      const markerStyle = { fg: theme?.markerColor ?? this.palette[5] };
      this.buffer.set(originX + col * stepWidth, originY - 1, markerChar, markerStyle);
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
        const isTie = Boolean(track.ties?.[step]);
        const chars = this.getCellChars(isActive, isCursor, isPlayhead, isTie);
        const style = this.getCellStyle(track.color, isActive, isCursor, isPlayhead, isTie);
        this.buffer.write(cellX, rowY, chars, style);
      }
    });
  }

  fitChars(chars) {
    const width = GRID_CONFIG.stepWidth;
    if (!chars || typeof chars !== 'string') {
      return ' '.repeat(width);
    }
    return chars.padEnd(width, ' ').slice(0, width);
  }

  getCellChars(isActive, isCursor, isPlayhead, isTie) {
    const theme = this.theme ?? this.getTheme();
    const activeChars = theme?.activeChars ?? '[]';
    const emptyChars = theme?.emptyChars ?? '..';
    const tieChars = theme?.tieChars ?? '--';
    const cursorTieChars = theme?.cursorTieChars ?? tieChars;
    const playheadTieChars = theme?.playheadTieChars ?? tieChars;

    if (isTie) {
      if (isCursor) {
        return this.fitChars(cursorTieChars);
      }
      if (isPlayhead) {
        return this.fitChars(playheadTieChars);
      }
      return this.fitChars(tieChars);
    }
    if (isCursor && isActive) {
      return this.fitChars(theme?.cursorActiveChars ?? activeChars);
    }
    if (isCursor && !isActive) {
      return this.fitChars(theme?.cursorEmptyChars ?? emptyChars);
    }
    if (isPlayhead && !isActive) {
      return this.fitChars(theme?.playheadChars ?? emptyChars);
    }
    if (isPlayhead && isActive) {
      return this.fitChars(theme?.playheadActiveChars ?? activeChars);
    }
    return this.fitChars(isActive ? activeChars : emptyChars);
  }

  getCellStyle(color, isActive, isCursor, isPlayhead, isTie) {
    const theme = this.theme ?? this.getTheme();
    const activeFg = theme?.activeFg ?? color;
    const inactiveFg = theme?.inactiveFg ?? this.palette[7];
    const tieFg = theme?.tieFg ?? activeFg;
    const cursorTieFg = theme?.cursorTieFg ?? this.palette[15];
    let fg = isActive ? activeFg : inactiveFg;
    let bg = null;
    if (isTie && isActive && !isCursor) {
      fg = tieFg;
    }
    if (isPlayhead && !isCursor) {
      bg = theme?.playheadBg ?? '#0E1C33';
    }
    if (isCursor) {
      bg = isActive ? (theme?.cursorBgActive ?? '#223B4F') : (theme?.cursorBgEmpty ?? '#14344F');
      if (isTie && isActive) {
        fg = cursorTieFg;
      } else {
        fg = isActive ? (theme?.cursorFgActive ?? activeFg) : (theme?.cursorFgEmpty ?? this.palette[15]);
      }
    }
    return { fg, bg };
  }

  drawMeters() {
    const meterX = 4;
    const startY = 6;
    const theme = this.theme ?? this.getTheme();
    const fillChar = theme?.meterFillChar ?? '#';
    const emptyChar = theme?.meterEmptyChar ?? '-';
    const emptyColor = theme?.meterEmptyColor ?? this.palette[7];
    this.tracks.forEach((track, idx) => {
      const level = this.trackActivity[idx] ?? 0;
      const meterWidth = Math.round(level * 8);
      for (let i = 0; i < 8; i++) {
        const char = i < meterWidth ? fillChar : emptyChar;
        const fg = i < meterWidth ? track.color : emptyColor;
        this.buffer.set(meterX + i, startY + idx * GRID_CONFIG.rowsPerTrack + 1, char, { fg });
      }
      this.trackActivity[idx] *= 0.92;
    });
  }

  drawFooter() {
    const infoY = 28;
    this.buffer.write(4, infoY, 'ARROWS MOVE | SPACE:STEP | G:TIE | SHIFT+CLICK=TIE | -/+ BPM', { fg: this.palette[13] });
    this.buffer.write(4, infoY + 1, '[ ] OR T:THEME | R:ROW RANDOM | ANSI SEQ PROTOTYPE', { fg: this.palette[11] });
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
      case '[':
        this.cycleTheme(-1);
        break;
      case ']':
        this.cycleTheme(1);
        break;
      case 't':
      case 'T':
        this.cycleTheme(1);
        break;
      case 'r':
      case 'R':
        this.randomizeRow(this.cursor.track);
        break;
      case 'g':
      case 'G':
        this.toggleTie(this.cursor.track, this.cursor.step);
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
    if (this.p5.keyIsDown(this.p5.SHIFT)) {
      this.toggleTie(cell.track, cell.step);
    } else {
      this.toggleCurrentStep();
    }
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
    if (!track.steps[this.cursor.step]) {
      track.ties[this.cursor.step] = false;
    }
  }

  toggleTie(trackIndex, stepIndex) {
    const track = this.tracks[trackIndex];
    if (!track) {
      return;
    }
    if (!track.steps[stepIndex]) {
      track.steps[stepIndex] = true;
    }
    track.ties[stepIndex] = !track.ties[stepIndex];
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
      track.ties[step] = false;
    }
  }

  spawnSynth(name, params = {}, target = 0, action = 0) {
    if (!this.audio) {
      return null;
    }
    const nodeId = this.nextNodeId++;
    const args = this.flattenParams(params);
    this.audio.send('/s_new', name, nodeId, action, target ?? 0, ...args);
    return nodeId;
  }

  flattenParams(params) {
    const flattened = [];
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      if (typeof value === 'number' && Number.isNaN(value)) {
        return;
      }
      flattened.push(key, value);
    });
    return flattened;
  }

  cleanup() {
    if (this.bridge?.sequencer) {
      this.bridge.sequencer.unschedule(this.sequenceId);
    }
    this.releaseAllVoices();
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
