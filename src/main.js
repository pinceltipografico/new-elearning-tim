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
  FocusGroup: [
    0,
    6912.018140589569
  ],
  LojaFuturo: [
    8000,
    7320
  ],
  NPS: [
    17000,
    7872.018140589567
  ],
  RealTime: [
    26000,
    10944.01360544218
  ],
  TransformacaoDigital: [
    38000,
    7032.018140589571
  ],
  aprovado: [
    47000,
    8135.986394557825
  ],
  guidelineCX: [
    57000,
    13152.018140589575
  ],
  menuItem1: [
    72000,
    5615.986394557823
  ],
  menuItem2: [
    79000,
    2808.00453514739
  ],
  menuintro: [
    83000,
    18072.018140589564
  ],
  scene1: [
    103000,
    32520.00000000001
  ],
  scene10: [
    137000,
    16272.01814058958
  ],
  scene11: [
    155000,
    110064.01360544215
  ],
  scene11Click: [
    267000,
    3528.0045351473746
  ],
  scene11_2: [
    272000,
    10968.004535147373
  ],
  scene12: [
    284000,
    24792.018140589564
  ],
  scene12_1: [
    310000,
    34752.0181405896
  ],
  scene13: [
    346000,
    44975.986394557825
  ],
  scene14: [
    392000,
    4895.986394557838
  ],
  scene2: [
    398000,
    28920.000000000015
  ],
  scene20_1: [
    428000,
    13560.000000000002
  ],
  scene3: [
    443000,
    71255.9863945578
  ],
  scene4: [
    516000,
    13055.986394557862
  ],
  scene4DragAndDrop: [
    531000,
    9720.000000000027
  ],
  scene5: [
    542000,
    28752.0181405896
  ],
  scene6: [
    572000,
    17664.013605442164
  ],
  scene6Item1: [
    591000,
    7368.004535147406
  ],
  scene6Item2: [
    600000,
    9215.98639455783
  ],
  scene6Item3: [
    611000,
    13968.00453514743
  ],
  scene6_2: [
    626000,
    13272.01814058958
  ],
  scene7: [
    641000,
    25992.018140589607
  ],
  scene8: [
    668000,
    18312.018140589542
  ],
  scene9: [
    688000,
    26759.999999999993
  ]
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
    src: ['static/audio/tim_cx.mp3'],
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
