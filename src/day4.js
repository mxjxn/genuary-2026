/**
 * Day 4 Entry Point
 */

import { initSupersonic, getSupersonicInstance } from './framework/supersonic-setup.js';
import { createP5Instance } from './framework/p5-setup.js';
import { createBridge } from './framework/bridge.js';
import { Day04 } from './prompts/day04.js';
import { initDayControls } from './framework/day-controls.js';

let currentP5Instance = null;
let currentPrompt = null;
let audioInstance = null;
let bridge = null;

async function init() {
  initDayControls({ currentDay: 'day4' });
  try {
    audioInstance = await initSupersonic();
    setupStartButton();
    loadDay04();
  } catch (error) {
    console.error('Failed to initialize application:', error);
    const app = document.getElementById('app');
    app.innerHTML = `
      <div style="padding: 20px; color: red;">
        <h2>Initialization Error</h2>
        <p>${error.message}</p>
        <p>Check console for details.</p>
      </div>
    `;
  }
}

function setupStartButton() {
  const overlay = document.getElementById('start-overlay');
  const btn = document.getElementById('start-button');

  btn.addEventListener('click', async () => {
    try {
      if (bridge && bridge.sequencer) {
        bridge.sequencer.resume();
      }
      if (audioInstance && typeof audioInstance.ensureStarted === 'function') {
        await audioInstance.ensureStarted();
      }
      if (currentPrompt && typeof currentPrompt.setupAudio === 'function') {
        currentPrompt.setupAudio();
      }
      setTimeout(() => {
        if (bridge && bridge.sequencer) {
          bridge.sequencer.start();
        }
      }, 100);
      overlay.classList.add('hidden');
    } catch (err) {
      console.error('Error starting audio:', err);
      btn.textContent = 'ERROR (Check Console)';
    }
  });
}

function loadDay04() {
  const container = document.getElementById('p5-container');
  container.innerHTML = '';

  if (!audioInstance) {
    audioInstance = getSupersonicInstance();
  }

  const sketch = (p) => {
    p.setup = () => {
      const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent('p5-container');
      p.colorMode(p.HSB, 360, 100, 100, 1);

      bridge = createBridge(p, audioInstance);
      currentPrompt = new Day04(p, bridge);
      if (typeof currentPrompt.setup === 'function') {
        currentPrompt.setup();
      }
    };

    p.draw = () => {
      if (currentPrompt && typeof currentPrompt.draw === 'function') {
        currentPrompt.draw();
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    p.mousePressed = (event) => {
      if (currentPrompt && typeof currentPrompt.mousePressed === 'function') {
        currentPrompt.mousePressed(event);
      }
    };

    p.mouseReleased = (event) => {
      if (currentPrompt && typeof currentPrompt.mouseReleased === 'function') {
        currentPrompt.mouseReleased(event);
      }
    };

    p.mouseMoved = (event) => {
      if (currentPrompt && typeof currentPrompt.mouseMoved === 'function') {
        currentPrompt.mouseMoved(event);
      }
    };

    p.mouseDragged = (event) => {
      if (currentPrompt && typeof currentPrompt.mouseDragged === 'function') {
        currentPrompt.mouseDragged(event);
      }
    };

    p.keyPressed = (event) => {
      if (currentPrompt && typeof currentPrompt.keyPressed === 'function') {
        currentPrompt.keyPressed(event);
      }
    };

    p.keyReleased = (event) => {
      if (currentPrompt && typeof currentPrompt.keyReleased === 'function') {
        currentPrompt.keyReleased(event);
      }
    };
  };

  currentP5Instance = createP5Instance(container, sketch);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
