<script lang="ts">

	import { highscore_table } from '$lib/stores/HighscoreStore.ts';
	import type { Highscore_type } from '$lib/types/types';
	import Table from '$lib/components/Table.svelte';
	import Button3d from '$lib/components/Button3d.svelte';
	import {FaSolidArrowLeft} from 'svelte-icons-pack/fa';
	import { Icon } from 'svelte-icons-pack';
	import { goto } from '$app/navigation';
	import {base} from '$app/paths';

	let table: Highscore_type[] = $highscore_table;
	table.sort((a: Highscore_type, b: Highscore_type) => (a.points > b.points) ? -1 : 1);

</script>

<main class="flex flex-col justify-evenly items-center bg-[#FBF6EC] h-screen">

	<div class="mt-3 flex w-1/2">
		<Table
			data={table}
		/>
	</div>
	<div class="flex flex-col">
	<Button3d bgBack = {"bg-kukuwi-yellow-dark"} bgFront = {"bg-kukuwi-yellow"} padding={"p-5"} onmouseup={() => goto(base+"/")}>

		<Icon src={FaSolidArrowLeft} color={"white"}/>

	</Button3d>
	</div>
</main>