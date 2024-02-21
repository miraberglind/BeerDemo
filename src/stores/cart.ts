import { defineStore } from 'pinia';

interface Beer {
  name: string;
  src: string;
  abv: number;
  description: string;
}

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cart: [] as Beer[]
  }),
  actions: {
    addToCart(beer: Beer) {
      this.cart.push(beer);
    },
    removeFromCart(index: number) {
      this.cart.splice(index, 1);
    }
  }
});
