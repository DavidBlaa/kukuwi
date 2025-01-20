<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
</script>

<main class="flex h-screen flex-col items-center justify-evenly bg-[#FBF6EC]">
	<div class="mt-3 flex w-1/2">
		<Table />
	</div>
	<div class="flex flex-col" style="margin-top: -2rem;">
		<BackButton></BackButton>
	</div>
</main>
