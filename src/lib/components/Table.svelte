<script lang="ts">
import type { Highscore_type } from '$lib/types/types';
import Crown from '$lib/components/Crown.svelte';

	let {
		data
	}: {

		data: ArrayLike<Highscore_type>;
	} = $props();




</script>


  <div class="h-fit w-full rounded-2xl border-2 border-gray-200 py-4 shadow-xl bg-kukuwi-blue overflow-auto">
		<h1 class="flex flex-row items-center justify-center text-center font-mono text-7xl font-extrabold text-white">Bestenliste
    <Crown></Crown>
    </h1>
		<table class="h-full w-full">
      <thead>
        <tr class="text-2xl uppercase text-white">

            <th class="px-4 py-6 underline">Name</th>
						<th class="px-4 py-6 underline">Punkte</th>

        </tr>
      </thead>
      <tbody>
        {#each data as row}
          <tr class="text-1xl text-center text-white {row.highlight?'bg-green-500':''}">
              <td class="px-2 py-3">{row.name}</td>
						<td class="px-2 py-3">{row.points}</td>
          </tr>
				{/each}
			</tbody>
    </table>
	</div>

