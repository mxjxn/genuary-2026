/**
 * Day 2: 12 Principles of Animation
 * Visuals: Organic polar metaballs, erratic spark, geometric corner blocks
 */

import p5 from 'p5';
import { BasePrompt } from './base.js';

export class Day02 extends BasePrompt {
  constructor(p5Instance, bridge) {
    super(p5Instance, bridge);

    this.spark = null;
    this.corners = [];
    
    // History for the ribbon trail
    // At 60fps, we want a long enough buffer to capture the motion
    this.maxHistory = 300; 
    
    this.currentRoot = 60; // Start at C4
    this.currentQuality = 'minor'; // 'minor' or 'major'
    this.isBridge = false; // Toggle for A/B structure
  }

  setup() {
    this.p5.background(5); 
    
    // Initialize Polar Points
    this.polarPoints = [
      { 
        r: 250, 
        theta: 0, 
        startTheta: 0,
        targetTheta: 0,
        isMoving: false,
        moveStartTime: 0,
        moveDuration: 6.0, 
        history: [] 
      }, 
      { 
        r: 420, 
        theta: Math.PI, 
        startTheta: Math.PI,
        targetTheta: Math.PI,
        isMoving: false,
        moveStartTime: 0,
        moveDuration: 7.0, 
        history: [] 
      }
    ];

    // Initialize Spark
    this.spark = {
      pos: this.p5.createVector(this.p5.width / 2, this.p5.height / 2),
      vel: p5.Vector.random2D().mult(8),
      color: [60, 100, 100] // Electric Yellow
    };

    // Initialize Corners
    this.generateCorners();

    // Setup Sequencer
    const sequencer = this.bridge.sequencer;
    sequencer.setBPM(60); 
    
    // Initialize Audio Groups & FX
    if (this.audio) {
      this.audio.ensureStarted().then(() => {
        // Group Order: Synths (2000) -> FX (2001) -> Drums (2002)
        // This ensures Reverb (in FX) processes Synths, but Drums (played after) remain dry.
        
        // 1. Create Synth Group (2000) at Head of Root (0)
        this.audio.send('/g_new', 2000, 0, 0);
        
        // 2. Create FX Group (2001) After Synth Group (2000)
        this.audio.send('/g_new', 2001, 3, 2000);
        
        // 3. Create Drum Group (2002) After FX Group (2001)
        this.audio.send('/g_new', 2002, 3, 2001);

        // 4. Create Reverb in FX Group
        this.audio.send('/s_new', 'sonic-pi-fx_reverb', 999, 0, 2001, 
          'room', 17.8, 
          'mix', 0.8, 
          'damp', 0.9, 
          'amp', 0.7 
        );
      });
    }

    // Schedule Event Every 8 Beats (8 Seconds)
    // Alternates between Main Cycle (Movement) and Bridge Chord (Higher Inversion)
    sequencer.schedule('generative-cycle', ({ beat }) => {
      
      if (!this.isBridge) {
        // --- MAIN PHASE ---
        
        // 1. Evolve Harmony
        const steps = [-5, -4, -3, 3, 4, 5]; // avoid 5ths for now, stick to 3rds/4ths
        const step = this.p5.random(steps);
        let nextRoot = this.currentRoot + step;
        
        // Keep in comfortable range
        if (nextRoot < 48) nextRoot += 12;
        if (nextRoot > 72) nextRoot -= 12;
        this.currentRoot = nextRoot;
        
        // Pick quality for this cycle
        this.currentQuality = this.p5.random() > 0.4 ? 'minor' : 'major';

        // 2. Play Main Audio (Low/Wide)
        this.playChord(this.currentRoot, this.currentQuality, 0.4);

        // 3. Trigger Visuals
        this.triggerMovement();
      } else {
        // --- BRIDGE PHASE ---
        // Keep same root and quality, but play higher voicing
        this.playBridgeChord(this.currentRoot, this.currentQuality, 0.35);
        this.triggerMovement(Math.PI); // Arc 180 degrees for the bridge
      }
      
      // Toggle for next time
      this.isBridge = !this.isBridge;
      
    }, 8); 

    // Footwork Kick Pattern (16th note grid)
    // Hits on steps 0, 3, 6 (classic 3+3+2 feel start)
    sequencer.schedule('footwork-kick', ({ beat }) => {
      const step = beat % 8;
      if ([0, 3, 6].includes(step)) {
        if (this.audio && this.audio.synth) {
          // Tune kick to current root, 2 or 3 octaves down
          // default 808 kick is around MIDI 36-40, let's force it
          let kickNote = this.currentRoot - 36; 
          if (kickNote < 24) kickNote += 12; // Keep in audible bass range

          this.audio.synth('sonic-pi-sc808_bassdrum', {
            note: kickNote,
            amp: 0.8,
            decay: 0.2,
            release: 0.5
          }, { target: 2002 }); // Target Drum Group
        }
      }
    }, '16n');
    
    sequencer.start();
  }

  triggerMovement(amt) {
    const now = this.p5.millis() / 1000;
    this.polarPoints.forEach(p => {
      p.isMoving = true;
      p.moveStartTime = now;
      p.startTheta = p.targetTheta; // Resume from current spot
      
      // Use provided amount (e.g. 180 deg) or random small arc
      const moveAmt = amt !== undefined ? amt : (2.0 + this.p5.random(-0.2, 0.2));
      p.targetTheta = p.startTheta + moveAmt;
      p.moveDuration = 8.0; // Ensure it takes 8 seconds
    });
  }

  playChord(root, quality, amp) {
    if (this.audio && this.audio.synth) {
      const thirdInterval = quality === 'minor' ? 3 : 4;
      // Main Chord: Root, Third, Fifth, Seventh (Fundamental position)
      const notes = [root, root + thirdInterval, root + 7, root + 10]; 
      
      notes.forEach((n, i) => {
         this.audio.synth('sonic-pi-prophet', { 
          note: n + (this.p5.random([-12, 0, 12])), 
          amp: amp* 0.5, 
          attack: 4.0, 
          decay: 0.0,
          sustain: 0.0, 
          release: 4.0, // Total 8s
          cutoff: 60 + (i * 12)
        }, { target: 2000 }); // Target Synth Group
      });
    }
  }

  playBridgeChord(root, quality, amp) {
    if (this.audio && this.audio.synth) {
      const thirdInterval = quality === 'minor' ? 3 : 4;
      // Bridge Chord: 2nd Inversion + 9th/11th extensions for "floating" feel
      // [5th, 7th, Root(+8ve), 3rd(+8ve)]
      const notes = [
        root + 7,               // 5th
        root + 10,              // 7th
        root + 12,              // Root (up octave)
        root + 12 + thirdInterval // 3rd (up octave)
      ];

      notes.forEach((n, i) => {
         this.audio.synth('sonic-pi-prophet', { 
          note: n, 
          amp: amp * 0.6, // Slightly quieter
          attack: 2.0,    // Faster attack
          decay: 0.0,
          sustain: 0.0, 
          release: 6.0,   // Long tail
          cutoff: 80 + (i * 10) // Brighter
        }, { target: 2000 }); // Target Synth Group
      });
    }
  }

  draw() {
    this.p5.background(5); 

    this.p5.blendMode(this.p5.ADD);

    const t = this.p5.millis() / 1000;

    // 1. Draw Corners (Background Grid)
    this.drawCorners(t);

    const center = this.getCenter();
    
    this.polarPoints.forEach((p, i) => {
      // --- Update Position ---
      if (p.isMoving) {
        const elapsed = t - p.moveStartTime;
        let progress = elapsed / p.moveDuration;
        
        if (progress >= 1) {
          progress = 1;
          p.isMoving = false;
          p.theta = p.targetTheta;
        } else {
          const eased = this.easeInOutCubic(progress);
          p.theta = this.p5.lerp(p.startTheta, p.targetTheta, eased);
        }
      }
      
      const x = center.x + Math.cos(p.theta) * p.r;
      const y = center.y + Math.sin(p.theta) * p.r;
      p.currentPos = { x, y };

      // --- Calculate Current Color ---
      // Map theta (radians) to Hue (0-360)
      // We use (p.theta % TWO_PI) to keep it in range
      const hue = (this.p5.degrees(p.theta) % 360 + 360) % 360;
      const currentColor = [hue, 80, 90];
      p.color = currentColor; // Keep for lightning/etc

      // --- Update History ---
      // Push current position and color to history
      p.history.push({ x, y, color: currentColor });
      
      // Manage trail length
      // If NOT moving, dissolve the tail rapidly
      if (!p.isMoving) {
         if (p.history.length > 0) p.history.shift();
         if (p.history.length > 0) p.history.shift(); // decay faster when stopped
      } 
      // Always limit max length
      if (p.history.length > this.maxHistory) {
        p.history.shift();
      }

      // --- Draw Ribbon Trail ---
      this.p5.noFill();
      this.p5.strokeWeight(2);
      
      // We draw a continuous shape for the trail
      this.p5.beginShape();
      for (let j = 0; j < p.history.length; j++) {
        const pos = p.history[j];
        this.p5.vertex(pos.x, pos.y);
      }
      this.p5.endShape();
      
      this.p5.noStroke();
      for (let j = 0; j < p.history.length; j++) {
        const pos = p.history[j];
        const ageNorm = j / p.history.length;
        
        const size = ageNorm * 60; // Taper from 0 to 60
        const alpha = Math.pow(ageNorm, 3) * 0.6;
        
        const c = pos.color;
        this.p5.fill(c[0], c[1], c[2], alpha);
        this.p5.circle(pos.x, pos.y, size);
      }

      // Draw Head
      this.p5.fill(currentColor[0], currentColor[1], currentColor[2], 1.0);
      this.p5.circle(x, y, 20); 
    });

    // 2. Update and Draw Spark
    this.updateSpark();
    this.drawSpark();
    
    this.p5.blendMode(this.p5.BLEND);
  }

  // ... (Rest of helper methods: corners, spark, ease) ...
  
  updateSpark() {
    if (this.p5.random() < 0.05) this.spark.vel.rotate(this.p5.random(-1, 1));
    this.spark.pos.add(this.spark.vel);
    
    if (this.spark.pos.x < 0 || this.spark.pos.x > this.p5.width) {
      this.spark.vel.x *= -1;
      this.spark.pos.x = this.p5.constrain(this.spark.pos.x, 0, this.p5.width);
    }
    if (this.spark.pos.y < 0 || this.spark.pos.y > this.p5.height) {
      this.spark.vel.y *= -1;
      this.spark.pos.y = this.p5.constrain(this.spark.pos.y, 0, this.p5.height);
    }
  }

  drawSpark() {
    this.p5.fill(this.spark.color[0], this.spark.color[1], this.spark.color[2]);
    this.p5.noStroke();
    this.p5.circle(this.spark.pos.x, this.spark.pos.y, 10);
    this.p5.fill(this.spark.color[0], this.spark.color[1], this.spark.color[2], 0.3);
    this.p5.circle(this.spark.pos.x, this.spark.pos.y, 30);

    this.p5.stroke(this.spark.color[0], this.spark.color[1], this.spark.color[2]);
    this.p5.noFill();
    this.p5.strokeWeight(3);

    this.polarPoints.forEach(p => {
      const d = this.p5.dist(this.spark.pos.x, this.spark.pos.y, p.currentPos.x, p.currentPos.y);
      if (d < 300) {
        this.drawLightning(this.spark.pos.x, this.spark.pos.y, p.currentPos.x, p.currentPos.y, d);
      }
      if (p.history.length > 0) {
        for(let i=0; i<8; i++) {
           const idx = Math.floor(this.p5.random(p.history.length));
           const histPos = p.history[idx];
           const dHist = this.p5.dist(this.spark.pos.x, this.spark.pos.y, histPos.x, histPos.y);
           if (dHist < 150 && this.p5.random() < 0.15) {
             this.drawLightning(this.spark.pos.x, this.spark.pos.y, histPos.x, histPos.y, dHist);
             break; 
           }
        }
      }
    });
  }

  drawLightning(x1, y1, x2, y2, dist) {
    const steps = Math.floor(dist / 15);
    if (steps < 2) return;
    this.p5.beginShape();
    this.p5.vertex(x1, y1);
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = this.p5.lerp(x1, x2, t);
      const y = this.p5.lerp(y1, y2, t);
      const offX = this.p5.random(-15, 15);
      const offY = this.p5.random(-15, 15);
      this.p5.vertex(x + offX, y + offY);
    }
    this.p5.vertex(x2, y2);
    this.p5.endShape();
  }

  generateCorners() {
    this.corners = [];
    const w = this.p5.width / 2;
    const h = this.p5.height / 2;
    
    // Define 4 quadrants covering the entire screen
    const regions = [
      { x: 0, y: 0, w: w, h: h }, // Top-Left
      { x: w, y: 0, w: w, h: h }, // Top-Right
      { x: 0, y: h, w: w, h: h }, // Bottom-Left
      { x: w, y: h, w: w, h: h }  // Bottom-Right
    ];
    
    regions.forEach(region => {
      this.divideRect(region.x, region.y, region.w, region.h, 5);
    });
  }

  divideRect(x, y, w, h, depth) {
    if (depth <= 0 || this.p5.random() > 0.8) {
       this.corners.push({ x, y, w, h, alpha: this.p5.random(0.1, 0.4) });
       return;
    }
    const horizontal = this.p5.random() > 0.5;
    const split = this.p5.random(0.3, 0.7);
    if (horizontal) {
      this.divideRect(x, y, w, h * split, depth - 1);
      this.divideRect(x, y + h * split, w, h * (1 - split), depth - 1);
    } else {
      this.divideRect(x, y, w * split, h, depth - 1);
      this.divideRect(x + w * split, y, w * (1 - split), h, depth - 1);
    }
  }

  drawCorners(time) {
    this.p5.stroke(200, 50, 100, 0.5); 
    this.p5.strokeWeight(1);
    this.corners.forEach(rect => {
      const pulse = Math.sin(time * 0.5 + rect.x * 0.01 + rect.y * 0.01);
      // Subtle background alpha since it covers the whole screen
      const alpha = this.p5.map(pulse, -1, 1, 0.02, 0.1);
      this.p5.fill(220, 60, 40, alpha); 
      this.p5.rect(rect.x, rect.y, rect.w, rect.h);
    });
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  windowResized() {
    this.generateCorners();
  }
  
  cleanup() {
      if (this.bridge && this.bridge.sequencer) {
          this.bridge.sequencer.stop();
          this.bridge.sequencer.clear();
      }
      if (this.audio) {
          this.audio.send('/n_free', 999);  // Free Reverb
          this.audio.send('/n_free', 2000); // Free Synth Group
          this.audio.send('/n_free', 2001); // Free FX Group
          this.audio.send('/n_free', 2002); // Free Drum Group
      }
  }
}