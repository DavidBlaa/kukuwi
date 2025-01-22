<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';

	export let image = { src: '/images/Krone.png', alt: 'Krone' };
</script>

<Button3d
	bgFront="bg-kukuwi-yellow"
	bgBack="bg-kukuwi-yellow-dark"
	padding="py-6 px-3"
	onclick={() => goto(`${base}/Bestenliste`)}
	onmouseup={() => {}}
	style="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mt-4 sm:mt-6 md:mt-8"
>
	<div class="flex items-center justify-center">
		<img src={base + image.src} alt={image.alt} class="h-full w-full" />
	</div>
</Button3d>
