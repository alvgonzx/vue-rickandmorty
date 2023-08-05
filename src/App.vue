<script setup>
import { ref } from "vue";
import Character from "./components/Character.vue";

const fetchCharacters = async (page) => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    console.log(data);
};

fetchCharacters(4);
</script>

<template>
    <header>
        <h1
            class="text-5xl pt-4 pb-1 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-bold"
        >
            Rick and morty
        </h1>
        <p class="text-xl font-medium text-center">
            Rick and morty API project for learning VueJS
        </p>
    </header>

    <main>
        <div class="flex flex-col lg:flex-row lg:w-full">
            <Character />
            <Character />
            <Character />
            <Character />
        </div>
    </main>
</template>
