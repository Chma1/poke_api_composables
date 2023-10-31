import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // activo de forma global
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    }, 
  
     {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    // lazy-loaded
    {
      path: "/pokedex",
      name: "view-pokemon",
      component: () => import("../views/viewPokemon.vue"),
    },
    {
      path: "/pokedex/:name",
      name: "poke",
      component: () => import("../views/Pokedex.vue"),
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/FavoritePokemon.vue"),
    },

    // End page
    {
      path: "/:catchAll(.*)",
      name: "error404",
      component: () => import("../components/Error404.vue"),
    },
  ],
});

export default router;
