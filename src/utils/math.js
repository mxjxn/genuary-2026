/**
 * Math utility functions for Genuary prompts
 */

/**
 * Map a value from one range to another
 * @param {number} value - Input value
 * @param {number} inMin - Input range minimum
 * @param {number} inMax - Input range maximum
 * @param {number} outMin - Output range minimum
 * @param {number} outMax - Output range maximum
 * @param {boolean} clamp - Clamp output to output range
 * @returns {number} Mapped value
 */
export function map(value, inMin, inMax, outMin, outMax, clamp = false) {
  const mapped = ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
  return clamp ? Math.max(outMin, Math.min(outMax, mapped)) : mapped;
}

/**
 * Linear interpolation
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
export function lerp(start, end, t) {
  return start + (end - start) * t;
}

/**
 * Easing functions
 */
export const easing = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  easeInSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
};

/**
 * Apply easing function to value
 * @param {Function} easingFn - Easing function
 * @param {number} t - Value to ease (0-1)
 * @returns {number} Eased value
 */
export function applyEasing(easingFn, t) {
  return easingFn(Math.max(0, Math.min(1, t)));
}

/**
 * 2D Vector class (lightweight, for basic operations)
 */
export class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  sub(v) {
    return new Vec2(this.x - v.x, this.y - v.y);
  }

  mult(scalar) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  div(scalar) {
    return new Vec2(this.x / scalar, this.y / scalar);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const m = this.mag();
    return m > 0 ? this.div(m) : new Vec2(0, 0);
  }

  dist(v) {
    return this.sub(v).mag();
  }

  copy() {
    return new Vec2(this.x, this.y);
  }
}

/**
 * Distance between two points
 * @param {number} x1 - First point x
 * @param {number} y1 - First point y
 * @param {number} x2 - Second point x
 * @param {number} y2 - Second point y
 * @returns {number} Distance
 */
export function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Constrain a value between min and max
 * @param {number} value - Value to constrain
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Constrained value
 */
export function constrain(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Normalize a value from one range to 0-1
 * @param {number} value - Input value
 * @param {number} min - Range minimum
 * @param {number} max - Range maximum
 * @returns {number} Normalized value (0-1)
 */
export function normalize(value, min, max) {
  return (value - min) / (max - min);
}

