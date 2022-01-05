<script lang="ts">
	import Card from "$lib/card.svelte";

	import { articles } from "../stores.js";
</script>

<svelte:head>
	<title>tristanlukens | Blog</title>
	<meta
		name="description"
		content="Blog page of Tristan Lukens' personal website."
	/>
</svelte:head>

<main class="page">
	<h1 class="title">blog</h1>
	<p class="text-center">I like tech. I write about it here.</p>
	<p class="mt-4 mb-8 text-xs text-center">
		But don't be afraid to see articles about other subjects.
	</p>
	<h3 class="mb-6 font-bold text-xl">Recent articles</h3>
	<section class="card-list">
		{#each $articles as article, i}
			<!-- only 5 recent articles -->
			{#if i <= 4}
				<Card {...article} />
			{/if}
		{/each}
	</section>
	<!-- same width as section above -->
	<hr class="horizontal-break max-w-sm" />
	<a href="/blog/posts" class="nav-item">all articles</a>
</main>
