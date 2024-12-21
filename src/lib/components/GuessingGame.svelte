<script lang="ts">
	import SoundControl from '$lib/components/SoundControl.svelte';
	import type { KlangQuizInstrument } from '$lib/types/types';
	import MidiBoardGrid from '$lib/components/MidiBoardGrid.svelte';
	import MusicControl from '$lib/components/MusicControl.svelte';
	import GIF from '$lib/components/GIF.svelte';
	import { onMount } from 'svelte';
	import { getKlangQuizInstruments, selectInstrumentToBeFound } from '$lib/utils/helperfunctions';
	import { klangQuizLevels } from '$lib/data/klangQuizLevels';
	import { base } from '$app/paths';

	let {
		difficulty,
		handleNextRound,
		GIFButtonTextSuccess,
		GIFButtonTextFailure,
		volume = $bindable()
	}: {
		difficulty: number;
		handleNextRound: (roundScore: number) => void;
		GIFButtonTextSuccess: string;
		GIFButtonTextFailure: string;
		volume: number;
	} = $props();

	let trackPaused = $state(true);
	let soundEffectPaused = $state(true);
	let roundEnded = $state(false);
	let roundWon = $state(false);

	let time = $state(0);
	let timeRunning = $state(true);
	let tries = $state(0);
	let repeats = $state(0);

	let usedInstruments = $state<KlangQuizInstrument[]>();
	let correctInstrument = $state<KlangQuizInstrument>();
	onMount(() => {
		usedInstruments = getKlangQuizInstruments(
			klangQuizLevels[difficulty - 1].instruments,
			klangQuizLevels[difficulty - 1].sameCategory
		);
		correctInstrument = selectInstrumentToBeFound(usedInstruments);

		trackPaused = false;
		repeats++;
	});

	let correctInstrumentIndex = $derived(correctInstrument?.index);
	let n_instruments = $derived(usedInstruments?.length);
	const activeTileList: boolean[] = $derived(Array(n_instruments).fill(false));
	const pauseTileList: boolean[] = $derived(Array(n_instruments).fill(true));
	let trackSource = $derived(base + '/audios/' + correctInstrument?.audio);

	function handleInstrumentButtonClick(end_of_song: boolean, index: number): void {
		timeRunning = false;
		trackPaused = true;
		roundWon = index === correctInstrumentIndex;
		roundEnded = true;
		soundEffectPaused = false;
	}

	function handleGIFButtonClick(): void {
		const roundScore = roundWon ? 1000 : 0; // TODO: Implement score calculate function
		handleNextRound(roundScore);
		roundEnded = false;
	}

	function start() {
		setInterval(() => {
			if (timeRunning) {
				time++;
			}
		}, 1000);
	}

	start();
</script>

{#if usedInstruments}
	<div
		class="[rotate-y-20deg] flex size-full justify-evenly rounded-2xl border-x-[10px] border-b-[20px] border-t-[10px] border-b-gray-600 border-l-gray-200 border-r-gray-400 border-t-gray-400 bg-[#d1d5db] p-3 shadow-2xl lg:p-10"
	>
		<div class="basis-2/12">
			<MusicControl {time} {trackSource} {volume} bind:trackPaused {tries} {repeats} />
		</div>
		<div class="basis-8/12">
			<MidiBoardGrid
				{volume}
				{activeTileList}
				{pauseTileList}
				useTileSounds={false}
				instruments={usedInstruments}
				onmouseup={handleInstrumentButtonClick}
			/>
		</div>
		<div class="basis-1/12">
			<SoundControl bind:volume />
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
{/if}
