<template>
     <Vue3Marquee :clone="true" :duration="10" class="bg-bgLight-200 p-4">
            
            <img
                v-for="tech in techs"
                :key="tech.id"
                :src="tech.src"
                class="w-20 mx-12"
            />
        </Vue3Marquee>
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";
import { computed } from "vue";

defineProps({
techs:Array
})



</script>