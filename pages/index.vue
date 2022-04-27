<template>
  <div style="text-align: center;">
    <p>count: {{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      count: 'count/getCount',
    }),
  },
  methods: {
    increment() {
      this.$store.commit('count/increment')
    },
    decrement() {
      this.$store.commit('count/decrement')
    }
  }
}
</script>
