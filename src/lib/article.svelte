<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let title: string;
	export let source: string;
	export let author: string;
	export let date: string; // date in dd-mm-yyyy format
</script>

<svelte:head>
	<title>tristanlukens | {title}</title>
	<meta
		name="description"
		content="Blog article by {author} called {title}."
	/>
</svelte:head>

<main class="page">
	<div
		class="prose prose-sm prose-headings:text-center text-justify sm:prose-base"
	>
		<SvelteMarkdown {source} />
	</div>
	<hr class="horizontal-break max-w-prose" />
	<p class="text-sm italic">Written by {author} on {date}.</p>
</main>
