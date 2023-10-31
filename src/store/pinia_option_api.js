import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Composition API
export const useCountStore = defineStore("Counter", () => {
  // ref
  const count = ref(0);
  // Metods
  const incremets = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => count.value=0;
  // Computed
  const double = computed(() => count.value * 2);

  return {
    count,
    double,
    incremets,
    decrement,
    reset
  };

});

// Option API
// export const useCountStore = defineStore("Counter", {
//     // ref
//   state: () => ({
//     count: 0,
//   }),
//   // Metods
//   actions: {
//     incremets() {
//       this.count++;
//     },
//     decrement() {
//         this.count--;
//       },

//     reset(){
//         this.count=0
//     }
//   },
//   // Computed
//   getters: {
//     double: (state) => state.count * 2,
//   },
// });
