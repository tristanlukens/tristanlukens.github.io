<script lang="ts">
	const navItems: Array<string> = ["about", "blog", "portfolio", "settings"];

	// needs a void function with no paramaters because I
	// could not get a readable funciton store to work

	// https://stackoverflow.com/questions/62405066/is-there-a-way-to-declare-props-as-optional-in-svelte
	export let toggleMenu: () => void = undefined;
</script>

<nav>
	<ul
		class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 justify-center sm:space-between"
	>
		{#each navItems as item}
			<li>
				<a on:click={toggleMenu} class="nav-item" href="/{item}">{item}</a>
			</li>
		{/each}
	</ul>
</nav>
