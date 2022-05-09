import Vuex from 'vuex';

export const STORAGE_KEY = 'todos-vuejs'

const state  = () => ({
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
})

const getters = {
  getTodos: (state) => {
  return state.todo
}

}

const actions = {
  addTodo({commit}, text) {
    commit('addTodo', {
      text,
      done: false,
    })
  },
  toggleTodo({ commit }, todo) {
    commit('editTodo', { todo, done: !todo.done })
  },
  removeTodo({ commit }, todo) {
    commit('removeTodo', todo)
  },
  clearCompleted({ commit, state }) {
    state.todos.filter(todo => todo.done)
      .forEach(todo => {
        commit('removeTodo', todo)
      })
  }
}

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },
  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo)

    state.todos.splice(index, 1, {
      ...todo,
      text,
      done
    })
  },
  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
