const DEFAULT_STYLE = {
  char: ' ',
  fg: '#F5F7FA',
  bg: null,
  blink: false,
  bold: false,
};

const ANSI_PALETTE = [
  '#050608', '#B71C1C', '#2E7D32', '#F9A825',
  '#1565C0', '#6A1B9A', '#00838F', '#BDBDBD',
  '#424242', '#EF5350', '#66BB6A', '#FFD54F',
  '#42A5F5', '#AB47BC', '#26C6DA', '#F5F7FA',
];

function normalizeStyle(style = {}) {
  return {
    ...DEFAULT_STYLE,
    ...style,
    fg: style.fg ?? DEFAULT_STYLE.fg,
    bg: style.bg === undefined ? DEFAULT_STYLE.bg : style.bg,
  };
}

export class AnsiBuffer {
  constructor(cols = 64, rows = 32, options = {}) {
    this.cols = cols;
    this.rows = rows;
    this.defaultStyle = normalizeStyle(options.defaultStyle);
    this.cells = new Array(cols * rows);
    this.clear();
  }

  index(x, y) {
    return y * this.cols + x;
  }

  inBounds(x, y) {
    return x >= 0 && x < this.cols && y >= 0 && y < this.rows;
  }

  clear(fillChar = ' ', style = {}) {
    const merged = normalizeStyle({ char: fillChar, ...style });
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = { ...merged };
    }
  }

  set(x, y, char = ' ', style = {}) {
    if (!this.inBounds(x, y)) {
      return;
    }
    this.cells[this.index(x, y)] = { ...normalizeStyle(style), char };
  }

  write(x, y, text, style = {}) {
    for (let i = 0; i < text.length; i++) {
      const col = x + i;
      if (!this.inBounds(col, y)) {
        continue;
      }
      this.set(col, y, text[i], style);
    }
  }

  drawHorizontalLine(x, y, length, style = {}) {
    for (let i = 0; i < length; i++) {
      this.set(x + i, y, '-', style);
    }
  }

  drawVerticalLine(x, y, length, style = {}) {
    for (let i = 0; i < length; i++) {
      this.set(x, y + i, '|', style);
    }
  }

  drawBox(x, y, width, height, style = {}) {
    if (width < 2 || height < 2) {
      return;
    }
    this.set(x, y, '+', style);
    this.set(x + width - 1, y, '+', style);
    this.set(x, y + height - 1, '+', style);
    this.set(x + width - 1, y + height - 1, '+', style);

    this.drawHorizontalLine(x + 1, y, width - 2, style);
    this.drawHorizontalLine(x + 1, y + height - 1, width - 2, style);
    this.drawVerticalLine(x, y + 1, height - 2, style);
    this.drawVerticalLine(x + width - 1, y + 1, height - 2, style);
  }

  fillRect(x, y, width, height, char = ' ', style = {}) {
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        this.set(x + col, y + row, char, style);
      }
    }
  }

  getCells() {
    return this.cells;
  }
}

export class AnsiRenderer {
  constructor(p5Instance, options = {}) {
    this.p5 = p5Instance;
    this.font = options.font || 'Menlo, Monaco, Courier New, monospace';
    this.metrics = {
      cellSize: 0,
      gridWidth: 0,
      gridHeight: 0,
      offsetX: 0,
      offsetY: 0,
    };
  }

  render(buffer) {
    const p = this.p5;
    const cellWidth = Math.max(6, Math.floor(p.width / buffer.cols));
    const cellHeight = Math.max(10, Math.floor(p.height / buffer.rows));
    const cellSize = Math.min(cellWidth, cellHeight);
    const gridWidth = cellSize * buffer.cols;
    const gridHeight = cellSize * buffer.rows;
    const offsetX = Math.floor((p.width - gridWidth) / 2);
    const offsetY = Math.floor((p.height - gridHeight) / 2);
    const textSize = Math.max(6, Math.floor(cellSize * 0.85));

    this.metrics = { cellSize, gridWidth, gridHeight, offsetX, offsetY, textSize };

    p.push();
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont(this.font, textSize);
    p.noStroke();

    buffer.getCells().forEach((cell, index) => {
      const x = index % buffer.cols;
      const y = Math.floor(index / buffer.cols);
      const px = offsetX + x * cellSize;
      const py = offsetY + y * cellSize;

      if (cell.bg) {
        p.fill(cell.bg);
        p.rect(px, py, cellSize, cellSize);
      }

      p.fill(cell.fg);
      p.text(cell.char, px + cellSize / 2, py + cellSize / 2 + textSize * 0.08);
    });

    p.pop();
    return this.metrics;
  }

  getMetrics() {
    return this.metrics;
  }
}

export function createAnsiSurface(p5Instance, options = {}) {
  const cols = options.cols ?? 64;
  const rows = options.rows ?? 32;
  const buffer = new AnsiBuffer(cols, rows, options);
  const renderer = new AnsiRenderer(p5Instance, options);
  return {
    buffer,
    renderer,
    palette: ANSI_PALETTE,
  };
}
