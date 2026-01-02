/**
 * Visual helper functions for Genuary prompts
 */

/**
 * Draw a circle with optional stroke and fill
 * @param {p5} p5Instance - p5 instance
 * @param {number} x - Center x
 * @param {number} y - Center y
 * @param {number} radius - Radius
 * @param {Object} options - Style options
 */
export function drawCircle(p5Instance, x, y, radius, options = {}) {
  const {
    fillColor = null,
    strokeColor = null,
    strokeWeight = 1,
  } = options;

  p5Instance.push();
  
  if (fillColor !== null) {
    p5Instance.fill(fillColor);
  } else {
    p5Instance.noFill();
  }
  
  if (strokeColor !== null) {
    p5Instance.stroke(strokeColor);
    p5Instance.strokeWeight(strokeWeight);
  } else {
    p5Instance.noStroke();
  }
  
  p5Instance.circle(x, y, radius * 2);
  p5Instance.pop();
}

/**
 * Draw a line with optional styling
 * @param {p5} p5Instance - p5 instance
 * @param {number} x1 - Start x
 * @param {number} y1 - Start y
 * @param {number} x2 - End x
 * @param {number} y2 - End y
 * @param {Object} options - Style options
 */
export function drawLine(p5Instance, x1, y1, x2, y2, options = {}) {
  const {
    strokeColor = p5Instance.color(0),
    strokeWeight = 1,
  } = options;

  p5Instance.push();
  p5Instance.stroke(strokeColor);
  p5Instance.strokeWeight(strokeWeight);
  p5Instance.line(x1, y1, x2, y2);
  p5Instance.pop();
}

/**
 * Draw a grid pattern
 * @param {p5} p5Instance - p5 instance
 * @param {number} cols - Number of columns
 * @param {number} rows - Number of rows
 * @param {Function} drawCell - Function to draw each cell (x, y, w, h, col, row)
 */
export function drawGrid(p5Instance, cols, rows, drawCell) {
  const cellWidth = p5Instance.width / cols;
  const cellHeight = p5Instance.height / rows;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      p5Instance.push();
      p5Instance.translate(x, y);
      drawCell(p5Instance, x, y, cellWidth, cellHeight, col, row);
      p5Instance.pop();
    }
  }
}

/**
 * Draw a polygon (regular or custom)
 * @param {p5} p5Instance - p5 instance
 * @param {number} x - Center x
 * @param {number} y - Center y
 * @param {number} radius - Radius
 * @param {number} sides - Number of sides
 * @param {Object} options - Style options
 */
export function drawPolygon(p5Instance, x, y, radius, sides, options = {}) {
  const {
    fillColor = null,
    strokeColor = null,
    strokeWeight = 1,
    rotation = 0,
  } = options;

  p5Instance.push();
  p5Instance.translate(x, y);
  p5Instance.rotate(rotation);

  if (fillColor !== null) {
    p5Instance.fill(fillColor);
  } else {
    p5Instance.noFill();
  }

  if (strokeColor !== null) {
    p5Instance.stroke(strokeColor);
    p5Instance.strokeWeight(strokeWeight);
  } else {
    p5Instance.noStroke();
  }

  p5Instance.beginShape();
  for (let i = 0; i < sides; i++) {
    const angle = (p5Instance.TWO_PI / sides) * i;
    const px = Math.cos(angle) * radius;
    const py = Math.sin(angle) * radius;
    p5Instance.vertex(px, py);
  }
  p5Instance.endShape(p5Instance.CLOSE);
  p5Instance.pop();
}

/**
 * Draw a star
 * @param {p5} p5Instance - p5 instance
 * @param {number} x - Center x
 * @param {number} y - Center y
 * @param {number} outerRadius - Outer radius
 * @param {number} innerRadius - Inner radius
 * @param {number} points - Number of points
 * @param {Object} options - Style options
 */
export function drawStar(p5Instance, x, y, outerRadius, innerRadius, points, options = {}) {
  const {
    fillColor = null,
    strokeColor = null,
    strokeWeight = 1,
    rotation = 0,
  } = options;

  p5Instance.push();
  p5Instance.translate(x, y);
  p5Instance.rotate(rotation);

  if (fillColor !== null) {
    p5Instance.fill(fillColor);
  } else {
    p5Instance.noFill();
  }

  if (strokeColor !== null) {
    p5Instance.stroke(strokeColor);
    p5Instance.strokeWeight(strokeWeight);
  } else {
    p5Instance.noStroke();
  }

  p5Instance.beginShape();
  for (let i = 0; i < points * 2; i++) {
    const angle = (p5Instance.TWO_PI / (points * 2)) * i - p5Instance.HALF_PI;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const px = Math.cos(angle) * radius;
    const py = Math.sin(angle) * radius;
    p5Instance.vertex(px, py);
  }
  p5Instance.endShape(p5Instance.CLOSE);
  p5Instance.pop();
}

/**
 * Create a pattern using a function
 * @param {p5} p5Instance - p5 instance
 * @param {number} width - Pattern width
 * @param {number} height - Pattern height
 * @param {Function} patternFn - Function that draws at (x, y) position
 */
export function drawPattern(p5Instance, width, height, patternFn) {
  p5Instance.push();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      p5Instance.push();
      p5Instance.translate(x, y);
      patternFn(p5Instance, x, y);
      p5Instance.pop();
    }
  }
  p5Instance.pop();
}

