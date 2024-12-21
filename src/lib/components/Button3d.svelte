<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type Button3dProps = {
		bgFront: string;
		bgBack: string;
		padding?: string;
		translateY?: string;
		children: any;
		onclick?: (this: Window, ev: MouseEvent) => any;
		onmouseup?: (...args: any[]) => any;
		onmousedown?: (...args: any[]) => any;
		style?: string;
	};

	let {
		bgFront,
		bgBack,
		padding,
		translateY = 'translate-y-[-0.375rem]',
		children,
		onclick,
		onmouseup,
		onmousedown,
		style
	}: Button3dProps = $props();
</script>

<button
	class={twMerge(
		'rounded-xl border-none p-0 active:[&>span]:translate-y-[-0.125rem]',
		bgBack,
		style
	)}
	{onclick}
	{onmouseup}
	{onmousedown}
>
	<span class={twMerge(`block rounded-xl duration-75 ${translateY} ${bgFront}`, padding)}>
		{@render children()}
	</span>
</button>
