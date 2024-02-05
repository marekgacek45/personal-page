<template>
    <div>
        <NavBar />
        <Header></Header>
        <main>
            <Services />
            <Blog />
            <Contact />
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup>
import NavBar from "@/Shared/Navigation/NavBar.vue";
import Footer from "@/Shared/Footer.vue";

import Header from "@/Pages/Home/Sections/Header.vue";
import Services from "@/Pages/Home/Sections/Services.vue";
import Blog from "@/Pages/Home/Sections/Blog.vue";
import Contact from "@/Pages/Home/Sections/Contact.vue";
</script>
