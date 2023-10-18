import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    count: 5,
    cart: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
  },

  addToCart(id) {
    if (!this.cart.includes(id)) {
      this.cart.push(id);
    }
  },

  removeFromCart(id) {
    const idIndex = this.cart.indexOf(id);
    if (idIndex === -1) return;
    this.cart.splice(idIndex, 1);
  },
});
