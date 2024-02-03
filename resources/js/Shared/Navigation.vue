<template>
    <nav class="bg-ownPink-200">
        <div
            class="flex justify-between items-center max-w-screen-2xl mx-auto py-4"
        >
            <span class="font-headingArch text-3xl">Marek Gacek </span>

            <ul class="flex gap-6 font-textArch text-lg">
                <li class="link">O Mnie</li>
                <li class="link">Usługi</li>
                <li class="link">Portfolio</li>
                <li class="link">Kontakt</li>
                <li class="link">Blog</li>
            </ul>

            <div class="flex justify-center items-center gap-3">
                <a href="https://www.facebook.com/marekgacekdev" target="_blank"
                    ><img
                        src="/assets/icons/facebook.svg"
                        alt=""
                        class="w-6 social"
                /></a>
                <a href="https://pl.linkedin.com/in/marek-gacek" target="_blank"
                    ><img
                        src="/assets/icons/linkedin.svg"
                        alt=""
                        class="w-6 social "
                /></a>
                <a href="https://github.com/marekgacek45" target="_blank"
                    ><img
                        src="/assets/icons/github.svg"
                        alt=""
                        class="w-6 social"
                /></a>
                <a href="https://www.youtube.com/@marekgacekdev" target="_blank"
                    ><img
                        src="/assets/icons/youtube.svg"
                        alt=""
                        class="w-9 social"
                /></a>
            </div>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped>
.link {
    @apply cursor-pointer;
}

.social {
    @apply hover:-skew-y-12 duration-300;
}
</style>
