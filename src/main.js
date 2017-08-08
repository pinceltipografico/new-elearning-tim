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
import Audio from './plugins/Audio'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(VueCookie)
Vue.use(AddClass)
Vue.use(LoadSvg)
Vue.use(Audio)

const sprites = {
  scene1: [0, 32500],
  scene2: [32501, (61500 - 32501)],
  scene3: [61500, 63000]
}
Vue.prototype.sprites = sprites

/**
 * GUAR VARIAVEIS GLOBAIS
 * @type {Store}
 */
const store = new Vuex.Store({
  state: {
    showUserInterface: false,
    pageProgress: 10,
    modulesAllowed: [0],
    canAdvance: false,
    audio: null
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
    setModuleAllowed (state, module) {
      'use strict'
      state.modulesAllowed.push(module)
    },
    setCanAdvance (state, value) {
      'use strict'
      state.canAdvance = value
    },
    setAudio (state, value) {
      'use strict'
      state.audio = value
    }
  }
})

/**
 * VERIFICA SE O PRELOADER EXISTE E CARREGA OS ASSETS
 * @type {Element}
 */
var preloader = document.getElementById('preloader')
var Howl = require('howler/dist/howler.min')
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

function configAudio () {
  var audio = new Howl.Howl({
    src: ['/static/audio/tim_cx.mp3'],
    sprite: sprites
  })
  audio.once('load', function () {
    store.commit('setAudio', audio)
    removePReloader()
  })
}

if (window.addEventListener) {
  window.addEventListener('load', configAudio, false)
} else if (window.attachEvent) {
  window.attachEvent('onload', configAudio)
} else window.onload = configAudio
