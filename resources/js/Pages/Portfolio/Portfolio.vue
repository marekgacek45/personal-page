<template>
    <section class="section lg:h-[calc(100vh-71px)] mt-[71px] bg-ownPurple-400">
        <!-- CONTAINER---->
        
        <div class="flex flex-col justify-center items-center ">

        

        <div >
            <button @click="setCategory(null)" class="border border-red-400 p-6 mx-6">ALL</button>
          <button v-for="category in categories" :key="category" @click="setCategory(category)" class="border border-red-400 p-6 mx-6" >{{ category }}</button>
        </div>


        <div class="flex gap-12">
            <img v-for="image in filteredImages" :src="image.url" :key="image.id" class="w-20">
        </div>

    </div>
    </section>
</template>

<script setup>

import { ref,computed } from 'vue';

let selectedCategory = ref(null)

const categories = ref(['1','2','3'])

const images = ref([
    {
        id:1,url:'/assets/images/header.png',category:'1'
    },
    {
        id:2,url:'/assets/images/1.jpg',category:'1'
    },
    {
        id:3,url:'/assets/images/2.jpg',category:'2'
    },
    {
        id:4,url:'/assets/images/3.jpg',category:'2'
    },
    {
        id:5,url:'/assets/images/4.jpg',category:'3'
    },
])

const filteredImages = computed(() => {
  if (selectedCategory.value === null) {
    return images.value;
  }
  return images.value.filter(image => image.category === selectedCategory.value);
});

const setCategory = (category) => {
  selectedCategory.value = category;
};

</script>