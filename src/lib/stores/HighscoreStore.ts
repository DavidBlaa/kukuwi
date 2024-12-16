// store.js

import { useLocalStorage } from '$lib/stores/useLocalStorage.ts';


export const highscore_table = useLocalStorage('highScoreTable', [
	{ name: 'Max Mustermann', points: 5230, highlight: false },
	{ name: 'Maria Müller', points: 7420, highlight: false },
	{ name: 'Peter Schmidt', points: 6810, highlight: false },
	{ name: 'Clara Klein', points: 5980, highlight: true },
	{ name: 'Lukas Lange', points: 9350, highlight: false },
	{ name: 'Anna Weiß', points: 8020, highlight: false },
	{ name: 'Johannes Braun', points: 7190, highlight: false },
	{ name: 'Sophie Schwarz', points: 8560, highlight: false },
	{ name: 'Thomas Grün', points: 7640, highlight: false },
	{ name: 'Laura Blau', points: 8990, highlight: false },
	{ name: 'Johannes Braun', points: 7190, highlight: false },
	{ name: 'Sophie Schwarz', points: 8560, highlight: false },
	{ name: 'Thomas Grün', points: 7640, highlight: false },
	{ name: 'Laura Blau', points: 8990, highlight: false }
]);

