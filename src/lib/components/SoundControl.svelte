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

<div class="flex h-full w-8 flex-none flex-col items-center justify-end lg:w-10 2xl:w-24">
	<div
		class="mb-4 flex h-full w-4/6 flex-col-reverse justify-center rounded-2xl lg:mb-5 2xl:mb-7 2xl:w-1/3"
	>
		{#each soundLevelList as s}
			<div
				class="{s
					? 'bg-green-500'
					: 'bg-green-100'} h-full w-full border-2 border-gray-500 2xl:border-4"
			></div>
		{/each}
	</div>
	<Button3d
		bgFront="bg-amber-500"
		bgBack="bg-amber-700"
		onmouseup={() => {}}
		onclick={() => handleVolumeButtons(true)}
		style="rounded-full size-[2rem] lg:size-[2.7rem] lg:mb-2 2xl:size-[4.5rem] mb-2 2xl:mb-5"
		translateY="translate-y-[-0.25rem] 2xl:translate-y-[-0.375rem]"
		padding="relative size-[2rem] lg:size-[2.7rem] 2xl:size-[4.5rem] rounded-full"
	>
		<p
			class="absolute inset-x-0 bottom-[0.05rem] text-3xl font-bold text-white lg:bottom-[0.3rem] 2xl:bottom-2 2xl:text-7xl"
		>
			+
		</p>
	</Button3d>

	<Button3d
		bgFront="bg-amber-500"
		bgBack="bg-amber-700"
		onmouseup={() => {}}
		onclick={() => handleVolumeButtons(false)}
		style="rounded-full size-[2rem] lg:size-[2.7rem] lg:mb-2 2xl:size-[4.5rem] mb-2 2xl:mb-5"
		translateY="translate-y-[-0.25rem] 2xl:translate-y-[-0.375rem]"
		padding="relative size-[2rem] lg:size-[2.7rem] 2xl:size-[4.5rem] rounded-full"
	>
		<p
			class="absolute inset-x-0 bottom-[0.05rem] text-3xl font-bold text-white lg:bottom-[0.3rem] 2xl:bottom-2 2xl:text-7xl"
		>
			-
		</p>
	</Button3d>
</div>
