/**
 * Communication bridge between p5.js and Supersonic
 * Provides shared state and event system for audio-visual interaction
 */

import { getSupersonicInstance, isSupersonicReady } from './supersonic-setup.js';
import { createSequencer } from './sequencer.js';

/**
 * Creates a bridge object that connects p5 and Supersonic
 * @param {p5} p5Instance - p5 instance
 * @param {Object} audioInstance - Supersonic instance
 * @returns {Object} Bridge object with shared state and helper methods
 */
export function createBridge(p5Instance, audioInstance) {
  // Shared state that can be accessed by both visual and audio code
  const state = {
    // Visual state (can influence audio)
    mouseX: 0,
    mouseY: 0,
    frameCount: 0,
    time: 0,
    // Audio state (can influence visuals)
    currentFreq: 440,
    amplitude: 0,
    // Custom state (can be extended by prompts)
    custom: {},
  };

  // Create sequencer
  const sequencer = createSequencer(audioInstance);

  /**
   * Update shared state (called from p5 draw loop)
   */
  function updateState() {
    if (p5Instance) {
      state.mouseX = p5Instance.mouseX;
      state.mouseY = p5Instance.mouseY;
      state.frameCount = p5Instance.frameCount;
      state.time = p5Instance.millis() / 1000;
    }
  }

  /**
   * Trigger audio from visual event
   * @param {string} eventName - Name of the event
   * @param {Object} data - Event data
   */
  function triggerAudio(eventName, data = {}) {
    if (!isSupersonicReady()) {
      console.warn('Supersonic not ready, cannot trigger audio');
      return;
    }
    
    // Emit event that audio helpers can listen to
    // This can be extended with an event emitter pattern if needed
    if (audioInstance.onEvent) {
      audioInstance.onEvent(eventName, data);
    }
  }

  /**
   * Get audio parameter based on visual data
   * Maps visual coordinates/values to audio parameters
   */
  function mapVisualToAudio(visualValue, audioMin, audioMax, visualMin = 0, visualMax = 1) {
    if (!p5Instance) return audioMin;
    const normalized = p5Instance.map(visualValue, visualMin, visualMax, 0, 1);
    return p5Instance.lerp(audioMin, audioMax, normalized);
  }

  return {
    state,
    p5: p5Instance,
    audio: audioInstance,
    sequencer, // Expose sequencer
    updateState,
    triggerAudio,
    mapVisualToAudio,
  };
}

