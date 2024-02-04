<template>
   <div class="border-2 border-black box">
                            <div class="bg-black p-2">
                                <span
                                    class="text-fontLight uppercase font-bold font-textArch text-xl"
                                    >Opinie</span
                                >
                            </div>
                            <div
                                class="bg-bgLight-200 py-6 px-6 flex flex-col justify-center items-center gap-6"
                            >
                                <div
                                    class="flex flex-col justify-center items-center gap-6 text-center"
                                >
                                    <a :href="currentLink" target="_blank"
                                        ><img
                                            :src="currentImage"
                                            alt="logo firmy"
                                            class="w-30 h-20"
                                    /></a>

                                    <p class="font-textArch text-xl min-h-[140px] md:min-h-[115px] 2xl:min-h-[90px] md:px-12 lg:px-0">
                                        {{ currentText }}
                                    </p>
                                </div>
                                <div class="flex gap-4">
                                    <button
                                        class="border-2 border-black bg-ownYellow-400 px-1"
                                        @click="previousTestimonial"
                                    >
                                        <img
                                            src="/assets/icons/left.svg"
                                            alt=""
                                            class="w-10 hover:scale-90 duration-300"
                                        /></button
                                    ><button
                                        class="border-2 border-black bg-ownYellow-400 px-1"
                                        @click="nextTestimonial"
                                    >
                                        <img
                                            src="/assets/icons/right.svg"
                                            alt=""
                                            class="w-10 hover:scale-90 duration-300"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";

const testimonials = [
    {
        image: "/assets/clients/podajLapsie.png",
        link:'https://podajlapsie.pl',
        body: "Wygląd strony przeszedł moje początkowe wyobrażenia(...) Oprócz tego Marek zajął się również profilem mojej firmy w google jak i wykonał dla mnie wizytówki, które również są przepiękne",
    },
    {
        image: "/assets/clients/bentto.png",
        link:'https://bentto.eu',
        body: "Rzetelne i profesjonalne podejście. Plus mega robota wykonana z moją stroną www i jeszcze ogarnięte zdjęcia biura itp.!",
    },
    {
        image: "/assets/clients/mixo.png",
        link:"https://mixoexpert.pl",
        body: " Dzięki zaangażowaniu i kreatywność Marka moja strona www wygląda tak jak chciałem a nawet lepiej 😁",
    },
];

const currentIndex = ref(0);

const currentImage = computed(() => testimonials[currentIndex.value].image);
const currentLink = computed(() => testimonials[currentIndex.value].link);
const currentText = computed(() => testimonials[currentIndex.value].body);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  resetInterval();
};

const previousTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
  resetInterval();
};

let intervalId;

const resetInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(nextTestimonial, 5000);
};

// Automatyczna zmiana co 5 sekund
intervalId = setInterval(nextTestimonial, 5000);

// Czyszczenie interwału przed zniszczeniem komponentu
onUnmounted(() => {
  clearInterval(intervalId);
});</script>