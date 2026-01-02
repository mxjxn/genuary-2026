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
  }

  setup() {
    this.p5.background(5); 
    
    // Initialize Polar Points
    this.polarPoints = [
      { 
        r: 150, 
        theta: 0, 
        startTheta: 0,
        targetTheta: 0,
        isMoving: false,
        moveStartTime: 0,
        moveDuration: 6.0, 
        color: [260, 80, 80], // Purple
        history: [] 
      }, 
      { 
        r: 220, 
        theta: Math.PI, 
        startTheta: Math.PI,
        targetTheta: Math.PI,
        isMoving: false,
        moveStartTime: 0,
        moveDuration: 7.0, 
        color: [200, 80, 80], // Blue
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
    
    // Schedule Event Every 8 Measures (Very Slow)
    // 8 measures * 4 beats = 32 beats. At 60bpm, this is every 32 seconds.
    // This gives plenty of time for the 6-7s animation + silence.
    sequencer.schedule('generative-cycle', ({ beat }) => {
      // 1. Evolve Harmony
      const steps = [-5, -4, -3, 3, 4, 5]; // avoid 5ths for now, stick to 3rds/4ths
      const step = this.p5.random(steps);
      let nextRoot = this.currentRoot + step;
      
      // Keep in comfortable range
      if (nextRoot < 48) nextRoot += 12;
      if (nextRoot > 72) nextRoot -= 12;
      this.currentRoot = nextRoot;

      // 2. Play Audio
      this.playChord(this.currentRoot, 0.4);

      // 3. Trigger Visuals
      this.triggerMovement();
      
    }, '8m'); 
    
    sequencer.start();
  }

  triggerMovement() {
    const now = this.p5.millis() / 1000;
    this.polarPoints.forEach(p => {
      p.isMoving = true;
      p.moveStartTime = now;
      p.startTheta = p.targetTheta; // Resume from current spot
      
      // Move ~1/3 circle (2.0 radians)
      const amt = 2.0 + this.p5.random(-0.2, 0.2);
      p.targetTheta = p.startTheta + amt;
    });
  }

  playChord(root, amp) {
    if (this.audio && this.audio.synth) {
      const isMinor = this.p5.random() > 0.4;
      const third = isMinor ? 3 : 4;
      const notes = [root, root + third, root + 7, root + 10]; 
      
      notes.forEach((n, i) => {
         this.audio.synth('sonic-pi-prophet', { 
          note: n + (this.p5.random([-12, 0, 12])), 
          amp: amp, 
          attack: 1.0, 
          decay: 2.0,
          sustain: 0.4, 
          release: 4.0, // Long release, but plenty of time before next chord
          cutoff: 60 + (i * 12)
        });
      });
    }
  }

  draw() {
    this.p5.background(5); 

    this.p5.blendMode(this.p5.ADD);

    const center = this.getCenter();
    const t = this.p5.millis() / 1000;
    
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

      // --- Update History ---
      // Push current position to history
      p.history.push({ x, y });
      
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
        // Just drawing vertices for now as placeholders if we wanted lines
        // But we are using the circle loop below for the actual visual
        this.p5.vertex(pos.x, pos.y);
      }
      this.p5.endShape();
      
      this.p5.noStroke();
      for (let j = 0; j < p.history.length; j++) {
        const pos = p.history[j];
        const ageNorm = j / p.history.length;
        
        const size = ageNorm * 60; // Taper from 0 to 60
        const alpha = Math.pow(ageNorm, 3) * 0.6;
        
        this.p5.fill(p.color[0], p.color[1], p.color[2], alpha);
        this.p5.circle(pos.x, pos.y, size);
      }

      // Draw Head
      this.p5.fill(p.color[0], p.color[1], p.color[2], 1.0);
      this.p5.circle(x, y, 20); 
    });

    // 2. Update and Draw Spark
    this.updateSpark();
    this.drawSpark();

    // 3. Draw Corners
    this.drawCorners(t);
    
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
    const margin = 20;
    const size = 120;
    const regions = [
      { x: margin, y: margin, w: size, h: size }, 
      { x: this.p5.width - margin - size, y: margin, w: size, h: size }, 
      { x: margin, y: this.p5.height - margin - size, w: size, h: size }, 
      { x: this.p5.width - margin - size, y: this.p5.height - margin - size, w: size, h: size } 
    ];
    regions.forEach(region => {
      this.divideRect(region.x, region.y, region.w, region.h, 4);
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
      const alpha = this.p5.map(pulse, -1, 1, 0.1, 0.35);
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
  }
}