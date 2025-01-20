import aspectRatio from '@tailwindcss/aspect-ratio';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite'
			},
			colors: {
				'kukuwi-red': {
					light: '#ff4c58',
					DEFAULT: '#fa2c3a',
					dark: '#cb1728'
				},
				'kukuwi-yellow': {
					light: '#ffdc37',
					DEFAULT: '#ffca2b',
					dark: '#e0b126'
				},
				'kukuwi-blue': {
					light: '#2ab1d3',
					DEFAULT: '#2498b7',
					dark: '#1e7e96'
				}
			},
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))'
			},
			screens: {
				fhd: '1920px',
				wqhd: '2560px'
			}
		}
	},

	plugins: [aspectRatio]
} satisfies Config;
