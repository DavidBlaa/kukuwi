<script lang="ts">
	import { page } from '$app/stores';
	import GuessingGame from '$lib/components/GuessingGame.svelte';
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	let volume = $state(0.4);
	let round = $state(1);
	let difficulty: string | undefined = $state(undefined);

	onMount(() => {
		const difficultyParam = $page.url.searchParams.get('difficulty');
		if (difficultyParam === null) {
			error(404, { message: 'No difficulty defined in search params.' });
		}
		difficulty = difficultyParam;
	});

	function handleNextRound(roundScore: number) {
		if (roundScore !== 0) {
			round++;
		}
	}
	const GIFButtonTextSuccess = 'Nächste Runde';
	const GIFButtonTextFailure = 'Erneuter Versuch';
</script>

{#if difficulty}
	<main class="h-screen w-screen bg-blue-200 p-5">
		{#key round}
			<GuessingGame
				difficulty={parseInt(difficulty)}
				{handleNextRound}
				{volume}
				{GIFButtonTextSuccess}
				{GIFButtonTextFailure}
			/>
		{/key}
	</main>
{/if}
