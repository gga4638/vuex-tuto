<template>
  <div>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
        <button @click="subtractProductInCart(product)">-</button>
        <button :disabled="!productInventory(product.id)" @click="plusProductInCart(product)">+</button>
      </li>
    </ul>
    <p>총 금액: {{ totalPrice | currency }}</p>
    <button :disabled="!products.length" @click="checkout(products)">결제</button>
    <p v-show="checkoutStatus">결제 {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: 'modules/cart/cartProducts',
      totalPrice: 'modules/cart/cartTotalPrice',
      productInventory: 'modules/products/getProductInventoryById'
    }),
    ...mapState({
      checkoutStatus: state => state.modules.cart.checkoutStatus,
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('modules/cart/checkout', products)
    },
    addProductToCart(product) {
      this.$store.dispatch('modules/cart/addProductToCart', product)
    },
    subtractProductInCart(product) {
      this.$store.dispatch('modules/cart/subtractProductInCart', product)
    },
    plusProductInCart(product) {
      this.$store.dispatch('modules/cart/plusProductInCart', product)
    }
  }
}
</script>
