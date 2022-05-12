import * as api from '@/pages/flux-chat/api/index'

export const state = () => ({
  currentThreadId: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage: { timestamp, text }
    }
    */
  },
  messages: {
    /*
    id: { // id = 'm_' + timestamp
      id,
      threadId,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  }
})


export const getters = {
  threads: (state) => state.threads,
  currentThread: (state) => {
    console.log("현재 Thread: ", state.currentThreadId)
    return state.currentThreadId
  },
  currentMessages: (state) => {

  },
  unreadCount: () => {

  },
  sortedMessage: () => {

  }
}

export const mutations = {
  receiveAll(state, messages) {
    let latesMessage
    messages.forEach(message => {
      // create new thread if the thread doesn't exist
      if(!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }

      // mark the latest message
      if(!latesMessage || message.timestamp > latesMessage.timestamp) {
        latesMessage = message
      }

      // add message
      addMessage(state, message)

    })

    setCurrentThread(state, latesMessage.threadID)

  },
  receiveMessage(state, message) {
    addMessage(state, message)
  },
  switchThread(state, threadID) {
    state.currentThreadId = threadID
  }
}

export const actions = {
  getAllMessages({ commit }) {
    api.getAllMessages(messages => {
      commit('receiveAll', messages)
    })
  },
  sendMessage({ commit }, payload) {
    api.createMessage(payload, message => {
      commit('receiveMessage', message)
    })
  },
  switchThread({ commit }, payload) {
    console.log("switchThread payload: ", payload)
    commit('switchTread', payload)
  }
}

function addMessage(state, message) {

}

/* 최초 init 필요함 api/mock-data 가져오기 */
function createThread(state, id, name) {

}

function setCurrentThread(state, id) {
  state.currentThreadId = id
  if(!state.threads[id]) {
    debugger
  }
  state.threads[id].lastMessage.isRead = true
}
