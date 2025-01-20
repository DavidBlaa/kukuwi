<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button3d from './Button3d.svelte';
	interface ComponentProps {
		img_url: string;
		is_active: boolean;
		audio_url: string;
		name: string;
		onmouseup: (...args: any[]) => any;
		paused: boolean;
		width?: string;
		height?: string;
		active_color_top?: string;
		active_color_bottom?: string;
		passiv_color_top?: string;
		passiv_color_bottom?: string;
		use_audio?: boolean;
		use_header?: boolean;
		volume?: number;
	}

	let {
		img_url,
		is_active,
		audio_url,
		name,
		onmouseup,
		paused = true,
		active_color_top = 'bg-blue-400',
		active_color_bottom = '[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]',
		passiv_color_top = 'bg-blue-100',
		passiv_color_bottom = 'bg-gray-400',
		use_audio = true,
		use_header = true,
		volume = 0.5
	}: ComponentProps = $props();

	export function handle_music_tile_click(end_of_song: boolean = false): void {
		is_active = !is_active;

		if (!end_of_song) {
			paused = !paused;
		}
	}
</script>

{#if use_header}
	<p
		class="w-fit px-1 text-xs lg:text-xl {is_active
			? active_color_top
			: passiv_color_top} mb-2 rounded-sm font-bold lg:mb-3"
	>
		{name}
	</p>
{/if}
<Button3d
	{onmouseup}
	bgFront={is_active ? active_color_top : passiv_color_top}
	bgBack={is_active ? active_color_bottom : passiv_color_bottom}
	style="flex w-full"
	padding="w-full"
	translateY="lg:translate-y-[-0.7rem] translate-y-[-0.4rem]"
>
	<Icon src={img_url} className="w-full" />
	{#if use_audio}
		<audio src={audio_url} bind:paused {volume} onended={() => handle_music_tile_click(true)}
		></audio>
	{/if}
</Button3d>
