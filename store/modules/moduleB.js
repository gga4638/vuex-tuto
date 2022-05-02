const state = () => ({
  count: 11
})

const getters = {
  doubleCount(state) {
    return state.count * 2
  }
}

const mutations = {
  increment(state) {
    state.count++
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations
}
