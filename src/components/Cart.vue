<template>
  <div class="cart">
    <h3>Shopping Cart</h3>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.price }} SEK
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    removeFromCart(index) {
      this.$emit('remove-from-cart', index);
    }
  }
};
</script>

<style scoped>
.cart {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}
</style>
