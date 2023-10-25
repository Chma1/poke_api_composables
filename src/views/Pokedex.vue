<script setup>
import LoadingPokemon from "@/components/LoadingPokemon.vue";
import { getData } from '@/hooks/getData.js'
import { useRoute, useRouter } from "vue-router";

const { getPokemon, showPokemon, loading, errorPokemon } = getData()
const router = useRouter();
const route = useRoute();
const backPage = () => {
  router.push(`/pokedex`);
};
const detailPokemon = getPokemon
console.log(detailPokemon);

showPokemon(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
// const showPokemon = async () => {
//   loading.value = true
//   try {
//     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
//     detailPokemon.value = await data;
//     // console.log(detailPokemon.value);
//     // console.log(detailPokemon.value.sprites.other.home.front_default);

//   } catch (error) {
//     console.log(error);
//     detailPokemon.value = null
//   } finally {
//     setTimeout(() => loading.value = false, 1000)
//   }
// };
</script>
<template>
  <pre>{{ detailPokemon }}</pre>
  <LoadingPokemon v-if="loading" />
  <div class="container" v-else>
    <div class="alert alert-danger my-2 text-center" v-if="errorPokemon">{{ errorPokemon }}</div>
    <div class="content" v-if="!errorPokemon">
      <h1 class="text-center text-uppercase my-3">This Pokemon: <b class="text-primary"> {{ $route.params.name }}</b>
      </h1>
      <div class="text-end">
        <button class="btn btn-danger" @click="backPage()">Regresar</button>
      </div>
      <div class="text-center">
        <img :src="detailPokemon.sprites?.other?.home?.front_default" alt="pokemon" class="img_pokemon" />
      </div>
    </div>
  </div>
  <div class="text-end">
    <button class="btn btn-danger" @click="backPage()" v-if="!detailPokemon">Regresar</button>
  </div>
</template>
<style scoped>
.img_pokemon {
  width: 20%;
  height: 20%;
}
</style>