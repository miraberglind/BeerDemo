<template>
    <div id="BeerSortiment">
      <h1>Welcome to the bar!</h1>
    </div>
    <div class="beer-list-all">
      <ul class="beer-list">
        <li v-for="(beer, index) in beers" :key="index" class="beer-item">
          <h3>{{ beer.name }}</h3>
          <img :src="beer.src" alt="Bild på {{ beer.name }}">
          <p>Alcohol: {{ beer.abv }}%</p>
          <p><b>Description</b> {{ beer.description }}</p>
          <button @click="buyBeer(beer)">BUY</button>
        </li>
      </ul>
    </div>
</template>

<script>


export default {
  data() {
    return {
      beers: [
        { src: 'src/assets/img/GOODMINTON_BEER_2.png', id: 1, name: 'IPA', abv: 6.5, description: 'A hoppy beer with a clear bitterness.'},
        { src: 'src/assets/img/GOODMINTON_BEER_3.png',id: 2, name: 'Sour', abv: 5.0, description: 'A dark beer with tones of chocolate.' },
        { src: 'src/assets/img/GOODMINTON_BEER.png', id: 3, name: 'Lager', abv: 4.8, description: 'A light and refreshing beer rich in flavor.' }
      ]
    };
  },
  methods: {
    buyBeer(beer) {
      this.$root.$emit('add-to-cart', beer);
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
