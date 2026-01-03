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
    this.maxHistory = 50; 
    
    this.currentRoot = 60; // Start at C4
    this.currentQuality = 'minor'; // 'minor' or 'major'
    this.isBridge = false; // Toggle for A/B structure
    this.spinnerIndex = 0; // Index of the point that performs the extra spin
    this.inversionZones = []; // Rectangles that invert colors
    
    // Tint/Overlay Zones (Low CPU)
    this.tintZones = []; 
    
    // Polyphony Management
    this.activeNotes = []; 
    this.nextNodeId = 3000;
  }

  setup() {
    this.p5.colorMode(this.p5.HSB, 360, 100, 100, 1);
    this.p5.background(5); 
    
    const maxDimension = Math.max(this.p5.width, this.p5.height) / 2;

    // Initialize Rings with Dots
    // Radii evenly spaced from 15% to 95% of the widest dimension
    this.rings = [];
    const numRings = 30;
    
    for (let i = 0; i < numRings; i++) {
      const rMult = this.p5.lerp(0.15, 0.95, i / (numRings - 1));
      const r = maxDimension * rMult;
      
      const numDots = 1; // 1 dot per ring for performance
      const dots = [];
      
      for (let j = 0; j < numDots; j++) {
        // Random starting point on the circle
        const startTheta = this.p5.random(this.p5.TWO_PI);
        
        dots.push({
          theta: startTheta,
          startTheta: startTheta,
          targetTheta: startTheta,
          pace: this.p5.random(0.5, 2.0), // Random pace for each dot
          isMoving: false,
          moveStartTime: 0,
          moveDuration: 8.0,
          history: [],
          currentPos: { x: 0, y: 0 }, // Init holder
          currentScale: 1, // Initialize scale for lerping
          lastTouched: -100 // Timestamp of last lightning strike
        });
      }

      this.rings.push({ r, dots });
    }

    // Initialize Spark
    this.spark = {
      pos: this.p5.createVector(this.p5.width / 2, this.p5.height / 2),
      vel: p5.Vector.random2D().mult(8),
      color: [60, 100, 100] // Electric Yellow
    };

    // Initialize Corners
    this.generateCorners();
    this.pickInversionZones();

    // Setup Sequencer
    const sequencer = this.bridge.sequencer;
    sequencer.setBPM(60); 

    // Schedule Event Every 8 Beats (8 Seconds)

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
      
      // Regenerate Grid with new random center
      // Keep center within 20%-80% of screen to ensure usable quadrants
      const cx = this.p5.width * this.p5.random(0.2, 0.8);
      const cy = this.p5.height * this.p5.random(0.2, 0.8);
      this.generateCorners(cx, cy);
      
      this.pickInversionZones();

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
            release: 0.5,
            out_bus: 10
          }, { target: 2002 }); // Target Drum Group
        }
      }
    }, '16n');
    
    // sequencer.start() is handled by main.js after audio init
  }

  setupAudio() {
    if (this.audio) {
        // Group Order: Synths (2000) -> FX (2001) -> Drums (2002)
        // This ensures Reverb (in FX) processes Synths, but Drums (played after) remain dry.
        
        // 1. Create Synth Group (2000) at Head of Root (0)
        this.audio.send('/g_new', 2000, 0, 0);
        
        // 2. Create FX Group (2001) After Synth Group (2000)
        this.audio.send('/g_new', 2001, 3, 2000);
        
        // 3. Create Drum Group (2002) After FX Group (2001)
        this.audio.send('/g_new', 2002, 3, 2001);

        // 4. Create Drum FX Group (2003) After Drum Group (2002)
        this.audio.send('/g_new', 2003, 3, 2002);

        // 5. Create Reverb in FX Group
        this.audio.send('/s_new', 'sonic-pi-fx_reverb', 999, 0, 2001, 
          'room', 15.8, 
          'mix', 0.5, 
          'damp', 0.5, 
          'amp', 1.0
        );

        // 6. Create Echo in Drum FX Group
        // Reads from Bus 10 (Drums), Writes to Bus 0 (Main)
        this.audio.send('/s_new', 'sonic-pi-fx_echo', 998, 0, 2003,
          'in_bus', 10,
          'out_bus', 0,
          'phase', 0.25,
          'decay', 2.0,
          'mix', 0.5,
          'amp', 1.0
        );
    }
  }

  triggerMovement(amt) {
    const now = this.p5.millis() / 1000;
    
    // Determine the base movement amount
    const baseAmt = amt !== undefined ? amt : (2.0 + this.p5.random(-0.2, 0.2));

    this.rings.forEach((ring, i) => {
      const isSpinnerRing = (i === this.spinnerIndex);
      
      ring.dots.forEach(p => {
        p.isMoving = true;
        p.moveStartTime = now;
        p.startTheta = p.targetTheta; // Resume from current spot
        
        // Calculate variance (0.7 to 1.3)
        const variance = this.p5.random(0.7, 1.3);
        const moveAmt = baseAmt * variance * p.pace;

        if (isSpinnerRing) {
          // Spinner Ring: Goes forward + Extra 360 spin
          p.targetTheta = p.startTheta + moveAmt + this.p5.TWO_PI;
        } else {
          // Others: Go in reverse (counter-motion) with variance
          p.targetTheta = p.startTheta - moveAmt;
        }
        
        p.moveDuration = 8.0; // Ensure it takes 8 seconds
      });
    });

    // Alternate the spinner ring for next time
    this.spinnerIndex = (this.spinnerIndex + 1) % this.rings.length;
  }

  playChord(root, quality, amp) {
    if (this.audio) {
      const thirdInterval = quality === 'minor' ? 3 : 4;
      // Main Chord: Root, Third, Fifth, Seventh (Fundamental position)
      const notes = [root, root + thirdInterval, root + 7, root + 10]; 
      const now = this.p5.millis() / 1000;
      const duration = 8.0;

      notes.forEach((n, i) => {
         const id = this.nextNodeId++;
         // Phase shift each note so they pan around each other
         // Spread phases over PI (half circle) or TWO_PI
         const phase = (i / notes.length) * this.p5.TWO_PI; 
         
         this.activeNotes.push({
           id: id,
           startTime: now,
           duration: duration,
           phase: phase
         });

         this.audio.send('/s_new', 'sonic-pi-prophet', id, 0, 2000, 
          'note', n + (this.p5.random([-12, 0, 12])), 
          'amp', amp * 0.5, 
          'attack', 1.0, 
          'decay', 0.0, 
          'sustain', 0.0, 
          'release', 4.0,
          'cutoff', 60 + (i * 12),
          'pan', Math.sin(now + phase) // Initial pan
         );
      });
    }
  }

  playBridgeChord(root, quality, amp) {
    if (this.audio) {
      const thirdInterval = quality === 'minor' ? 3 : 4;
      // Bridge Chord: 2nd Inversion + 9th/11th extensions
      const notes = [
        root + 7,               // 5th
        root + 10,              // 7th
        root + 12,              // Root (up octave)
        root + 12 + thirdInterval // 3rd (up octave)
      ];

      const now = this.p5.millis() / 1000;
      const duration = 8.0;

      notes.forEach((n, i) => {
         const id = this.nextNodeId++;
         // Different phase offset for bridge to feel distinct
         const phase = (i / notes.length) * this.p5.TWO_PI + (Math.PI / 4);

         this.activeNotes.push({
           id: id,
           startTime: now,
           duration: duration,
           phase: phase
         });

         this.audio.send('/s_new', 'sonic-pi-prophet', id, 0, 2000, 
          'note', n, 
          'amp', amp * 0.6, 
          'attack', 1.0, 
          'decay', 0.0, 
          'sustain', 0.0, 
          'release', 6.0,
          'cutoff', 80 + (i * 10),
          'pan', Math.sin(now + phase)
         );
      });
    }
  }

  draw() {
    this.p5.background(5); 

    this.p5.blendMode(this.p5.ADD);

    const t = this.p5.millis() / 1000;

    // --- Audio Update Loop (Panning) ---
    // 1. Prune expired notes (give 1s buffer after release)
    this.activeNotes = this.activeNotes.filter(n => t < n.startTime + n.duration + 1.0);
    
    // 2. Update Pan for active notes
    // Pan speed: 0.5 Hz (One full cycle every 2 seconds)
    const panSpeed = 0.5; 
    this.activeNotes.forEach(n => {
      const pan = Math.sin((t * panSpeed * Math.PI * 2) + n.phase);
      if (this.audio) {
        this.audio.send('/n_set', n.id, 'pan', pan);
      }
    });

    // 1. Draw Corners (Background Grid)
    this.drawCorners(t);

    const center = this.getCenter();
    
    this.rings.forEach((ring, ringIdx) => {
      ring.dots.forEach((p, dotIdx) => {
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
        
        const x = center.x + Math.cos(p.theta) * ring.r;
        const y = center.y + Math.sin(p.theta) * ring.r;

        const speed = this.p5.dist(x, y, p.currentPos.x, p.currentPos.y);
        const targetScale = this.p5.map(speed, 0, 2, 15, 0.2, true);
        
        // Lerp the scale for smoothness
        p.currentScale = this.p5.lerp(p.currentScale, targetScale, 0.1);
        p.scaleFactor = p.currentScale;
        
        // Map speed to brightness to prevent over-brightness when slow
        const brightness = this.p5.map(speed, 0, 5, 2, 20, true);
        
        p.currentPos = { x, y };

        // --- Calculate Current Color ---
        const hue = (this.p5.degrees(p.theta) % 360 + 360 + (ringIdx / this.rings.length * 360)) % 360;
        const currentColor = [hue, 70, brightness]; // Dim brightness at slower speeds
        p.color = currentColor; 

        // --- Update History ---
        p.history.push({ x, y, color: currentColor });
        
        if (!p.isMoving) {
           if (p.history.length > 0) p.history.shift();
           if (p.history.length > 0) p.history.shift(); 
        } 
        if (p.history.length > this.maxHistory) {
          p.history.shift();
        }

        // --- Draw Ribbon Trail ---
        this.p5.noFill();
        this.p5.strokeWeight(2);
        
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
          const size = ageNorm * 60 * p.scaleFactor; 
          // Drastically reduce alpha for soft ADD blend
          const alpha = Math.pow(ageNorm, 3) * 0.05;
          const c = pos.color;
          this.p5.fill(c[0], c[1], c[2], alpha);
          this.p5.circle(pos.x, pos.y, size);
        }

        // Draw Head
        this.p5.fill(currentColor[0], currentColor[1], currentColor[2], 0.1);
        this.p5.circle(x, y, 20 * p.scaleFactor); 
      });
    });

    
    this.p5.blendMode(this.p5.BLEND);

    // Draw Inversion Zones using Difference Blend Mode
    if (this.inversionZones.length > 0) {
      this.p5.blendMode(this.p5.DIFFERENCE);
      this.p5.noStroke();
      // White in HSB (Hue doesn't matter, Sat 0, Bright 100)
      this.p5.fill(0, 0, 100); 
      
      this.inversionZones.forEach(zone => {
        this.p5.rect(zone.x, zone.y, zone.w, zone.h);
      });
      
      this.p5.blendMode(this.p5.BLEND);
    }
    
    // --- Post-Processing Effects ---
    this.applySlitScan();
    
    // Draw Tint Zones (OVERLAY Mode) - Very Cheap
    if (this.tintZones.length > 0) {
      this.p5.blendMode(this.p5.OVERLAY);
      this.p5.noStroke();
      
      this.tintZones.forEach((zone) => {
         this.p5.fill(zone.hue, 100, 100);
         this.p5.rect(zone.x, zone.y, zone.w, zone.h);
      });
      
      this.p5.blendMode(this.p5.BLEND);
    }
  }

  applySlitScan() {
    // Randomly shift horizontal strips
        for (let i = 0; i < 2; i++) {
          const y = this.p5.random(this.p5.height/8)+this.p5.height/4;
          const h = this.p5.random(1,8);
          const xOffset = this.p5.random(-200, 200);
          
          // Copy strip from (0, y) to (xOffset, y)
          this.p5.copy(0, y, this.p5.width, h, xOffset, y, this.p5.width, h);
        }

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
    const t = this.p5.millis() / 1000;
    this.p5.fill(this.spark.color[0], this.spark.color[1], this.spark.color[2]);
    this.p5.noStroke();
    this.p5.circle(this.spark.pos.x, this.spark.pos.y, 10);
    this.p5.fill(this.spark.color[0], this.spark.color[1], this.spark.color[2], 0.3);
    this.p5.circle(this.spark.pos.x, this.spark.pos.y, 30);

    this.p5.stroke(this.spark.color[0], this.spark.color[1], this.spark.color[2]);
    this.p5.noFill();
    this.p5.strokeWeight(3);

    this.rings.forEach(ring => {
      ring.dots.forEach(p => {
        const d = this.p5.dist(this.spark.pos.x, this.spark.pos.y, p.currentPos.x, p.currentPos.y);
        if (d < 300 && Math.random() < 0.2 && (t - p.lastTouched) > 0.2) {
          this.drawLightning(this.spark.pos.x, this.spark.pos.y, p.currentPos.x, p.currentPos.y, d);
          p.lastTouched = t; // Mark as touched
        }
        if (p.history.length > 0) {
          for(let i=0; i<3; i++) { // Reduce to 3 attempts to save perf with many dots
             const idx = Math.floor(this.p5.random(p.history.length));
             const histPos = p.history[idx];
             const dHist = this.p5.dist(this.spark.pos.x, this.spark.pos.y, histPos.x, histPos.y);
             if (dHist < 100 && this.p5.random() < 0.1) { // Lower prob
               this.drawLightning(this.spark.pos.x, this.spark.pos.y, histPos.x, histPos.y, dHist);
               p.lastTouched = t; // Mark as touched
               break; 
             }
          }
        }
      });
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

  pickInversionZones() {
    this.inversionZones = [];
    
    // Filter by size
    const minDim = Math.min(this.p5.width, this.p5.height);
    
    // "Big" candidates: approx 1/8 to 1/3 of screen dimension
    const bigCandidates = this.corners.filter(c => 
        c.w > minDim * 0.15 && c.w < minDim * 0.4 &&
        c.h > minDim * 0.15 && c.h < minDim * 0.4
    );
    
    // "Small" candidates: less than 1/8 of screen dimension
    const smallCandidates = this.corners.filter(c => 
        c.w < minDim * 0.12 && c.h < minDim * 0.12
    );

    // "Thin" candidates: High aspect ratio (short/wide or tall/thin)
    const thinCandidates = this.corners.filter(c => {
        const shortSide = Math.min(c.w, c.h) + 0.1; // protect div/0
        const longSide = Math.max(c.w, c.h);
        return (longSide / shortSide) > 3.5; 
    });

    // Pick 1 Big
    if (bigCandidates.length > 0) {
        this.inversionZones.push(this.p5.random(bigCandidates));
    } else if (this.corners.length > 0) {
        // Fallback: just pick any random one if no specific size matches
        this.inversionZones.push(this.p5.random(this.corners));
    }
    
    // Pick 2 Small
    if (smallCandidates.length > 0) {
        this.inversionZones.push(this.p5.random(smallCandidates));
        this.inversionZones.push(this.p5.random(smallCandidates));
    } else if (this.corners.length > 0) {
        // Fallback
        this.inversionZones.push(this.p5.random(this.corners));
        this.inversionZones.push(this.p5.random(this.corners));
    }

    // Pick 4-8 Thin
    if (thinCandidates.length > 0) {
        const count = Math.floor(this.p5.random(4, 9)); // 4 to 8
        const shuffled = this.p5.shuffle(thinCandidates);
        const toPick = Math.min(count, shuffled.length);
        for(let i=0; i<toPick; i++) {
            this.inversionZones.push(shuffled[i]);
        }
    }
    
    // Pick Tint Zones (Overlay blend mode)
    this.tintZones = [];
    if (this.corners.length > 0) {
        // Pick 3-8 random areas to tint
        const count = Math.floor(this.p5.random(8, 16));
        for(let i=0; i<count; i++) {
             const rect = this.p5.random(this.corners);
             
             // Determine Color
             // 40% chance of Primary Hue (Cyan-ish), otherwise random
             const isPrimary = this.p5.random() < 0.4;
             let h = isPrimary ? 180 : this.p5.random(360);
             
             // Add Variance ("slightly different")
             h = (h + this.p5.random(-20, 20) + 360) % 360;
             
             this.tintZones.push({ ...rect, hue: h });
        }
    }
  }

  generateCorners(cx, cy) {
    this.corners = [];
    
    // Default to center if not provided
    if (cx === undefined) cx = this.p5.width / 2;
    if (cy === undefined) cy = this.p5.height / 2;
    
    const w = this.p5.width;
    const h = this.p5.height;
    
    // Define 4 quadrants covering the entire screen based on split point
    const regions = [
      { x: 0, y: 0, w: cx, h: cy }, // Top-Left
      { x: cx, y: 0, w: w - cx, h: cy }, // Top-Right
      { x: 0, y: cy, w: cx, h: h - cy }, // Bottom-Left
      { x: cx, y: cy, w: w - cx, h: h - cy }  // Bottom-Right
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
    
    let horizontal;
    if (w / h >= 2) {
      horizontal = false;
    } else if (h / w >= 2) {
      horizontal = true;
    } else {
      horizontal = this.p5.random() > 0.5;
    }
    
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
    this.p5.stroke(300, 50, 60, 0.9); 
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
    const maxDimension = Math.max(this.p5.width, this.p5.height) / 2;
    if (this.rings) {
      const numRings = this.rings.length;
      this.rings.forEach((ring, i) => {
        const rMult = this.p5.lerp(0.15, 0.95, i / (numRings - 1));
        ring.r = maxDimension * rMult;
      });
    }
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