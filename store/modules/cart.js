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
  // 장바구니 담기
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
  // 장바구니 수량변경 -1
  subtractProductInCart: ({ state, commit }, product) => {
    const cartItem = state.items.find(item => item.id === product.id)
    commit('decrementItemQuantity', cartItem)
    commit('modules/products/incrementProductInventory', { id: product.id }, { root: true })

    if(cartItem.quantity === 0) {
      const cartItem = state.items.filter(item => item.id !== product.id)
      commit('setCartItems', { items: cartItem })
    }
  },
  // 장바구니 수량변경 +1
  plusProductInCart: ({ state, commit }, product) => {
    const cartItem = state.items.find(item => item.id === product.id)
    commit('incrementItemQuantity', cartItem)
    commit('modules/products/decrementProductInventory', { id: product.id }, { root: true })

    if(cartItem.quantity === 0) {
      const cartItem = state.items.filter(item => item.id !== product.id)
      commit('setCartItems', { items: cartItem })
    }
  },
  // 결제
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
  decrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity--
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
