/**
 * Supersonic (scsynth WASM) initialization and wrapper
 */

import { SuperSonic } from 'supersonic-scsynth';

let supersonicInstance = null;
let isInitialized = false;
let initPromise = null;

/**
 * Initialize Supersonic audio engine
 * Creates the instance but does not boot the audio context yet.
 * @returns {Promise<Object>} Promise that resolves when Supersonic instance is created
 */
export async function initSupersonic() {
  if (supersonicInstance) {
    return supersonicInstance;
  }

  try {
    // Create the SuperSonic instance pointing to our public assets
    supersonicInstance = new SuperSonic({
      baseURL: '/supersonic/',
      mode: 'sab', // Use SharedArrayBuffer for better performance
      debug: true, // Enable debug logs for now
    });

    // Add a helper method to ensure audio is started
    supersonicInstance.ensureStarted = async () => {
      if (isInitialized) return;
      
      if (!initPromise) {
        initPromise = (async () => {
          console.log('Booting Supersonic...');
          await supersonicInstance.init();
          
          // Load default synth definitions
          // We can add more as needed
          await supersonicInstance.loadSynthDefs([
            'sonic-pi-beep', 
            'sonic-pi-prophet',
            'sonic-pi-sc808_bassdrum',
            'sonic-pi-sc808_rimshot',
            'sonic-pi-sc808_tomlo'
          ]);
          
          console.log('Supersonic booted!');
          isInitialized = true;
        })();
      }
      
      return initPromise;
    };

    // Wrapper for triggering synths (handles lazy start)
    supersonicInstance.synth = async (name, params = {}) => {
      // Auto-start on first synth call if needed
      // Note: This might block the first note slightly
      if (!isInitialized) {
        await supersonicInstance.ensureStarted();
      }
      
      // Convert params object to OSC args
      // e.g. { freq: 440, amp: 0.5 } -> ['freq', 440, 'amp', 0.5]
      const oscArgs = [];
      for (const [key, value] of Object.entries(params)) {
        oscArgs.push(key, value);
      }
      
      // Send /s_new command
      // /s_new, synthName, nodeID (-1 for auto), targetID (0 for head), addAction (0 for head), [args...]
      supersonicInstance.send('/s_new', name, -1, 0, 0, ...oscArgs);
    };

    return supersonicInstance;
  } catch (error) {
    console.error('Failed to create Supersonic instance:', error);
    throw error;
  }
}

/**
 * Get the Supersonic instance (throws if not initialized)
 * @returns {Object} Supersonic instance
 */
export function getSupersonicInstance() {
  if (!supersonicInstance) {
    throw new Error('Supersonic not initialized. Call initSupersonic() first.');
  }
  return supersonicInstance;
}

/**
 * Check if Supersonic is fully booted
 * @returns {boolean}
 */
export function isSupersonicReady() {
  return isInitialized;
}


