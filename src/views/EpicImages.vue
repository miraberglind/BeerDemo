<template>
  <!-- Huvudsektionen för Space Beer-komponenten -->
  <div class="spacebeer">
    <h1>Space Beer</h1>
    <h3>Take a beer and enjoy earth from space</h3>
    <div v-if="images.length > 0">
      <!-- Visa bilder om det finns några tillgängliga -->
      <div v-for="(image, index) in images" :key="index">
        <!-- Loopa genom bilder -->
        <img :src="getImageUrl(image.image)" :alt="image.caption" />
        <!-- Bildkälla och bildtext -->
        <p>{{ image.date }}</p>
      </div>
    </div>
    <div v-else>
      <!-- Visa "Laddar bilder..." när inga bilder är tillgängliga -->
      <p>Laddar bilder...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [], // Array för lagring av hämtade bilder
    };
  },
  methods: {
    getImageUrl(imageName) {
      // Metod för att generera bild-URL från bildnamn
      const date = imageName.split('_')[2];
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      return `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${imageName}.png?api_key=JCalkhqNpUDhd0G7HXrj4LiuVCBa5Qw3c4a0mrIh`;
    },
    async fetchEpicImages() {
      // Metod för att hämta EPIC-bilder från NASA API
      const apiKey = 'JCalkhqNpUDhd0G7HXrj4LiuVCBa5Qw3c4a0mrIh';
      try {
        const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`);
        this.images = response.data; // Tilldela hämtade bilder till images array
      } catch (error) {
        console.error("Det gick inte att hämta EPIC-bilder: ", error);
        // Logga felmeddelande om det uppstår ett fel vid hämtning av bilder
      }
    },
  },
  created() {
    this.fetchEpicImages(); // Hämta EPIC-bilder när komponenten skapas
  },
};
</script>

<style scoped>
.spacebeer {
  display: grid;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 10px;
}

img {
  width: 500px;
}
</style>
