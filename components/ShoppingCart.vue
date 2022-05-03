<template>
  <div>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
        <button @click="removeProductFromCart">-</button>
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
      totalPrice: 'modules/cart/cartTotalPrice'
    }),
    ...mapState({
      checkoutStatus: state => state.modules.cart.checkoutStatus
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('modules/cart/checkout', products)
    },
    removeProductFromCart(product) {
      this.$store.dispatch('modules/cart/removeProductFromCart', product)
    }
  }
}
</script>
