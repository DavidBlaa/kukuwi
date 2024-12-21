import type { KlangQuizLevel } from '$lib/types/types';

export const klangQuizLevels: KlangQuizLevel[] = [
	{
		difficulty: 'einfach',
		instruments: 4,
		sameCategory: false
	},
	{
		difficulty: 'mittel',
		instruments: 6,
		sameCategory: false
	},
	{
		difficulty: 'schwer',
		instruments: 3,
		sameCategory: true
	},
	{
		difficulty: 'schwer',
		instruments: 8,
		sameCategory: false
	}
];
