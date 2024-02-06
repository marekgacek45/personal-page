<template>
    <header
        class="relative flex flex-col bg-ownYellow-400 lg:h-[calc(100vh-71px)]   mt-[71px]"
    >
        <!-- CONTAINER---->
        <div class="max-w-screen-2xl mx-auto flex flex-col lg:flex-row h-full px-6 sm:px-12 md:px-24 lg:px-12 2xl:px-24 ">
            <!-- TEXT---->
            <div class="lg:w-1/2 flex flex-col gap-6 justify-center lg:mr-3 py-12">
                <h1 class=" text-7xl md:text-8xl xl:text-9xl font-heading">
                    Stwórz stronę swoich marzeń
                </h1>
                <h2 class=" text-xl md:text-2xl xl:text-3xl font-textArch leading-relaxed">
                    Projektuję, tworzę i rozwijam innowacyjne strony internetowe
                    które zaprezentują Twoją markę, zachwycą Twoich klientów i
                    dodadza wiarygodności Twojej i tak już niesamowitej
                    organizacji
                </h2>
                <div>
                    <primary-button class="">Oferta</primary-button>
                </div>
            </div>
            <!-- IMAGE---->
            <div class="flex justify-center items-center h-96 lg:h-auto mt-6 mb-12 lg:w-1/2 lg:py-16 lg:px-4 xl:p-10 2xl:p-20">
                <img
                    src="/assets/images/header.png"
                    alt=""
                    class="h-full object-cover"
                />
            </div>
        </div>
        <!--END CONTAINER---->
        <!-- SLIDER---->
        <div class="flex justify-center pb-12">
            <p class="text ">
                Strony Internetowe • Design • Social Media • Copywriting • Fotografia • Artykuły Marketingowe • Wizytówki Google •
            </p>
            <p class="text ">
                Strony Internetowe • Design • Social Media • Copywriting • Fotografia • Artykuły Marketingowe • Wizytówki Google •
            </p>
            <p class="text ">
                Strony Internetowe • Design • Social Media • Copywriting • Fotografia • Artykuły Marketingowe • Wizytówki Google •
            </p>
        </div>
    </header>
</template>

<script setup>
// import Navigation from "@/Shared/Navigation/Navigation.vue";
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";
</script>

<style scoped>
.text {
    animation: scroll 20s infinite linear;
    @apply text-6xl sm:text-7xl xl:text-8xl uppercase font-heading text-nowrap ml-3;
}

@keyframes scroll {
    100% {
        transform: translateX(-100%);
    }
}

img{
  box-shadow:10px 10px 0 rgba(0,0,0,.4) ;
}

</style>
