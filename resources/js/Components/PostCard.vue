<template>
    <a href="" class="group">
        <div
            class="border border-y-2 border-black px-12 py-8 bg-ownPink-200  group-hover:bg-gray-500 bg-no-repeat bg-cover group-hover:bg-blend-multiply transition-all duration-100 h-full flex flex-col justify-between items-center group-hover:bg-[url('/assets/images/header.png')]"
            
        >
            <div class="h-72">
                <img
                    :src="thumbnail"
                    :alt="altText"
                    class="h-full w-full object-cover group-hover:hidden"
                />
            </div>
            <h2
                class="text-center font-heading mt-6 uppercase text-3xl group-hover:text-fontLight"
            >
                {{ title }}
            </h2>
            <button
                class="border-2 border-black w-full py-2 font-textArch mt-3 group-hover:bg-bgLight-200"
            >
                Sprawdź
            </button>
        </div>
    </a>
</template>

<script setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
    thumbnail: String,
    title: String,
});

const {title} = toRefs(props)

const altText = computed(() => `miniaturka posta o tytule ${title.value}`);



</script>
