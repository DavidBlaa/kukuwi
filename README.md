# Instrumente-Rate-Spiel

![KuKuWi](static/images/logo_name.png)

This project was developed for the "Kunst, Kultur und Wissenschaft" (KuKuWi) initiative by Klanggerüst e.V. Its goal is to make music an engaging experience and promote understanding of sounds, instruments, and musical patterns.

## Game Modes

The project currently offers the following game modes:

1. **Identify Instruments:**
   - Players listen to short audio samples and must identify the correct instrument.
2. **Match MIDI Patterns:**
   - A sound sample is played, and the player matches it to the corresponding MIDI pattern.
3. **Genre Music Memory:**
   - A memory game featuring different music genres.

The current version is available at https://davidblaa.github.io/kukuwi/.

The project is built using SvelteKit and can also be run locally.

```bash
npm run dev
```

## Adding More Audio Samples

### Identify Instruments

1. Place audio file(s) in [./static/audios/]().
2. Extend the JSON in [./scr/data/instruments.ts](src/lib/data/instruments.ts) as follows:

```javascript
{
    name: 'name of the instrument',
    category: 'category of the instrument',
    image: 'icon of the instrument',
    audios: [
        Audio_sample_1.mp3,
        Audio_sample_2.wav,
        ...
    ]
},
```

### Match Patterns

1. Place audio file(s) in [./static/audios/pattern-sounds/](#).
2. Place MIDI file(s) in [./static/audios/midis/](#).
3. Extend the JSON in [./scr/data/instruments.ts](src/lib/data/instruments.ts) as follows:

```javascript
{
    midi_src: 'midi_sample.mid',
    audio_src: 'audio_sample.wav',
    instrument_type: 'instrument category' from ["Drum", "Piano", "Bass"]
},
```

#### Notes on MIDI Files:

- More than 6 different tones are not recommended.
- Ideally, use four measures.
- Notes such as 3/4, 5/6, etc., may cause issues with MIDI parsing.

### Genre Memory

1. Place audio file(s) in [./static/audios/](#).
2. Extend the JSON in [./src/lib/data/memoryCards.ts](src/lib/data/memoryCards.ts) as follows:

```javascript
{
    genre: "genre name",
    audioPaths: ["audio_sample.mp3"]
},
```

## Admin Notes

- High scores are only stored locally.
- High score entries can be deleted by pressing the "o" key on the leaderboard page ("/Bestenliste").

## Known Bugs

- Display issues with SVG icons occur in the Firefox browser.
- Layout shifts may happen when using screen resolutions other than 1080p.

## License

This project is licensed under the **Apache License 2.0**. [LICENSE](./LICENSE).
