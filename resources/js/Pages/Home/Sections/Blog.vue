<template>
    <section class="bg-ownTurquise-400 section py-16 lg:py-24">
        
        <div class="max-w-screen-2xl mx-auto text-center px-4 sm:px-12 md:px-24 lg:px-12 2xl:px-24">

            <h2 class=" text-5xl xs:text-6xl lg:text-7xl xl:text-8xl mb-24 uppercase font-heading">
                Zanurz się w lekturze i odkryj ciekawostki z programistycznego świata
            </h2>
        </div>

       <section class="flex flex-col justify-center items-center  gap-12 md:gap-16">

           <BlogSection :posts="posts"/>

           <primary-button class="bg-white hover:bg-bgLight-400">Zobacz wszytkie wpisy</primary-button>
        </section>

        <div class="pt-24 flex gap-12 max-w-screen-2xl mx-auto">
          <div class="w-1/2 py-24 flex flex-col justify-between items-start">
            
        <h2 class="text-6xl font-heading">
            Unikalność to klucz!
        </h2>
        <h3 class="font-textArch text-3xl">
            Odrzuć standardy - wybierz projekt stworzony
            specjalnie dla Ciebie.
        </h3>
        <h3 class="font-heading text-4xl">
            Po prostu daj znać, a ja zajmę się resztą!
        </h3>
    
               <primary-button>zobacz</primary-button>
          </div>

          <div class="w-1/2"> 
            
    <div class="w-full box-shadow">
        <div class="bg-black p-2">
            <span
                class="text-fontLight uppercase font-bold font-textArch text-xl"
                >YouTube</span
            >
        </div>
        <div class="border-x-2 border-black " >
            <img src="/assets/images/header.png" alt="" class="w-full h-[500px]" />
            
        </div>
       
    </div>

          </div>
        </div>

      
    </section>
</template>

<script setup>
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";
import BlogSection from "@/Components/Home/BlogSection.vue";


defineProps({
    posts:Array
})

</script>

<style scoped>
.text {
    animation: scroll 17s infinite linear;
    @apply text-6xl font-heading text-center mb-24 text-nowrap ml-3;
}

@keyframes scroll {
    100% {
        transform: translateX(-100%);
    }
}</style>