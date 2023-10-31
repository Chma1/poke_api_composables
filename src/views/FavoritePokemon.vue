<script setup>
import { useFavoriteStore } from '@/store/favorites';
import { storeToRefs } from 'pinia';
import {RouterLink  } from 'vue-router';
// import LoadingPokemon from '../components/LoadingPokemon.vue';

const useFavorite = useFavoriteStore()
const { pokemonFavorite } = storeToRefs(useFavorite)
const { deleteFavorite } = useFavorite



</script>
<template>
    <div class="container">
        <span v-if="pokemonFavorite.length === 0" class="display-5 my-3 text-center">Aun sin favorites</span>
        <ul v-else>
            <li v-for="(poke, i) in pokemonFavorite" :key="i" class="my-4">
                <span>Pokemon: {{ poke.name }}</span>
                <img :src="poke.sprites?.other?.home?.front_default" alt="" style="width: 150px;">
                <button class="btn btn-danger me-2" @click="deleteFavorite(poke.id)">Delete</button>
                <router-link class="btn btn-info " :to="`/pokedex/${poke.name}`">More</router-link>
            </li>
        </ul>
    </div>
</template>