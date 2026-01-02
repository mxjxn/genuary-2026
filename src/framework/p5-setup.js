import p5 from 'p5';

/**
 * Creates and returns a p5 instance in instance mode
 * @param {HTMLElement} container - DOM element to attach the canvas to
 * @param {Function} sketchFunction - Function that receives p5 instance and defines setup/draw/etc
 * @returns {p5} p5 instance
 */
export function createP5Instance(container, sketchFunction) {
  const sketch = (p) => {
    // Expose p5 instance methods to the sketch function
    sketchFunction(p);
  };
  
  return new p5(sketch, container);
}

/**
 * Removes a p5 instance
 * @param {p5} instance - p5 instance to remove
 */
export function removeP5Instance(instance) {
  if (instance && instance.remove) {
    instance.remove();
  }
}

