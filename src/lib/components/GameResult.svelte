<script lang="ts">

	import { Modal } from "@skeletonlabs/skeleton";
	import { base } from "$app/paths";
	import { goTo } from "$lib/helper";
 

 export let url:string="";

 function clickFn()
 {
  goTo(url,true)
 }

</script>

<div on:click="{clickFn}">
 <Modal />
</div>