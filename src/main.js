// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
import AddClass from './plugins/addClass'
import LoadSvg from './plugins/LoadSvg'
import Audio from './plugins/Audio'
import axios from 'axios'
import Scorm from './plugins/Scorm'

/**
 | ----------------------------------------------
 * DETECTE NAVIGATION
 | ----------------------------------------------
 */
navigator.sayswho = (function () {
  var ua = navigator.userAgent
  var tem
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || []
    return 'IE ' + (tem[1] || '')
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/)
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
  return M.join(' ')
})()

/**
 | ----------------------------------------------
 * VUE GLOBALS
 | ----------------------------------------------
 **/
const audioCoords = require('../static/audio/tim_cx.json')
const sprites = audioCoords.sprite

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(VueCookie)
Vue.use(AddClass)
Vue.use(LoadSvg)
Vue.use(Audio)
Vue.use(Scorm)
Vue.prototype.sprites = sprites

/**
 | ----------------------------------------------
 * VUEX VARIAVEIS GLOBAIS
 | ----------------------------------------------
 **/
const store = new Vuex.Store({
  state: {
    showUserInterface: false,
    pageProgress: 10,
    modulesAllowed: [0],
    canAdvance: false,
    scormConnected: false,
    lastPageViewed: '',
    pagesViewed: [],
    audio: null,
    courseCompleted: true
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
    setModuleAllowed (state, modules) {
      'use strict'
      state.modulesAllowed = modules
    },
    setCanAdvance (state, value) {
      'use strict'
      state.canAdvance = value
    },
    setAudio (state, value) {
      'use strict'
      state.audio = value
    },
    setScormConnected (state, value) {
      window.scormConnected = value
      state.scormConnected = value
    },
    setPagesViewed (state, value) {
      state.pagesViewed = value
    },
    setLastPageViewed (state, value) {
      state.lastPageViewed = value
    },
    setCourseComplete (state, value) {
      state.courseCompleted = value
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

/**
 | ----------------------------------------------
 * REMOVE O PRELOADER
 | ----------------------------------------------
 **/
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

/**
 | ----------------------------------------------
 * CONFIGURA O AUDIO
 | ----------------------------------------------
 **/
function configAudio () {
  var html = document.getElementsByTagName('html')[0]
  html.className = navigator.sayswho.replace(' ', '')
  var audio = new Howl.Howl({
    src: ['static/audio/tim_cx.mp3'],
    sprite: sprites
  })
  audio.once('load', function () {
    store.commit('setAudio', audio)
    removePReloader()
  })
  audio.once('loaderror', function () {
    store.commit('setAudio', null)
    removePReloader()
  })
}

/**
 | ----------------------------------------------
 * config load event
 | ----------------------------------------------
 **/
if (window.addEventListener) {
  window.addEventListener('load', configAudio, false)
} else if (window.attachEvent) {
  window.attachEvent('onload', configAudio)
} else window.onload = configAudio
