/**
 * Audio helper functions wrapping Supersonic
 * Common synth patterns, envelopes, and effects
 */

/**
 * Play a simple tone
 * @param {Object} audio - Supersonic audio instance
 * @param {number} freq - Frequency in Hz
 * @param {number} duration - Duration in seconds
 * @param {Object} options - Additional options
 * @returns {*} Synth ID (for freeing later if needed)
 */
export function playTone(audio, freq, duration = 0.5, options = {}) {
  // This is a placeholder - adjust based on actual Supersonic API
  // Example structure for common audio synthesis patterns
  
  if (audio.synth) {
    return audio.synth('default', {
      freq,
      duration,
      ...options,
    });
  }
  
  console.warn('Audio helper: Supersonic API not available. Using placeholder.');
  return null;
}

/**
 * Play a note (converts MIDI note number to frequency)
 * @param {Object} audio - Supersonic audio instance
 * @param {number} midiNote - MIDI note number (0-127)
 * @param {number} duration - Duration in seconds
 * @param {Object} options - Additional options
 * @returns {*} Synth ID
 */
export function playNote(audio, midiNote, duration = 0.5, options = {}) {
  const freq = midiToFreq(midiNote);
  return playTone(audio, freq, duration, options);
}

/**
 * Convert MIDI note number to frequency
 * @param {number} midiNote - MIDI note number (0-127)
 * @returns {number} Frequency in Hz
 */
export function midiToFreq(midiNote) {
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}

/**
 * Convert frequency to MIDI note number
 * @param {number} freq - Frequency in Hz
 * @returns {number} MIDI note number (0-127)
 */
export function freqToMidi(freq) {
  return 12 * Math.log2(freq / 440) + 69;
}

/**
 * Play a chord (multiple notes simultaneously)
 * @param {Object} audio - Supersonic audio instance
 * @param {Array<number>} midiNotes - Array of MIDI note numbers
 * @param {number} duration - Duration in seconds
 * @param {Object} options - Additional options
 * @returns {Array<*>} Array of synth IDs
 */
export function playChord(audio, midiNotes, duration = 0.5, options = {}) {
  return midiNotes.map(note => playNote(audio, note, duration, options));
}

/**
 * Generate a scale (array of MIDI note numbers)
 * @param {number} rootNote - Root MIDI note
 * @param {Array<number>} intervals - Scale intervals in semitones
 * @returns {Array<number>} Array of MIDI note numbers
 */
export function generateScale(rootNote, intervals) {
  const scale = [rootNote];
  let current = rootNote;
  for (const interval of intervals) {
    current += interval;
    scale.push(current);
  }
  return scale;
}

/**
 * Common scale patterns
 */
export const scales = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  pentatonic: [2, 2, 3, 2, 3],
  chromatic: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
};

/**
 * Map a value (0-1) to a frequency range
 * @param {number} value - Normalized value (0-1)
 * @param {number} minFreq - Minimum frequency
 * @param {number} maxFreq - Maximum frequency
 * @param {boolean} logarithmic - Use logarithmic mapping (default: true)
 * @returns {number} Frequency in Hz
 */
export function mapToFreq(value, minFreq = 100, maxFreq = 2000, logarithmic = true) {
  const clamped = Math.max(0, Math.min(1, value));
  if (logarithmic) {
    // Logarithmic mapping (more musical)
    const logMin = Math.log2(minFreq);
    const logMax = Math.log2(maxFreq);
    return Math.pow(2, logMin + (logMax - logMin) * clamped);
  } else {
    // Linear mapping
    return minFreq + (maxFreq - minFreq) * clamped;
  }
}

