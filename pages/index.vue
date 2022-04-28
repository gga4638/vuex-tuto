<template>
  <div style="text-align: center;">
    <p>count: {{ count }}</p>
    <p>countState: {{ countState.count }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="addNumber(10)">+ 10</button>
      <button @click="addN(20)">+ 20</button>
      <button @click="incrementAsync">+ incrementAsync</button>
    </p>
    <br/>
    <p>done todos: {{ doneTodos }}</p>
    <p>done todos count: {{ doneTodosCount }}</p>
    <p>find id: {{ getTodoById(4) }}</p>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  data() {
    return {
      localCount: 100,
    }
  },
  computed: {
    ...mapGetters({
      count: 'count/getCount',
      doneTodos: "todo/doneTodos",
    }),
    ...mapState({
      countState: 'count',

      countPlusLocalState() {
        return this.countState.count + this.localCount
      }
    }),

    doneTodosCount() {
      return this.$store.getters["todo/doneTodosCount"]
    },

  },
  methods: {
    /* count */
    increment() {
      this.$store.commit('count/increment')
    },
    decrement() {
      this.$store.commit('count/decrement')
    },
    addNumber(num) {
      this.$store.commit('count/add', {
        amount: num
      })
    },
    addN(num) {
      this.$store.commit({
        type: 'count/add',
        amount: num,
      })
    },
    incrementAsync() {
      this.$store.dispatch({
        type: 'count/incrementAsync2'
      })
    },

    /* todos */
    getTodoById(id) {
      return this.$store.getters["todo/getTodoById"](id)
    },
  }
}
</script>
