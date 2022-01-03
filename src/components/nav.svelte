<script lang="ts">
	const navItems: Array<string> = ["about", "blog", "portfolio", "settings"];

	// needs a void function with no paramaters because I
	// could not get a readable funciton store to work
	export let toggleMenu: () => void;
</script>

<nav>
	<ul class="flex flex-col items-center gap-6">
		{#each navItems as item}
			<li>
				<a on:click={toggleMenu} class="link" href="/{item}">{item}</a>
			</li>
		{/each}
	</ul>
</nav>
