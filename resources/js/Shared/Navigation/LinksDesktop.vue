<template>
    <ul class="flex gap-6 font-textArch text-lg">
        <!-- <li class="link"> <Link href="/o_mnie">O Mnie</Link></li>
                    <li class="link"><Link href="/usługi">Usługi</Link></li>
                    <li class="link"><Link href="/portfolio">Portfolio</Link></li>
                    <li class="link"><Link href="/kontakt">Kontakt</Link></li>
                    <li class="link"><Link href="/blog">Blog</Link></li> -->

        <li>
            <NavLink
                href="/o_mnie"
                :isActive="$page.component === 'About/Index'"
                >O mnie</NavLink
            >
        </li>
        <li>
            <NavLink
                href="/uslugi"
                :isActive="$page.component === 'Services/Index'"
                >Usługi</NavLink
            >
        </li>
        <li>
            <NavLink
                href="/portfolio"
                :isActive="$page.component === 'Portfolio/Index'"
                >Portfolio</NavLink
            >
        </li>
        <li>
            <NavLink
                href="/kontakt"
                :isActive="$page.component === 'Contact/Index'"
                >Kontakt</NavLink
            >
        </li>
        <li>
            <NavLink href="/blog" :isActive="$page.component === 'Blog/Index'"
                >Blog</NavLink
            >
        </li>
    </ul>
</template>

<script setup>
import NavLink from "./NavLink.vue";
</script>

<style scoped>
.link {
    @apply cursor-pointer font-semibold text-xl;
}
</style>
