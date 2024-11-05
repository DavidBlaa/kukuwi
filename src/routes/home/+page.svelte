<script lang="ts">
    import { goto } from '$app/navigation';
		import logo from '$lib/assets/logo_name_outline.png';

  function handleNavigation() {
    goto('/modus');
  }
</script>



<div class="flex justify-center flex-col h-screen items-center bg-blue-300" >


	<img class="basis-1/8 object-contain h-12 m-10 " alt="The project logo " src={logo} />
	<h1 class="basis-1/2 font-sans font-extrabold text-9xl text-black-500 outline-4"  style=" -webkit-text-fill-color: #F2AE2E;
  -webkit-text-stroke: 3px;">Musik-Spiel</h1>
	<button on:click={handleNavigation} class="basis-1/5 w-1/3 bg-green-500 hover:bg-green-200 text-white text-4xl font-bold border-2 border-black rounded">Start</button>


</div>



