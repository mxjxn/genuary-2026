/**
 * BasePrompt - Template class for daily Genuary prompts
 * 
 * All daily prompts should extend this class and implement
 * the lifecycle methods they need.
 */
export class BasePrompt {
  /**
   * @param {p5} p5Instance - p5 instance
   * @param {Object} bridge - Bridge object connecting p5 and Supersonic
   */
  constructor(p5Instance, bridge) {
    this.p5 = p5Instance;
    this.bridge = bridge;
    this.audio = bridge.audio;
    this.state = bridge.state;
  }

  /**
   * Called once when the prompt is activated
   * Override to set up your prompt
   */
  setup() {
    // Override in subclasses
  }

  /**
   * Called after audio engine is fully booted (user clicked start)
   * Override to set up synths, groups, etc.
   */
  setupAudio() {
    // Override in subclasses
  }

  /**
   * Called every frame (typically 60fps)
   * Override to draw/animate your prompt
   */
  draw() {
    // Override in subclasses
    this.bridge.updateState();
  }

  /**
   * Called when mouse is pressed
   * @param {Event} event - Mouse event
   */
  mousePressed(event) {
    // Override in subclasses
  }

  /**
   * Called when mouse is released
   * @param {Event} event - Mouse event
   */
  mouseReleased(event) {
    // Override in subclasses
  }

  /**
   * Called when mouse is moved
   * @param {Event} event - Mouse event
   */
  mouseMoved(event) {
    // Override in subclasses
  }

  /**
   * Called when mouse is dragged
   * @param {Event} event - Mouse event
   */
  mouseDragged(event) {
    // Override in subclasses
  }

  /**
   * Called when a key is pressed
   * @param {Event} event - Keyboard event
   */
  keyPressed(event) {
    // Override in subclasses
  }

  /**
   * Called when a key is released
   * @param {Event} event - Keyboard event
   */
  keyReleased(event) {
    // Override in subclasses
  }

  /**
   * Called when the prompt is deactivated (switching to another day)
   * Override to clean up resources
   */
  cleanup() {
    // Override in subclasses if cleanup is needed
  }

  /**
   * Helper to get normalized mouse coordinates (0-1)
   * @returns {Object} {x, y} normalized coordinates
   */
  getNormalizedMouse() {
    return {
      x: this.p5.mouseX / this.p5.width,
      y: this.p5.mouseY / this.p5.height,
    };
  }

  /**
   * Helper to get center of canvas
   * @returns {Object} {x, y} center coordinates
   */
  getCenter() {
    return {
      x: this.p5.width / 2,
      y: this.p5.height / 2,
    };
  }
}

