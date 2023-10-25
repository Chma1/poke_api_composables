<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    title: 'Not Title',
    body: {
        default: "Sin description",
    },
})
</script>
<template>
    <div class="col-sm-4">
        <div class="card mt-2 p-3">
            <div class="card-head text-center">
                <h4 class="text-uppercase text-primary">{{ title }}</h4>
                <!-- <router-link class="nav-link text-uppercase text-primary" :to="`pokedex/${title}`">{{ $route.params.title}}</router-link> -->
            </div>
            <div class="card-body">
                <span>{{ body }}</span>
            </div>
        </div>
    </div>
</template>