<script lang="ts">
	export let first: string;
	export let second: string = undefined;
</script>

{#if second != undefined}
	<h1 class="font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
		{first}<span class="text-theme-400">{second}</span>
	</h1>
{:else}
	<h1 class="font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
		{first}
	</h1>
{/if}
