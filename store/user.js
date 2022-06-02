// https://jsonplaceholder.typicode.com/users

export const state = () => ({
  user: [],
    /*
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    * */

})

export const getters = {
  getUsers: (state) => {
    return state.user
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  addUser(state, user) {
    state.user.push(user)
  }
}

export const actions = {
  initUser(store) {
    console.log("user init")
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          store.commit('setUser', Object.values(res))
          resolve(Object.values(res))
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  },
  addUser({ commit }, user) {
    commit('addUser', user)
  }
}
