<script lang="ts">
	import GameProgressBar from './GameProgressBar.svelte';

	type TransitionScreenProps = {
		roundHistory: (boolean | undefined)[];
		round: number;
		totalScore: number;
		oldScore: number;
	};

	let { roundHistory, round, totalScore, oldScore }: TransitionScreenProps = $props();

	let score = $state(oldScore);
	const step = (totalScore - oldScore) / 100;
	let count = 0;
	let interval = setInterval(() => {
		score += step;
		count++;
		if (count >= 100) {
			score = totalScore;
			clearInterval(interval);
		}
	}, 10);
</script>

<div class="flex size-full flex-col items-center justify-center gap-12">
	<h1 class="text-9xl font-extrabold text-neutral-600">RUNDE {round}</h1>
	<p class="mb-8 text-7xl font-extrabold text-yellow-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
		{Math.round(score)}
	</p>
	<GameProgressBar {roundHistory} {round} />
</div>
