<template>
  <!-- Popup-overlay som visas när användaren behöver verifiera sin ålder -->
  <div v-show="showPopup" class="popup-overlay">
    <!-- Popup-container för innehållet i popup-fönstret -->
    <div class="popup-container">
      <h2>Welcome to Goodminton Brewery!</h2>
      <p>To continue, type in your age</p>
      <input type="number" v-model="age" placeholder="Your age">
      <button class ="ageButton" @click="checkAge">Continue</button>
      <p v-if="allowed">Welcome! Redirecting...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: null, // Ålder som användaren anger
      allowed: false, // Boolean för att kontrollera om användaren är tillåten
      showPopup: true // Boolean för att visa eller dölja popup-fönstret
    };
  },
  methods: {
    // Metod för att kontrollera användarens ålder
    checkAge() {
      if (this.age >= 18) { // Om åldern är 18 eller över
        this.allowed = true; // Användaren är tillåten
        if (this.allowed) { // Om användaren är tillåten
          localStorage.setItem('userAge', this.age); // Spara användarens ålder i lokal lagring
          this.$router.push('/'); // Omdirigera användaren till startsidan
          this.showPopup = false; // Dölj popup-fönstret
        }
      } else { // Om åldern är under 18
        this.allowed = false; // Användaren är inte tillåten
        alert('Welcome back when you are 18+!'); // Visa ett meddelande
      }
    },
    // Metod för att stänga popup-fönstret
    closePopup() {
      this.showPopup = false; // Sätt showPopup till false för att dölja popup-fönstret
    }
  }
};
</script>

<style>
/* Stilmall för popup-fönstret */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container {
  background-color: #B6EDF4;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
}

.ageButton {
  background-color: #E89417;
}
</style>
