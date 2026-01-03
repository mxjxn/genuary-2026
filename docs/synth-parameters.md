# Synth Definition Parameters

This document details the parameters for the Sonic Pi synth definitions used in this project. 
These synths are ported from Sonic Pi and run on the `scsynth` engine via Supersonic.

## Synths

### `sonic-pi-prophet`
A rich, subtractive synthesizer emulating the classic Prophet analog sound. Great for chords, pads, and leads.

| Parameter | Default | Description |
| :--- | :--- | :--- |
| `note` | 52 (E3) | The MIDI note number to play. |
| `amp` | 1 | Amplitude (volume) of the sound (0.0 to 1.0+). |
| `pan` | 0 | Stereo panning (-1.0 left to 1.0 right). |
| `cutoff` | 110 | Filter cutoff frequency (MIDI note number). |
| `attack` | 0 | Time (in seconds) for the sound to reach peak amplitude. |
| `decay` | 0 | Time (in seconds) for the sound to decay to the sustain level. |
| `sustain` | 1 | Sustain level (amplitude) after the decay phase. |
| `release` | 1 | Time (in seconds) for the sound to fade out after the sustain phase. |

### `sonic-pi-sc808_bassdrum`
An emulation of the classic Roland TR-808 Kick Drum.

| Parameter | Default | Description |
| :--- | :--- | :--- |
| `note` | ~36 | Base frequency/pitch of the kick (MIDI note). |
| `amp` | 1 | Amplitude (volume). |
| `decay` | 0.2 | Length of the main thud/decay. |
| `release` | 1 | Release time (often interacts with decay for one-shot drums). |

### `sonic-pi-sc808_rimshot`
An emulation of the Roland TR-808 Rimshot. High, sharp, and clicking.

| Parameter | Default | Description |
| :--- | :--- | :--- |
| `amp` | 1 | Amplitude (volume). |
| `pan` | 0 | Stereo panning. |

### `sonic-pi-sc808_tomlo`
An emulation of the Roland TR-808 Low Tom.

| Parameter | Default | Description |
| :--- | :--- | :--- |
| `amp` | 1 | Amplitude (volume). |
| `decay` | 0.4 | Length of the tom sound. |

## Effects (FX)

### `sonic-pi-fx_reverb`
A high-quality room reverb effect.

| Parameter | Default | Description |
| :--- | :--- | :--- |
| `mix` | 0.4 | Dry/Wet mix (0.0 = all dry, 1.0 = all wet). |
| `room` | 0.6 | Room size (0.0 to 1.0). Larger values create longer tails. |
| `damp` | 0.5 | High-frequency damping (0.0 to 1.0). Controls how quickly high frequencies are absorbed. |
| `amp` | 1 | Output amplitude of the effect. |
