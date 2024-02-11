<template>
    <Head title="O mnie">
        <meta name="description" content="opis" />
    </Head>
    <Layout>
        <main
            class="section  mt-[71px] bg-ownOrange-600"
        >
        <div
            class="wrapper"
        >
            <!-- TEXT---->
            <div
                class="flex flex-col justify-center gap-6 lg:w-1/2 lg:mr-3 py-12"
            >
                <h1 class="text-7xl  font-heading">
                    Cześć, mam na imię Marek
                </h1>
                <h2
                    class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"
                >
                Jestem <span class="font-heading">WebDeveloperem</span>, który z pasją tworzy strony internetowe. 
                </h2>
                <h2
                    class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"
                >
                Walczę na całej powierzchni internetowego pola, wykorzystując <span class="font-heading">PHP</span> i <span class="font-heading">JavaScript</span> jako swoje oręża.
                </h2>
                <h2
                    class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"
                >
                To dzięki nim mogę realizować swoją wizję i tworzyć strony, które <span class="font-heading">zachwycają</span> odbiorców.
                </h2>
                
            </div>
            <!-- IMAGE---->
            <div
                class="flex justify-center items-center h-96 lg:h-auto mt-6 mb-12 lg:w-1/2 lg:py-16 lg:px-4 xl:p-10 2xl:p-20"
            >
                <img
                    src="/assets/images/header.png "
                    alt=""
                    class="h-full object-cover box-shadow min-h-96"
                    loading="lazy"
                />
            </div>
        </div>
       <TechsMarquee :techs="techs"/>
        </main>
    </Layout>
</template>

<script setup>
import Layout from "@/Layouts/Layout.vue";
import TechsMarquee from "@/Pages/About/TechsMarquee.vue"


defineProps({
    techs:Array
})



</script>

