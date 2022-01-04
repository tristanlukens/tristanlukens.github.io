<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let source: string;
	export let author: string;
	export let date: string;
</script>

<article>
	<!-- !leading-loose and !text-theme-500 because prose overrides them -->
	<div
		class="prose prose-sm sm:prose md:prose-lg prose-a:!text-theme-500 !leading-loose text-justify"
	>
		<SvelteMarkdown {source} />
	</div>
	<hr class="horizontal-break" />
	<p class="italic leading-loose">Written by {author} on {date}.</p>
</article>
