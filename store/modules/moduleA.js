const state = () => ({
  count: 2
})

const getters = {
  doubleCount(state) {
    return state.count * 2
  },
  sumWithRootCount(state, getters, rootState) {
    return state.count + rootState.count
  }
}

const mutations = {
  increment(state) {
    state.count++
  }
}

const actions = {
  incrementIfOddOnRootSum({ state, commit, rootState }) {
    if((state.count + rootState.modules.moduleB.count) % 2 === 1) {
      commit('count/increment', null, {root: true} )
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
