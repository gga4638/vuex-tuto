import shop from '../../pages/shopping-cart/api/shop'

const state = () => ({
  all: [],
})

const getters = {
  getProductInventoryById: (state) => (id) => {
    return state.all.find(product => product.id === id).inventory
  },
}

const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

const mutations = {
  setProducts(state, products) {
    state.all = products
  },
  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  },
  incrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory++
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
