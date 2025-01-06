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
			fontFamily: {
				heading: ['Poppins', 'sans-serif'],
				body: ['Poppins', 'sans-serif'],
			},
			spacing: {
				12: '3rem',
				24: '6rem',
				36: '9rem',
				48: '12rem',
				60: '15rem',
				72: '18rem',
				84: '21rem',
				96: '24rem',
			},
		},
	},
	plugins: [],
};

