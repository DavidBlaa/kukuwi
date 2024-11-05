<script lang="ts">

    import "$lib/components/MidiBoard.svelte";
    import {instruments,level_guessing_list} from "$lib/data/data";
    import MidiBoard from "$lib/components/MidiBoard.svelte";
    import {base} from '$app/paths';
    import type {instrumentCardType} from "$lib/types/types";


    let level = 0;
    let used_instruments:instrumentCardType[] = [];
    let correct_index:number;
    let victory:boolean = $state(false);



    for (let i = 0; i < instruments.length; i++) {

            if(instruments[i].id in level_guessing_list[level].instrument_ids) {
                used_instruments.push(instruments[i]);

                if (instruments[i].id ==  level_guessing_list[level].correct_id){
                   correct_index = i

                }

            }
    }



    let n_instruments:number = used_instruments.length;
    const active_tile_list: boolean[] = $state(Array(n_instruments).fill(false));
    const pause_tile_list: boolean[] = $state(Array(n_instruments).fill(true));
    let track_source = base+"/audios/"+level_guessing_list[level].track_path;

    function handle_music_tile_click (end_of_song:boolean=false,index:number):void {

        active_tile_list[index]=!active_tile_list[index];


        if(index==correct_index && !end_of_song){

            victory = true;


        }

    }


</script>

<MidiBoard
        instruments={used_instruments}
        active_tile_list = {active_tile_list}
        pause_tile_list={pause_tile_list}
        board_bg_color="bg-gray-300"
        onmouseup = {handle_music_tile_click}
        use_control_panel = {true}
        use_tile_sounds = {false}

        track_source = {track_source}
></MidiBoard>
{#if victory}

<h1>Gewonnen</h1>

{/if}
