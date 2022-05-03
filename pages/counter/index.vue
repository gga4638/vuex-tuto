<template>
  <div style="text-align: center;">
    <div style="display: flex;justify-content: center">
      <div style="margin-right: 30px">
        <h3>Count</h3>
        <p>count: {{ count }}</p>
        <p>countState: {{ countState.count }}</p>
        <p>countPlusLocalState: {{ countPlusLocalState }}</p>
      </div>
      <div style="margin-right: 30px;">
        <h3>A</h3>
        <p>count: {{ countA }}</p>
      </div>
      <div>
        <h3>B</h3>
        <p>count: {{ countB }}</p>
        <p>doubleCount: {{ doubleCount }}</p>
        <p>count is {{ evenOrOdd }}</p>
      </div>
    </div>
    <div style="display: flex;flex-direction: column">
      <div>
        <b>Count</b>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="addNumber(10)">+ 10</button>
        <button @click="addN(20)">+ 20</button>
        <button @click="incrementAsync">+ incrementAsync</button>
        <button @click="incrementIfOdd">Increment if odd</button>
      </div>
      <div>
        <b>B</b>
        <button @click="incrementOdd">+ incrementIfOddOnRootSum</button>
        <button @click="incrementB">Increment B</button>
      </div>
    </div>
    <br/>
    <p>done todos: {{ doneTodos }}</p>
    <p>done todos count: {{ doneTodosCount }}</p>
    <p>find id: {{ getTodoById(4) }}</p>
    <hr/>
    {{ message }} <br/>
    <input :value="message" @input="updateMessage"/> <br/>
    ...mapState formState : {{ getText }}
    <h4>Two-way Computed Property: {{ messageTwo }}</h4>
    <input v-model="messageTwo"/>


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
      message: "form/getMessage",
      evenOrOdd: "modules/moduleB/getEvenOrOdd",
      countB: 'modules/moduleB/getCount',
      doubleCount: 'modules/moduleB/doubleCount',
      countA: 'modules/moduleA/getCount',
    }),
    ...mapState({
      countState: 'count',
      formState: 'form',
    }),
    countPlusLocalState() {
      return this.countState.count + this.localCount
    },
    doneTodosCount() {
      return this.$store.getters["todo/doneTodosCount"]
    },
    getText() {
      return this.formState.obj.message
    },
    messageTwo: {
      get() {
        return this.$store.state.form.obj.messageTwo

      },
      set(value) {
        this.$store.commit('form/updateMessageTwo', value)
      }
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.commit('form/updateMessage', e.target.value)
    },
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
        type: 'count/incrementAsync'
      })
    },
    incrementIfOdd() {
      this.$store.dispatch({
        type: 'count/incrementIfOdd'
      })
    },
    /* module */
    incrementOdd() {
      this.$store.dispatch('modules/moduleA/incrementIfOddOnRootSum')
    },
    incrementB() {
      this.$store.commit('modules/moduleB/increment')
    },
    /* todos */
    getTodoById(id) {
      return this.$store.getters["todo/getTodoById"](id)
    },
  }
}
</script>
