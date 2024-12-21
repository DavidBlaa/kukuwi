<script lang="ts">
	import { getRandomGIF } from '$lib/utils/helperfunctions';
	import { base } from '$app/paths';
	import Button3d from './Button3d.svelte';

	interface ComponentProps {
		success: boolean;
		onclick: () => void;
		GIFButtonTextSuccess: string;
		GIFButtonTextFailure: string;
		gifSoundPaused?: boolean;
		volume: number;
	}

	let {
		success = $bindable(true),
		onclick,
		GIFButtonTextSuccess,
		GIFButtonTextFailure,
		gifSoundPaused = $bindable(true),
		volume
	}: ComponentProps = $props();

	let gif = getRandomGIF(success);

	let sound = success
		? base + '/audios/gif-sounds/success-fanfare-trumpets-6185.mp3'
		: base + '/audios/gif-sounds/trumpet-fail-242645.mp3';
</script>

<div class="fixed bottom-0 top-0 h-screen w-screen flex-col items-center justify-start">
	<div class="fixed bottom-0 top-0 z-50 flex h-full w-full flex-col items-center justify-start p-7">
		<img
			class="h-5/6 {success ? 'border-green-800' : 'border-red-600'} border-8 shadow-2xl"
			src={base + '/gifs/' + gif}
			alt={success ? 'Gewonnen!!!' : 'Verloren :('}
		/>

		<Button3d
			{onclick}
			bgFront="bg-amber-500"
			bgBack="bg-amber-700"
			onmouseup={() => {}}
			style="mt-3 flex flex-col justify-center text-3xl font-extrabold"
			padding="px-7 py-2"
		>
			{success ? 'RICHTIG :)' : 'FALSCH :('}
			<br />
			{success ? GIFButtonTextSuccess : GIFButtonTextFailure}
		</Button3d>
		<audio src={sound} bind:paused={gifSoundPaused} {volume}></audio>
	</div>
	<div
		class="z-15 fixed bottom-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-80"
	></div>
</div>
