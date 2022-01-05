<script lang="ts">
	import Title from "./title.svelte";

	export let message: string = undefined;
</script>

<!-- will only be used if the page where the comingsoon is used does not have its own head -->
<svelte:head>
	<title>tristanlukens | Coming soon</title>
	<meta
		name="description"
		content="This page of Tristan Lukens' personal website is not finished, but will be in the future."
	/>
</svelte:head>

<main class="page">
	<Title first="coming" second="soon" />
	{#if message != undefined}
		<div class="text-center leading-loose">
			<p>{message}</p>
		</div>
	{/if}
</main>
