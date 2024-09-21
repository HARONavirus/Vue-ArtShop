<script setup>
defineProps({
    title: String,
    description: String,
    imageUrl: String,
    imageHeight: Number,
    imageWidth: Number
})

</script>

<template>
    <div class="flex flex-col item-center text-center w-72 mx-auto">
        <img :height="imageHeight" :width="imageWidth" :src="imageUrl" alt="Info image"/>
        <h2 class="mt-4 text-2xl fonr-medium">{{ title }}</h2>
        <p class="text-gray-400 mt-2">{{ description }}</p>
    </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>