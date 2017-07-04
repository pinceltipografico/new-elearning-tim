// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueCookie)

const store = new Vuex.Store({
  state: {
    showUserInterface: false,
    pageProgress: 30,
    actualBackground: 'backgrounds/home.jpg'
  },
  mutations: {
    toggleIterface (state, isActive) {
      'use strict'
      state.showUserInterface = isActive
    },
    setPageProgress (state, progress) {
      'use strict'
      state.pageProgress = progress
    },
    setBackground (state, bg) {
      'use strict'
      state.actualBackground = bg
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
