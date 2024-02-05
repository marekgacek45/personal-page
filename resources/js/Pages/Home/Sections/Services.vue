<template>
    <section class="bg-ownOrange-600 ">
    <div
    class="max-w-screen-2xl mx-auto flex flex-col lg:flex-row h-full px-6 sm:px-12 md:px-24 lg:px-12 2xl:px-24 gap-12 2xl:gap-24 py-16 lg:py-24"
>
<div
class="flex justify-center items-center  lg:h-auto lg:w-1/2 md:px-12 lg:px-0"
>
    <DynamicCard />
</div>

<div
class="lg:w-1/2 flex flex-col gap-20 justify-center lg:mr-3 py-6 lg:py-12"
>
    <div class="space-y-6 lg:space-y-4">
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
    </div>
    <div class="md:px-12 lg:px-0">
        
        <TestimonialsCard/>
    </div>
</div>
</div>
</section>
    </template>

<script setup>
import DynamicCard from "@/Components/DynamicCard/DynamicCard.vue";
import TestimonialsCard from "@/Components/TestimonialsCard.vue";

</script>

<!-- 
<style scoped>
.box, .text-shadow {
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.4);
}
</style> -->