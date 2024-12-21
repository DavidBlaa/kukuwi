export type Instrument = {
	name: string;
	category: string;
	image: string;
	audios: string[];
};

export type KlangQuizInstrument = Omit<Instrument, 'audios'> & {
	index: number;
	audio: string;
};

export type Game = {
	name: string;
	link: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
};

export type KlangQuizLevel = {
	difficulty: string;
	instruments: number;
	sameCategory: boolean;
};

export type PatternLevel = {
	difficulty: string;
	rows: number;
};

export type GameRound = {
	game: 'klangQuiz' | 'pattern';
	difficulty: number;
};

export type pattern_type = {
	midi_src: string;
	audio_src: string;
	instrument_type: 'drum' | 'Bass' | 'Piano';
	n_instruments: number;
};

export type Highscore_type = {
	name: string;
	points: number;
	highlight: boolean;
};

export type GenreLevel = {
	difficulty: string;
	pairs: number;
};