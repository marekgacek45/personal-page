<template>
    <Head title="Dowiedz się co nieco o mnie | Marek Gacek">
        <meta name="description" content="Zajrzyj i poznaj programistę, który łączy kodowanie i marketing w niebanalny sposób. Wejdź i zobacz, jak moja praca wyróżnia się w świecie online" />
    </Head>
    <Layout>
        

            <main
            
            >

             <FirstSection :technologies="technologies"/>
            <SecondSection/> 
            
        </main>
    
    </Layout>
</template>

<script setup>
import Layout from "@/Layouts/Layout.vue";

import FirstSection from "./FirstSection.vue";
import SecondSection from './SecondSection.vue'

const props = defineProps({
    technologies:Array
})



</script>

