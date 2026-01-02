/**
 * Color utility functions for Genuary prompts
 */

/**
 * Generate a random color in HSB/RGB
 * @param {p5} p5Instance - p5 instance (for colorMode support)
 * @param {Object} options - Color options
 * @returns {p5.Color} p5 color object
 */
export function randomColor(p5Instance, options = {}) {
  const {
    hueMin = 0,
    hueMax = 360,
    saturationMin = 50,
    saturationMax = 100,
    brightnessMin = 50,
    brightnessMax = 100,
    alpha = 255,
  } = options;

  const h = p5Instance.random(hueMin, hueMax);
  const s = p5Instance.random(saturationMin, saturationMax);
  const b = p5Instance.random(brightnessMin, brightnessMax);

  return p5Instance.color(h, s, b, alpha);
}

/**
 * Interpolate between two colors
 * @param {p5} p5Instance - p5 instance
 * @param {p5.Color} c1 - Start color
 * @param {p5.Color} c2 - End color
 * @param {number} amt - Interpolation amount (0-1)
 * @returns {p5.Color} Interpolated color
 */
export function lerpColor(p5Instance, c1, c2, amt) {
  return p5Instance.lerpColor(c1, c2, amt);
}

/**
 * Generate a gradient palette
 * @param {p5} p5Instance - p5 instance
 * @param {Array<p5.Color>} colors - Array of colors to interpolate
 * @param {number} steps - Number of steps in the gradient
 * @returns {Array<p5.Color>} Array of interpolated colors
 */
export function createGradient(p5Instance, colors, steps) {
  const palette = [];
  const segmentLength = steps / (colors.length - 1);

  for (let i = 0; i < steps; i++) {
    const segmentIndex = Math.floor(i / segmentLength);
    const segmentPos = (i % segmentLength) / segmentLength;
    const colorIndex = Math.min(segmentIndex, colors.length - 2);
    const c1 = colors[colorIndex];
    const c2 = colors[colorIndex + 1];
    palette.push(lerpColor(p5Instance, c1, c2, segmentPos));
  }

  return palette;
}

/**
 * Get color from palette by normalized index (0-1)
 * @param {Array<p5.Color>} palette - Color palette
 * @param {number} t - Normalized index (0-1)
 * @returns {p5.Color} Color from palette
 */
export function getPaletteColor(palette, t) {
  const clamped = Math.max(0, Math.min(1, t));
  const index = Math.floor(clamped * (palette.length - 1));
  return palette[index];
}

/**
 * Convert HSB to RGB (if needed for custom calculations)
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} b - Brightness (0-100)
 * @returns {Object} {r, g, b} RGB values (0-255)
 */
export function hsbToRgb(h, s, b) {
  s /= 100;
  b /= 100;
  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  return {
    r: Math.round(255 * f(5)),
    g: Math.round(255 * f(3)),
    b: Math.round(255 * f(1)),
  };
}

