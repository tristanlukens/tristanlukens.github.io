<script lang="ts">
	import { slide } from "svelte/transition";
	import Nav from "./nav.svelte";

	// needs a void function with no paramaters because I
	// could not get a readable funciton store to work
	export let toggleMenu: () => void;
</script>

<div
	transition:slide
	class="bg-white shadow-2xl p-4 space-y-4 text-center h-full"
>
	<p>Where do you want to go?</p>
	<hr />
	<Nav />
	<hr />
	<!-- https://feathericons.com/?query=x with edited stroke width -->
	<svg
		on:click={toggleMenu}
		viewBox="0 0 24 24"
		width="24"
		height="24"
		stroke="currentColor"
		stroke-width="3"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="mx-auto mt-4 cursor-pointer"
		><line x1="18" y1="6" x2="6" y2="18" /><line
			x1="6"
			y1="6"
			x2="18"
			y2="18"
		/></svg
	>
</div>
