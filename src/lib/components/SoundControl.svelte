<script lang="ts">
	import Button3d from './Button3d.svelte';

	interface ComponentProps {
		volume: number;
	}

	let { volume = $bindable() }: ComponentProps = $props();

	const soundLevelList: boolean[] = $state(Array(10).fill(false));

	let soundLevel: number = volume * 100;

	for (let i: number = 0; i < soundLevel / 10; i++) {
		soundLevelList[i] = true;
	}

	function handleVolumeButtons(increase: boolean) {
		if (increase) {
			if (soundLevel >= 100) {
				return;
			}
			soundLevel += 10;
			soundLevelList[soundLevel / 10 - 1] = true;
			volume = soundLevel / 100;
		} else {
			if (soundLevel <= 0) {
				return;
			}
			soundLevelList[soundLevel / 10 - 1] = false;
			soundLevel -= 10;
			volume = soundLevel / 100;
		}
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-end">
	<div class="mb-5 flex h-full w-4/6 flex-col-reverse justify-center rounded-2xl lg:w-1/3">
		{#each soundLevelList as s}
			<div
				class="{s
					? 'bg-green-500'
					: 'bg-green-100'} h-full w-full border-2 border-gray-500 lg:border-4"
			></div>
		{/each}
	</div>
	<Button3d
		bgFront="bg-amber-500"
		bgBack="bg-amber-700"
		onmouseup={() => {}}
		onclick={() => handleVolumeButtons(true)}
		style="rounded-full size-16 mb-3"
		padding="relative size-16 rounded-full"
	>
		<p class="absolute inset-x-0 bottom-2 text-6xl font-bold text-white">+</p>
	</Button3d>

	<Button3d
		bgFront="bg-amber-500"
		bgBack="bg-amber-700"
		onmouseup={() => {}}
		onclick={() => handleVolumeButtons(false)}
		style="rounded-full size-16 mb-3"
		padding="relative size-16 rounded-full"
	>
		<p class="absolute inset-x-0 bottom-2 text-6xl font-bold text-white">-</p>
	</Button3d>
</div>
