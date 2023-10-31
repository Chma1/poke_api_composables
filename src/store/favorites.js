import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  const pokemonFavorite = ref([]);


  if (localStorage.getItem("favorite")) {
    pokemonFavorite.value = JSON.parse(localStorage.getItem("favorite"));
  }
  const addFavorite = (poke) => {
    pokemonFavorite.value.push(poke);
    localStorage.setItem("favorite", JSON.stringify(pokemonFavorite.value));
  };
  const deleteFavorite = (id) =>{
    pokemonFavorite.value = pokemonFavorite.value.filter((item) => item.id !== id)   
    localStorage.setItem("favorite", JSON.stringify(pokemonFavorite.value))
  };
  const findPokemon = (name) =>
    pokemonFavorite.value.find((item) => item.name === name);



  return {
    pokemonFavorite,
    addFavorite,
    deleteFavorite,
    findPokemon,
   
  };
});
