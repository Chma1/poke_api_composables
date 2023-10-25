<script setup>
// import Loadingpokemon from '@/components/loadingpokemon.vue';

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
// import ListPokemon from './components/ListPokemon.vue'
const loading = ref(false)


// const app=()=>{
//   loading.value=true
//   setTimeout(()=>loading.value=false,1000)
// }

</script>

<template>
      <div class="container">
        <nav class="nav navbar-expland-lg bg-info ">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/pokedex">Pokedex</RouterLink>
        </nav>
      </div>
      <!-- <ListPokemon/> -->
  

  <RouterView />
</template>
<style scoped>
.nav-link {
  color: rgb(247, 245, 247);
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-link:hover {
  color: rgb(5, 5, 177);
  font-size: 18px;
  transition: 0.5s;
}
</style>