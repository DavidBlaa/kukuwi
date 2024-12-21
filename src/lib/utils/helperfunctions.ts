import { failGifs, successGifs } from '$lib/data/gifs';
import type { Instrument, KlangQuizInstrument } from '$lib/types/types';
import { instruments as instrumentsJSON } from '../data/instruments';
import { goto } from '$app/navigation';
import { base } from '$app/paths';

export function getKlangQuizInstruments(quantity: number, sameCategory?: boolean) {
	let instruments: Instrument[] = [];

	if (sameCategory) {
		const categories = getInstrumentCategories(instrumentsJSON).filter(
			(category) => category.count >= quantity
		);

		if (categories.length === 0) {
			throw Error(`Could not find a category with at least ${quantity} instruments.`);
		}

		const category = categories[Math.floor(Math.random() * categories.length)];

		instruments = instrumentsJSON.filter((instrument) => instrument.category === category.name);
	} else {
		instruments = instrumentsJSON;
	}

	instruments = shuffleArray(instruments).slice(0, quantity);

	return instruments.map((instrument, index) => ({
		index: index,
		name: instrument.name,
		category: instrument.category,
		image: instrument.image,
		audio: instrument.audios[Math.floor(Math.random() * instrument.audios.length)]
	}));
}

function getInstrumentCategories(instruments: Instrument[]) {
	const categoryMap = new Map<string, number>();

	instruments.forEach((instrument) => {
		categoryMap.set(instrument.category, (categoryMap.get(instrument.category) ?? 0) + 1);
	});

	return Array.from(categoryMap, ([name, count]) => ({ name, count }));
}

function shuffleArray<T>(array: T[]): T[] {
	for (let i = array.length; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		[array[i - 1], array[j]] = [array[j], array[i - 1]];
	}

	return array;
}

export function selectInstrumentToBeFound(instruments: KlangQuizInstrument[]) {
	return instruments[Math.floor(Math.random() * instruments.length)];
}

export function getRandomGIF(correctAnswer: boolean) {
	const gifs = correctAnswer ? successGifs : failGifs;
	return gifs[Math.floor(Math.random() * gifs.length)];
}

export function getRandomIndex(list: Array<any>) {
	if (list != undefined) {
		return parseInt('' + Math.random() * list.length);
	}

	return -1;
}

export function getRandomSubset(list: Array<any>, count: number): Array<any> {
	const indexList: number[] = [];
	const tmp: any[] = [];

	do {
		const i = getRandomIndex(list);
		if (!indexList.includes(i)) {
			indexList.push(i);
			tmp.push(list[i]);
		}
	} while (tmp.length < count);

	return tmp;
}
