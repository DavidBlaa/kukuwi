<script lang="ts">
	import type { Highscore_type } from '$lib/types/types';
	import Crown from '$lib/components/icons/Crown.svelte';
	import { onMount } from 'svelte';

	let {
		data
	}: {

		data: Highscore_type[];
	} = $props();


	const data_out: { rank: number; name: string, points: number, highlight: boolean }[] = $state([]);

	onMount(() => {

		for (const [index, element] of data.entries()) {

			if (index < 10) {
				data_out.push({ rank: index + 1, name: element.name, points: element.points, highlight: element.highlight });
			}
			if (index > 10 && element.highlight) {

				data_out[9] = { rank: index + 1, name: element.name, points: element.points, highlight: element.highlight };
			}
		}


	});


</script>


<div class="h-fit w-full rounded-2xl border-2 border-gray-200 py-4 shadow-xl bg-kukuwi-blue overflow-auto">
	<h1 class="flex flex-row items-center justify-center text-center font-mono text-7xl font-extrabold text-white">
		Bestenliste
		<Crown></Crown>
	</h1>
	<table class="h-full w-full">
		<thead>
		<tr class="text-2xl uppercase text-white">
			<th class="px-4 py-6 underline">Rang</th>
			<th class="px-4 py-6 underline">Name</th>
			<th class="px-4 py-6 underline">Punkte</th>

		</tr>
		</thead>
		<tbody>
		{#each data_out as row}
			<tr class="text-1xl text-center text-white {row.highlight?'bg-green-500':''}">
				<td class="px-2 py-3">{row.rank}</td>
				<td class="px-2 py-3">{row.name}</td>
				<td class="px-2 py-3">{row.points}</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>

