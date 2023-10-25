<script setup>
import LoadingPokemon from "@/components/LoadingPokemon.vue";
import { getData } from '@/hooks/getData.js'

const { showPokemon, loading, getPokemon, } = getData()

showPokemon('https://pokeapi.co/api/v2/pokemon');

const pokemons = getPokemon
// const getPokemon = async () => {
//     loading.value=true
//     try {
//         const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon");
//         savePokemon.value = await pokemon.data.results;
//         // console.log(savePokemon.value);
//     } catch (error) {
//         console.log(error);
//     }finally{
//         setTimeout(()=>loading.value=false,1000)
//     }
// };



</script>
<template>
    <LoadingPokemon v-if="loading" />
    <div class="container my-3 text-center" v-else>
        <div class="row">
            <div class="card col-sm-3 mt-2  m-1 " v-for="(poke, i) in pokemons?.results" :key="i">
                <div class="card-head text-center m-2 p-2">
                    <router-link :to="`/pokedex/${poke.name}`" class="nav_pokemon text-dark">{{ poke.name
                    }}</router-link>
                </div>
            </div>
            <div class="mt-2 text-center">
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
</style>
