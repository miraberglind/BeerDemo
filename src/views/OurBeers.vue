<template>
  <!-- Huvudsektionen för BeerSortiment-komponenten -->
  <div id="BeerSortiment">
    <h1>Welcome to the bar!</h1> <!-- Rubrik för välkomstmeddelande -->
  </div>
  <!-- Lista över ölsorter -->
  <div class="beer-list-all">
    <ul class="beer-list">
      <!-- Loopa igenom ölsorterna -->
      <li v-for="(beer, index) in beers" :key="index" class="beer-item">
        <h3>{{ beer.name }}</h3> <!-- Ölsortens namn -->
        <img :src="beer.src" :alt="'Bild på ölsorter ' + beer.name"> <!-- Bild på ölsorten -->
        <p>Alcohol: {{ beer.abv }}%</p> <!-- Alkoholhalten för ölsorten -->
        <p><b>Description:</b> {{ beer.description }}</p> <!-- Beskrivning av ölsorten -->
        <p>Price: {{ beer.price }} SEK</p> <!-- Pris på ölsorten -->
        <!-- Knapp för att lägga till ölsorten i kundvagnen -->
        <div id="app">
          <input type="button" v-bind:value="message" v-on:click="buyBeer(beer)">
        </div>
      </li>
    </ul>
  </div>
  <!-- Komponenten för kundvagnen -->
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
      // Array med ölsorter
      beers: [
        { src: 'src/assets/img/GOODMINTON_BEER_2.png', id: 1, name: 'IPA', abv: 6.5, description: 'A hoppy beer with a clear bitterness.', price: 50 },
        { src: 'src/assets/img/GOODMINTON_BEER_3.png', id: 2, name: 'Sour', abv: 5.0, description: 'A dark beer with tones of chocolate.', price: 45 },
        { src: 'src/assets/img/GOODMINTON_BEER.png', id: 3, name: 'Lager', abv: 4.8, description: 'A light and refreshing beer rich in flavor.', price: 47 }
      ],
      cart: [] // Array för lagring av ölsorter i kundvagnen
    };
  },
  methods: {
    // Metod för att lägga till ölsort i kundvagnen
    buyBeer(beer) {
      this.cart.push(beer);
      this.$emit('beer-added', beer);
    },
    // Metod för att ta bort ölsort från kundvagnen
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    // Metod som körs när en ölsort läggs till i kundvagnen
    beerAddedToCart(beer) {
      console.log('Beer added to cart:', beer);
    }
  }
};
</script>

<style scoped>
/* Stilmall för BeerSortiment-komponenten */
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
