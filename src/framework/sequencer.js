/**
 * ToneClock / Sequencer
 * 
 * A precise lookahead scheduler for musical timing.
 * Designed for "Live Coding" style interaction where patterns
 * can be added, updated, or removed while the clock is running.
 */

export class Sequencer {
  constructor(audioInstance) {
    this.audio = audioInstance;
    this.bpm = 120;
    this.isPlaying = false;
    
    // The "Just In Time" channels
    // Key: string (id), Value: { callback, interval, nextTime, active }
    this.channels = new Map();
    
    // Timing constants
    this.lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
    this.scheduleAheadTime = 0.1; // How far ahead to schedule audio (in seconds)
    
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.nextNoteTime = 0.0;
    this.timerID = null;
    
    // Current song position
    this.beatCount = 0; // Total 16th notes elapsed
    this.barCount = 0;
  }

  /**
   * Resume the AudioContext (must be called from user gesture)
   */
  resume() {
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Start the sequencer
   */
  start() {
    this.resume();

    if (this.isPlaying) return;
    
    this.isPlaying = true;
    this.nextNoteTime = this.ctx.currentTime + 0.1;
    this.beatCount = 0;
    
    // Reset all channel timings to sync with start
    this.channels.forEach(channel => {
      channel.nextTime = this.nextNoteTime;
    });

    this.timerID = window.setInterval(() => this.scheduler(), this.lookahead);
  }

  /**
   * Stop the sequencer
   */
  stop() {
    this.isPlaying = false;
    if (this.timerID) {
      window.clearInterval(this.timerID);
      this.timerID = null;
    }
  }

  /**
   * Set Tempo
   * @param {number} bpm 
   */
  setBPM(bpm) {
    this.bpm = bpm;
  }

  /**
   * Register or Update a Pattern (JIT-friendly)
   * 
   * @param {string} id - Unique identifier for this pattern
   * @param {Function} callback - Function to execute. Receives { time, beat, bar }
   * @param {number|string} interval - Interval in beats (e.g. 1 = quarter note, 0.25 = 16th)
   *                                   or string notation '4n', '8n', '16n'
   */
  schedule(id, callback, interval = 1) {
    const intervalVal = this._parseInterval(interval);
    
    if (this.channels.has(id)) {
      // Hot-swap: Update callback and interval, keep timing state
      const channel = this.channels.get(id);
      channel.callback = callback;
      channel.interval = intervalVal;
      channel.active = true;
    } else {
      // Create new
      this.channels.set(id, {
        callback,
        interval: intervalVal,
        nextTime: this.nextNoteTime, // Start at next available slot
        active: true
      });
    }
  }

  /**
   * Remove/Mute a pattern
   */
  unschedule(id) {
    if (this.channels.has(id)) {
      this.channels.get(id).active = false;
      // We don't delete to allow re-enabling later? 
      // For now, let's just delete to keep it clean.
      this.channels.delete(id);
    }
  }

  /**
   * Clear all patterns
   */
  clear() {
    this.channels.clear();
  }

  /**
   * Core Loop
   */
  scheduler() {
    // While there are notes that will need to play before the next interval,
    // schedule them and advance the pointer.
    while (this.nextNoteTime < this.ctx.currentTime + this.scheduleAheadTime) {
      this.scheduleNotes();
      this.advanceNote();
    }
  }

  /**
   * Advance time by one 16th note (tick)
   */
  advanceNote() {
    const secondsPerBeat = 60.0 / this.bpm;
    const sixteenthNoteTime = 0.25 * secondsPerBeat; // Base resolution
    
    this.nextNoteTime += sixteenthNoteTime;
    this.beatCount++;
    if (this.beatCount % 16 === 0) {
      this.barCount++;
    }
  }

  /**
   * Execute callbacks for the current time window
   */
  scheduleNotes() {
    // We treat the main loop as a high-res tick (16th notes)
    // Check every channel to see if it's their turn
    
    this.channels.forEach((channel, id) => {
      if (!channel.active) return;

      // Simple logic: Is it time for this channel?
      // Note: This logic assumes quantization to the grid.
      // For free-running phases, we'd track each channel's nextTime independently.
      // Let's do independent tracking for maximum flexibility.
      
      if (channel.nextTime <= this.nextNoteTime) {
        try {
          // Trigger the user callback
          channel.callback({
            time: channel.nextTime, // Use this for audio scheduling!
            beat: this.beatCount,
            bar: this.barCount,
            audio: this.audio
          });
        } catch (e) {
          console.error(`Sequencer error in channel '${id}':`, e);
        }

        // Advance this specific channel
        const secondsPerBeat = 60.0 / this.bpm;
        channel.nextTime += channel.interval * secondsPerBeat;
      }
    });
  }

  _parseInterval(interval) {
    if (typeof interval === 'number') return interval;
    if (typeof interval === 'string') {
      switch(interval) {
        case '1m': return 4;   // 1 measure
        case '2n': return 2;   // half note
        case '4n': return 1;   // quarter note
        case '4t': return 1/3; // quarter note triplet (approx)
        case '8n': return 0.5; // eighth note
        case '16n': return 0.25; // sixteenth note
        default: return 1;
      }
    }
    return 1;
  }
}

/**
 * Factory to create sequencer
 */
export function createSequencer(audioInstance) {
  return new Sequencer(audioInstance);
}
