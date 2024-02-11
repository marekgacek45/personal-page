<template>
    <section
        class="section lg:min-h-[calc(100vh-371px)] mt-[71px] bg-ownPurple-400"
    >
        <div
            class="flex flex-col flex-start items-center h-full px-6 sm:px-12 md:px-24 lg:px-12 2xl:px-24 py-24 gap-12"
        >
            <div class="flex justify-center items-center gap-12">
                <button class="btn box-shadow"   @click="setCategory(null)">ALL</button>
                <button
                    v-for="category in categories"
                    :key="category.id"
                    class="btn box-shadow"
                    @click="setCategory(category.name)"
                >
                    {{ category.name }}
                </button>
            </div>

            <div class="flex w-full flex-wrap gap-6 justify-center">
                <OldSchoolCard
                    v-for="project in filteredProjects"
                    :key="project.id"
                    :title="project.title"
                    customClass="w-1/4"
                    class="project"
                >
                    <img
                        :src="project.thumbnail"
                        alt=""
                        class="max-h-[300px] w-full h-full object-cover"
                    />
                    <div
                        v-for="category in project.categories"
                        :key="category.id"
                    >
                        
                    </div>
                </OldSchoolCard>
            </div>
        </div>
    </section>
</template>

<script setup>
import OldSchoolCard from "@/Components/OldSchoolCard.vue";



import { ref, computed } from "vue";

const props = defineProps({
    projects: Array,
    categories:Array
});


let projects= ref([...props.projects])
let selectedCategory = ref(null);


const filteredProjects = computed(() => {
    if (selectedCategory.value === null) {
        return projects.value;
    }
    return projects.value.filter(
        (project) => project.categories.some(category => category.name === selectedCategory.value)
    );
});

const setCategory = (category) => {
    selectedCategory.value = category;

   
};




</script>

<style scoped>
.btn {
    @apply px-10 py-4  bg-ownYellow-400 hover:bg-ownYellow-600 text-xl font-text font-bold hover:animate-shake duration-300;
}
</style>
