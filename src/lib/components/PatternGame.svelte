<script lang="ts">
	import { onMount } from 'svelte';
	import * as midiManager from 'midi-file';
	import { base } from '$app/paths';
	import Pattern from '$lib/components/Pattern.svelte';
	import { pattern_list } from '$lib/data/pattern';
	import { getRandomIndex, getRandomSubset } from '$lib/utils/helperfunctions';
	import type { pattern_type } from '$lib/types/types';
	import MusicControl from '$lib/components/MusicControl.svelte';
	import GIF from '$lib/components/GIF.svelte';
	import Button3d from './Button3d.svelte';
	import ResetButton from './ResetButton.svelte';

	let {
		difficulty,
		handleNextRound,
		GIFButtonTextSuccess,
		GIFButtonTextFailure,
		volume
	}: {
		difficulty: number;
		handleNextRound: (roundScore: number) => void;
		GIFButtonTextSuccess: string;
		GIFButtonTextFailure: string;
		volume: number;
	} = $props();

	const allPatterns: Array<{ pattern: boolean[]; selected: boolean; index: number }> = $state([]);
	let correctIndex: number = $state(0);
	let selectedIndex: number = $state(-1);
	let loaded: boolean = $state(false);
	let soundPath: string = $state('4_Rock 2.wav');
	let roundEnded: boolean = $state(false);
	let trackPaused = $state(true);
	let soundEffectPaused: boolean = $state(false);
	let roundWon: boolean = $state(false);

	let time: number = $state(0);
	let timeRunning: boolean = $state(true);
	let repeats: number = $state(0);
	let maxPatternLength: number = 0;

	const loadMidiFile = async (midi_path: string, index: number) => {
		const response = await fetch(base + '/midis/' + midi_path);
		const arrayBuffer = await response.arrayBuffer();
		const uintArr = new Uint8Array(arrayBuffer);
		const parsed = midiManager.parseMidi(uintArr);

		const events: { [key: number]: number[] } = {};
		let patterns: boolean[] = [];
		let timeDelta: number = 0;
		let instrumentCount: number = 0;

		// parse midi-events and convert to piano-roll style
		for (const event of parsed.tracks[0]) {
			timeDelta += event.deltaTime;
			if (event.type === 'noteOn') {
				if (!(event.noteNumber in events)) {
					events[event.noteNumber] = [];
					instrumentCount++;
				}
				events[event.noteNumber].push(timeDelta);
			} else if (event.type === 'noteOff') {
				events[event.noteNumber].push(timeDelta);
			}
		}

		type typePianoroll = { start: number; len: number };

		let pianorolls: typePianoroll[][] = [];

		let len_min: number = 10000;
		let maxStop: number = 0;

		// get note start and length
		for (const [, value] of Object.entries(events)) {
			let pianoRoll: typePianoroll[] = [];
			for (let i: number = 0; i < value.length; i += 2) {
				let len: number = value[i + 1] - value[i];
				len_min = Math.min(len_min, len);
				maxStop = Math.max(maxStop, value[i + 1]);
				pianoRoll.push({ start: value[i], len: len });
			}

			pianorolls.push(pianoRoll);
		}

		// calculate the tick-rate of track
		let tickDelta: number = maxStop / 16;

		const possibleTicks: number[] = [6, 12, 24, 48, 96];

		if (!possibleTicks.includes(tickDelta)) {
			for (let i = 0; i < possibleTicks.length; i++) {
				if (tickDelta <= possibleTicks[i]) {
					tickDelta = possibleTicks[i];
					break;
				}
			}
		}

		//case if 3/4 notes are used
		if (len_min % tickDelta !== 0) {
			tickDelta = len_min;
		}

		// build array
		pianorolls = pianorolls.reverse();

		patterns = new Array(16 * instrumentCount).fill(false);

		for (let i: number = 0; i < pianorolls.length; i++) {
			for (let j = 0; j < pianorolls[i].length; j++) {
				let start_index: number = i * 16 + pianorolls[i][j].start / tickDelta;
				let end_index: number = start_index + pianorolls[i][j].len / tickDelta;

				for (let z = start_index; z < end_index; z++) {
					patterns[z] = true;
				}
			}
		}
		maxPatternLength = Math.max(maxPatternLength, patterns.length);
		allPatterns.push({ pattern: patterns, selected: false, index: index });
	};

	onMount(() => {
		let instrument: string;

		switch (difficulty) {
			case 1: {
				instrument = 'Piano';
				break;
			}
			case 2: {
				instrument = 'Bass';
				break;
			}
			default:
				instrument = 'Drum';
		}

		const selectedPatterns: pattern_type[] = getRandomSubset(
			pattern_list.filter((p) => p.instrument_type === instrument),
			3
		);

		correctIndex = getRandomIndex(selectedPatterns);

		soundPath = selectedPatterns[correctIndex].audio_src;

		for (const [index, p] of selectedPatterns.entries()) {
			loadMidiFile(p.midi_src, index);
		}

		loaded = true;
		start();

		trackPaused = false;
		repeats++;
	});

	function handlePatternClick(index: number) {
		if (selectedIndex == index) {
			return;
		} else {
			selectedIndex = index;
		}
		allPatterns.forEach((p) => {
			p.selected = p.index === index;
		});
	}

	function handleGuessButtonClick() {
		roundWon = correctIndex === selectedIndex;
		timeRunning = false;
		trackPaused = true;
		roundEnded = true;
		soundEffectPaused = false;
	}

	function handleGIFButtonClick(): void {
		const roundScore = calculateScore();
		handleNextRound(roundScore);
		roundEnded = false;
	}

	function calculateScore(): number {
		let score = 0;

		if (roundWon) {
			score += 10000;

			score += Math.max(-236 * time + 8000, (2000 * 0.9) ^ time);

			score += Math.max(-1234 * repeats + 5000, (2000 * 0.9) ^ repeats);
		}

		return score;
	}

	function start() {
		setInterval(() => {
			if (timeRunning) {
				time++;
			}
		}, 1000);
	}
</script>

<div
	class="flex size-full justify-between gap-4 rounded-2xl border-x-[7px] border-b-[14px] border-t-[7px] border-b-gray-600 border-l-gray-200 border-r-gray-400 border-t-gray-400 bg-[#d1d5db] p-3 shadow-2xl lg:border-x-[10px] lg:border-b-[20px] lg:border-t-[10px] lg:p-10"
>
	<div class="flex basis-9/12 flex-col items-center justify-evenly">
		{#if loaded}
			{#each allPatterns as p}
				<div class="h-full w-full basis-1/6">
					<Pattern
						pattern_array={p.pattern}
						bind:active={p.selected}
						onmouseup={() => handleGuessButtonClick()}
					/>
				</div>
			{/each}
		{/if}
	</div>
	<div class="flex basis-1/6 flex-col items-center">
		<div class="h-5/6">
			<MusicControl
				bind:trackPaused
				{repeats}
				{time}
				trackSource={base + '/audios/pattern_sounds/' + soundPath}
				{volume}
			/>
		</div>
	</div>
	{#if roundEnded}
		<div class="absolute left-0 top-0">
			<GIF
				bind:success={roundWon}
				onclick={handleGIFButtonClick}
				{GIFButtonTextSuccess}
				{GIFButtonTextFailure}
				bind:gifSoundPaused={soundEffectPaused}
				{volume}
			/>
		</div>
	{/if}
</div>
<div class="absolute left-6 top-0 m-3 mt-10">
	<ResetButton></ResetButton>
</div>
