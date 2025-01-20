<script lang="ts">
	import MemoryCard from '$lib/components/MemoryCard.svelte';
	import { onMount } from 'svelte';
	import { MemoryCardsData } from '$lib/data/MemoryCards';
	import { shuffleArray } from '$lib/utils/helperfunctions';
	import { getRandomIndex, getRandomSubset } from '$lib/utils/helperfunctions.js';
	import GIF from '$lib/components/GIF.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import ResetButton from '$lib/components/ResetButton.svelte';

	let cards: {
		genre: string;
		paused: boolean;
		isRotated: boolean;
		index: number;
		audioPath: string;
		finished: boolean;
	}[] = $state([]);

	let lastID: number = $state(-1);
	let cardTurned: number = $state(0);
	let genre: string = $state('');
	let n_cards: number = $state(0);
	let done: boolean = $state(false);
	let volume: number = $state(1);

	function handleGIFButtonClick() {
		goto(base + '/');
	}

	onMount(() => {
		for (const element of getRandomSubset(MemoryCardsData, 4)) {
			cards.push({
				index: -1,
				genre: element.genre,
				paused: true,
				isRotated: false,
				audioPath: element.audioPaths[getRandomIndex(element.audioPaths)],
				finished: false
			});
			cards.push({
				index: -1,
				genre: element.genre,
				paused: true,
				isRotated: false,
				audioPath: element.audioPaths[getRandomIndex(element.audioPaths)],
				finished: false
			});
		}
		cards = shuffleArray(cards);

		for (const [index, card] of cards.entries()) {
			card.index = index;
		}
		n_cards = cards.length;
	});

	function handleClick(index: number): void {
		if (cards[index].finished) {
			return;
		}

		if (lastID == index) {
			return;
		}

		if (cardTurned == 2) {
			cardTurned = 0;
			for (const card of cards) {
				if (!card.finished) {
					card.isRotated = false;
				}
			}
		}
		for (const card of cards) {
			card.paused = true;
		}
		cards[index].isRotated = !cards[index].isRotated;
		cards[index].paused = !cards[index].paused;

		if (cardTurned == 0) {
			cardTurned = 1;
			genre = cards[index].genre;
			lastID = index;
		} else if (cardTurned == 1) {
			cardTurned = 2;
			if (genre === cards[index].genre) {
				cards[index].finished = true;
				cards[lastID].finished = true;
				n_cards -= 2;
			}
		}

		if (n_cards == 0) {
			for (const card of cards) {
				card.paused = true;
			}

			done = true;
		}
	}
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center justify-items-center">
	<div class="relative grid h-fit w-fit grid-cols-4 gap-5 rounded-xl bg-gray-300 p-20">
		{#each cards as c}
			<MemoryCard
				isRotated={c.isRotated}
				paused={c.paused}
				onmouseup={() => handleClick(c.index)}
				audioSource={'/audios/' + c.audioPath}
				finished={c.finished}
			/>
		{/each}
		<div class="absolute left-0 top-0 m-3">
			<ResetButton />
		</div>
	</div>
	{#if done}
		<div class="absolute left-0 top-0">
			<GIF
				bind:success={done}
				onclick={handleGIFButtonClick}
				GIFButtonTextSuccess={'Gewonnen'}
				GIFButtonTextFailure={' '}
				gifSoundPaused={false}
				{volume}
			/>
		</div>
	{/if}
</div>
