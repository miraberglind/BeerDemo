<template>
  <div class="beer-details">
    <h2>{{ beer.name }}</h2>
    <img :src="beer.src" :alt="'Bild på ölsorten ' + beer.name">
    <p>Alcohol: {{ beer.abv }}%</p>
    <p><b>Description:</b> {{ beer.description }}</p>
    <button @click="addToCart">Add to Cart</button>
    <Cart :cart="cart" @remove-from-cart="removeFromCart" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCartStore } from '../stores/cart';

interface Beer {
  name: string;
  src: string;
  abv: number;
  description: string;
}

export default defineComponent({
  name: 'BeerDetails',
  props: {
    beer: {
      type: Object as () => Beer,
      required: true
    }
  },
  setup(props) {
    const cartStore = useCartStore();

    const addToCart = () => {
      cartStore.addToCart(props.beer);
    };

    const removeFromCart = (index: number) => {
      cartStore.removeFromCart(index);
    };

    return {
      cart: cartStore.cart,
      addToCart,
      removeFromCart
    };
  }
});
</script>
