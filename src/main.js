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
import AssetsLoader from './lib/AssetsLoader'
import AddClass from './plugins/addClass'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueCookie)
Vue.use(AddClass)

/**
 * GUAR VARIAVEIS GLOBAIS
 * @type {Store}
 */
const store = new Vuex.Store({
  state: {
    showUserInterface: false,
    pageProgress: 30,
    totalProgress: 20000,
    modulesAllowed: [0]
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
var pct = preloader.querySelector('.pct')
var mask = preloader.querySelector('#SVGID_2_')

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
AssetsLoader.loade((event) => {
  if (pct) {
    pct.innerHTML = 'Carregando: ' + Math.ceil(event.progress) + '%'
  }
  if (mask) {
    var value = ((-100) + Math.ceil(event.progress))
    mask.style['webkitTransform'] = 'translateX(' + value + '%)'
    mask.style['mozTransform'] = 'translateX(' + value + '%)'
    mask.style['msTransform'] = 'translateX(' + value + '%)'
    mask.style['oTransform'] = 'translateX(' + value + '%)'
  }
}).then(function () {
  console.log('complete')
  removePReloader()
}).catch(function (err) {
  'use strict'
  console.log(err)
  removePReloader()
})
//
// CREATE VUE APP
/*
 new Vue({
 el: '#app',
 router,
 store,
 template: '<App/>',
 components: {App}
 })
 */
