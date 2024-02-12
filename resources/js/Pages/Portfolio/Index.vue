<template>
    <Head title="Portfolio">
        <meta name="description" content="opis" />
        
    </Head>
    <Layout>
        
       
        <main class="relative">
         <Portfolio :projects="projects" :categories="categories"/>
        </main>
    </Layout>
</template>

<script setup>
import Layout from "@/Layouts/Layout.vue";
import Portfolio from "./Portfolio.vue";


defineProps({
  projects:Array,
  categories:Array
})

</script>
