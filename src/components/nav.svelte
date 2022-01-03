<script lang="ts">
	const navItems: Array<string> = ["about", "blog", "portfolio", "settings"];
</script>

<nav>
	<ul class="flex flex-col items-center gap-6">
		{#each navItems as item}
			<li><a class="link" href="/{item}">{item}</a></li>
		{/each}
	</ul>
</nav>
