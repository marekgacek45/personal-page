<template>
    <div>
        <NavBar/>
        <Header></Header>
        <main>
            <section class="bg-ownOrange-600">
                <!--TAKI SAM JAK W HEADING-->
<div class="max-w-screen-2xl mx-auto flex flex-col lg:flex-row h-full px-6 sm:px-12 md:px-24 lg:px-12 2xl:px-24 gap-24 py-24">

    <!-- <div class="flex justify-center items-center h-96 lg:h-auto mt-6 mb-12 lg:w-1/2 lg:py-16 lg:px-4 xl:p-10 2xl:p-20"> -->
    <div class="flex justify-center items-center h-96 lg:h-auto  lg:w-1/2  ">
        <div class="border-2 border-black w-full">
            <div class="bg-black p-2"><span class="text-fontLight uppercase font-bold font-textArch text-xl">Usługi</span></div>
            <div class="bg-white">


    <img src="/assets/images/header.png" alt="" class="w-full h-96 ">
    <div class="px-6 py-10">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus earum, dolor quos temporibus amet architecto. Quas magni laboriosam officiis quia nihil ipsa tempora repellat culpa, suscipit, veniam minus praesentium facilis?</p>
    </div>
    <div class="flex justify-between items-center">
        <div class="border-2 border-black p-2 text-center w-1/4">USŁUGA</div>
        <div class="border-2 border-black p-2 text-center w-1/4">USŁUGA</div>
        <div class="border-2 border-black p-2 text-center w-1/4">USŁUGA</div>
        <div class="border-2 border-black p-2 text-center w-1/4">USŁUGA</div>
    </div>

            </div>
        </div>
            </div>

    <div class="lg:w-1/2 flex flex-col gap-6 justify-center lg:mr-3 py-12">
        <h3 class="font-textArch text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa officia hic quod, quia ut accusantium nemo molestiae optio obcaecati.</h3>

        <div class="border-2 border-black">
            <div class="bg-black p-2"><span class="text-fontLight uppercase font-bold font-textArch text-xl">Opinie</span></div>
            <div class="bg-white py-6 px-12 flex flex-col justify-center items-center gap-6">
                <div class="flex flex-col justify-center items-center gap-6">

                    <img src="/assets/clients/podajLapsie.png" alt="" class="w-20">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora incidunt consectetur nobis dignissimos aut fuga nesciunt deserunt sequi mollitia eaque?"</p>
                </div>
                <div class="flex gap-4"><button class="border-2 border-black px-2">left</button><button class="border-2 border-black px-2">right</button></div>
</div>
                
        </div>

    </div>
</div>
            </section>
        </main>
        
    </div>
</template>


<script setup>


import Header from '@/Shared/Header.vue'
import NavBar from '@/Shared/Navigation/NavBar.vue';


</script>

<style scoped>

</style>