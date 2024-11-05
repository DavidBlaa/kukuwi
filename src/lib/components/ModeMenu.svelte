<script lang="ts">
    import { goto } from '$app/navigation';
	import type {Mode} from "$lib/types/types";
	import {mode_list} from "$lib/data/data";

	function handleNavigation() {
		goto(mode_list[active_tile]["link"]);
	}

	function handleTileClick(id: number) {
		description = mode_list[id]["description"];
		active_tile_list[active_tile] = false;
		active_tile = id;
		active_tile_list[active_tile] = true;

	}

	const button_color_passiv:string="bg-orange-300";
	const button_color_active:string="bg-orange-500";

	const active_tile_list: boolean[] = $state(Array(mode_list.length).fill(false));


	let description:string = $state(mode_list[0]["description"]);

	let active_tile:number = $state(0);

	active_tile_list[active_tile] = true;







</script>


<div class="flex flex-col justify-start w-screen h-screen bg-blue-300">
	<h1 class="text-center font-sans font-extrabold text-8xl text-black-500 outline-4 my-1"  style=" -webkit-text-fill-color: #F2AE2E;
  -webkit-text-stroke: 3px;">Wähle den Modus</h1>
	<div class="basis-1/2 flex justify-evenly py-20">
		{#each mode_list as m}
		<button  class="basis-1/5 text-white {active_tile_list[m['id']] ? button_color_active : button_color_passiv  } text-5xl font-bold border-4 border-black rounded-2xl shadow-1xl" onclick={()=>handleTileClick(m["id"])}>{m["name"]}</button>
		{/each}
	</div>
	<div class="flex justify-center basis-1/4 py-10">
		<div class="basis-9/12 bg-white rounded border-4 border-black">
			<p class="text-center px-10 py-10 text-2xl">{description}</p>
		</div>
	</div>
	<div class="basis-1/4 flex justify-items-stretch place-content-center py-3">
		<button class="bg-green-500 hover:bg-green-200 text-white text-4xl font-bold border-4 border-black rounded px-10 py-10" onclick={()=>handleNavigation()}>Starte Spiel</button>
	</div>
</div>



