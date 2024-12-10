<script lang="ts">
	import { onMount } from 'svelte';
	import * as midiManager from 'midi-file';
	import { base } from '$app/paths';
	import Pattern from '$lib/components/Pattern.svelte';
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { pattern_list } from '$lib/data/pattern';
	import { getRandomIndex, getRandomSubset } from '$lib/utils/helperfunctions';
	import type { pattern_type } from '$lib/types/types';
	import MusicControl from '$lib/components/MusicControl.svelte';
	import GIF from '$lib/components/GIF.svelte';
	import { goto } from '$app/navigation';


	const all_patterns: Array<{ pattern: boolean[]; selected: boolean; index: number }> = $state([]);
	let correct_index: number = $state(0);
	let selected_index: number = $state(-1);
	let loaded: boolean = $state(false);
	let sound_path: string = $state('4_Rock 2.wav');
	let game_ended: boolean = $state(false);
	let track_paused = $state(false);
	let sound_effect_paused: boolean = $state(false);
	let game_won: boolean = $state(false);

	let time: number = $state(0);
	let time_running: boolean = $state(true);
	let tries: number = $state(0);
	let repeats: number = $state(0);
	let sound_level_float: number = $state(0.4);


	const loadMidiFile = async (midi_path: string, index: number) => {


		const response = await fetch(base + '/midis/' + midi_path);
		const arrayBuffer = await response.arrayBuffer();
		const uintArr = new Uint8Array(arrayBuffer);
		console.log(uintArr);
		const parsed = midiManager.parseMidi(uintArr);
		const tick_delta: number = 24;
		const events: { [key: number]: number[] } = {};
		const patterns: boolean[] = [];
		let time_delta: number = 0;


		for (const event of parsed.tracks[0]) {
			time_delta += event.deltaTime;
			if (event.type == 'noteOn') {
				if (!(event.noteNumber in events)) {
					events[event.noteNumber] = [];
				}
				events[event.noteNumber].push(time_delta);
			}
		}

		for (const [, value] of Object.entries(events)) {
			for (let t: number = 0; t < 16; t++) {
				patterns.push(value.includes(t * tick_delta));
			}
		}

		all_patterns.push({ pattern: patterns, selected: false, index: index });


	};

	onMount(() => {


		const instrument: string | null = $page.url.searchParams.get('instrument');
		if (instrument == null || !['drum'].includes(instrument)) {

			error(404, { message: 'Instrument not found' });

		}
		let rows_str: string | null = $page.url.searchParams.get('rows');
		if (instrument == null || !['2', '3', '4'].includes(rows_str)) {

			error(404, { message: 'rows amount incorrect' });

		}


		const selected_patterns: pattern_type[] = getRandomSubset(pattern_list.filter(p =>
			p.instrument_type == instrument &&
			p.n_instruments == Number(rows_str)
		), 3);

		correct_index = getRandomIndex(selected_patterns);

		sound_path = selected_patterns[correct_index].audio_src;

		for (const [index, p] of selected_patterns.entries()) {

			loadMidiFile(p.midi_src, index);
		}

		loaded = true;
		start();
	});


	function handlePatternClick(index: number) {


		if (selected_index == index) {
			return;
		} else {

			selected_index = index;
		}
		all_patterns.forEach(p => {

			p.selected = p.index == index;
		});


	}

	function handleGuessButtonClick() {

		game_won = correct_index == selected_index;
		time_running = false;
		track_paused = true;
		game_ended = true;
		sound_effect_paused = false;


	}


	function handle_next_repeat_button(): void {
		if (game_won) {
			goto(base + '/');
		} else {
			tries++;
			time_running = true;
			game_ended = false;
		}
	}

	function start() {
		setInterval(() => {
			if (time_running) {
				time++;
			}
		}, 1000);
	}


</script>
<div class="flex h-full w-full flex-col items-center justify-center bg-blue-300">
	<div class="ml-2 flex w-11/12 flex-row justify-evenly rounded-2xl border-8 bg-gray-600 p-5 bg-s h-11/12 border-12">
		<div class="flex basis-9/12 flex-col items-center justify-evenly">
			{#if loaded}
				{#each all_patterns as p}
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
					bind:track_paused
					{repeats}
					{time}
					track_source={base+"/audios/pattern_sounds/"+sound_path}
					{tries}

				/>
			</div>
			<button class="
            flex
            flex-col
            mt-3
						h-fit
						w-10/12
            justify-center
            bg-amber-500
            rounded-lg
            cursor-pointer
            select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_8px_0_0_#cf860a,0_13px_0_0_#1b70f841]
            border-[1px]
            p-3
            text-3xl
        "
							onmousedown={() => handleGuessButtonClick()}
			>Raten
			</button>
		</div>
	</div>
	{#if game_ended}
		<div class="absolute top-0 left-0">
			<GIF
				bind:success={game_won}
				onclick={handle_next_repeat_button}
				bind:gif_sound_pause={sound_effect_paused}
				bind:volume={sound_level_float}
			/>
		</div>
	{/if}
</div>