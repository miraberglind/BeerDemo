<template>
  <div v-show="showPopup" class="popup-overlay">
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
      age: null,
      allowed: false,
      showPopup: true
    };
  },
  methods: {
    checkAge() {
      if (this.age >= 18) {
        this.allowed = true;
        if (this.allowed) {
          localStorage.setItem('userAge', this.age);
          this.$router.push('/');
          this.showPopup = false;
        }
      } else {
        this.allowed = false;
        alert('Welcome back when you are 18+!')
      }
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

<style>
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
