import shop from "@/pages/shopping-cart/api/shop";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
})

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.modules.products.all.find(product => product.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  addProductToCart: ({ state, commit }, product) => {
    commit('setCheckoutStatus', null)
    if(product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if(!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('modules/products/decrementProductInventory', { id: product.id }, { root: true })
    }
  },
  checkout: ({ state, commit }, products) => {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', '성공'),
      () => {
        commit('setCheckoutStatus', '실패')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },
  removeProductFromCart: ({ state, commit }, product) => {
    const sameProducts = state.items.find(item => item.id === product.id)
    console.log(sameProducts)
    sameProducts.quantity--

    // commit('undoCartToProduct', product)
    // shop에서 남은 수량 원상복귀해줘야함함
  }

}

const mutations = {
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },
  setCartItems(state, { items }) {
    state.items = items
  },
  pushProductToCart(state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  undoCartToProduct() {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
