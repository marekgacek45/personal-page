<template>
    <Head title="Strona Główna">
        <meta name="description" content="opis" >
    </Head>
    <Layout>
        <Header :scrollingText="' Strony Internetowe • Design • Social Media • Copywriting • Fotografia • Artykuły Marketingowe • Wizytówki Google •'"></Header>
        <main>
            <Services :comments="comments"/>
            <Blog  :posts="posts"/>
           
        </main>
<p v-for="comment in comments">{{ comment.id }}</p>
    </Layout>
</template>

<script setup>
import Layout from "@/Layouts/Layout.vue";

import Header from "@/Pages/Home/Sections/Header.vue";
import Services from "@/Pages/Home/Sections/Services.vue";
import Blog from "@/Pages/Home/Sections/Blog.vue";

const props =defineProps({
    posts:Array,
    comments:Array
})


</script>
