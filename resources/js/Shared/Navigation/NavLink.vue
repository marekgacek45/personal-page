<template>
    
         <Link :class="{ 'mobile': isMobile, 'desktop': !isMobile, 'active':isActive }"><slot></slot></Link>
   
</template>

<script setup>

defineProps({
    isMobile:Boolean,
    isActive:Boolean,
})

</script>

<style>
.mobile {
    @apply text-fontLight font-heading text-6xl lg:text-7xl uppercase opacity-70 hover:opacity-100 duration-300;
}

.desktop {
    @apply cursor-pointer font-semibold text-xl;
}

.active{
    @apply text-red-400
}
</style>