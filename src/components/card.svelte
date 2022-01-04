<script lang="ts">
	export let title;
	export let date;

	const link = `/blog/post/${title.split(" ").join("-").toLowerCase()}`;
</script>

<a
	href={link}
	class="block w-full bg-gradient-to-tr from-theme-600 to-theme-400 text-white px-8 py-4 shadow-xl rounded-lg cursor-pointer hover:-translate-y-1 transition"
>
	<h4 class="font-bold">{title}</h4>
	<p class="mt-2 text-xs italic">{date}</p>
</a>
