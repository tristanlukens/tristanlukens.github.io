<script>
	import Title from "$lib/title.svelte";
</script>

<svelte:head>
	<title>tristanlukens | Home</title>
	<meta
		name="description"
		content="Home page of Tristan Lukens' personal website."
	/>
</svelte:head>

<main
	class="grid h-normal grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 place-items-center text-center p-8"
>
	<div class="row-span-1">
		<Title first="tristan" second="lukens" />
		<p class="mt-4 text-lg">Welcome.</p>
	</div>
	<div class="max-w-[30ch] md:max-w-[40ch] row-span-2">
		<p class="text-sm sm:text-base md:text-lg md:text-right !leading-loose">
			I'm <span class="font-bold">Tristan</span>! You're on my personal
			site. There's not a lot to do here, but for now, have a nice stay.
		</p>
	</div>
</main>
