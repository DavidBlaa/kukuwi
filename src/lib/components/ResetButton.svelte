<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';

	export let image = { src: '/images/x-mark.png', alt: 'Kreuz' };
</script>

<Button3d
	bgFront="bg-kukuwi-red"
	bgBack="bg-kukuwi-red-dark"
	padding="p-2"
	onclick={() => goto(`${base}/`)}
	onmouseup={() => {}}
	style="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
>
	<div class="flex items-center justify-center">
		<img
			src={base + image.src}
			alt={image.alt}
			class="h-2 w-2 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10"
		/>
	</div>
</Button3d>
