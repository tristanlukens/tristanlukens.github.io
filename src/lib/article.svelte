<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	// I use this article component for the about page as well
	export let aboutme: boolean = false;

	export let source: string;
	export let author: string;
	export let date: string; // date in dd-mm-yyyy format
</script>

<main class="page">
	<!-- spacing.72 because the prose size is (coincedentally?) (about?) the same width -->
	<div
		class="prose prose-sm prose-a:text-theme-500 prose-headings:text-center text-justify prose-pre:max-w-[theme(spacing.72)] sm:prose-pre:max-w-none prose-pre:mx-auto"
	>
		<SvelteMarkdown {source} />
	</div>
	<hr class="horizontal-break card-list" />
	<p class="text-sm italic">Written by {author} on {date}.</p>
	{#if !aboutme}
		<hr class="horizontal-break card-list" />
		<a href="/blog" class="nav-item">back to recent posts</a>
	{/if}
</main>
