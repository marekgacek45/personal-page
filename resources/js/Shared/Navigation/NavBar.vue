<template>
    <nav class="bg-ownPink-200 text-fon z-50 fixed top-0 left-0 right-0">
        <!--CONTAINER-->
        <div
            class="flex justify-between items-center max-w-screen-2xl mx-auto py-3 px-3 xs:px-6 md:px-12 2xl:px-3"
        >
            <!--SOCIAL-->
            <div class="hidden 2xl:flex justify-start w-1/3">
                <Social />
            </div>
            <!--LOGO-->
            <div class="flex flex-start 2xl:justify-center items-center gap-1 w-1/3">
                <span class="font-heading text-4xl">Marek</span>
                <img src="/assets/logo/logo.png" alt="" class="w-16" />
                <span class="font-heading text-4xl">Gacek</span>
            </div>
            <!--LINKS-->
            <div class="hidden lg:flex justify-end w-1/3 ">
                <Links />
            </div>
            <!--HAMBURGER BTN-->
                <HamburgerButton  @click="showModal = !showModal"/>
              
        </div>
        <!--MOBILE MENU-->
        <teleport to="body">
            <MobileMenu :showModal="showModal" />
        </teleport>
    </nav>
</template>

<script setup>
import Social from "./Social.vue";
import Links from "./LinksDesktop.vue";
import HamburgerButton from './HamburgerButton.vue'
import MobileMenu from './MobileMenu.vue'

import { ref, onMounted, watch } from "vue";

const showModal = ref(false);

const body = document.querySelector("body");

onMounted(() => {
    watch(showModal, (newValue) => {
        if (newValue) {
            body.classList.add("overflow-y-hidden");
        } else {
            body.classList.remove("overflow-y-hidden");
        }
    });
});

</script>
