<template>
    <section class="bg-bgLight-400 section py-16 lg:py-24">
        <!--HEADING-->
        <div class="max-w-screen-2xl mx-auto text-center px-4 sm:px-12 md:px-24 lg:px-12 2xl:px-24">

            <h2 class=" text-5xl xs:text-6xl lg:text-7xl xl:text-8xl mb-24 uppercase font-heading">
                Zanurz się w lekturze i odkryj ciekawostki z programistycznego świata
            </h2>
        </div>
<!--BLOG-->
       <div class="flex flex-col justify-center items-center  gap-12 md:gap-16">

           <BlogSection :posts="posts"/>

           <primary-button aria-label="Zobacz wszytkie wpisy">Zobacz wszytkie wpisy</primary-button>
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

