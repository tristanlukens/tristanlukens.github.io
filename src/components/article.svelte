<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let source: string;
	export let author: string;
	export let date: string;
</script>

<article>
	<div class="prose prose-a:text-theme-500 text-justify">
		<SvelteMarkdown {source} />
	</div>
	<hr class="horizontal-break" />
	<p class="italic leading-loose">Written by {author} on {date}.</p>
</article>
