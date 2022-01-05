<script lang="ts">
	import Title from "$lib/title.svelte";
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
	<Title first="blog" />
	<p>I like tech. I write about it here.</p>
	<p class="mt-4 mb-8 text-xs leading-loose">
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
	<hr class="horizontal-break card-list" />
	<a href="/blog/posts" class="nav-item">all articles</a>
</main>
