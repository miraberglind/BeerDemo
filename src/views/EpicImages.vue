<template>
  <div class="spacebeer">
    <h1>Space Beer</h1>
    <div v-if="images.length > 0">
      <div v-for="(image, index) in images" :key="index">
        <img :src="getImageUrl(image.image)" :alt="image.caption" />
        <p>{{ image.date }}</p>
      </div>
    </div>
    <div v-else>
      <p>Laddar bilder...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    getImageUrl(imageName) {
      const date = imageName.split('_')[2];
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      return `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${imageName}.png?api_key=JCalkhqNpUDhd0G7HXrj4LiuVCBa5Qw3c4a0mrIh`;
    },
    async fetchEpicImages() {
      const apiKey = 'JCalkhqNpUDhd0G7HXrj4LiuVCBa5Qw3c4a0mrIh';
      try {
        const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`);
        this.images = response.data;
      } catch (error) {
        console.error("Det gick inte att hämta EPIC-bilder: ", error);
      }
    },
  },
  created() {
    this.fetchEpicImages();
  },
};
</script>

<style scoped>

.spacebeer {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 100px;
}

img {
  width: 280px;
}
</style>
