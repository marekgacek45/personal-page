<template>
    <Head title="O mnie">
        <meta name="description" content="opis" />
    </Head>
    <Layout>
        

            <main
            
            >

             <FirstSection :techs="techs"/>
            <SecondSection/> 
            
        </main>
    
    </Layout>
</template>

<script setup>
import Layout from "@/Layouts/Layout.vue";

import FirstSection from "./FirstSection.vue";
import SecondSection from './SecondSection.vue'

defineProps({
    techs:Array
})



</script>

