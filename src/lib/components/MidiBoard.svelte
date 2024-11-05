
<script lang="ts">

    import MidiButton from "$lib/components/MidiButton.svelte";
    import {base} from '$app/paths';
    import type {instrumentCardType} from "$lib/types/types";
    import Vinyl from "$lib/components/Vinyl.svelte";


    
    

    
    let {
        instruments,
        active_tile_list,
        pause_tile_list,
        use_sound_level = true,
        onmouseup,
        board_bg_color = "bg-[#252525]",
        use_tile_sounds = true,
        use_control_panel= false,
        track_source,
        track_paused = true,

    }:{
        instruments:Array<instrumentCardType>,
        active_tile_list:Array<boolean>,
        pause_tile_list:Array<boolean>,
        use_sound_level?:boolean,
        onmouseup:(end_of_song:boolean,id:number) => any,
        board_bg_color?:string,
        use_tile_sounds?:boolean,
        use_control_panel?:boolean,
        track_source?:string,
        track_paused?:boolean,

    } = $props();






    let n_instruments:number = instruments.length;



    const sound_level_list: boolean[] = $state(Array(10).fill(false));
    let sound_level:number = 40
    let sound_level_float:number = $state(0.4);

    for(let i:number=0;i<sound_level/10;i++ ){

        sound_level_list[i] = true;

    }

    let n_fill:number = 5-(n_instruments%5);
    const fill_empty_list:boolean[] = $state(Array(n_fill==5 ? 0:n_fill).fill(false));

    let track_duration:number = $state(0);
    let track_current_time:number = $state(0);







    function handle_play_button(end_of_track:boolean=false):void{

        track_paused = !track_paused;
        console.log(track_paused)

    }

    function format_track_time(time:number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
    function handle_volume_buttons(increase:boolean){


        console.log(sound_level_float)

        if(increase){
            if(sound_level>=100){
                return;
            }
            sound_level+=10;
            sound_level_list[(sound_level/10)-1] = true;
            sound_level_float=sound_level/100
        }else{

            if(sound_level<=0){
                return;
            }
            sound_level_list[(sound_level/10)-1] = false;
            sound_level-=10;
            sound_level_float=sound_level/100
        }

    }







    function get_random_element(arr:Array<any>):any {
        return arr[(Math.floor(Math.random() * arr.length))];
    }

</script>




<div class="
            flex
            flex-row
            rounded-2xl
            {board_bg_color}
            w-fit
            h-fit
            p-10
            m-6
            border-b-gray-600
            border-l-gray-200
            border-t-gray-400
            border-r-gray-400
            border-b-[20px]
            border-l-[10px]
            border-r-[10px]
            border-t-[10px]
            shadow-2xl [rotate-y-20deg]">

        {#if use_control_panel}
            <div class="flex flex-col justify-center items-center mr-10">

                <div class="mb-10">
                    <Vinyl spinning={!track_paused}></Vinyl>
                </div>
                <div class="flex flex-row justify-evenly items-stretch">
                    <span class="h-fit w-full bg-green-500 text-white text-xl font-bold border-4 border-gray-500 p-1 ml-1">{format_track_time(track_current_time)}</span>
                    <span class="h-fit w-full bg-green-500 text-white text-xl font-bold border-4 border-gray-500 p-1">{format_track_time(track_duration)}</span>
                </div>


                    <button class='flex flex-col justify-center w-32 h-16 bg-blue-400  rounded-lg cursor-pointer select-none mt-5
                    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                    active:border-b-[0px]
                    transition-all duration-150 [box-shadow:0_8px_0_0_#477aba,0_13px_0_0_#1b70f841]
                    border-[1px]
                    '
                    onclick={()=>handle_play_button(false)}
                    >
                    <div class="flex flex-row items-center justify-center w-full h-full">

                        <svg class="m-8" viewBox="0 0 128 64" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="20,0 20,64,108,32" style="fill:white" />
                        </svg>

                    </div>
                    </button>

                    <audio
                        src = {track_source}
                        bind:currentTime={track_current_time}
                        bind:duration={track_duration}
                        bind:paused={track_paused}
                        bind:volume={sound_level_float}
                    ></audio>

            </div>
        {/if}



        <div class="
        grid
        grid-cols-5
        gap-y-8
        gap-x-10
        w-fit
        h-fit

        ">
            {#each instruments as instrument,i}
                <MidiButton
                        img_url={base+"/images/Instrumente_neu/"+instrument["image"]}
                        is_active={active_tile_list[i]}
                        use_audio={use_tile_sounds}
                        audio_url={use_tile_sounds?base+"/audios/"+get_random_element(instrument["audios"]):""}
                        name={instrument["name"]}
                        use_header={true}
                        paused={pause_tile_list[i]}
                        onmouseup={() => onmouseup(false,i)}
                        volume={sound_level_float}
                ></MidiButton>
            {/each}
            {#each fill_empty_list as fill}
                        <MidiButton
                        img_url={base+"/images/Instrumente_neu/blank.png"}
                        is_active={fill}
                        use_audio={false}
                        audio_url={""}
                        name={"00"}
                        use_header={true}
                        paused={fill}
                        onmouseup={()=>{}}
                ></MidiButton>
            {/each}
        </div>
    {#if use_sound_level}
    <div class="flex flex-col justify-end items-center ml-10">

    <div class="flex flex-col-reverse justify-center w-1/3 h-full mb-5 rounded-2xl">
        {#each sound_level_list as s}

            <div class="{s ? 'bg-green-500':'bg-green-100'} w-full h-full border-4 border-gray-500"></div>

        {/each}
    </div>
    <button class='w-16 h-16 bg-amber-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    '
    onclick={()=>handle_volume_buttons(true)}
    >
    <span class='flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3'>+</span>
    </button>

    <button class='w-16 h-16 bg-amber-500  rounded-full cursor-pointer select-none mt-5
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    '
    onclick={()=>handle_volume_buttons(false)}
    >
    <span class='flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3'>-</span>
    </button>


    </div>
    {/if}
</div>

