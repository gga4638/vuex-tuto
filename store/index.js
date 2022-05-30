import Vue from 'vue';
import Vuex from 'vuex';

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import cart from './modules/cart'
import products from './modules/products'
import {currency} from "@/plugins/currency";
import practiceTodo from "./modules/todo";

Vue.filter('currency', currency)
Vue.filter('time', time)

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
    cart,
    products,
    practiceTodo,
  },
})

function time(timestamp) {
  return new Date(timestamp).toLocaleTimeString()
}
