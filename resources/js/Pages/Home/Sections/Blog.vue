<template>
    <section class="bg-ownTurquise-400 py-24">
        <h2 class="text-6xl font-heading text-center mb-24">
            Znajdzie się również coś do lektury dla programistycznych zapaleńców
        </h2>

        <div class="grid grid-cols-5">

            <PostCard v-for="post in posts" :key="post.id" :thumbnail="post.thumbnail" title="post.title"/>
        </div>

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
import PostCard from "@/Components/PostCard.vue";
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";

const posts = [
    {
        id: 1,
        title: "tytuł posta nr 1",
        thumbnail: "/assets/images/header.png",
    },
    {
        id: 2,
        title: "tytuł posta nr 2",
        thumbnail: "/assets/images/header.png",
    },
    {
        id: 3,
        title: "tytuł posta nr 3",
        thumbnail: "/assets/images/header.png",
    },
    {
        id: 4,
        title: "tytuł posta nr 4",
        thumbnail: "/assets/images/header.png",
    },
    {
        id: 5,
        title: "tytuł posta nr 5",
        thumbnail: "/assets/images/header.png",
    },
];
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