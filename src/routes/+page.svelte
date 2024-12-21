<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import MenuCard from '$lib/components/MenuCard.svelte';
</script>

<main class="h-screen">
	<div class="flex h-full flex-col">
		<!-- Obere Hälfte mit dem KukuWi Logo -->
		<div class="flex h-1/2 items-center justify-center">
			<img src={base + '/images/logo.png'} alt="logo" class="max-h-md max-w-md object-contain" />
		</div>
		<!-- Untere Hälfte mit den Buttons -->
		<div class="flex h-1/2 items-center justify-center">
			<div class="flex w-1/2 justify-center">
				<MenuCard
					text="ÜBEN"
					image={{ src: '/images/Hut_2.png', alt: 'Hut' }}
					bgFront="bg-kukuwi-red"
					bgBack="bg-kukuwi-red-dark"
					onclick={() => goto(`${base}/uebung`)}
					class="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
					textClass="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl"
				/>
			</div>
			<div class="flex w-1/2 justify-center">
				<MenuCard
					text="START"
					image={{ src: '/images/Pokal.png', alt: 'Pokal' }}
					bgFront="bg-kukuwi-blue"
					bgBack="bg-kukuwi-blue-dark"
					onclick={() => goto(`${base}/raten`)}
					class="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
					textClass="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl"
				/>
			</div>
		</div>
	</div>
</main>
