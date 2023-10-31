<script setup>
import LoadingPokemon from "@/components/LoadingPokemon.vue";
import { getData } from "@/hooks/getData.js";
// import { useRoute } from "vue-router";

const { loading } = getData();
// showPokemon(`https://pokeapi.co/api/v2/pokemon`);
</script>

<template>
  <main>
    <LoadingPokemon v-if="loading" />
    <div class="container" v-else>
      <div class="row">
        <div class="col-sm-6 my-4">
          <h3 class="display-4 text-uppercase text-center">
            Lorem ipsum dolor sit amet.
          </h3>
          <span class="text-secondary text-center mt-2 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa iure
            sed repellat sapiente eos, nostrum accusamus dolores molestias minus
            ducimus eveniet incidunt voluptate reiciendis quisquam! Sed
            perferendis quis harum repellat iure aspernatur aut nihil incidunt
            asperiores excepturi ab, ullam doloremque ex, voluptatem molestias.
            Distinctio aliquam laborum modi, facere numquam perferendis
            reprehenderit pariatur suscipit veritatis animi quia dolore. Velit
            optio blanditiis ad voluptas dolorum incidunt, adipisci sed fugit
            culpa! Asperiores perferendis unde explicabo dolor officiis
            mollitia!</span>

        </div>
        <div class="col-sm-5 my-4 ">
          <div class="text-center">
            <img src="../assets/Pikachu.jpg" alt="pikachu" style="width: 50vh; height: 50vh;"> <br>
            <span class="text-danger"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dicta eaque dolore, eos ex odio iusto harum corrupti culpa quo non placeat, quibusdam commodi necessitatibus similique quas aperiam? Quis, sint.
            </span>
          </div>

      </div>
    </div>
  </div>
</main></template>
