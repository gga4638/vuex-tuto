import Vue from 'vue';
import Vuex from 'vuex';

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import cart from './modules/cart'
import products from './modules/products'
import {currency} from "@/plugins/currency";
import practiceTodo from "./modules/todo";
import {STORAGE_KEY} from "@/store/todo";
import todo from "@/store/todo";

Vue.filter('currency', currency)

Vue.use(Vuex);

// todo: store.subscribe 어떻게 써야되는지 모르겠음
const localStoragePlugin = (store) => {
  console.log("플러그인 실행")
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
    cart,
    products,
    practiceTodo,
    todo
  },
  plugins: [localStoragePlugin]
})
