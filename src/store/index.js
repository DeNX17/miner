import Vue from 'vue'
import Vuex from 'vuex'
import logic from './modules/logic.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    logic
  },
  strict: process.env.NODE_ENV !== 'production'
})
