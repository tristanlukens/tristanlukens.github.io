<script lang="ts">
	import Menu from "./menu.svelte";
	import Nav from "./nav.svelte";

	import { menuOpen } from "../../stores.js";
	const toggleMenu = () => {
		$menuOpen = !$menuOpen;
	};
</script>

<header
	class="border-b-2 border-gray-100 flex justify-around items-center h-14"
>
	<a href="/">
		<!-- not title component becuause it's smaller and it needs to be an h2 -->
		<h2 class="text-3xl font-bold">
			tristan<span class="text-theme-400">lukens</span>
		</h2>
	</a>

	<div class="sm:hidden">
		<!-- https://feathericons.com/?query=menu with edited stroke width -->
		<svg
			class="cursor-pointer"
			on:click={toggleMenu}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
			><line x1="3" y1="12" x2="21" y2="12" /><line
				x1="3"
				y1="6"
				x2="21"
				y2="6"
			/><line x1="3" y1="18" x2="21" y2="18" /></svg
		>
	</div>

	<div class="hidden sm:block">
		<Nav />
	</div>

	{#if $menuOpen}
		<div class="absolute top-0 bottom-0 left-1/2 right-0">
			<Menu {toggleMenu} />
		</div>
	{/if}
</header>
