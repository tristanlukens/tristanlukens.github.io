<script>
	import Card from "$lib/card.svelte";
	import { articles } from "$lib/../stores";
</script>

<main class="page">
	<h1 class="title">all<span>posts</span></h1>
	<div class="card-list">
		{#each $articles as article}
			<Card {...article} />
		{/each}
	</div>
	<hr class="horizontal-break max-w-sm" />
	<a href="/blog" class="nav-item leading-loose text-center"
		>back to recommended posts</a
	>
</main>
