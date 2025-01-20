<script lang="ts">
	import { base } from '$app/paths';
	import Button3d from './Button3d.svelte';

	type MenuCardProps = {
		text: string;
		image: { src: string; alt: string };
		bgFront: string;
		bgBack: string;
		onclick: () => void;
		style?: string;
		textstyle?: string;
		imagestyle?: string;
	};

	let { text, image, bgFront, bgBack, onclick, style, textstyle, imagestyle }: MenuCardProps =
		$props();
</script>

<Button3d
	{bgFront}
	{bgBack}
	{onclick}
	style="flex flex-col items-center justify-center w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-88 xl:h-88"
	padding="p-4"
	translateY="translate-y-[-0.7rem]"
>
	<div class="flex items-center justify-center">
		<img src={base + image.src} alt={image.alt} class={`object-contain ${imagestyle}`} />
	</div>
	<p class={`text-center text-4xl font-extrabold text-white ${textstyle}`}>{text}</p>
</Button3d>
