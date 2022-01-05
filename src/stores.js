import { writable, readable } from "svelte/store";

// state to check if menu is open
export let menuOpen = writable(false);

// store with all articles' data
export const articles = readable([
	{
		title: "Ideas for articles",
		date: "05-01-2022",
		author: "Tristan Lukens",
		source: `
# Ideas for articles

I have a couple of ideas for articles.

- HTML crash course
- CSS crash course (also covering SASS)
- Markdown
- Git and GitHub
- TailwindCSS
- vim

I hope I will cover all of these soon.

Also, in my current about page, I talk various subjects, all of which I could also write
articles.
`,
	},
]);
