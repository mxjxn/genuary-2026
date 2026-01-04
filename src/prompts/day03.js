/**
 * Day 3: Fibonacci Forever
 * An infinite Fibonacci spiral with animated zoom
 */

import { BasePrompt } from './base.js';

export class Day03 extends BasePrompt {
  constructor(p5Instance, bridge) {
    super(p5Instance, bridge);
    
    this.phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    this.fibonacciSequence = this.generateFibonacci(20);
    this.scale = 84; // Base size for the first square (larger for tighter initial zoom)
    this.viewScale = 1;
    this.targetViewScale = 2;
    this.zoomStartScale = 1;
    this.zoomTransitionDuration = 2000; // ms
    this.lastZoomUpdateTime = 0;
    
    // Animation state
    this.currentIndex = 0;
    this.rectProgress = 0;
    this.arcProgress = 0;
    
    // Timing (in milliseconds)
    this.rectDuration = 600;
    this.arcDuration = 800;
    this.pauseDuration = 200;
    
    this.stateStartTime = 0;
    this.state = 'rect'; // 'rect', 'arc', 'pause'
    
    // Transform state - precompute all positions
    this.transforms = this.computeTransforms();
  }

  generateFibonacci(count) {
    const fib = [1, 1];
    for (let i = 2; i < count; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }

  /**
   * Compute cumulative transforms for each square in the spiral
   * Uses a consistent recursive transformation:
   * 1. Move to end of previous arc
   * 2. Rotate 90 degrees
   * 3. Adjust origin to align start of new arc with end of previous
   */
  computeTransforms() {
    const transforms = [];
    const f = this.fibonacciSequence;
    
    let x = 0;
    let y = 0;
    let rotation = 0;
    
    // Start at origin
    transforms.push({ x, y, rotation });
    
    for (let i = 0; i < f.length - 1; i++) {
      const currentSize = f[i] * this.scale;
      const nextSize = f[i + 1] * this.scale;
      
      // 1. Translate to end of current arc (0, size) in local coords
      // x += -sin(rot) * size
      // y += cos(rot) * size
      x += -Math.sin(rotation) * currentSize;
      y += Math.cos(rotation) * currentSize;
      
      // 2. Rotate 90 degrees
      rotation += Math.PI / 2;
      
      // 3. Translate back by nextSize in X (in new local coords) to align
      // x += cos(rot) * (-nextSize)
      // y += sin(rot) * (-nextSize)
      x += Math.cos(rotation) * (-nextSize);
      y += Math.sin(rotation) * (-nextSize);
      
      transforms.push({ x, y, rotation });
    }
    
    return transforms;
  }

  getBounds(maxIndex) {
    const bounds = {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity,
      width: 0,
      height: 0
    };

    for (let i = 0; i <= maxIndex; i++) {
      const size = this.fibonacciSequence[i] * this.scale;
      const transform = this.transforms[i];
      const cosR = Math.cos(transform.rotation);
      const sinR = Math.sin(transform.rotation);

      const corners = [
        { x: 0, y: 0 },
        { x: size, y: 0 },
        { x: size, y: size },
        { x: 0, y: size }
      ];

      for (const corner of corners) {
        const worldX = transform.x + cosR * corner.x - sinR * corner.y;
        const worldY = transform.y + sinR * corner.x + cosR * corner.y;

        bounds.minX = Math.min(bounds.minX, worldX);
        bounds.maxX = Math.max(bounds.maxX, worldX);
        bounds.minY = Math.min(bounds.minY, worldY);
        bounds.maxY = Math.max(bounds.maxY, worldY);
      }
    }

    bounds.width = bounds.maxX - bounds.minX;
    bounds.height = bounds.maxY - bounds.minY;

    return bounds;
  }

  setup() {
    this.p5.background(0);
    this.p5.rectMode(this.p5.CORNER);
    
    const sequencer = this.bridge.sequencer;
    sequencer.setBPM(110);
    
    this.stateStartTime = this.p5.millis();
  }

  setupAudio() {
    // Optional: Add audio triggers based on animation state
  }

  draw() {
    const now = this.p5.millis();
    const elapsed = now - this.stateStartTime;

    this.updateAnimationState(elapsed);

    this.p5.background(0);
    
    const centerX = this.p5.width / 2;
    const centerY = this.p5.height / 2;

    const bounds = this.getBounds(Math.min(this.currentIndex, this.fibonacciSequence.length - 1));
    const padding = 80;
    const width = Math.max(1, bounds.width);
    const height = Math.max(1, bounds.height);
    const scaleX = (this.p5.width - padding) / width;
    const scaleY = (this.p5.height - padding) / height;
    this.targetViewScale = Math.min(scaleX, scaleY);
    this.viewScale = this.computeSmoothZoom(this.targetViewScale);
    
    this.p5.push();
    this.p5.translate(centerX, centerY);
    this.p5.scale(this.viewScale);
    this.p5.translate(-(bounds.minX + bounds.width / 2), -(bounds.minY + bounds.height / 2));
    
    // Draw all completed rectangles and arcs
    for (let i = 0; i < this.currentIndex; i++) {
      this.drawSquare(i, 1.0);
      this.drawArc(i, 1.0);
    }

    const shouldDrawCurrentRect = this.state === 'rect' || this.state === 'arc' || this.state === 'pause';
    const shouldDrawCurrentArc = this.state === 'arc' || this.state === 'pause';
    const rectProgress = this.state === 'pause' ? 1 : this.rectProgress;
    const arcProgress = this.state === 'pause' ? 1 : this.arcProgress;

    // Draw current square with progress
    if (shouldDrawCurrentRect) {
      this.drawSquare(this.currentIndex, rectProgress);
    }

    // Draw current arc with progress
    if (shouldDrawCurrentArc) {
      this.drawArc(this.currentIndex, arcProgress);
    }

    this.p5.pop();
  }

  updateAnimationState(elapsed) {
    switch (this.state) {
      case 'rect':
        this.rectProgress = Math.min(elapsed / this.rectDuration, 1.0);
        if (elapsed >= this.rectDuration) {
          this.state = 'arc';
          this.stateStartTime = this.p5.millis();
          this.rectProgress = 1;
          this.arcProgress = 0;
        }
        break;

      case 'arc':
        this.arcProgress = Math.min(elapsed / this.arcDuration, 1.0);
        if (elapsed >= this.arcDuration) {
          this.state = 'pause';
          this.stateStartTime = this.p5.millis();
          this.arcProgress = 1;
        }
        break;

      case 'pause':
        if (elapsed >= this.pauseDuration) {
          this.currentIndex++;
          if (this.currentIndex >= this.fibonacciSequence.length) {
            this.currentIndex = 0; // Loop
            this.viewScale = 1;
            this.targetViewScale = 1;
            this.zoomStartScale = 1;
          }
          this.state = 'rect';
          this.stateStartTime = this.p5.millis();
          this.rectProgress = 0;
          this.arcProgress = 0;
          this.zoomStartScale = this.viewScale;
          this.lastZoomUpdateTime = this.p5.millis();
        }
        break;
    }
  }

  /**
   * Draw a single square in the Fibonacci spiral
   * Uses the precomputed transform for position
   */
  drawSquare(index, progress) {
    const size = this.fibonacciSequence[index] * this.scale;
    const transform = this.transforms[index];
    
    const hue = (index * 30) % 360;
    this.p5.noFill();
    this.p5.stroke(hue, 70, 80);
    const strokeWidth = Math.max(1, 2 / this.viewScale);
    this.p5.strokeWeight(strokeWidth);

    this.p5.push();
    this.p5.translate(transform.x, transform.y);
    this.p5.rotate(transform.rotation);
    
    // Draw square
    // We animate from Right to Left because the arc starts at (size, 0)
    const animatedWidth = size * progress;
    this.p5.rect(size - animatedWidth, 0, animatedWidth, size);
    
    // Draw index number
    this.p5.fill(0);
    this.p5.noStroke();
    this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
    this.p5.textSize(Math.max(8, size / 8));
    this.p5.text(index, size / 2, size / 2);
    
    this.p5.pop();
  }

  computeSmoothZoom(newTarget) {
    if (this.targetViewScale !== newTarget) {
      this.zoomStartScale = this.viewScale;
      this.lastZoomUpdateTime = this.p5.millis();
    }
    this.targetViewScale = newTarget;
    const elapsed = this.p5.millis() - this.lastZoomUpdateTime;
    const t = Math.min(1, elapsed / this.zoomTransitionDuration);
    const eased = t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2; // ease in-out quad
    return this.p5.lerp(this.zoomStartScale, this.targetViewScale, eased);
  }

  /**
   * Draw the arc for a square
   * Arc always connects the same relative corners
   */
  drawArc(index, progress) {
    const size = this.fibonacciSequence[index] * this.scale;
    const transform = this.transforms[index];
    
    const hue = (index * 30) % 360;
    this.p5.stroke(hue, 60, 100);
    const strokeWidth = Math.max(1, 2 / this.viewScale);
    this.p5.strokeWeight(strokeWidth);
    this.p5.noFill();

    this.p5.push();
    this.p5.translate(transform.x, transform.y);
    this.p5.rotate(transform.rotation);
    
    // Arc is always the bottom-right quadrant of a circle centered at (0,0)
    // Starts at (size, 0) [0 radians]
    // Ends at (0, size) [PI/2 radians]
    const startAngle = 0;
    const endAngle = Math.PI / 2;
    const animEnd = startAngle + (endAngle - startAngle) * progress;
    
    this.p5.arc(0, 0, size * 2, size * 2, startAngle, animEnd);
    
    this.p5.pop();
  }

  cleanup() {
    if (this.bridge && this.bridge.sequencer) {
      this.bridge.sequencer.stop();
      this.bridge.sequencer.clear();
    }
  }
}
