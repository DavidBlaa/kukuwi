<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';
	import { klangQuizLevels } from '$lib/data/klangQuizLevels';
	import { patternLevels } from '$lib/data/patternLevels';
	import { genreLevels } from '$lib/data/genreLevels';

	const colors = [
		{ difficulty: 'einfach', bgFront: 'bg-green-500', bgBack: 'bg-green-600' },
		{ difficulty: 'mittel', bgFront: 'bg-yellow-500', bgBack: 'bg-yellow-600' },
		{ difficulty: 'schwer', bgFront: 'bg-red-500', bgBack: 'bg-red-600' }
	];

	const games = [
		{
			title: 'Ratespiel',
			textColor: 'text-kukuwi-red',
			path: 'Quiz-Game',
			levels: klangQuizLevels.slice(0, 3)
		},
		{
			title: 'Pattern',
			textColor: 'text-kukuwi-yellow',
			path: 'Pattern-Game',
			levels: patternLevels
		},
		{ title: 'Genre', textColor: 'text-kukuwi-blue', path: 'Genre-Game', levels: genreLevels }
	];

	function handleLevelClick(path: string, difficulty: number) {
		goto(`${base}/${path}?difficulty=${difficulty}`);
	}

	function getLevelColorFront(difficulty: string) {
		return colors.find((color) => color.difficulty === difficulty)!.bgFront;
	}

	function getLevelColorBack(difficulty: string) {
		return colors.find((color) => color.difficulty === difficulty)!.bgBack;
	}
</script>

<main class="flex h-screen flex-col overflow-hidden">
	<div class="grid h-4/5 grid-cols-3 gap-2 pt-12">
		{#each games as game}
			<div class="flex h-full flex-col items-center gap-8">
				<h1 class={`flex items-center justify-center text-7xl font-bold ${game.textColor} h-1/6`}>
					{game.title}
				</h1>

				<div class="grid h-5/6 w-full gap-8">
					{#each game.levels as level, i}
						<div
							class="flex h-full w-full items-center justify-center text-5xl font-bold text-white"
						>
							<Button3d
								bgFront={getLevelColorFront(level.difficulty)}
								bgBack={getLevelColorBack(level.difficulty)}
								padding="px-1 py-1 md:px-2 md:py-2 lg:px-8 lg:py-6"
								onclick={() => handleLevelClick(game.path, i + 1)}
								onmouseup={() => {}}
							>
								Level {i + 1}
							</Button3d>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<Button3d
		bgFront="bg-kukuwi-blue"
		bgBack="bg-kukuwi-blue-dark"
		padding="px-8 py-2"
		onclick={() => goto(`${base}/`)}
		onmouseup={() => {}}
	>
		Zurück
	</Button3d>
</main>
