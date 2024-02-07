<template>
    <Head title="Strona Główna">
        <meta name="description" content="opis" >
    </Head>
    <Layout>
        <Header :scrollingText="' Strony Internetowe • Design • Social Media • Copywriting • Fotografia • Artykuły Marketingowe • Wizytówki Google •'"></Header>
        <main>
            <Services />
            <Blog />
           
        </main>
    </Layout>
</template>

<script setup>
import Layout from "@/Layouts/Layout.vue";

import Header from "@/Pages/Home/Sections/Header.vue";
import Services from "@/Pages/Home/Sections/Services.vue";
import Blog from "@/Pages/Home/Sections/Blog.vue";
</script>
