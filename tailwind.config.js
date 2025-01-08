/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5A1D72',
				secondary: '#D4AF37',
				tertiary: '#72328E',
				quaternary: '#E5C34C',
			},
		},
	},
	plugins: [],
};

