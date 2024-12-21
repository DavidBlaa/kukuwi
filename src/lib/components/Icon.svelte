<script>
	export let viewBox = '0 0 48 48'; // Standard Ansicht für das Icon
	export let className = ''; // Optionale CSS-Klassen (für Größensteuerung)
	export let src;
</script>

<svg
	{viewBox}
	xmlns="http://www.w3.org/2000/svg"
	class={`icon p-2 sm:p-3 md:p-4 lg:p-5 ${className}`}
	role="img"
>
	<image href={src} width="100%" height="100%" preserveAspectRatio="xMidyMid meet" />
</svg>
