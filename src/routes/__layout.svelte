<script>
	import "../app.css";

	import Header from "$lib/header/header.svelte";
</script>

<header class="fixed top-0 left-0 right-0 bg-white">
	<Header />
</header>

<!-- mt-14 because 14 is the size of the header -->
<section class="mt-14">
	<slot />
</section>
