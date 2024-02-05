<template>
    <div>
        <NavBar />
        <Header></Header>
        <main>
            <Services />

            <section>blog</section>
            <section>contact</section>
            <footer>tutaj footer</footer>
        </main>
    </div>
</template>

<script setup>
import NavBar from "@/Shared/Navigation/NavBar.vue";

import Header from "@/Pages/Home/Sections/Header.vue";
import Services from "@/Pages/Home/Sections/Services.vue";
import Blog from "@/Pages/Home/Sections/Blog.vue";
import Contact from "@/Pages/Home/Sections/Blog.vue";
</script>


