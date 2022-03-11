<script>
	import Article from "$lib/article.svelte";
	import { articles } from "$lib/../stores";

	const data = $articles[0];
</script>

<svelte:head>
	<title>tristanlukens | {data.title}</title>
	<meta
		name="description"
		content="The '{data.title}' blog post by {data.author}."
	/>
</svelte:head>

<Article {...data} />
