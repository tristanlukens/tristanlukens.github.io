<script>
	import Title from "$lib/title.svelte";
	import Card from "$lib/card.svelte";
	import { articles } from "$lib/../stores";
</script>

<main class="page">
	<Title first="all" second="posts" />
	<div class="card-list">
		{#each $articles as article}
			<Card {...article} />
		{/each}
	</div>
	<hr class="horizontal-break max-w-sm" />
	<a href="/blog" class="nav-item leading-loose text-center"
		>back to recent articles</a
	>
</main>
