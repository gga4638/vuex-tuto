const STORAGE_KEY = 'todos-vuejs'

const state  = () => ({
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
})

const getters = {

}

const actions = {
  addTodo({commit}, text) {
    commit('addTodo', {
      text,
      done: false,
    })
  }
}

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  }
}

const plugins = {

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  plugins,
  STORAGE_KEY,
}
