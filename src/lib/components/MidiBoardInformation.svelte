<script lang="ts">
	interface ComponentProps {
		time: number;
		repeats: number;
	}

	let { time = $bindable(0), repeats = $bindable(0) }: ComponentProps = $props();
</script>

<div
	class="grid grid-cols-2 border border-gray-500 bg-blue-200 text-[0.6rem] font-medium lg:text-xs 2xl:text-base fhd:border-2 fhd:text-3xl"
>
	<span class="border border-gray-500 p-[0.1rem] fhd:border-2 fhd:p-1">Gehört</span>
	<span class="border border-gray-500 p-[0.1rem] text-center fhd:border-2 fhd:p-1">{repeats}</span>

	<span class="border border-gray-500 p-[0.1rem] fhd:border-2 fhd:p-1">Zeit</span>
	<span class="border border-gray-500 p-[0.1rem] text-center fhd:border-2 fhd:p-1">{time}</span>
</div>
