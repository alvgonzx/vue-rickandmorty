<script setup>
import { ref } from "vue";
import Character from "./components/Character.vue";

const characters = ref([]);
const page = ref(1);

const fetchCharacters = async (page) => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();

    characters.value = data.results;
};

fetchCharacters(page.value);
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
        <div class="flex lg:flex-wrap flex-col lg:flex-row lg:w-full" >
            <Character v-for="character in characters" :key="character.id" :name="character.name" :status="character.status" :species="character.species" img="" />
        </div>
    </main>
</template>
