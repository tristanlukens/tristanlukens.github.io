<script>
	import Article from "$lib/article.svelte";
	import { articles } from "$lib/../stores.js";

	const data = $articles[0];
</script>

<Article {...data} />
