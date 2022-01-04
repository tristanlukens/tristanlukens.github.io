<script>
	import "../app.css";

	import Header from "../components/header.svelte";
</script>

<header class="fixed top-0 left-0 right-0 bg-white">
	<Header />
</header>

<!-- mt-12 because 12 is the size of the header -->
<section class="mt-12">
	<slot />
</section>
