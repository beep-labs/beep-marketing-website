/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: "u-",
	content: [
		"./src/**/*.{njk,md}",
		"./src/**/*.svg",
	],
  theme: {
    extend: {},
  },
	plugins: [
		require('@captaincss/captaincss'),
	],
	captain: {
		prefix: {
			components: 'c-',
			objects: 'o-',
		},
		separator: {
			elements: '__',
			modifiers: '--',
		},
	},
}

