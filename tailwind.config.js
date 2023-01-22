/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			}
		},
		colors: {
			'bg/dark': '#141717',
			purple: '#815CD0',
			'purple/secondary': '#6034c0',
			'black/primary': '#1B1F1F',
			'black/secondary': '#323338',
			white: '#FFFCF7'
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
}
