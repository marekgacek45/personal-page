<template>
    <div class="w-full box-shadow">
        <div class="bg-bgDark-400 p-2">
            <span
                class=" text-xl font-text font-bold  text-fontLight uppercase "
                >{{ title }}</span
            >
        </div>
        <slot></slot>
      
    </div>
</template>

<script setup>

defineProps({
    title:String
})



</script>