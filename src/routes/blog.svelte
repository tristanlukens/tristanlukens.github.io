<script lang="ts">
	import Card from "../components/card.svelte";

	const articles = [
		{
			title: "This site",
			date: "04-01-2022",
		},
	];
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
		But don't be afraid to see posts about other subjects.
	</p>
	<h3 class="mb-6 font-bold text-xl">Recommended posts</h3>
	<section class="space-y-8 w-4/5 max-w-sm">
		{#each articles as article}
			<Card {...article} />
		{/each}
	</section>
</main>
