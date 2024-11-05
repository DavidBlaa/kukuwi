<script lang="ts">

    let {
        spinning = false,
        width = "w-[240px]",
        height = "h-[240px]",

    }:{
        spinning: boolean
        width?:string;
        height?:string
    } = $props()



</script>




<div class="flex flex-row justify-center items-center {height} {width}">
    <div class="flex flex-row justify-center items-center w-full h-full rounded-full bg-gray-600 {spinning?'animate-spin-slow':''}">
            <div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800


            ">
                <div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800
                            border-t-gray-300 border-t-2
                            border-b-gray-300 border-b-2
                            border-l-gray-800 border-l-2
                            border-r-gray-800 border-r-2">

                    <div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800
                            border-t-gray-300 border-t-2
                            border-b-gray-300 border-b-2
                            border-l-gray-800 border-l-2
                            border-r-gray-800 border-r-2">
                        <div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800
                            border-t-gray-300 border-t-2
                            border-b-gray-300 border-b-2
                            border-l-gray-800 border-l-2
                            border-r-gray-800 border-r-2">

                            <div class="flex flex-row justify-center items-center w-4/6 h-4/6 rounded-full bg-red-800">

                                <div class="flex flex-row justify-center items-center w-1/6 h-1/6 rounded-full bg-white">
                                </div>

                            </div>

                        </div>

                </div>

                </div>
            </div>
    </div>

</div>
