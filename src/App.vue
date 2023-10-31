<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter()
const homePage = () => {
  router.push(`/`)
}
</script>

<template>
  <nav class="navbar navbar-expand-md bg-danger ">
    <div class="container">
      <a class="nav-logo text-uppercase" @click="homePage()"> <b>
          poke App
        </b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <RouterLink class="nav-link " to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="/about">About</RouterLink>
            <RouterLink class="nav-link" to="/pokedex">Pokedex</RouterLink>
            <RouterLink class="nav-link " to="/favorite">Favorite</RouterLink>
        </ul>
      </div>
    </div>
  </nav>


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
  color: rgb(255, 251, 3);
  font-size: 18px;
  transition: 0.5s;
}

.nav-logo {
  cursor: pointer;
  color: rgb(49, 49, 47);
  text-decoration: none;
  font-size: 20px;
  margin-top: -5px;
}
</style>