<script lang="ts">
	import Vinyl from '$lib/components/Vinyl.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { FaSolidPlay } from 'svelte-icons-pack/fa';
	import MidiBoardInformation from '$lib/components/MidiBoardInformation.svelte';
	import Button3d from './Button3d.svelte';

	let {
		trackSource,
		volume = 0.5,
		trackPaused = $bindable(true),
		time = 0,
		tries = 0,
		repeats = 0
	}: {
		trackSource: string;
		volume?: number;
		trackPaused: any;
		time: number;
		tries: number;
		repeats: number;
	} = $props();

	let trackDuration: number = $state(0);
	let trackCurrentTime: number = $state(0);

	function handlePlayButton(): void {
		trackCurrentTime = 0;
		trackPaused = false;
		repeats++;
	}

	function formatTrackTime(time: number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
</script>

<div
	class="fhd:w-72 wqhd:w-80 flex h-full w-24 flex-none flex-col items-center justify-around py-3 lg:w-28 lg:py-6 2xl:w-40"
>
	<div class="fhd:size-52 wqhd:size-72 size-16 lg:size-28 2xl:size-40">
		<Vinyl spinning={!trackPaused}></Vinyl>
	</div>
	<div class="flex flex-row items-stretch justify-evenly">
		<span
			class="fhd:text-3xl fhd:px-4 fhd:py-2 fhd:border-4 ml-1 h-fit w-full border-2 border-gray-500 bg-green-500 px-1 py-[0.125rem] text-xs font-bold text-white lg:text-sm 2xl:text-xl"
		>
			{formatTrackTime(trackCurrentTime)}
		</span>
		<span
			class="fhd:text-3xl fhd:px-4 fhd:py-2 fhd:border-4 h-fit w-full border-2 border-gray-500 bg-green-500 px-1 py-[0.125rem] text-xs font-bold text-white lg:text-sm 2xl:text-xl"
		>
			{formatTrackTime(trackDuration)}
		</span>
	</div>

	<div>
		<MidiBoardInformation bind:time bind:repeats bind:tries />
	</div>

	<Button3d
		bgFront="bg-kukuwi-blue"
		bgBack="bg-kukuwi-blue-dark"
		padding="px-4 wqhd:px-8 py-2"
		style="mt-3"
		translateY="translate-y-[-0.3rem] 2xl:translate-y-[-0.5rem]"
		onclick={() => handlePlayButton()}
	>
		<Icon
			src={FaSolidPlay}
			color="white"
			className="fhd:w-32 fhd:h-28 2xl:w-24 2xl:h-14 lg:w-16 lg:h-10 w-8 h-5"
		/>
	</Button3d>

	<audio
		src={trackSource}
		bind:currentTime={trackCurrentTime}
		bind:duration={trackDuration}
		bind:paused={trackPaused}
		{volume}
	></audio>
</div>
