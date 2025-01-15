<script lang="ts">
	interface ComponentProps {
		time: number;
		tries: number;
		repeats: number;
	}

	let {
		time = $bindable(0),
		tries = $bindable(0),
		repeats = $bindable(0)
	}: ComponentProps = $props();
</script>

<div
	class="fhd:text-3xl fhd:border-2 grid grid-cols-2 border border-gray-500 bg-blue-200 text-[0.6rem] font-medium lg:text-xs 2xl:text-base"
>
	<span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem]">Gehört</span>
	<span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] text-center">{repeats}</span>

	<span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] pr-6">Versuche</span>
	<span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] text-center">{tries}</span>

	<span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem]">Zeit</span>
	<span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] text-center">{time}</span>
</div>
