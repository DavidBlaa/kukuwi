<script lang="ts">
	import { base } from '$app/paths';

	interface component_prop {
		isRotated: boolean;
		paused: boolean;
		onmouseup: (...args: any[]) => any;
		audioSource: string;
		finished: boolean;
	}

	let {
		isRotated,
		paused = $bindable(true),
		onmouseup,
		audioSource,
		finished
	}: component_prop = $props();
</script>

<div class="flex flex-col items-center justify-center justify-items-center">
	<button
		class="perspective-1000 flex h-[200px] w-[200px] cursor-pointer flex-col items-center justify-center"
		{onmouseup}
		disabled={finished}
	>
		<!-- 3D Container -->
		<div
			class={`transform-style-3d absolute h-full w-full transition-transform duration-500 ${
				isRotated ? 'rotate-y-180' : ''
			}`}
		>
			<!-- Front Side -->
			<div class="backface-hidden absolute h-full w-full rounded-l border-4 border-blue-900">
				<img
					alt="Front"
					class="h-full w-full object-cover shadow-lg"
					src={base + '/icons/Memory/200w/Front200.webp'}
				/>
			</div>

			<!-- Back Side -->
			<div
				class="backface-hidden rotate-y-180 absolute h-full w-full transform rounded-l border-4 {finished
					? 'border-gray-600'
					: 'border-green-700'}"
			>
				<img
					alt="Back"
					class="h-full w-full object-cover shadow-lg"
					src={finished
						? base + '/icons/Memory/200w/Back-Gray200.webp'
						: base + '/icons/Memory/200w/Back200.webp'}
				/>
			</div>
		</div>
		<audio bind:paused src={base + audioSource}></audio>
	</button>
</div>

<style>
	.perspective-1000 {
		perspective: 1000px;
	}

	.transform-style-3d {
		transform-style: preserve-3d;
	}

	.backface-hidden {
		backface-visibility: hidden;
	}

	.rotate-y-180 {
		transform: rotateY(180deg);
	}
</style>
