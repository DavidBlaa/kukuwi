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
	import { patternLevels } from '$lib/data/patternLevels';
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
	let tries: number = $state(0);
	let repeats: number = $state(0);

	const loadMidiFile = async (midi_path: string, index: number) => {
		const response = await fetch(base + '/midis/' + midi_path);
		const arrayBuffer = await response.arrayBuffer();
		const uintArr = new Uint8Array(arrayBuffer);
		const parsed = midiManager.parseMidi(uintArr);
		const tickDelta: number = 24;
		const events: { [key: number]: number[] } = {};
		const patterns: boolean[] = [];
		let timeDelta: number = 0;

		for (const event of parsed.tracks[0]) {
			timeDelta += event.deltaTime;
			if (event.type === 'noteOn') {
				if (!(event.noteNumber in events)) {
					events[event.noteNumber] = [];
				}
				events[event.noteNumber].push(timeDelta);
			}
		}

		for (const [, value] of Object.entries(events)) {
			for (let t: number = 0; t < 16; t++) {
				patterns.push(value.includes(t * tickDelta));
			}
		}

		allPatterns.push({ pattern: patterns, selected: false, index: index });
	};

	onMount(() => {
		const instrument = 'drum'; // TODO: Choose dynamicly if other instruments are added
		const rows = patternLevels[difficulty - 1].rows;
		const selectedPatterns: pattern_type[] = getRandomSubset(
			pattern_list.filter((p) => p.instrument_type === instrument && p.n_instruments === rows),
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

<div class="flex h-full w-full flex-col items-center justify-center bg-blue-300">
	<div
		class="bg-s h-11/12 border-12 ml-2 flex w-11/12 flex-row justify-evenly rounded-2xl border-8 bg-gray-600 p-5"
	>
		<div class="flex basis-9/12 flex-col items-center justify-evenly">
			{#if loaded}
				{#each allPatterns as p}
					<div class="h-full w-full basis-1/6">
						<Pattern
							pattern_array={p.pattern}
							bind:active={p.selected}
							onmouseup={() => handlePatternClick(p.index)}
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
					{tries}
					{volume}
				/>
			</div>
			<Button3d
				style="mt-3 text-3xl"
				onmousedown={() => handleGuessButtonClick()}
				bgFront="bg-amber-500"
				bgBack="bg-amber-700"
			>
				<p class="px-6 py-3">Raten</p>
			</Button3d>
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
<div class="absolute left-3 top-0 m-2 mt-4">
	<ResetButton></ResetButton>
</div>
