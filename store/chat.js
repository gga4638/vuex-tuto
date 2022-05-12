import * as api from '@/pages/flux-chat/api/index'
import Vue from "vue";

export const state = () => ({
  currentThreadId: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage: { threadID, timestamp, text , isRead}
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
    return state.currentThreadId ? state.threads[state.currentThreadId] : {}
  },
  currentMessages: (state, getters) => {
    const thread = getters.currentThread
    return thread.messages ? thread.messages.map(id => state.messages[id]) : []
  },
  unreadCount: (state) => {
    // todo: js 문법 공부하기, 객체 조건에 맞는 객체만 반환시켜야됨
    return 1
  },
  sortedMessage: (state, getters) => {
    const messages = getters.currentMessages
    return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
  }
}

export const mutations = {
  receiveAll(state, messages) {
    let lastMessage
    messages.forEach(message => {
      // create new thread if the thread doesn't exist
      if(!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }

      // mark the latest message
      if(!lastMessage || message.timestamp > lastMessage.timestamp) {
        lastMessage = message
      }

      // add message
      addMessage(state, message)
    })

    console.log("lastMessage.threadID: ", lastMessage.threadID)
    console.log("lastMessage: ", lastMessage)
    setCurrentThread(state, lastMessage.threadID)

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
  switchThread({ commit }, threadID) {
    commit('switchThread', threadID)
  }
}

function addMessage(state, message) {
  message.isRead = message.threadID === state.currentThreadId

  const thread = state.threads[message.threadID]

  // 기존 메세지가 아닌 경우 추가
  if(!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }

  Vue.set(state.messages, message.id, message)
}

function createThread(state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}

function setCurrentThread(state, id) {
  state.currentThreadId = id
  if(!state.threads[id]) {
    debugger
  }
  state.threads[id].lastMessage.isRead = true
}
