<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let source: string;
	export let author: string;
	export let date: string; // date in dd-mm-yyyy format
</script>

<main class="page">
	<div
		class="prose prose-sm prose-headings:text-center text-justify sm:prose-base"
	>
		<SvelteMarkdown {source} />
	</div>
	<hr class="horizontal-break card-list" />
	<p class="text-sm italic">Written by {author} on {date}.</p>
</main>
