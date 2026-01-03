/**
 * Day 1: Concentric Circles / Polyrhythmic Chord
 */

import { BasePrompt } from './base.js';

export class Day01 extends BasePrompt {
  constructor(p5Instance, bridge) {
    super(p5Instance, bridge);
    
    // C Dorian Scale (C, D, Eb, F, G, A, Bb)
    this.dorianOffsets = [0, 2, 3, 5, 7, 9, 10];
    
    // Define pools simply for initial state
    // Ring 0 & 1 are fixed
    this.pools = [
      [36], // Ring 0: C2 
      [46], // Ring 1: Bb2
      // Upper rings initialized with placeholders, will be generative
      [48], [60], [72], [84] 
    ];

    const durations = [8, 6, 4, 2, 1, 0.25]; // Ring 5 faster for rhythm

    // Initialize state
    this.notes = this.pools.map((pool, index) => ({
      midi: pool[0],
      duration: durations[index],
      startTime: -1000, 
      hue: 0, 
    }));

    // Initialize drums
    this.drums = {
      kick: { startTime: -1000, type: 'ring', radiusMult: 0.15 },
      tom: { startTime: -1000, type: 'ring', radiusMult: 0.08 },
      rim: { startTime: -1000, type: 'dot', radiusMult: 0 }
    };
  }

  // Helper to find a scale note relative to a base note
  getHarmonicNote(baseMidi, minInterval, maxInterval) {
    // 1. Pick a rough target
    const target = baseMidi + this.p5.random(minInterval, maxInterval);
    
    // 2. Snap to C Dorian
    // Simple iterative snap
    let snapped = Math.round(target);
    while (!this.dorianOffsets.includes(snapped % 12)) {
      snapped++;
    }
    return snapped;
  }

  setup() {
    this.p5.background(0);
    this.p5.noStroke();
    
    const sequencer = this.bridge.sequencer;
    sequencer.setBPM(60); 
    
    // sequencer.start() is handled by main.js after audio init

    // Schedule each note
    this.notes.forEach((noteObj, index) => {
      const patternId = `note-${index}`;
      const interval = noteObj.duration; 

      sequencer.schedule(patternId, ({ time }) => {
        let shouldPlay = true;

        // Generative Logic
        if (index === 0 || index === 1) {
          // Static Bass - do nothing to noteObj.midi
        } 
        else if (index === 2 || index === 3) {
          // Mid Range: Independent Texture (Octave 3/4)
          // Pick random note from Scale in correct octave
          const octaveBase = (index + 2) * 12 + 12; // 48 or 60
          const offset = this.p5.random(this.dorianOffsets);
          noteObj.midi = octaveBase + offset;
        } 
        else if (index === 4) {
          // High Range (Ring 4): Dependent on Ring 3
          // Harmonize: 3rd to 6th above Ring 3
          const base = this.notes[3].midi;
          noteObj.midi = this.getHarmonicNote(base, 3, 9);
        } 
        else if (index === 5) {
          // Top Range (Ring 5): Dependent on Ring 4 + Rhythm
          // Harmonize: 3rd to 5th above Ring 4
          const base = this.notes[4].midi;
          noteObj.midi = this.getHarmonicNote(base, 3, 7);
          
          // Rhythmic Gate: Only play 40% of the time to create "twinkle"
          if (this.p5.random() > 0.4) {
            shouldPlay = false;
          }
        }

        if (shouldPlay && this.audio && this.audio.synth) {
          this.audio.synth('sonic-pi-prophet', {
            note: noteObj.midi,
            amp: 0.5 - (index * 0.05),
            release: noteObj.duration, // Note: Ring 5 is short (0.25)
            attack: 0.1,
            cutoff: 60 + (index * 15), 
            pan: this.p5.map(index, 0, 5, -0.6, 0.6)
          });
          noteObj.startTime = this.p5.millis() / 1000;
        }
      }, interval);
    });

    // Schedule Drums
    sequencer.schedule('drums', ({ time, beat }) => {
      const step = Math.floor(beat / 4) % 4;
      const audio = this.audio;

      if (audio && audio.synth) {
        if (step === 0) {
          audio.synth('sonic-pi-sc808_bassdrum', { amp: 0.4 });
          this.drums.kick.startTime = this.p5.millis() / 1000;
        } else if (step === 1 || step === 3) {
          audio.synth('sonic-pi-sc808_rimshot', { amp: 1.2 });
          this.drums.rim.startTime = this.p5.millis() / 1000;
        } else if (step === 2) {
          audio.synth('sonic-pi-sc808_tomlo', { amp: 1.5 });
          this.drums.tom.startTime = this.p5.millis() / 1000;
        }
      }
    }, '4n');
  }

  draw() {
    this.p5.background(0, 0, 0); 
    const center = this.getCenter();
    const time = this.p5.millis() / 1000;
    
    // Limits for Radius mapping
    // Max radius is the distance to the corner (covers entire screen)
    const maxRadius = this.p5.dist(0, 0, center.x, center.y);
    const minRadius = 20;

    this.p5.noStroke();
    this.p5.fill(0, 100, 100); // Bright Red

    // 1. Draw Chord Rings
    this.notes.forEach((note, index) => {
      const age = time - note.startTime;
      let envelope = 0;
      if (age >= 0 && age < note.duration) {
        envelope = 1.0 - (age / note.duration);
        envelope = Math.pow(envelope, 0.5);
      }

      if (envelope < 0.01) return;

      // Inverse correlation: Low Pitch = Large Radius, High Pitch = Small Radius
      const baseRadius = this.p5.map(note.midi, 30, 96, maxRadius, minRadius);
      const displayRadius = baseRadius * (0.95 + (envelope * 0.05));

      // Halftone Dot Size (Inverted: Outer/Bass = Massive, Inner/Treble = Small)
      // Range: 60px down to 8px
      const baseDotSize = this.p5.map(index, 0, 5, 60, 8);
      const dotSize = baseDotSize * envelope;

      if (dotSize < 0.5) return;

      const circumference = 2 * Math.PI * displayRadius;
      // Denser spacing for the chunky dots
      const spacing = Math.max(dotSize * 1.2, 8); 
      const numDots = Math.floor(circumference / spacing);

      for (let i = 0; i < numDots; i++) {
        const theta = this.p5.map(i, 0, numDots, 0, this.p5.TWO_PI);
        const x = center.x + Math.cos(theta) * displayRadius;
        const y = center.y + Math.sin(theta) * displayRadius;
        this.p5.circle(x, y, dotSize);
      }
    });

    // 2. Draw Drums (Centered Overlay)
    // Fixed radii to keep them in the center
    const drumConfig = [
      { obj: this.drums.rim, radius: 0, dotSize: 30 },   // Center Dot
      { obj: this.drums.tom, radius: 60, dotSize: 40 },  // 1st Ring
      { obj: this.drums.kick, radius: 140, dotSize: 80 } // 2nd Ring
    ];

    drumConfig.forEach(config => {
      const drum = config.obj;
      const age = time - drum.startTime;
      const duration = 0.4; 
      
      if (age >= 0 && age < duration) {
        let envelope = 1.0 - (age / duration);
        envelope = Math.pow(envelope, 0.3);

        const dotSize = config.dotSize * envelope;
        
        if (config.radius === 0) {
          // Rimshot: Center Dot
          this.p5.circle(center.x, center.y, dotSize);
        } else {
          // Kick/Tom: Fixed Radius Rings
          const radius = config.radius * (0.95 + (envelope * 0.05));
          const circumference = 2 * Math.PI * radius;
          const spacing = dotSize * 1.2;
          const numDots = Math.floor(circumference / spacing);

          for (let i = 0; i < numDots; i++) {
            const theta = this.p5.map(i, 0, numDots, 0, this.p5.TWO_PI);
            const x = center.x + Math.cos(theta) * radius;
            const y = center.y + Math.sin(theta) * radius;
            this.p5.circle(x, y, dotSize);
          }
        }
      }
    });
  }

  cleanup() {
    // Stop the sequencer when leaving the prompt
    this.bridge.sequencer.stop();
    this.bridge.sequencer.clear();
  }
}
