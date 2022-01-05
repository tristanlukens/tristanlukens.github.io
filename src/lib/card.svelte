<script lang="ts">
	export let title: string;
	export let date: string;
</script>

<a
	class="px-8 py-4 bg-gradient-to-tr from-theme-600 to-theme-400 space-y-2 rounded-lg shadow-xl hover:-translate-y-1 hover:opacity-90 transition cursor-pointer block"
	href="/blog/post/{title.split(' ').join('-').toLowerCase()}"
>
	<h3 class="text-lg text-white font-bold">{title}</h3>
	<p class="text-sm text-white italic">{date}</p>
</a>
