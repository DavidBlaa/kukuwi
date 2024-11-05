<script lang="ts">

    import "$lib/components/MidiBoard.svelte";
    import {instruments} from "$lib/data/data";
    import MidiBoard from "$lib/components/MidiBoard.svelte";

    let n_instruments:number = instruments.length;
    const active_tile_list: boolean[] = $state(Array(n_instruments).fill(false));
    const pause_tile_list: boolean[] = $state(Array(n_instruments).fill(true));
    function alt_handle_music_tile_click (end_of_song:boolean=false,index:number):void {

        console.log("hallo")
        active_tile_list[index]=!active_tile_list[index];

        if(!end_of_song) {
            pause_tile_list[index] = !pause_tile_list[index];
            console.log(pause_tile_list[index])
        }
    }


</script>

<MidiBoard
        instruments={instruments}
        active_tile_list = {active_tile_list}
        pause_tile_list={pause_tile_list}
        board_bg_color="bg-gray-300"
        onmouseup = {alt_handle_music_tile_click}
></MidiBoard>


