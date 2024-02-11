<template>
    <section class="section lg:min-h-[calc(100vh-371px)]  mt-[71px] bg-ownPurple-400">
        <!-- CONTAINER---->
        
        <div class=" flex flex-col flex-start items-center  h-full  px-6 sm:px-12 md:px-24 lg:px-12 2xl:px-24 py-24 gap-12">

        

        <div class="flex justify-center items-center gap-12 ">
            <button @click="setCategory(null)" class="btn box-shadow">ALL</button>
          <button v-for="category in categories" :key="category" @click="setCategory(category)" class="btn box-shadow" >{{ category }}</button>
           
        </div>



       
        <transition-group name="fade" tag="div" class=" flex w-full flex-wrap gap-6 justify-center">
      
        
            <OldSchoolCard v-for="image in filteredImages"  :key="image.id" :title="image.category" customClass="w-1/4">
            <img :src="image.url" alt="" class="max-h-[300px] w-full h-full object-cover"></OldSchoolCard>
        <!-- </div> -->
        </transition-group>

    </div>
    </section>
</template>

<script setup>

import OldSchoolCard from '@/Components/OldSchoolCard.vue';

import { ref,computed } from 'vue';

let selectedCategory = ref(null)

const categories = ref(['Laravel','Vue','Blade','Strapi','PHP'])

const images = ref([
    {
        id:1,url:'/assets/images/header.png',category:'Laravel'
    },
    {
        id:2,url:'/assets/images/1.jpg',category:'Vue'
    },
    {
        id:3,url:'/assets/images/2.jpg',category:'Laravel'
    },
    {
        id:4,url:'/assets/images/3.jpg',category:'Blade'
    },
    {
        id:5,url:'/assets/images/4.jpg',category:'Strapi'
    },
    {
        id:5,url:'/assets/images/4.jpg',category:'Strapi'
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
  etTimeout(() => { // Dodajemy opóźnienie
    selectedCategory.value = category; // Następnie ustawiamy nową kategorię
  }, 500);
};

</script>

<style scoped>
.btn{
   @apply px-10 py-4  bg-ownYellow-400 hover:bg-ownYellow-600 text-xl font-text font-bold hover:animate-shake duration-300 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(360deg);
}


</style>