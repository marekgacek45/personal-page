<template>
    <transition name="fade" mode="out-in" appear>
       <div>

           <SideBar/>
           <NavBar/>
           <slot></slot>
           
           
        </div>
        </transition>
    </template>

<script setup>

import SideBar from "@/Shared/Admin/SideBar.vue";
import NavBar from "@/Shared/Admin/NavBar.vue";

</script>


<style>


.fade-enter-active,
.fade-leave-active {
    transition: opacity 3s;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}

</style>