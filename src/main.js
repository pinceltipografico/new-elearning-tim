// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
import AddClass from './plugins/addClass'
import LoadSvg from './plugins/LoadSvg'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueCookie)
Vue.use(AddClass)
Vue.use(LoadSvg)

/**
 * GUAR VARIAVEIS GLOBAIS
 * @type {Store}
 */
const store = new Vuex.Store({
  state: {
    showUserInterface: false,
    pageProgress: 30,
    totalProgress: 20000,
    modulesAllowed: [0],
    canAdvance: false
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
    setTotalProgress (state, progress) {
      'use strict'
      state.totalProgress = progress
    },
    setModuleAllowed (state, module) {
      'use strict'
      state.modulesAllowed.push(module)
    },
    setCanAdvance (state, value) {
      'use strict'
      state.canAdvance = value
    }
  }
})

/**
 * VERIFICA SE O PRELOADER EXISTE E CARREGA OS ASSETS
 * @type {Element}
 */
var preloader = document.getElementById('preloader')
if (preloader) {
  preloader.classList.remove('hidePreloader')
}
function removePReloader () {
  'use strict'
  if (preloader) {
    setTimeout(function () {
      preloader.classList.add('hidePreloader')
      //
      // CREATE VUE APP
      //
      new Vue({
        el: '#app',
        router,
        store,
        template: '<App/>',
        components: {App}
      })
    }, 1000)
  }
}
if (window.addEventListener) {
  window.addEventListener('load', removePReloader, false)
} else if (window.attachEvent) {
  window.attachEvent('onload', removePReloader)
} else window.onload = removePReloader
