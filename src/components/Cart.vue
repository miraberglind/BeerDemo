<template>
  <!-- Huvudsektionen för kundvagnen -->
  <div class="cart">
    <h3>Shopping Cart</h3> <!-- Rubrik för kundvagnen -->
    <ul>
      <!-- Loopa igenom varje objekt i kundvagnen -->
      <li v-for="(item, index) in cart" :key="index">
        <!-- Visa namnet och priset på varje objekt -->
        {{ item.name }} - {{ item.price }} SEK
        <!-- Knapp för att ta bort objekt från kundvagnen -->
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: { // Egenskap för att ta emot kundvagnsdata som en array
      type: Array,
      default: () => [] // Standardvärde är en tom array
    }
  },
  methods: {
    // Metod för att ta bort objekt från kundvagnen
    removeFromCart(index) {
      this.$emit('remove-from-cart', index); // Emitera ett event med index för att ta bort objektet
    }
  }
};
</script>

<style scoped>
/* Stilmall för kundvagnen */
.cart {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}
</style>
