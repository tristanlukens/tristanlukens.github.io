const colors = require("tailwindcss/colors");

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				theme: colors.blue,
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
