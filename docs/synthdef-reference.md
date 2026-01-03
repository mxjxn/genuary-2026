# SuperCollider Synth Definition Reference
This document provides a comprehensive reference for all synth definitions (`.scsyndef` files) available in the `public/supersonic/synthdefs/` directory.

**Total Synth Definitions:** 128

## Table of Contents
- [Audio I/O](#audio-i/o) (6 items)
- [Drum Machines (Roland TR-808)](#drum-machines-roland-tr-808) (16 items)
- [Effects (FX)](#effects-fx) (43 items)
- [FFT Processing](#fft-processing) (7 items)
- [Mixing](#mixing) (2 items)
- [Modulated Synths](#modulated-synths) (6 items)
- [Synthesizers](#synthesizers) (47 items)
- [Utility](#utility) (1 items)

---

## Audio I/O

### `sonic-pi-amp_stereo_monitor`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `smoothness` | (Parameter purpose not documented) |

### `sonic-pi-basic_mono_player`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `rate` | Playback rate (1.0 = normal, 2.0 = double speed) |
| `out_bus` | Output audio bus number |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |

### `sonic-pi-basic_stereo_player`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `rate` | Playback rate (1.0 = normal, 2.0 = double speed) |
| `out_bus` | Output audio bus number |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |

### `sonic-pi-mono_player`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `lpf_init_level` | Amplitude level |
| `lpf_attack_level` | Amplitude level |
| `lpf_decay_level` | Amplitude level |
| `lpf_sustain_level` | Amplitude level |
| `lpf_release_level` | Amplitude level |
| `hpf_init_level` | Amplitude level |
| `hpf_attack_level` | Amplitude level |
| `hpf_decay_level` | Amplitude level |
| `hpf_sustain_level` | Amplitude level |
| `hpf_release_level` | Amplitude level |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `env_curve` | Envelope curve shape |
| `rate` | Playback rate (1.0 = normal, 2.0 = double speed) |
| `start` | (Parameter purpose not documented) |
| `finish` | (Parameter purpose not documented) |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `lpf_attack` | (Parameter purpose not documented) |
| `lpf_sustain` | (Parameter purpose not documented) |
| `lpf_release` | (Parameter purpose not documented) |
| `lpf_min` | (Parameter purpose not documented) |
| `lpf_min_slide` | Slide/transition time in beats |
| `lpf_min_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_min_slide_curve` | Slide curve amount |
| `lpf_env_curve` | (Parameter purpose not documented) |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `hpf_max` | (Parameter purpose not documented) |
| `hpf_max_slide` | Slide/transition time in beats |
| `hpf_max_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_max_slide_curve` | Slide curve amount |
| `hpf_attack` | (Parameter purpose not documented) |
| `hpf_sustain` | (Parameter purpose not documented) |
| `hpf_release` | (Parameter purpose not documented) |
| `hpf_env_curve` | (Parameter purpose not documented) |
| `norm` | (Parameter purpose not documented) |
| `pitch` | (Parameter purpose not documented) |
| `pitch_slide` | Slide/transition time in beats |
| `pitch_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pitch_slide_curve` | Slide curve amount |
| `window_size` | (Parameter purpose not documented) |
| `window_size_slide` | Slide/transition time in beats |
| `window_size_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `window_size_slide_curve` | Slide curve amount |
| `pitch_dis_slide` | Slide/transition time in beats |
| `pitch_dis_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pitch_dis_slide_curve` | Slide curve amount |
| `time_dis` | Time in seconds |
| `time_dis_slide` | Slide/transition time in beats |
| `time_dis_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `time_dis_slide_curve` | Slide curve amount |
| `compress` | (Parameter purpose not documented) |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `threshold_slide` | Slide/transition time in beats |
| `threshold_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `threshold_slide_curve` | Slide curve amount |
| `clamp_time` | Time in seconds |
| `clamp_time_slide` | Slide/transition time in beats |
| `clamp_time_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `clamp_time_slide_curve` | Slide curve amount |
| `slope_above` | (Parameter purpose not documented) |
| `slope_above_slide` | Slide/transition time in beats |
| `slope_above_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `slope_above_slide_curve` | Slide curve amount |
| `slope_below` | (Parameter purpose not documented) |
| `slope_below_slide` | Slide/transition time in beats |
| `slope_below_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `slope_below_slide_curve` | Slide curve amount |
| `relax_time` | Time in seconds |
| `relax_time_slide` | Slide/transition time in beats |
| `relax_time_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `relax_time_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-recorder`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |

### `sonic-pi-stereo_player`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `lpf_init_level` | Amplitude level |
| `lpf_attack_level` | Amplitude level |
| `lpf_decay_level` | Amplitude level |
| `lpf_sustain_level` | Amplitude level |
| `lpf_release_level` | Amplitude level |
| `hpf_init_level` | Amplitude level |
| `hpf_attack_level` | Amplitude level |
| `hpf_decay_level` | Amplitude level |
| `hpf_sustain_level` | Amplitude level |
| `hpf_release_level` | Amplitude level |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `env_curve` | Envelope curve shape |
| `rate` | Playback rate (1.0 = normal, 2.0 = double speed) |
| `start` | (Parameter purpose not documented) |
| `finish` | (Parameter purpose not documented) |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `lpf_attack` | (Parameter purpose not documented) |
| `lpf_sustain` | (Parameter purpose not documented) |
| `lpf_release` | (Parameter purpose not documented) |
| `lpf_min` | (Parameter purpose not documented) |
| `lpf_min_slide` | Slide/transition time in beats |
| `lpf_min_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_min_slide_curve` | Slide curve amount |
| `lpf_env_curve` | (Parameter purpose not documented) |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `hpf_max` | (Parameter purpose not documented) |
| `hpf_max_slide` | Slide/transition time in beats |
| `hpf_max_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_max_slide_curve` | Slide curve amount |
| `hpf_attack` | (Parameter purpose not documented) |
| `hpf_sustain` | (Parameter purpose not documented) |
| `hpf_release` | (Parameter purpose not documented) |
| `hpf_env_curve` | (Parameter purpose not documented) |
| `norm` | (Parameter purpose not documented) |
| `pitch` | (Parameter purpose not documented) |
| `pitch_slide` | Slide/transition time in beats |
| `pitch_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pitch_slide_curve` | Slide curve amount |
| `window_size` | (Parameter purpose not documented) |
| `window_size_slide` | Slide/transition time in beats |
| `window_size_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `window_size_slide_curve` | Slide curve amount |
| `pitch_dis_slide` | Slide/transition time in beats |
| `pitch_dis_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pitch_dis_slide_curve` | Slide curve amount |
| `time_dis` | Time in seconds |
| `time_dis_slide` | Slide/transition time in beats |
| `time_dis_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `time_dis_slide_curve` | Slide curve amount |
| `compress` | (Parameter purpose not documented) |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `threshold_slide` | Slide/transition time in beats |
| `threshold_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `threshold_slide_curve` | Slide curve amount |
| `clamp_time` | Time in seconds |
| `clamp_time_slide` | Slide/transition time in beats |
| `clamp_time_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `clamp_time_slide_curve` | Slide curve amount |
| `slope_above` | (Parameter purpose not documented) |
| `slope_above_slide` | Slide/transition time in beats |
| `slope_above_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `slope_above_slide_curve` | Slide curve amount |
| `slope_below` | (Parameter purpose not documented) |
| `slope_below_slide` | Slide/transition time in beats |
| `slope_below_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `slope_below_slide_curve` | Slide curve amount |
| `relax_time` | Time in seconds |
| `relax_time_slide` | Slide/transition time in beats |
| `relax_time_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `relax_time_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

## Drum Machines (Roland TR-808)

### `sonic-pi-sc808_bassdrum`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `click` | (Parameter purpose not documented) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `attenuation` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_clap`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `click` | (Parameter purpose not documented) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_claves`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `click` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_closed_hihat`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_congahi`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay_curve` | (Parameter purpose not documented) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `detune1` | (Parameter purpose not documented) |
| `detune2` | (Parameter purpose not documented) |
| `click` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_congalo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay_curve` | (Parameter purpose not documented) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `detune1` | (Parameter purpose not documented) |
| `detune2` | (Parameter purpose not documented) |
| `click` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_congamid`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay_curve` | (Parameter purpose not documented) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `detune1` | (Parameter purpose not documented) |
| `detune2` | (Parameter purpose not documented) |
| `click` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_cowbell`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `detune` | Detuning amount in semitones |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_cymbal`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `tone` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_maracas`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `click` | (Parameter purpose not documented) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_open_hihat`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_rimshot`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `detune` | Detuning amount in semitones |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `click` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_snare`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `detune` | Detuning amount in semitones |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `head_hpf` | (Parameter purpose not documented) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_curve` | (Parameter purpose not documented) |
| `click` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_tomhi`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `click` | (Parameter purpose not documented) |
| `detune1` | (Parameter purpose not documented) |
| `detune2` | (Parameter purpose not documented) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_tomlo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `click` | (Parameter purpose not documented) |
| `detune1` | (Parameter purpose not documented) |
| `detune2` | (Parameter purpose not documented) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sc808_tommid`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `click` | (Parameter purpose not documented) |
| `detune1` | (Parameter purpose not documented) |
| `detune2` | (Parameter purpose not documented) |
| `decay_curve` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

## Effects (FX)

### `sonic-pi-fx_autotuner`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |
| `in_bus` | Input audio bus number |
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `formant_ratio` | (Parameter purpose not documented) |
| `formant_ratio_slide` | Slide/transition time in beats |
| `formant_ratio_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `formant_ratio_slide_curve` | Slide curve amount |
| `min_freq` | Frequency in Hz |
| `max_formant_ratio` | (Parameter purpose not documented) |
| `grains_period` | (Parameter purpose not documented) |
| `transpose` | (Parameter purpose not documented) |
| `time_dispersion` | Time in seconds |

### `sonic-pi-fx_band_eq`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `freq` | Frequency in Hz |
| `freq_slide` | Slide/transition time in beats |
| `freq_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `freq_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `db_slide` | Slide/transition time in beats |
| `db_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `db_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_bitcrusher`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `sample_rate` | (Parameter purpose not documented) |
| `sample_rate_slide` | Slide/transition time in beats |
| `sample_rate_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `sample_rate_slide_curve` | Slide curve amount |
| `bits` | (Parameter purpose not documented) |
| `bits_slide` | Slide/transition time in beats |
| `bits_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `bits_slide_curve` | Slide curve amount |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_bpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `centre` | (Parameter purpose not documented) |
| `centre_slide` | Slide/transition time in beats |
| `centre_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `centre_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_compressor`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `threshold_slide` | Slide/transition time in beats |
| `threshold_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `threshold_slide_curve` | Slide curve amount |
| `clamp_time` | Time in seconds |
| `clamp_time_slide` | Slide/transition time in beats |
| `clamp_time_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `clamp_time_slide_curve` | Slide curve amount |
| `slope_above` | (Parameter purpose not documented) |
| `slope_above_slide` | Slide/transition time in beats |
| `slope_above_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `slope_above_slide_curve` | Slide curve amount |
| `slope_below` | (Parameter purpose not documented) |
| `slope_below_slide` | Slide/transition time in beats |
| `slope_below_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `slope_below_slide_curve` | Slide curve amount |
| `relax_time` | Time in seconds |
| `relax_time_slide` | Slide/transition time in beats |
| `relax_time_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `relax_time_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_distortion`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `distort` | (Parameter purpose not documented) |
| `distort_slide` | Slide/transition time in beats |
| `distort_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `distort_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_echo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_slide` | Slide/transition time in beats |
| `decay_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `decay_slide_curve` | Slide curve amount |
| `max_phase` | (Parameter purpose not documented) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_eq`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `low_shelf_slide` | Slide/transition time in beats |
| `low_shelf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `low_shelf_slide_curve` | Slide curve amount |
| `low_shelf_note` | (Parameter purpose not documented) |
| `low_shelf_note_slide` | Slide/transition time in beats |
| `low_shelf_note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `low_shelf_note_slide_curve` | Slide curve amount |
| `low_shelf_slope` | (Parameter purpose not documented) |
| `low_shelf_slope_slide` | Slide/transition time in beats |
| `low_shelf_slope_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `low_shelf_slope_slide_curve` | Slide curve amount |
| `low_slide` | Slide/transition time in beats |
| `low_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `low_slide_curve` | Slide curve amount |
| `low_note` | (Parameter purpose not documented) |
| `low_note_slide` | Slide/transition time in beats |
| `low_note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `low_note_slide_curve` | Slide curve amount |
| `low_q` | (Parameter purpose not documented) |
| `low_q_slide` | Slide/transition time in beats |
| `low_q_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `low_q_slide_curve` | Slide curve amount |
| `mid_slide` | Slide/transition time in beats |
| `mid_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mid_slide_curve` | Slide curve amount |
| `mid_note` | (Parameter purpose not documented) |
| `mid_note_slide` | Slide/transition time in beats |
| `mid_note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mid_note_slide_curve` | Slide curve amount |
| `mid_q` | (Parameter purpose not documented) |
| `mid_q_slide` | Slide/transition time in beats |
| `mid_q_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mid_q_slide_curve` | Slide curve amount |
| `high` | (Parameter purpose not documented) |
| `high_slide` | Slide/transition time in beats |
| `high_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `high_slide_curve` | Slide curve amount |
| `high_note_slide` | Slide/transition time in beats |
| `high_note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `high_note_slide_curve` | Slide curve amount |
| `high_q` | (Parameter purpose not documented) |
| `high_q_slide` | Slide/transition time in beats |
| `high_q_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `high_q_slide_curve` | Slide curve amount |
| `high_shelf` | (Parameter purpose not documented) |
| `high_shelf_slide` | Slide/transition time in beats |
| `high_shelf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `high_shelf_slide_curve` | Slide curve amount |
| `high_shelf_note` | (Parameter purpose not documented) |
| `high_shelf_note_slide` | Slide/transition time in beats |
| `high_shelf_note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `high_shelf_note_slide_curve` | Slide curve amount |
| `high_shelf_slope` | (Parameter purpose not documented) |
| `high_shelf_slope_slide` | Slide/transition time in beats |
| `high_shelf_slope_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `high_shelf_slope_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_flanger`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `phase_offset` | (Parameter purpose not documented) |
| `wave` | (Parameter purpose not documented) |
| `invert_wave` | (Parameter purpose not documented) |
| `stereo_invert_wave` | (Parameter purpose not documented) |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `delay` | (Parameter purpose not documented) |
| `delay_slide` | Slide/transition time in beats |
| `delay_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `delay_slide_curve` | Slide curve amount |
| `max_delay` | (Parameter purpose not documented) |
| `depth` | Effect depth/intensity |
| `depth_slide` | Slide/transition time in beats |
| `depth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `depth_slide_curve` | Slide curve amount |
| `feedback` | Feedback amount for effects |
| `feedback_slide` | Slide/transition time in beats |
| `feedback_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `feedback_slide_curve` | Slide curve amount |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `decay_slide` | Slide/transition time in beats |
| `decay_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `decay_slide_curve` | Slide curve amount |
| `invert_flange` | (Parameter purpose not documented) |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_gverb`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `room` | Room size for reverb effects (0.0 to 1.0) |
| `max_room` | (Parameter purpose not documented) |
| `release` | Release time in seconds (fade out time after note off) |
| `ref_level` | Amplitude level |
| `tail_level` | Amplitude level |
| `spread` | (Parameter purpose not documented) |
| `spread_slide` | Slide/transition time in beats |
| `spread_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `spread_slide_curve` | Slide curve amount |
| `damp` | High-frequency damping (0.0 to 1.0) |
| `damp_slide` | Slide/transition time in beats |
| `damp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `damp_slide_curve` | Slide curve amount |
| `pre_damp` | (Parameter purpose not documented) |
| `pre_damp_slide` | Slide/transition time in beats |
| `pre_damp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_damp_slide_curve` | Slide curve amount |
| `dry_slide` | Slide/transition time in beats |
| `dry_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `dry_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_hpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_ixi_techno`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `phase_offset` | (Parameter purpose not documented) |
| `cutoff_min` | (Parameter purpose not documented) |
| `cutoff_min_slide` | Slide/transition time in beats |
| `cutoff_min_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_min_slide_curve` | Slide curve amount |
| `cutoff_max` | (Parameter purpose not documented) |
| `cutoff_max_slide` | Slide/transition time in beats |
| `cutoff_max_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_max_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_krush`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `gain` | (Parameter purpose not documented) |
| `gain_slide` | Slide/transition time in beats |
| `gain_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `gain_slide_curve` | Slide curve amount |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_level`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_lpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_mono`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_nbpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `centre` | (Parameter purpose not documented) |
| `centre_slide` | Slide/transition time in beats |
| `centre_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `centre_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_nhpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_nlpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_normaliser`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `level` | (Parameter purpose not documented) |
| `level_slide` | Slide/transition time in beats |
| `level_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `level_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_nrbpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `centre` | (Parameter purpose not documented) |
| `centre_slide` | Slide/transition time in beats |
| `centre_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `centre_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_nrhpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_nrlpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_octaver`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `super_amp` | (Parameter purpose not documented) |
| `super_amp_slide` | Slide/transition time in beats |
| `super_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `super_amp_slide_curve` | Slide curve amount |
| `sub_amp` | (Parameter purpose not documented) |
| `sub_amp_slide` | Slide/transition time in beats |
| `sub_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `sub_amp_slide_curve` | Slide curve amount |
| `subsub_amp` | (Parameter purpose not documented) |
| `subsub_amp_slide` | Slide/transition time in beats |
| `subsub_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `subsub_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_pan`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_panslicer`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `pan_min` | (Parameter purpose not documented) |
| `pan_min_slide` | Slide/transition time in beats |
| `pan_min_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_min_slide_curve` | Slide curve amount |
| `pan_max` | (Parameter purpose not documented) |
| `pan_max_slide` | Slide/transition time in beats |
| `pan_max_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_max_slide_curve` | Slide curve amount |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `smooth` | (Parameter purpose not documented) |
| `smooth_slide` | Slide/transition time in beats |
| `smooth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_slide_curve` | Slide curve amount |
| `smooth_up` | (Parameter purpose not documented) |
| `smooth_up_slide` | Slide/transition time in beats |
| `smooth_up_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_up_slide_curve` | Slide curve amount |
| `smooth_down` | (Parameter purpose not documented) |
| `smooth_down_slide` | Slide/transition time in beats |
| `smooth_down_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_down_slide_curve` | Slide curve amount |
| `probability` | (Parameter purpose not documented) |
| `probability_slide` | Slide/transition time in beats |
| `probability_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `probability_slide_curve` | Slide curve amount |
| `prob_pos` | (Parameter purpose not documented) |
| `prob_pos_slide` | Slide/transition time in beats |
| `prob_pos_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `prob_pos_slide_curve` | Slide curve amount |
| `phase_offset` | (Parameter purpose not documented) |
| `wave` | (Parameter purpose not documented) |
| `invert_wave` | (Parameter purpose not documented) |
| `seed` | (Parameter purpose not documented) |
| `rand_buf` | Buffer number |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_ping_pong`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `max_phase` | (Parameter purpose not documented) |
| `feedback` | Feedback amount for effects |
| `feedback_slide` | Slide/transition time in beats |
| `feedback_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `feedback_slide_curve` | Slide curve amount |
| `pan_start` | (Parameter purpose not documented) |

### `sonic-pi-fx_pitch_shift`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `pitch` | (Parameter purpose not documented) |
| `pitch_slide` | Slide/transition time in beats |
| `pitch_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pitch_slide_curve` | Slide curve amount |
| `window_size` | (Parameter purpose not documented) |
| `window_size_slide` | Slide/transition time in beats |
| `window_size_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `window_size_slide_curve` | Slide curve amount |
| `pitch_dis` | (Parameter purpose not documented) |
| `pitch_dis_slide` | Slide/transition time in beats |
| `pitch_dis_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pitch_dis_slide_curve` | Slide curve amount |
| `time_dis` | Time in seconds |
| `time_dis_slide` | Slide/transition time in beats |
| `time_dis_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `time_dis_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_rbpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `centre` | (Parameter purpose not documented) |
| `centre_slide` | Slide/transition time in beats |
| `centre_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `centre_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_record`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `buffer` | Buffer number |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_reverb`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `room` | Room size for reverb effects (0.0 to 1.0) |
| `room_slide` | Slide/transition time in beats |
| `room_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `room_slide_curve` | Slide curve amount |
| `damp` | High-frequency damping (0.0 to 1.0) |
| `damp_slide` | Slide/transition time in beats |
| `damp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `damp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_rhpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_ring_mod`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `freq` | Frequency in Hz |
| `freq_slide` | Slide/transition time in beats |
| `freq_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `freq_slide_curve` | Slide curve amount |
| `mod_amp` | (Parameter purpose not documented) |
| `mod_amp_slide` | Slide/transition time in beats |
| `mod_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_rlpf`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_scope_out`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `scope_num` | (Parameter purpose not documented) |
| `max_frames` | (Parameter purpose not documented) |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_slicer`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `amp_min` | (Parameter purpose not documented) |
| `amp_min_slide` | Slide/transition time in beats |
| `amp_min_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_min_slide_curve` | Slide curve amount |
| `amp_max` | (Parameter purpose not documented) |
| `amp_max_slide` | Slide/transition time in beats |
| `amp_max_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_max_slide_curve` | Slide curve amount |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `smooth` | (Parameter purpose not documented) |
| `smooth_slide` | Slide/transition time in beats |
| `smooth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_slide_curve` | Slide curve amount |
| `smooth_up` | (Parameter purpose not documented) |
| `smooth_up_slide` | Slide/transition time in beats |
| `smooth_up_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_up_slide_curve` | Slide curve amount |
| `smooth_down` | (Parameter purpose not documented) |
| `smooth_down_slide` | Slide/transition time in beats |
| `smooth_down_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_down_slide_curve` | Slide curve amount |
| `probability` | (Parameter purpose not documented) |
| `probability_slide` | Slide/transition time in beats |
| `probability_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `probability_slide_curve` | Slide curve amount |
| `prob_pos` | (Parameter purpose not documented) |
| `prob_pos_slide` | Slide/transition time in beats |
| `prob_pos_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `prob_pos_slide_curve` | Slide curve amount |
| `phase_offset` | (Parameter purpose not documented) |
| `wave` | (Parameter purpose not documented) |
| `invert_wave` | (Parameter purpose not documented) |
| `seed` | (Parameter purpose not documented) |
| `rand_buf` | Buffer number |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_sound_out`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `output` | (Parameter purpose not documented) |
| `mode` | (Parameter purpose not documented) |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_sound_out_stereo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `output` | (Parameter purpose not documented) |
| `mode` | (Parameter purpose not documented) |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_tanh`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `krunch` | (Parameter purpose not documented) |
| `krunch_slide` | Slide/transition time in beats |
| `krunch_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `krunch_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_tremolo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `phase_offset` | (Parameter purpose not documented) |
| `wave` | (Parameter purpose not documented) |
| `invert_wave` | (Parameter purpose not documented) |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `depth` | Effect depth/intensity |
| `depth_slide` | Slide/transition time in beats |
| `depth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `depth_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_vowel`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `voice` | (Parameter purpose not documented) |
| `vowel_sound` | (Parameter purpose not documented) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_whammy`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `transpose` | (Parameter purpose not documented) |
| `transpose_slide` | Slide/transition time in beats |
| `transpose_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `transpose_slide_curve` | Slide curve amount |
| `deltime` | Time in seconds |
| `max_delay_time` | Time in seconds |
| `grainsize` | (Parameter purpose not documented) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

### `sonic-pi-fx_wobble`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `cutoff_min` | (Parameter purpose not documented) |
| `cutoff_min_slide` | Slide/transition time in beats |
| `cutoff_min_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_min_slide_curve` | Slide curve amount |
| `cutoff_max` | (Parameter purpose not documented) |
| `cutoff_max_slide` | Slide/transition time in beats |
| `cutoff_max_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_max_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `filter` | (Parameter purpose not documented) |
| `smooth` | (Parameter purpose not documented) |
| `smooth_slide` | Slide/transition time in beats |
| `smooth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_slide_curve` | Slide curve amount |
| `smooth_up` | (Parameter purpose not documented) |
| `smooth_up_slide` | Slide/transition time in beats |
| `smooth_up_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_up_slide_curve` | Slide curve amount |
| `smooth_down` | (Parameter purpose not documented) |
| `smooth_down_slide` | Slide/transition time in beats |
| `smooth_down_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `smooth_down_slide_curve` | Slide curve amount |
| `phase_offset` | (Parameter purpose not documented) |
| `wave` | (Parameter purpose not documented) |
| `invert_wave` | (Parameter purpose not documented) |
| `probability` | (Parameter purpose not documented) |
| `probability_slide` | Slide/transition time in beats |
| `probability_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `probability_slide_curve` | Slide curve amount |
| `prob_pos` | (Parameter purpose not documented) |
| `prob_pos_slide` | Slide/transition time in beats |
| `prob_pos_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `prob_pos_slide_curve` | Slide curve amount |
| `seed` | (Parameter purpose not documented) |
| `rand_buf` | Buffer number |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `pre_mix` | Pre-effect mix level |
| `pre_mix_slide` | Slide/transition time in beats |
| `pre_mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_mix_slide_curve` | Slide curve amount |
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |

## FFT Processing

### `fft_brickwall`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |
| `wipe` | (Parameter purpose not documented) |

### `fft_magfreeze`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |
| `freeze` | (Parameter purpose not documented) |

### `fft_passthrough`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |

### `fft_size_1024`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |

### `fft_size_4096`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |

### `fft_size_512`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |

### `fft_test_sine`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `freq` | Frequency in Hz |

## Mixing

### `sonic-pi-basic_mixer`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |
| `out_bus` | Output audio bus number |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |

### `sonic-pi-mixer`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |
| `pre_amp` | Pre-effect amplification |
| `pre_amp_slide` | Slide/transition time in beats |
| `pre_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pre_amp_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `hpf_bypass` | (Parameter purpose not documented) |
| `hpf_slide` | Slide/transition time in beats |
| `hpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `hpf_slide_curve` | Slide curve amount |
| `lpf_bypass` | (Parameter purpose not documented) |
| `lpf_slide` | Slide/transition time in beats |
| `lpf_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lpf_slide_curve` | Slide curve amount |
| `force_mono` | (Parameter purpose not documented) |
| `invert_stereo` | (Parameter purpose not documented) |
| `limiter_bypass` | (Parameter purpose not documented) |
| `leak_dc_bypass` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

## Modulated Synths

### `sonic-pi-mod_dsaw`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `mod_phase` | (Parameter purpose not documented) |
| `mod_phase_slide` | Slide/transition time in beats |
| `mod_phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_phase_slide_curve` | Slide curve amount |
| `mod_range` | (Parameter purpose not documented) |
| `mod_range_slide` | Slide/transition time in beats |
| `mod_range_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_range_slide_curve` | Slide curve amount |
| `mod_pulse_width` | (Parameter purpose not documented) |
| `mod_pulse_width_slide` | Slide/transition time in beats |
| `mod_pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_pulse_width_slide_curve` | Slide curve amount |
| `mod_phase_offset` | (Parameter purpose not documented) |
| `mod_wave` | (Parameter purpose not documented) |
| `mod_invert_wave` | (Parameter purpose not documented) |
| `detune` | Detuning amount in semitones |
| `detune_slide` | Slide/transition time in beats |
| `detune_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `detune_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-mod_fm`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `mod_phase` | (Parameter purpose not documented) |
| `mod_phase_slide` | Slide/transition time in beats |
| `mod_phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_phase_slide_curve` | Slide curve amount |
| `mod_range` | (Parameter purpose not documented) |
| `mod_range_slide` | Slide/transition time in beats |
| `mod_range_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_range_slide_curve` | Slide curve amount |
| `mod_pulse_width` | (Parameter purpose not documented) |
| `mod_pulse_width_slide` | Slide/transition time in beats |
| `mod_pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_pulse_width_slide_curve` | Slide curve amount |
| `mod_phase_offset` | (Parameter purpose not documented) |
| `mod_wave` | (Parameter purpose not documented) |
| `mod_invert_wave` | (Parameter purpose not documented) |
| `divisor` | (Parameter purpose not documented) |
| `divisor_slide` | Slide/transition time in beats |
| `divisor_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `divisor_slide_curve` | Slide curve amount |
| `depth` | Effect depth/intensity |
| `depth_slide` | Slide/transition time in beats |
| `depth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `depth_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-mod_pulse`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `mod_phase` | (Parameter purpose not documented) |
| `mod_phase_slide` | Slide/transition time in beats |
| `mod_phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_phase_slide_curve` | Slide curve amount |
| `mod_range` | (Parameter purpose not documented) |
| `mod_range_slide` | Slide/transition time in beats |
| `mod_range_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_range_slide_curve` | Slide curve amount |
| `mod_pulse_width` | (Parameter purpose not documented) |
| `mod_pulse_width_slide` | Slide/transition time in beats |
| `mod_pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_pulse_width_slide_curve` | Slide curve amount |
| `mod_phase_offset` | (Parameter purpose not documented) |
| `mod_wave` | (Parameter purpose not documented) |
| `mod_invert_wave` | (Parameter purpose not documented) |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-mod_saw`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `mod_phase` | (Parameter purpose not documented) |
| `mod_phase_slide` | Slide/transition time in beats |
| `mod_phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_phase_slide_curve` | Slide curve amount |
| `mod_range` | (Parameter purpose not documented) |
| `mod_range_slide` | Slide/transition time in beats |
| `mod_range_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_range_slide_curve` | Slide curve amount |
| `mod_pulse_width` | (Parameter purpose not documented) |
| `mod_pulse_width_slide` | Slide/transition time in beats |
| `mod_pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_pulse_width_slide_curve` | Slide curve amount |
| `mod_phase_offset` | (Parameter purpose not documented) |
| `mod_wave` | (Parameter purpose not documented) |
| `mod_invert_wave` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-mod_sine`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `mod_phase` | (Parameter purpose not documented) |
| `mod_phase_slide` | Slide/transition time in beats |
| `mod_phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_phase_slide_curve` | Slide curve amount |
| `mod_range` | (Parameter purpose not documented) |
| `mod_range_slide` | Slide/transition time in beats |
| `mod_range_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_range_slide_curve` | Slide curve amount |
| `mod_pulse_width` | (Parameter purpose not documented) |
| `mod_pulse_width_slide` | Slide/transition time in beats |
| `mod_pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_pulse_width_slide_curve` | Slide curve amount |
| `mod_phase_offset` | (Parameter purpose not documented) |
| `mod_wave` | (Parameter purpose not documented) |
| `mod_invert_wave` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-mod_tri`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `mod_phase` | (Parameter purpose not documented) |
| `mod_phase_slide` | Slide/transition time in beats |
| `mod_phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_phase_slide_curve` | Slide curve amount |
| `mod_range` | (Parameter purpose not documented) |
| `mod_range_slide` | Slide/transition time in beats |
| `mod_range_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_range_slide_curve` | Slide curve amount |
| `mod_pulse_width` | (Parameter purpose not documented) |
| `mod_pulse_width_slide` | Slide/transition time in beats |
| `mod_pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_pulse_width_slide_curve` | Slide curve amount |
| `mod_phase_offset` | (Parameter purpose not documented) |
| `mod_wave` | (Parameter purpose not documented) |
| `mod_invert_wave` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

## Synthesizers

### `sonic-pi-bass_foundation`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-bass_highend`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `drive` | (Parameter purpose not documented) |
| `drive_slide` | Slide/transition time in beats |
| `drive_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `drive_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-beep`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `out_bus` | Output audio bus number |

### `sonic-pi-blade`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `vibrato_rate` | (Parameter purpose not documented) |
| `vibrato_rate_slide` | Slide/transition time in beats |
| `vibrato_rate_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `vibrato_rate_slide_curve` | Slide curve amount |
| `vibrato_depth` | (Parameter purpose not documented) |
| `vibrato_depth_slide` | Slide/transition time in beats |
| `vibrato_depth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `vibrato_depth_slide_curve` | Slide curve amount |
| `vibrato_delay` | (Parameter purpose not documented) |
| `vibrato_onset` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-bnoise`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-chipbass`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `note_resolution` | (Parameter purpose not documented) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `out_bus` | Output audio bus number |

### `sonic-pi-chiplead`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `note_resolution` | (Parameter purpose not documented) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `width` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-chipnoise`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `freq_band` | Frequency in Hz |
| `freq_band_slide` | Slide/transition time in beats |
| `freq_band_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `freq_band_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-cnoise`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-dark_ambience`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `detune1` | (Parameter purpose not documented) |
| `detune1_slide` | Slide/transition time in beats |
| `detune1_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `detune1_slide_curve` | Slide curve amount |
| `detune2` | (Parameter purpose not documented) |
| `detune2_slide` | Slide/transition time in beats |
| `detune2_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `detune2_slide_curve` | Slide curve amount |
| `noise` | (Parameter purpose not documented) |
| `ring` | (Parameter purpose not documented) |
| `room` | Room size for reverb effects (0.0 to 1.0) |
| `reverb_time` | Time in seconds |
| `out_bus` | Output audio bus number |

### `sonic-pi-dpulse`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `detune` | Detuning amount in semitones |
| `detune_slide` | Slide/transition time in beats |
| `detune_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `detune_slide_curve` | Slide curve amount |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `dpulse_width` | (Parameter purpose not documented) |
| `dpulse_width_slide` | Slide/transition time in beats |
| `dpulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `dpulse_width_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-dsaw`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `detune` | Detuning amount in semitones |
| `detune_slide` | Slide/transition time in beats |
| `detune_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `detune_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-dtri`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `detune` | Detuning amount in semitones |
| `detune_slide` | Slide/transition time in beats |
| `detune_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `detune_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-dull_bell`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `out_bus` | Output audio bus number |

### `sonic-pi-fm`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `divisor` | (Parameter purpose not documented) |
| `divisor_slide` | Slide/transition time in beats |
| `divisor_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `divisor_slide_curve` | Slide curve amount |
| `depth` | Effect depth/intensity |
| `depth_slide` | Slide/transition time in beats |
| `depth_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `depth_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-gabberkick`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `slope_start` | (Parameter purpose not documented) |
| `slope_length1` | (Parameter purpose not documented) |
| `slope_intermediate` | (Parameter purpose not documented) |
| `slope_length2` | (Parameter purpose not documented) |
| `boost` | (Parameter purpose not documented) |
| `boost_slide` | Slide/transition time in beats |
| `boost_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `boost_slide_curve` | Slide curve amount |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-gnoise`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-growl`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `out_bus` | Output audio bus number |
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |

### `sonic-pi-hollow`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `noise` | (Parameter purpose not documented) |
| `norm` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-hoover`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `pre_amp` | Pre-effect amplification |
| `out_bus` | Output audio bus number |

### `sonic-pi-kalimba`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `clickiness` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-live_audio`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `input` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-live_audio_mono`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `input` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-live_audio_stereo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `input` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-noise`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-organ_tonewheel`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `bass` | (Parameter purpose not documented) |
| `bass_slide` | Slide/transition time in beats |
| `bass_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `bass_slide_curve` | Slide curve amount |
| `quint` | (Parameter purpose not documented) |
| `quint_slide` | Slide/transition time in beats |
| `quint_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `quint_slide_curve` | Slide curve amount |
| `fundamental` | (Parameter purpose not documented) |
| `fundamental_slide` | Slide/transition time in beats |
| `fundamental_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `fundamental_slide_curve` | Slide curve amount |
| `oct_slide` | Slide/transition time in beats |
| `oct_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `oct_slide_curve` | Slide curve amount |
| `nazard` | (Parameter purpose not documented) |
| `nazard_slide` | Slide/transition time in beats |
| `nazard_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `nazard_slide_curve` | Slide curve amount |
| `blockflute` | (Parameter purpose not documented) |
| `blockflute_slide` | Slide/transition time in beats |
| `blockflute_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `blockflute_slide_curve` | Slide curve amount |
| `tierce` | (Parameter purpose not documented) |
| `tierce_slide` | Slide/transition time in beats |
| `tierce_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `tierce_slide_curve` | Slide curve amount |
| `larigot` | (Parameter purpose not documented) |
| `larigot_slide` | Slide/transition time in beats |
| `larigot_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `larigot_slide_curve` | Slide curve amount |
| `sifflute` | (Parameter purpose not documented) |
| `sifflute_slide` | Slide/transition time in beats |
| `sifflute_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `sifflute_slide_curve` | Slide curve amount |
| `rs_freq` | Frequency in Hz |
| `rs_freq_slide` | Slide/transition time in beats |
| `rs_freq_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `rs_freq_slide_curve` | Slide curve amount |
| `rs_freq_var` | Frequency in Hz |
| `rs_pitch_depth` | (Parameter purpose not documented) |
| `rs_delay` | (Parameter purpose not documented) |
| `rs_onset` | (Parameter purpose not documented) |
| `rs_pan_depth` | (Parameter purpose not documented) |
| `rs_amplitude_depth` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-piano`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `hard` | (Parameter purpose not documented) |
| `velcurve` | (Parameter purpose not documented) |
| `stereo_width` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-pluck`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `noise_amp` | (Parameter purpose not documented) |
| `max_delay_time` | Time in seconds |
| `pluck_decay` | (Parameter purpose not documented) |
| `coef` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-pnoise`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-pretty_bell`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `out_bus` | Output audio bus number |

### `sonic-pi-prophet`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-pulse`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-rhodey`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `lfo_width` | (Parameter purpose not documented) |
| `lfo_width_slide` | Slide/transition time in beats |
| `lfo_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lfo_width_slide_curve` | Slide curve amount |
| `lfo_rate` | (Parameter purpose not documented) |
| `lfo_rate_slide` | Slide/transition time in beats |
| `lfo_rate_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lfo_rate_slide_curve` | Slide curve amount |
| `mod_index` | (Parameter purpose not documented) |
| `mod_index_slide` | Slide/transition time in beats |
| `mod_index_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mod_index_slide_curve` | Slide curve amount |
| `mix_slide` | Slide/transition time in beats |
| `mix_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `mix_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-rodeo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `gate` | (Parameter purpose not documented) |
| `use_chorus` | (Parameter purpose not documented) |
| `use_compressor` | (Parameter purpose not documented) |
| `amp_scale` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-saw`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-scope`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `scope_num` | (Parameter purpose not documented) |
| `max_frames` | (Parameter purpose not documented) |

### `sonic-pi-server-info`

*No parameters found or parameters not extractable.*

### `sonic-pi-sound_in`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `input` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-sound_in_stereo`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `input` | (Parameter purpose not documented) |
| `out_bus` | Output audio bus number |

### `sonic-pi-square`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-subpulse`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `sub_amp` | (Parameter purpose not documented) |
| `sub_amp_slide` | Slide/transition time in beats |
| `sub_amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `sub_amp_slide_curve` | Slide curve amount |
| `sub_detune` | (Parameter purpose not documented) |
| `sub_detune_slide` | Slide/transition time in beats |
| `sub_detune_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `sub_detune_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-supersaw`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-tb303`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `sustain` | Sustain level (amplitude during held portion) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `cutoff_attack` | (Parameter purpose not documented) |
| `cutoff_sustain` | (Parameter purpose not documented) |
| `cutoff_decay` | (Parameter purpose not documented) |
| `cutoff_release` | (Parameter purpose not documented) |
| `cutoff_min` | (Parameter purpose not documented) |
| `cutoff_min_slide` | Slide/transition time in beats |
| `cutoff_min_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_min_slide_curve` | Slide curve amount |
| `cutoff_attack_level` | Amplitude level |
| `cutoff_decay_level` | Amplitude level |
| `cutoff_sustain_level` | Amplitude level |
| `cutoff_env_curve` | (Parameter purpose not documented) |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `wave` | (Parameter purpose not documented) |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-tech_saws`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-tri`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

### `sonic-pi-winwood_lead`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `lfo_width` | (Parameter purpose not documented) |
| `lfo_width_slide` | Slide/transition time in beats |
| `lfo_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lfo_width_slide_curve` | Slide curve amount |
| `lfo_rate` | (Parameter purpose not documented) |
| `lfo_rate_slide` | Slide/transition time in beats |
| `lfo_rate_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `lfo_rate_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `ramp_ratio` | (Parameter purpose not documented) |
| `ramp_length` | (Parameter purpose not documented) |
| `seed` | (Parameter purpose not documented) |
| `rand_buf` | Buffer number |
| `out_bus` | Output audio bus number |

### `sonic-pi-zawa`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `note` | MIDI note number (0-127, where 60 = Middle C) |
| `note_slide` | Slide/transition time in beats |
| `note_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `note_slide_curve` | Slide curve amount |
| `amp_slide` | Slide/transition time in beats |
| `amp_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `amp_slide_curve` | Slide curve amount |
| `pan_slide` | Slide/transition time in beats |
| `pan_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pan_slide_curve` | Slide curve amount |
| `attack` | Attack time in seconds (time to reach peak amplitude) |
| `decay` | Decay time in seconds (time to fall to sustain level) |
| `sustain` | Sustain level (amplitude during held portion) |
| `release` | Release time in seconds (fade out time after note off) |
| `attack_level` | Peak amplitude level during attack phase |
| `decay_level` | Amplitude level at end of decay phase |
| `sustain_level` | Amplitude level during sustain phase |
| `env_curve` | Envelope curve shape |
| `cutoff` | Filter cutoff frequency (MIDI note number or Hz) |
| `cutoff_slide` | Slide/transition time in beats |
| `cutoff_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `cutoff_slide_curve` | Slide curve amount |
| `res_slide` | Slide/transition time in beats |
| `res_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `res_slide_curve` | Slide curve amount |
| `phase` | Phase offset (0.0 to 1.0) |
| `phase_slide` | Slide/transition time in beats |
| `phase_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `phase_slide_curve` | Slide curve amount |
| `phase_offset` | (Parameter purpose not documented) |
| `wave` | (Parameter purpose not documented) |
| `disable_wave` | (Parameter purpose not documented) |
| `invert_wave` | (Parameter purpose not documented) |
| `pulse_width` | Pulse width for pulse waves (0.0 to 1.0) |
| `pulse_width_slide` | Slide/transition time in beats |
| `pulse_width_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `pulse_width_slide_curve` | Slide curve amount |
| `range` | (Parameter purpose not documented) |
| `range_slide` | Slide/transition time in beats |
| `range_slide_shape` | Slide curve shape (1=linear, 3=sine, etc.) |
| `range_slide_curve` | Slide curve amount |
| `out_bus` | Output audio bus number |

## Utility

### `simple_passthrough`

**Parameters:**
| Parameter | Description |
|-----------|-------------|
| `in_bus` | Input audio bus number |

---

## Common Parameter Patterns

Many synths follow similar parameter naming conventions:

### Slide Parameters
Parameters ending in `_slide` control the transition time for parameter changes:
- `<param>_slide`: Time in beats to slide from current to new value
- `<param>_slide_shape`: Curve shape (1=linear, 3=sine, etc.)
- `<param>_slide_curve`: Additional curve control

### Envelope Parameters
Standard ADSR envelope controls:
- `attack`: Time to reach peak
- `decay`: Time to fall to sustain
- `sustain`: Held level
- `release`: Fade out time
- `*_level`: Amplitude at each envelope stage

### Audio Routing
- `in_bus`: Input audio bus (for effects/processing)
- `out_bus`: Output audio bus (default is usually 0)

---

## Notes

- Parameters are extracted from binary `.scsyndef` files using string analysis
- Default values are not stored in the synth definition files
- Refer to Sonic Pi documentation for default values and more detailed descriptions
- Not all parameters may be documented - some internal parameters may be listed

