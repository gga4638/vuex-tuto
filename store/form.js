export const state = () => ({
  obj: {
    message: '잉',
    messageTwo: '',
  }
})

export const mutations = {
  updateMessage(state, message) {
    state.obj.message = message
  },
  updateMessageTwo(state, messageTwo) {
    state.obj.messageTwo = messageTwo
  }
}

export const getters = {
  getMessage(state) {
    return state.obj.message
  }
}
