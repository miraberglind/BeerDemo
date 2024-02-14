<template>
  <div class="beerweather">
    <h1>Is it beer weather?</h1>
    <div v-if="weatherEmoji !== null">
      <img :src="weatherEmoji" alt="Weather Emoji" />
      <p>{{ weatherDescription }}</p>
    </div>
    <div v-else>
      <p>Laddar väder...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weatherEmoji: null,
      weatherDescription: ''
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      const options = {
        method: 'GET',
        url: 'https://open-weather13.p.rapidapi.com/city/london',
        headers: {
          'X-RapidAPI-Key': '827947f82emsh2fd9f97124a1160p17f126jsn770abf68bb56',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        this.setWeatherEmoji(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    setWeatherEmoji(weatherData) {
      const weather = weatherData[0].weather;
      switch (weather) {
        case 'clear':
          this.weatherEmoji = '../src/assets/img/GOODMINTON_BEER_3.png';
          this.weatherDescription = 'Sunny';
          break;
        case 'rain':
          this.weatherEmoji = '../src/assets/img/rain.png';
          this.weatherDescription = 'Rainy';
          break;
        case 'cloudy':
          this.weatherEmoji = '../src/assets/img/cloud.png';
          this.weatherDescription = 'Cloudy';
          break;
      }
    }
  }
};
</script>

<style scoped>

</style>
