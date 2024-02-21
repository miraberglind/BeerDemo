
<script setup>
    import UserAge from '../components/UserAge.vue';

</script>
<template>
    <UserAge />
    <div id="wrapper-hero">
        <img
        src="../assets/img/GOODMINTON_BEER_w_background.png"
  class="img-fluid"
  alt="..."
        />
    </div>
</template>

<style scoped>
#wrapper-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin-top: 20vh;
  margin-bottom: 10vh;
}

.img-fluid {
  max-width: 70%;
  height: auto;
}
</style>
