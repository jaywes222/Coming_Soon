/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5A1D72',
				secondary: '#D4AF37',
				tertiary: '#F9C23C',
				quaternary: '#c28d2f',
				quinary: '#6351B7',
			},
		},
	},
	plugins: [],
};

