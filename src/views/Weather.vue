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
        url: 'https://open-weather13.p.rapidapi.com/city/landon',
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
  const weather = weatherData[0].weather[0].main;
  const humidity = weatherData[0].main.humidity;

  if (humidity < 20) {
    this.weatherEmoji = '../src/assets/img/sunny.png';
    this.weatherDescription = 'Sunny';
  } else if (humidity < 40) {
    switch (weather) {
      case 'Clouds':
        this.weatherEmoji = '../src/assets/img/cloud.png';
        this.weatherDescription = 'Cloudy';
        break;
    }
  } else if (humidity <= 60) {
    switch (weather) {
      case 'Rain':
        this.weatherEmoji = '../src/assets/img/rain.png';
        this.weatherDescription = 'Rainy';
        break;
    }
  }
}
  }
};
</script>

<style scoped>

</style>
