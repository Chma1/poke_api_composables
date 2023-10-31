<script setup>
import LoadingPokemon from "@/components/LoadingPokemon.vue";
import { getData } from '@/hooks/getData.js'

const { showPokemon, loading, getPokemon } = getData()
const pokemons = getPokemon
showPokemon('https://pokeapi.co/api/v2/pokemon');
</script>
<template>

    <LoadingPokemon v-if="loading" />
    <div class="col-sm-12 container " v-else>
        <div class="row">
            <div class="col-sm-3  mb-2 mt-3" v-for="(poke, i) in pokemons?.results" :key="i">
                <div class="d-flex align-items-center card border p-3">
                    <router-link :to="`/pokedex/${poke.name}`" class="nav_pokemon text-dark ">{{ poke.name
                    }}</router-link>
                </div>
            </div>


            <div class="mt-3 text-center">
                <button class="btn btn-danger me-1" @click="showPokemon(pokemons.previous)"
                    :disabled="!pokemons.previous">Previus</button>
                <button class="btn btn-primary " @click="showPokemon(pokemons.next)"
                    :disabled="!pokemons.next">Next</button>
            </div>



        </div>
    </div>
</template>
<style scoped>
.nav_pokemon {
    text-decoration: none;
}

.card {
    color: #000;
}

.card:hover {
    background: rgba(255, 0, 0, 0.575);
}
</style>
