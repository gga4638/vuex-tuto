import {SOME_MUTATION} from "@/store/mutation-types";

const state = () => ({
  todos: [
    { id: 1, text: 'vuex', done: true },
    { id: 2, text: 'getter', done: false },
    { id: 3, text: 'count', done: false },
    { id: 4, text: 'fun', done: true },

  ]
})

const getters = {
  doneTodos(state) {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount(state, getters) {
    return getters.doneTodos.length
  },
  getTodoById(state) {
    return (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }

}

const mutations = {
  [SOME_MUTATION] (state) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}

