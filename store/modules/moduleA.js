const state = () => ({
  count: 2
})

const getters = {
  doubleCount(state) {
    return state.count * 2
  },
  sumWithRootCount(state, getters, rootState) {
    return state.count + rootState.count
  },
  getCount(state) {
    return state.count
  }
}

const mutations = {
  increment(state) {
    state.count++
  }
}

const actions = {
  incrementIfOddOnRootSum({ state, commit, rootState }) {
    // console.log("moduleA: ", state.count)
    // console.log("moduleB; ", rootState.modules.moduleB.count)
    if((state.count + rootState.modules.moduleB.count) % 2 === 1) {
      commit('modules/moduleB/increment', null, {root: true} )
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
