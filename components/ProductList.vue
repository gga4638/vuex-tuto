<template>
  <div>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price }}, 남은 수량: {{ product.inventory }}
        <br/>
        <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)"
        >
          장바구니 담기
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
 computed: {
   ...mapState({
     products: state => state.modules.products.all,
   }),
 },
  methods: {
    addProductToCart(product) {
      return this.$store.dispatch('modules/cart/addProductToCart', product)
    },
  },
  created() {
   this.$store.dispatch('modules/products/getAllProducts')
  },
}
</script>
