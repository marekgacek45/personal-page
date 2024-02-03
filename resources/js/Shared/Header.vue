<template>
    <header >
      <navigation></navigation>
      <div class="flex flex-col bg-ownYellow-400 h-[calc(100vh-68px)] relative overflow-x-hidden">
        <div class="max-w-screen-2xl mx-auto flex h-full px-24 ">
          <div class=" w-1/2 flex flex-col gap-6 justify-center">
            <h1 class="text-9xl font-heading">Stwórz stronę swoich marzeń</h1>
            <h2 class="text-3xl font-textArch leading-relaxed">
                Projektuję, tworzę i rozwijam  innowacyjne strony internetowe które zaprezentują Twoją markę, zachwycą Twoich klientów i dodadza wiarygodności Twojej i tak już niesamowitej organizacji
            </h2>
            <div>

              <primary-button class="">Oferta</primary-button>
            </div>
          </div>
          <div class="flex justify-center items-center w-1/2 p-24">
            

                <img src="/assets/images/header.png" alt="" class="h-full object-cover">
            
          </div>
        </div>
       
        <div class="flex justify-center  p-12 ">
  <p class="text text-8xl uppercase font-heading ">DON'T WORRY A LOT , JUST DO THE MUST ..&nbsp;</p>
  <p class="text text-8xl uppercase font-heading ">DON'T WORRY A LOT , JUST DO THE MUST ..&nbsp;</p>
  <p class="text text-8xl uppercase font-heading ">DON'T WORRY A LOT , JUST DO THE MUST ..&nbsp;</p>
  <p class="text text-8xl uppercase font-heading ">DON'T WORRY A LOT , JUST DO THE MUST ..&nbsp;</p>
</div>
        </div>
      
    </header>
  </template>

<script setup>
import Navigation from "@/Shared/Navigation.vue";
import PrimaryButton from "@/Components/Base/PrimaryButton.vue";
</script>


<style scoped>
.text {
  animation: scroll 13s infinite linear;
  @apply text-8xl uppercase font-heading text-nowrap
}

@keyframes scroll {
  100% {
    transform: translateX(-100%);
  }
}

</style>