/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["dark", 'business', {
			mytheme: {

				"primary": "#835EED",

				"secondary": "#282433",

				"accent": "#1fb2a6",

				"neutral": "#262626",

				"base-100": "#1e1e1e",

				"info": "#3abff8",

				"success": "#36d399",

				"warning": "#fbbd23",

				"error": "#f87272",
			},
		}], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "mytheme", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	}
}
