<script lang="ts">
	import Article from "$lib/article.svelte";

	const data = {
		source: `
Hi! I'm Tristan, 15 years old and live in the Netherlands (and was also born there).

I like development, especially web development (now Svelte, Tailwind and TS). Go as well, but I haven't done
too much with that yet. Rust looks nice too. Might look into that. Anyway, like
I said, I spend the most time doing web dev, and have been for a little more than
a year at the time of writing; I started in November 2020.

---

## Development story

It's been a long time. I started programming in 2017 (I think, could be 2018) 
with Swift Playgrounds on my iPad mini. I did not have a computer at the time. When I did get one, 
(a 2011 iMac), I went to Xcode and started to learn iOS app development. Xcode was an absolute 
disaster back then: it was slow, buggy and genuinly unfun to use. Even when I got my 2021 Mac mini. I quit, 
and bought a Unity game development course on Udemy in 2019. I should have known however,
that a computer with a 2012 integrated GPU wouldn't cut it. It was too slow. Duh.

I stopped for a while, but picked up iOS app development again in May(?) of 2020. Still didn't work, moved on
to Python. Which I couldn't get working: there's two commands: \`python\` and \`python3\`. You
want \`python3\` nowadays, but most people alias \`python\` to \`python3\`, and a tutorial told me so.
I was on macOS Catalina at the time, and it uses \`zsh\` by default. Mojave (the previous major
release) uses \`bash\`. Well, you probably know where this is going. I wanted to set an alias for
\`zsh\` in \`$HOME/bash_profile\`. When I eventually figured out how to set the alias, I didn't
restart my shell when I set the alias. Yeah.

I'm not that bummed about not learning Python though. I hate Python nowadays for it's syntax (WHY TABS AND NOT
NOT CURLY BRACKETS) and the fact that it's interpreted. I guess I'm more old school (and I started with a sane
programming language (Swift)). Sue me. I dare you.

Around about November 2020 I stumbled upon [this](https://www.youtube.com/watch?v=vQWlgd7hV4A&t=8993s) video.
This did work! HTML is just a little bit of text after all. No compiling
or installation involved. Just VS Code, which was a rather simple \`brew install visual-studio-code\`
becuase I had played with the terminal before. Besides, I had tinkered with Linux already (and completely
screwed a system, but that's a story for another blog post).

When I finished Dev Ed's video, I activated a free trial for Skillshare and
my parents bought a year-long subscription after it expired.

In summer 2020, I started the Go tutorial by Tech with Tim.

I now use Svelte, TailwindCSS and TypeScript on a daily basis.

## Music

On another note: I'm a drummer! I love music and cannot go without. Mostly
rock and metal, but hip hop and the occasional edm is pretty cool too.

## About this website

This site was made with Svelte, SvelteKit, TailwindCSS and TypeScript.

This is the second version of this site. The first is still on
GitHub, at https://github.com/tristanlukens/old-website if that's not private.

Keep in mind that when I was creating this website, I wanted it to look
good on screen sizes as small as the iPhone 5, horizontal and vertical.

The website was also tested on Chrome, Firefox and Safari, all on mobile and on desktop, their
versions being the most recent stable releases of each on the 5th of January, 2022.

Other devices and browsers **were not tested**.

---

I could talk about lots and lots more, but the rest will come with blog posts :)
		`,
		author: "Tristan Lukens",
		date: "04-01-2022",
	};
</script>

<svelte:head>
	<title>tristanlukens | About</title>
	<meta
		name="description"
		content="About page of Tristan Lukens' personal website."
	/>
</svelte:head>

<main class="page">
	<h1 class="title">about<span>me</span></h1>
	<Article {...data} />
</main>
