/**
 * Main application entry point
 * Handles initialization, day selector, and routing between prompts
 */

import { initSupersonic, getSupersonicInstance } from './framework/supersonic-setup.js';
import { createP5Instance, removeP5Instance } from './framework/p5-setup.js';
import { createBridge } from './framework/bridge.js';

// Import prompts (add new prompts here as they're created)
import { Day01 } from './prompts/day01.js';
import { Day02 } from './prompts/day02.js';

/**
 * Registry of available prompts
 * Add new prompts here: { day: number, name: string, class: PromptClass }
 */
const PROMPTS = [
  { day: 1, name: 'Day 1: Polyrhythms', class: Day01 },
  { day: 2, name: 'Day 2: Layers', class: Day02 },
];

let currentP5Instance = null;
let currentPrompt = null;
let audioInstance = null;
let bridge = null;

/**
 * Initialize the application
 */
async function init() {
  try {
    // Initialize Supersonic
    console.log('Initializing Supersonic...');
    audioInstance = await initSupersonic();
    console.log('Supersonic initialized');

    // Create day selector UI
    createDaySelector();

    // Set up start button handler
    setupStartButton();

    // Start with most recent available prompt
    const defaultDay = PROMPTS.length > 0 ? PROMPTS[PROMPTS.length - 1].day : 1;
    loadPrompt(defaultDay);
  } catch (error) {
    console.error('Failed to initialize application:', error);
    // Show error message to user
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

/**
 * Handle the start overlay
 */
function setupStartButton() {
  const overlay = document.getElementById('start-overlay');
  const btn = document.getElementById('start-button');
  
  btn.addEventListener('click', async () => {
    try {
      // 1. Ensure Supersonic is booted
      if (audioInstance && typeof audioInstance.ensureStarted === 'function') {
        await audioInstance.ensureStarted();
      }
      
      // 2. Start the sequencer (resumes AudioContext)
      if (bridge && bridge.sequencer) {
        bridge.sequencer.start();
      }
      
      // 3. Hide overlay
      overlay.classList.add('hidden');
    } catch (err) {
      console.error('Error starting audio:', err);
      btn.textContent = 'ERROR (Check Console)';
    }
  });
}

/**
 * Create the day selector dropdown UI
 */
function createDaySelector() {
  const container = document.getElementById('day-selector-container');
  
  const selector = document.createElement('select');
  selector.id = 'day-selector';
  selector.innerHTML = '<option value="">Select a day...</option>';
  
  // Add options for all available prompts
  PROMPTS.forEach(prompt => {
    const option = document.createElement('option');
    option.value = prompt.day;
    option.textContent = prompt.name;
    selector.appendChild(option);
  });
  
  // Add change handler
  selector.addEventListener('change', (e) => {
    const day = parseInt(e.target.value);
    if (day) {
      loadPrompt(day);
    }
  });
  
  container.appendChild(selector);
}

/**
 * Load and activate a prompt for a specific day
 * @param {number} day - Day number (1-31)
 */
function loadPrompt(day) {
  // Find the prompt in the registry
  const promptInfo = PROMPTS.find(p => p.day === day);
  if (!promptInfo) {
    console.warn(`Prompt for day ${day} not found`);
    return;
  }

  // Clean up current prompt
  if (currentPrompt && typeof currentPrompt.cleanup === 'function') {
    currentPrompt.cleanup();
  }

  // Remove current p5 instance
  if (currentP5Instance) {
    removeP5Instance(currentP5Instance);
    currentP5Instance = null;
  }

  // Clear the container
  const container = document.getElementById('p5-container');
  container.innerHTML = '';

  // Get audio instance
  if (!audioInstance) {
    audioInstance = getSupersonicInstance();
  }

  // Create new p5 instance
  const sketch = (p) => {
    // Set up p5
    p.setup = () => {
      const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent('p5-container');
      p.colorMode(p.HSB, 360, 100, 100, 1);
      
      // Create bridge
      bridge = createBridge(p, audioInstance);
      
      // Create prompt instance
      const PromptClass = promptInfo.class;
      currentPrompt = new PromptClass(p, bridge);
      
      // Call prompt setup
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

    // Event handlers - delegate to prompt
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

  // Create p5 instance
  currentP5Instance = createP5Instance(container, sketch);

  // Update selector
  const selector = document.getElementById('day-selector');
  if (selector) {
    selector.value = day;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

