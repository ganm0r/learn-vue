import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment: () => {
      this.count++;
    },

    decrement: () => {
      this.count--;
    },
  },
  getters: {
    remaining: () => {
      return 5 - this.count;
    },
  },
});

export { useCounterStore };
