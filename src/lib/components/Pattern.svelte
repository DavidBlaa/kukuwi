<script lang="ts">
	let {
		pattern_array,
		active = $bindable(false),
		onmouseup
	}: {
		pattern_array: boolean[];
		active: boolean;
		onmouseup: (...args: any[]) => any;
	} = $props();

	const color_array: string[] = $state([]);

	for (const [index, element] of pattern_array.entries()) {
		if (element) {
			if (index % 16 <= 3 || (8 <= index % 16 && index % 16 <= 11)) {
				color_array.push('bg-green-600');
			} else {
				color_array.push('bg-green-700');
			}
		} else {
			if (index % 16 <= 3 || (8 <= index % 16 && index % 16 <= 11)) {
				color_array.push('bg-gray-300');
			} else {
				color_array.push('bg-gray-400');
			}
		}
	}
</script>

<button
	class=" grid h-full w-full grid-cols-16 flex-row rounded border-4 border-gray-500 hover:ring-blue-500"
	{onmouseup}
>
	{#each color_array as c}
		<div class="h-full {c} border border-black"></div>
	{/each}
</button>
