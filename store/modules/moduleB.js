const state = () => ({
  count: 11
})

const getters = {
  doubleCount(state) {
    return state.count * 2
  },
  getCount(state) {
    return state.count;
  },
  getEvenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'

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
