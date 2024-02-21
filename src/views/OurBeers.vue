<template>
  <div id="BeerSortiment">
    <h1>Welcome to the bar!</h1>
  </div>
  <div class="beer-list-all">
    <ul class="beer-list">
      <li v-for="(beer, index) in beers" :key="index" class="beer-item">
        <h3>{{ beer.name }}</h3>
        <img :src="beer.src" :alt="'Bild på ölsorter ' + beer.name">
        <p>Alcohol: {{ beer.abv }}%</p>
        <p><b>Description:</b> {{ beer.description }}</p>
        <p>Price: {{ beer.price }} SEK</p>
        <div id="app">
          <input type="button" v-bind:value="message" v-on:click="buyBeer(beer)">
        </div>
      </li>
    </ul>
  </div>
  <Cart :cart="cart" @remove-from-cart="removeFromCart" @beer-added="beerAddedToCart" />
</template>

<script>
import Cart from '../components/Cart.vue';
import BeerDetails from '../components/Beerdetails.vue';

export default {
  components: {
    BeerDetails,
    Cart
  },
  data() {
    return {
      message: 'BUY',
      beers: [
        { src: 'src/assets/img/GOODMINTON_BEER_2.png', id: 1, name: 'IPA', abv: 6.5, description: 'A hoppy beer with a clear bitterness.', price: 50 },
        { src: 'src/assets/img/GOODMINTON_BEER_3.png', id: 2, name: 'Sour', abv: 5.0, description: 'A dark beer with tones of chocolate.', price: 45 },
        { src: 'src/assets/img/GOODMINTON_BEER.png', id: 3, name: 'Lager', abv: 4.8, description: 'A light and refreshing beer rich in flavor.', price: 47 }
      ],
      cart: []
    };
  },
  methods: {
    buyBeer(beer) {
      this.cart.push(beer);
      this.$emit('beer-added', beer);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    beerAddedToCart(beer) {
      console.log('Beer added to cart:', beer);
    }
  }
};
</script>

<style scoped>
.beer-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.beer-item {
  margin: 11px;
  text-align: center;
}

#BeerSortiment {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
}

img {
  width: 280px;
}
</style>
