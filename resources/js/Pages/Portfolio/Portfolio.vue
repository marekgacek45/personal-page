<template>
    <section
        class="section lg:min-h-[calc(100vh-371px)] mt-[71px] bg-ownPurple-400"
    >
        <div
            class="flex flex-col flex-start items-center h-full px-6 sm:px-12 md:px-24 lg:px-0 py-24 gap-12"
        >
        <!--BUTTONS-->
            <div class="flex flex-wrap justify-center items-center gap-8">
                <button
                    class="btn box-shadow"
                    :class="
                        selectedCategory === null
                            ? 'bg-ownTurquise-400 hover:bg-ownTurquise-600'
                            : 'bg-ownYellow-400 hover:bg-ownYellow-600'
                    "
                    @click="setCategory(null)"
                >
                    ALL
                </button>
                <button
                    v-for="category in categories"
                    :key="category.id"
                    class="btn box-shadow"
                    @click="setCategory(category.name)"
                    :class="
                        selectedCategory === category.name
                            ? 'bg-ownTurquise-400 hover:bg-ownTurquise-600'
                            : 'bg-ownYellow-400 hover:bg-ownYellow-600'
                    "
                >
                    {{ category.name }}
                </button>
            </div>
<!--PROJECTS-->
            <transition-group
                name="list"
                tag="div"
                class="flex w-full flex-wrap gap-8 justify-center"
            >
                <OldSchoolCard
                    v-for="project in filteredProjects"
                    :key="project.id"
                    :title="project.title"
                    customClass=" w-full lg:w-1/3 2xl:w-1/4"
                    class="project hover:animate-shake cursor-pointer"
                    @click="openModal(project)"
                >
                    <img
                        :src="project.thumbnail"
                        alt="miniaturka projektu"
                        class="max-h-[300px] w-full h-full object-cover"
                    />
                    <div
                        v-for="category in project.categories"
                        :key="category.id"
                    ></div>
                </OldSchoolCard>
            </transition-group>
        </div>
        <!--MODAL-->
        <v-if isModalOpen>
        <ModalProject
            :activeProject="activeProject"
            :isModalOpen="isModalOpen"
            @update:isModalOpen="isModalOpen = $event"
        />
    </v-if>
    </section>

   
</template>

<script setup>
import OldSchoolCard from "@/Components/OldSchoolCard.vue";
import ModalProject from "@/Components/ModalProject.vue";

import { ref, computed } from "vue";

const props = defineProps({
    projects: Array,
    categories: Array,
});

let projects = ref([...props.projects]);
let selectedCategory = ref(null);
let activeProject = ref(null);

const filteredProjects = computed(() => {
    if (selectedCategory.value === null) {
        return projects.value;
    }
    return projects.value.filter((project) =>
        project.categories.some(
            (category) => category.name === selectedCategory.value
        )
    );
});

const setCategory = (category) => {
    selectedCategory.value = category;
};

let isModalOpen = ref(false);

const openModal = (project) => {
    activeProject.value = project;
    isModalOpen.value = true;

    console.log("open modal");
    console.log(activeProject.value);
};
</script>

<style scoped>
.btn {
    @apply px-10 py-4    text-xl font-text font-bold hover:animate-shake duration-300;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s ease-in-out;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: rotate(0deg) scale(0);
}
.list-enter-to,
.list-leave-from {
    opacity: 1;
    transform: rotate(360deg) scale(1);
}

/* .modal-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(-180deg);
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 1s ease, transform 1s cubic-bezier(.68,-.55,.27,1.55);
} */
</style>
