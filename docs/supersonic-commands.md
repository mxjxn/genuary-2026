# Supersonic OSC Command Reference

Supersonic uses the standard SuperCollider `scsynth` OSC API. Commands are sent using `supersonic.send(address, ...args)`.

## Synth Controls

### `/s_new` (Create a new synth)
Creates a synth from a loaded SynthDef.
- `address`: `"/s_new"`
- `synthName`: Name of the SynthDef (e.g., `"sonic-pi-beep"`)
- `nodeID`: Use `-1` for auto-allocation
- `targetID`: `0` (default group) or a specific group ID
- `addAction`: `0` (add to head), `1` (add to tail)
- `args`: Key-value pairs of parameters (e.g., `"note", 60, "amp", 0.5`)

**Example:**
```javascript
sonic.send("/s_new", "sonic-pi-prophet", -1, 0, 0, "note", 60, "release", 2);
```

### `/n_set` (Set node parameters)
Updates parameters of an existing synth node.
- `address`: `"/n_set"`
- `nodeID`: The ID of the synth (returned by some methods or tracked)
- `args`: Key-value pairs to update

### `/n_free` (Free a node)
Stops and removes a synth node.
- `address`: `"/n_free"`
- `nodeID`: The ID of the synth

---

## Buffer / Sample Controls

### `/b_alloc` (Allocate buffer)
- `address`: `"/b_alloc"`
- `bufferID`: ID to assign
- `numFrames`: Size

### `/b_free` (Free buffer)
- `address`: `"/b_free"`
- `bufferID`: ID to free

---

## Supersonic Helper Methods (JavaScript)

The Supersonic client provides higher-level methods:

### `await sonic.init()`
Boots the WASM engine. Must be called after user interaction.

### `await sonic.loadSynthDefs([names])`
Loads pre-defined synths from the `synthdefs/` folder.
**Available names include:**
- `sonic-pi-beep`
- `sonic-pi-prophet`
- `sonic-pi-saw`
- `sonic-pi-pulse`
- `sonic-pi-tri`

### `await sonic.loadSamples([names])`
Loads samples from the `samples/` folder.

### `sonic.synth(name, params)` (Custom Helper in this project)
Our `supersonic-setup.js` adds a convenient wrapper:
```javascript
bridge.audio.synth('sonic-pi-beep', { note: 60, amp: 0.8 });
```
