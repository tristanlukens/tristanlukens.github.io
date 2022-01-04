<script>
	import "../app.css";

	import Header from "../components/header.svelte";
</script>

<div class="fixed top-0 left-0 right-0 bg-white">
	<Header />
</div>

<!-- mt-12 because 12 is the size of the header -->
<div class="mt-12">
	<slot />
</div>
