import Vue from 'vue';
import Vuex from 'vuex';

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import cart from './modules/cart'
import products from './modules/products'
import {currency} from "@/plugins/currency";

Vue.filter('currency', currency)

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
    cart,
    products,
  },
})
