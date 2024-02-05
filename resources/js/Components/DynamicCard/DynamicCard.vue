<template>
    <div class="w-full box-shadow">
        <div class="bg-black p-2">
            <span
                class="text-fontLight uppercase font-bold font-textArch text-xl"
                >Usługi</span
            >
        </div>
        <div class="border-x-2 border-black " :class="currentBackground">
            <img :src="currentImage" alt="" class="w-full h-96" />
            <div class="px-6 py-10 border-t-2 border-fontDark min-h-64 md:min-h-56 lg:min-h-64 xl:min-h-56 2xl:min-h-48">
                <p class="font-textArch text-lg">{{ currentText }}</p>
            </div>
        </div>
        <div class="grid grid-cols-4">
            <button
                type="button"
                v-for="(item, index) in items"
                :key="index"
                class="border-2 border-r-0 last:border-r-2 border-fontDark font-textArch font-bold p-2 text-center "
                :class="isActive === index ? item.background : 'bg-bgLight-200'"
                @click="change(item.text, item.image, item.background, index)"
            >
                {{ item.label }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";



const items = [
    {
        label: "WWW",
        text: "Tworzę innowacyjne, responsywne oraz błyskawicznie działające strony internetowe dostosowane do Twoich indywidualnych potrzeb, byś mógł zachwycić swoich odbiorców. Koniec z gotowcami stawianymi od szablonu!",
        image: "/assets/images/1.jpg",
        background: "bg-ownPink-400",
    },
    {
        label: "DESIGN",
        text: "Zaprezentuję Ci wyjątkowe projekty, stworzone z myślą o Tobie! Styl moich witryn to efekt indywidualnego podejścia, dostosowanego do specyfiki Twojej branży oraz osobistych preferencji. Wyrwij się spod wpływu szablonów z poprzedniej dekady – każdy mój projekt to nowoczesny design i świeży styl.",
        image: "/assets/images/2.jpg",
        background: "bg-ownBlue-400",
    },
    {
        label: "SOCIAL MEDIA",
        text: "Oferuję kompleksowe zarządzanie mediów społecznościowych! Zajmuję się nie tylko tworzeniem, ale również aktywnym prowadzeniem profili na platformach społecznościowych. Moje podejście to więcej niż tylko posty - to budowanie zaangażowania, kreowanie unikalnej tożsamości marki i interakcja z Twoją społecznością. Zaufaj mi, abyś mógł skupić się na rozwoju swojego biznesu, a ja zadbanym o Twój wizerunek online",
        image: "/assets/images/3.jpg",
        background: "bg-ownTurquise-400",
    },
    {
        label: "TREŚCI",
        text: "Zapewniam kompleksowe treści dla Twojej strony internetowej! Specjalizuję się nie tylko w tworzeniu tekstów, ale również w fotografii. Moje usługi obejmują pisanie treści, które przyciągają uwagę i angażują czytelnika, a także fotografowanie, by wzbogacić Twoją stronę w unikalne wizualne doświadczenia. Dzięki mojemu podejściu, Twoja strona stanie się nie tylko informacyjna, ale także atrakcyjna i zgodna z najnowszymi trendami.",
        image: "/assets/images/4.jpg",
        background: "bg-ownPurple-400",
    },
];

const currentText = ref(items[0]['text']);
const currentImage = ref(items[0]['image']);
const currentBackground = ref(items[0]['background']);
const isActive = ref(0);

const change = (text, image, background, index) => {
    currentText.value = text;
    currentImage.value = image;
    currentBackground.value = background;
    isActive.value = index;
};
</script>
