import axios from "axios";
import { ref } from "vue";

export const getData = () => {
  const getPokemon = ref({});
  const loading = ref(false);
  const errorPokemon = ref(null);
  // consumo de la api por axios
  const showPokemon = async (url) => {
    loading.value = true;
    try {
      const resp = await axios.get(url);
      getPokemon.value = resp.data;
      // console.log(getPokemon.value);
    } catch (error) {
      console.log(error);
      errorPokemon.value = "No existe Dato";
    } finally {
      setTimeout(() => (loading.value = false), 1000);
    }
  };


  return {
    loading,
    getPokemon,
    errorPokemon,
    showPokemon,
    getData,
  };
};
