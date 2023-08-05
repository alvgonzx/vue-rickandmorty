<script setup>
const props = defineProps(["img", "name", "status", "species"]);
</script>

<template>
    <article class="w-full xl:w-1/4 p-4">
        <div class="bg-white rounded-lg shadow-lg">
            <div class="h-64 rounded-t-lg flex justify-center">
                <img :src="img">
            </div>
            <div class="p-4 xl:text-left text-center">
                <h2 class="text-2xl font-bold">{{ name }}</h2>
                <p class="text-gray-600">{{ species }} · {{ status }}</p>
            </div>
        </div>
    </article>
</template>
