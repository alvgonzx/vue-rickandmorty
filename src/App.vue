<script setup>
import { ref } from "vue";
import Character from "./components/Character.vue";

const characters = ref([]);
const page = ref(0);

const DISABLED_PREVIOUS = "previous";
const DISABLED_NEXT = "next";

const fetchCharacters = async (page) => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();

    characters.value = data.results;
};

const previous = () => {
    page.value--;
    fetchCharacters(page.value);
};

const next = () => {
    page.value++;
    fetchCharacters(page.value);
};

const checkDisabled = (type) => {
    if (type === DISABLED_PREVIOUS && page.value === 1) {
        return true;
    } else if (type === DISABLED_NEXT && page.value === 42) {
        return true;
    } else return false;
};

next();
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
        <div class="flex xl:flex-wrap flex-col xl:flex-row xl:w-full">
            <Character
                v-for="character in characters"
                :key="character.id"
                :name="character.name"
                :status="character.status"
                :species="character.species"
                :img="character.image"
            />
        </div>
        <div class="flex justify-center pb-4">
            <button
                @click="previous"
                class="bg-yellow-500 hover:bg-yellow-600 text-white text-center mx-auto py-2 px-4 rounded-md disabled:bg-gray-300 disabled:text-gray-100"
                :disabled="checkDisabled(DISABLED_PREVIOUS)"
            >
                Previous page
            </button>
            <button
                @click="next"
                class="bg-red-500 hover:bg-red-600 text-white text-center mx-auto py-2 px-4 rounded-md disabled:bg-gray-300 disabled:text-gray-100"
                :disabled="checkDisabled(DISABLED_NEXT)"
            >
                Next page
            </button>
        </div>
    </main>
</template>
