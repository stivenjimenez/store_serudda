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
			'bg/dark': '#18181b',
			purple: '#815CD0',
			'purple/secondary': '#6034c0',
			'black/primary': '#27272a',
			'black/secondary': '#323338',
			white: '#fafafa'
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
}
