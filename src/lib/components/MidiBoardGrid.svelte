<script lang="ts">
	import MidiButton from '$lib/components/MidiButton.svelte';
	import type { Instrument, KlangQuizInstrument } from '$lib/types/types';
	import { base } from '$app/paths';
	import ResetButton from './ResetButton.svelte';

	interface ComponentProps {
		volume: number;
		activeTileList: boolean[];
		pauseTileList: boolean[];
		useTileSounds: boolean;
		instruments: KlangQuizInstrument[] | Instrument[];
		onmouseup: (endOfSong: boolean, index: number) => void;
	}

	let {
		volume = $bindable(),
		activeTileList,
		pauseTileList,
		useTileSounds,
		instruments,
		onmouseup
	}: ComponentProps = $props();
</script>

<div
	class={`flex h-full flex-wrap self-center p-1 lg:p-3 2xl:h-[90%] ${instruments.length > 4 ? 'w-[72%] lg:w-full' : 'w-[44%] lg:w-[46%]'}`}
>
	{#each instruments as instrument, index}
		<div
			class={`flex max-h-[50%] flex-col items-center justify-center ${instruments.length > 4 ? 'basis-1/4 px-2 lg:px-5 2xl:px-8' : 'fhd:px-16 basis-1/2 px-4 lg:px-8'}`}
		>
			<MidiButton
				img_url={base + '/icons/instruments/' + instrument.image}
				is_active={activeTileList[index]}
				use_audio={useTileSounds}
				audio_url={useTileSounds
					? 'audio' in instrument
						? `${base}/audios/${instrument.audio}`
						: `${base}/audios/${instrument.audios[0]}`
					: ''}
				name={instrument.name}
				use_header={true}
				paused={pauseTileList[index]}
				onmouseup={() => onmouseup(false, index)}
				{volume}
			/>
		</div>
	{/each}
</div>

<div class="absolute left-6 top-0 m-3 mt-10">
	<ResetButton></ResetButton>
</div>
