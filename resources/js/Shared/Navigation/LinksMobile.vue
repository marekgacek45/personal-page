<template>
      <ul class="flex flex-col justify-center items-center gap-4">
                    <li class="link"> <Link href="/o_mnie" @click="addOverflow">O Mnie</Link></li>
                    <li class="link"><Link href="/usługi" @click="addOverflow">Usługi</Link></li>
                    <li class="link"><Link href="/portfolio" @click="addOverflow">Portfolio</Link></li>
                    <li class="link"><Link href="/kontakt" @click="addOverflow">Kontakt</Link></li>
                    <li class="link"><Link href="/blog" @click="addOverflow">Blog</Link></li>
                </ul>
</template>


<script setup>

const body = document.querySelector("body");

const addOverflow = () => {
    body.classList.remove("overflow-y-hidden");
};
</script>


<style scoped>

.link {
    @apply text-fontLight font-heading text-6xl lg:text-7xl uppercase opacity-70 hover:opacity-100 duration-300;
}


</style>