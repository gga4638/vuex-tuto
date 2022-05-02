export const state = () => ({
  count: 0,
})

export const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  add(state, payload) {
    state.count += payload.amount
  }
}

export const getters = {
  getCount(state) {
    return state.count
  },
  getEvenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export const actions = {
  incrementAsync(context) {
    setTimeout(() => {
      context.commit('increment')
    }, 1000)
  },
  incrementAsync2({commit}) {
    commit('increment')
  },
  incrementIfOdd({ state, commit }) {
    if(state.count % 2 === 1) {
      commit("increment")
    }
  }
}
