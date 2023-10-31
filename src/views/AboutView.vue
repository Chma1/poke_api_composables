<script setup>
import { useCountStore } from '@/store/pinia_option_api.js';
import { storeToRefs } from 'pinia';

const store = useCountStore()
// no afecta 
const { incremets,reset,decrement } = store
// para ref en D.O.
const { count, double } = storeToRefs(store)


</script>
<template>
  <div class="about">
    <div class="container">
      <h1 class="text-center">STORE</h1>
      <!-- <h2>Count: {{ store.count }}</h2>
      <button @click="store.incremets">Incrementar</button>
      <button @click="store.reset">Reset</button>
      <button @click="store.decrement">Decremento</button>
      <h2>Double: {{ store.double }}</h2> -->
      <h2>Count: {{ count }}</h2>
      <button @click="incremets">Incrementar</button>
      <button @click="reset">Reset</button>
      <button @click="decrement">Decremento</button>
      <h2>Double: {{ double }}</h2>

    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
