import { writable, readable } from "svelte/store";

// state to check if menu is open
export let menuOpen = writable(false);

// store with all articles' data (NEW TO OLD, WHEN YOU ADD ONE, ADD IT ABOVE THE MOST RECENT ONE)
export const articles = readable([
	{
		title: "An introduction to JavaScript - the setup",
		date: "03-02-2022",
		author: "Tristan Lukens",
		source: `
# An introduction to JavaScript - the setup

This is the first part of the JavaScript introductory tutorial: the setup part.

We're going to set up Visual Studio Code and a couple of extensions. As a bonus, I'll go over installing \`node.js\`.

You don't need any prior programming knowledge to follow this tutorial, but knowing how to use a computer is pretty handy.

## Visual Studio Code

### Installation

Go to https://code.visualstudio.com and click on the download link. **This is a trusted program, made by Microsoft. Not a virus.
[There is some telemetry enabled](https://code.visualstudio.com/docs/getstarted/telemetry), which you can turn off.**

There is another program called Visual Studio, which you don't want. This is a full-blown IDE, made for coding in C#. C# and
JavaScript aren't interchangable; they're seperate programming languages.

I will talk more about that in the article about JavaScript's fundamentals, before which I'll talk about the concept of a
programming language. This is only a setup guide.

### Extensions

VSCode works with so-called extensions. These provide extra features etc, to make the editor better. You can install them in various
ways, the easiest being the in-app marketplace. You can access it by clicking on its tab icon, in the sidebar.

![](/extensions-tab.png)

*Screenshot showing where the extensions tab is.*

If you open this, you'll see a search bar. Search for and install the following extensions, and meet me back here. We'll talk about these later.

- Live Server
- HTMLHint
- Prettier

---

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is used for hosting your web page, on your [loopback address](https://en.wikipedia.org/wiki/Localhost) (local ip address of your
computer that cannot be accessed from anywhere but your computer). It has live reload, which means that if
something in one of your files changes, the page will reload. You won't have to click the button anymore.

[HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) is error checking for HTML. If something is typed wrong, it'll tell you what went wrong and where.

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is for formatting your code. Not every language is supported, but the ones for web development are (HTML, CSS, JS, JSON, PHP and others).

### Extension setup

HTMLHint and Live Server work out of the box, but Prettier requires some setup.

- open settings, by clicking **⌘ + ,** on macOS, **Ctrl + ,** on Windows and Linux
- search for "default formatter"
- select "Prettier - Code Formatter"

This should label Prettier as the leading code formatter, so it will format all supported file types. You can find a list of those
in the Marketplace link I hyperlinked above.

## Bonus - installing Node

\`node.js\` is a browser alternative for running JavaScript code. It's built on Chrome's V8 core engine, and is mostly used with servers.
With node comes \`npm\`, which is the node package manager. There's thousands of packages in the repositories of npm, https://www.npmjs.com.

This is a little bit more advanced, and definately not a necessary step. If you want to proceed using JavaScript and want to become
a good dev, install node. Otherwise (or if you're not tech savvy enough), just move on to the tutorial blog post.
	`,
	},
	{
		title: "This site",
		date: "05-01-2022",
		author: "Tristan Lukens",
		source: `
# This site

Let's talk about this site for a bit.

It was made using [Svelte](https://svelte.dev), Svelte's in-house router [SvelteKit](https://kit.svelte.dev), [TailwindCSS](https://tailwindcss.com) and its
[Typography](https://tailwindcss.com/docs/typography-plugin) plugin and [SvelteMarkdown](https://www.npmjs.com/package/svelte-markdown), a [Markdown](https://en.wikipedia.org/wiki/Markdown) "converter" for Svelte.
I'm using GitHub Pages to host the site, and as of the time of writing, just including articles in the
standard repo. Where I want to go however, is using either a CMS like Graph CMS or Ghost CMS, or just
another GitHub repo with the files. I would then use a slug in SvelteKit, but I'm simply not experienced
enough with APIs and async JS.

## Svelte

Svelte is awesome. Just writing blocks of HTML, CSS and JavaScript (or HTML + TailwindCSS classes and TypeScript in this site's case)
is very natural. React and Vue are more convoluted, and I'm not ready for them yet. I've been doing a lot
with web development for a while now, but barely know anything when it comes to async and other intermediate
level JavaScript concepts.

### SvelteKit

SvelteKit is Sapper's successor. They're both pretty simple routers for Svelte. It uses Vite under the hood
and makes the development expierence incredibly quick and nice.

### SvelteMarkdown

A markdown compiler for Svelte. It does what the name suggests: you give it a markdown source string,
and it compiles it to HTML and does this with a Svelte component. Example:

	<script>
		import SvelteMarkdown from "svelte-markdown"

		const source = "# This is a title! This article is about the title."
	</script>

	<section class="prose">
		<SvelteMarkdown {source} />
	</section>

## TailwindCSS

You simply cannot talk about quick and nice developer experience without name-dropping Tailwind; I don't know
how I could stand writing websites with CSS before. Even with SASS, CSS is a nightmare. Powerful yet simple, yes, but
once Tailwind's got ya hooked, you cannot go back.

Since I'm 15 and this schoolyear's my first year of being in computer sience class, I get to help people making
websites for the first time. That's lovely, but actually writing CSS again is "even wennen" as we say
here in the Netherlands (which means that it took a while to get used to).

### Typography plugin

Besides vanilla Tailwind, I'm using the Typography plugin. This means I have access to \`prose\` classes.
These deliver sane defaults for HTML blocks. It might look like this for example (with using SvelteMarkdown):

	<script>
		import SvelteMarkdown from "svelte-markdown"

		const source = "# This is a title!"
	</script>

	<section class="prose prose-sm prose-a:text-emerald-500">
		<SvelteMarkdown {source} />
	</section>

## Markdown

Markdown is rather simple: it's plain text with some symbols for markup. For instance,
you make some text a heading by putting a \`#\` in front of it, or make a list using
\`-\` for all the elements, like this (but you can do more than this!):

	# A markdown example

	This is some **markdown**.

	You can do a lot with it!

	- ordered and unordered lists
	- **bold text**
	- *italic text*
	- headings with #
	- hr elements with ---
	- [hyperlinks](https://tristanlukens.github.io)
	- ![images](https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80)

	Pretty cool right?

	## Readability

	You don't need a markdown processor for the text to be readable, which
	is where markdown really shines. This is perfectly readable!
	
I'm planning to do a whole article on markdown one day!

## GitHub Pages

GitHub Pages is a service which you can use to host a website for free #notsponsored.
I'm building my SvelteKit app and pushing it to GitHub (like how [this](https://blog.stranianelli.com/sveltekit-et-github-pages-english/) article says)
and it's pretty much flawless.

## The future of this website

This might be the second version, but it will definately not be the last iteration. I'm still
not using slugs and want to fully understand Svelte and JS before I try again, but
I'm pretty happy with how I did things this time around.

### How I'm doing things now and how I want to do things

As you can see on [GitHub](https://github.com/tristanlukens/tristanlukens.github.io) I now have a Svelte Store with an array of objects
with data about blog articles, but everytime I'm writing a new one I'm create a new object in the array and creating a new
page with Article component in \`src/routes/blog/post/\` which is an inefficient way of doing things. I want to use [slugs], which have
to do with dynamic routing. I took a good look at the SvelteKit docs about dynamic routing and came to the conclusion I just need
to stick to how I was doing things before for now :)

---

Thank you for reading!

I just decided I'm going to put an emoji of the article at the bottom of every one from now on, so see if you can collect 'em all.

Happy new year btw.

🥰
	`,
	},
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

Also, in my current about page, I talk various subjects. I'm probably going to talk about those as well.
`,
	},
]);
