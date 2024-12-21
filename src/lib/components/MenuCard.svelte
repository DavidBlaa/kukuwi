<script lang="ts">
	import { base } from '$app/paths';
	import Button3d from './Button3d.svelte';

	type MenuCardProps = {
		text: string;
		image: { src: string; alt: string };
		bgFront: string;
		bgBack: string;
		onclick: (this: Window, ev: MouseEvent) => any;
		class?: string;
		textClass?: string;
	};

	let {
		text,
		image,
		bgFront,
		bgBack = 'text-white',
		onclick,
		class: customClass = '',
		textClass = ''
	}: MenuCardProps = $props();
</script>

<Button3d
	{bgFront}
	{bgBack}
	padding="px-1 py-1 md: px-2 md: py-2 lg:px-4 lg:py-4"
	translateY="translate-y-[-0.75rem]"
	{onclick}
	onmouseup={() => {}}
	style={customClass}
>
	<div class={`menu-card flex flex-col items-center justify-center ${customClass}`}>
		<img
			src={base + image.src}
			alt={image.alt}
			class="menu-card-image 2xl:w-128 2xl:h-128 h-24 w-24 object-contain sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56"
		/>
		<p class={`menu-card-text mt-1 text-center font-extrabold text-white ${textClass}`}>{text}</p>
	</div>
</Button3d>
