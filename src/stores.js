import { writable, readable } from "svelte/store";

// state to check if menu is open
export let menuOpen = writable(false);

// store with all articles' data
export const articles = readable([
	{
		title: "This site",
		date: "05-01-2022",
		author: "Tristan Lukens",
		source: `
# This site

This is a post about this site.
`,
	},
]);
