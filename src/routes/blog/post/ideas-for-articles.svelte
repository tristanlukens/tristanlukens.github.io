<script>
	import Article from "$lib/article.svelte";
	import { articles } from "$lib/../stores.js";

	const data = $articles[1];
</script>

<svelte:head>
	<title>tristanlukens | {data.title}</title>
	<meta
		name="description"
		content="The '{data.title}' blog post by {data.author}."
	/>
</svelte:head>

<Article {...data} />
