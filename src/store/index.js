import Vue from 'vue'
import Vuex from 'vuex'
import home from '../js/home'

// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
// const debug=true

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  },
  // plugins:debug ? [createLogger()]:[]//开启vuex的debug模式
})
