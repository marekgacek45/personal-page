<template>
    <div>
        <NavBar/>
        <slot></slot>

        <Footer></Footer>
    </div>
</template>

<script setup>

import NavBar from "@/Shared/Navigation/NavBar.vue";
import Footer from "@/Shared/Footer.vue";
</script>