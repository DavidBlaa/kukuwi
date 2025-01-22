<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import HighshoreButton from '$lib/components/HighshoreButton.svelte';
	import MenuCard from '$lib/components/MenuCard.svelte';
</script>

<main class="relative h-screen">
	<div class="absolute right-10 top-0 m-4">
		<HighshoreButton />
	</div>
	<div class="flex h-full flex-col items-center">
		<!-- Obere Hälfte mit dem KukuWi Logo -->
		<div class="flex h-1/2 items-center justify-center gap-24">
			<div class="w-95 flex flex-col justify-center">
				<img src={base + '/images/logo.png'} alt="logo" class="max-h-md max-w-md object-contain" />
			</div>
		</div>
		<!-- Untere Hälfte mit den Buttons -->
		<div class="flex h-1/2 w-2/3 items-center justify-around gap-4">
			<MenuCard
				text="ÜBEN"
				image={{ src: '/images/Hut_3.png', alt: 'Hut' }}
				bgFront="bg-kukuwi-red"
				bgBack="bg-kukuwi-red-dark"
				onclick={() => goto(`${base}/uebung`)}
				textstyle="mt-9"
				imagestyle="py-6 h-full w-full"
			/>
			<MenuCard
				text="START"
				image={{ src: '/images/Rakete_2.png', alt: 'Rakete' }}
				bgFront="bg-kukuwi-blue"
				bgBack="bg-kukuwi-blue-dark"
				onclick={() => goto(`${base}/raten`)}
				textstyle="mt-2"
				imagestyle="h-4/5 w-4/5"
			/>
		</div>
	</div>
</main>
