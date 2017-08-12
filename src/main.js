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
  comprar1: [
    57000,
    13704.013605442171
  ],
  comprar2: [
    72000,
    10848.004535147396
  ],
  escolher1: [
    84000,
    16680.000000000007
  ],
  escolher2: [
    102000,
    15335.986394557822
  ],
  guidelineCX: [
    119000,
    13152.018140589575
  ],
  manter1: [
    134000,
    33144.01360544218
  ],
  manter2: [
    169000,
    16512.01814058956
  ],
  menuItem1: [
    187000,
    5615.986394557836
  ],
  menuItem2: [
    194000,
    2808.004535147404
  ],
  menuintro: [
    198000,
    18072.018140589564
  ],
  pesquisar1: [
    218000,
    18768.004535147382
  ],
  pesquisar2: [
    238000,
    15695.98639455782
  ],
  precisar1: [
    255000,
    34344.013605442175
  ],
  precisar2: [
    291000,
    12552.018140589553
  ],
  receber1: [
    305000,
    19608.004535147415
  ],
  receber2: [
    326000,
    10224.013605442167
  ],
  recomendar1: [
    338000,
    19104.013605442164
  ],
  recomendar2: [
    359000,
    12600.000000000022
  ],
  scene1: [
    373000,
    32519.99999999998
  ],
  scene10: [
    407000,
    16272.01814058958
  ],
  scene11: [
    425000,
    110064.01360544215
  ],
  scene11Click: [
    537000,
    3528.0045351473746
  ],
  scene11_2: [
    542000,
    10968.00453514743
  ],
  scene12: [
    554000,
    24792.018140589564
  ],
  scene12_1: [
    580000,
    34752.0181405896
  ],
  scene13: [
    616000,
    44975.986394557825
  ],
  scene14: [
    662000,
    4895.986394557781
  ],
  scene15_1: [
    668000,
    13559.999999999945
  ],
  scene15_2: [
    683000,
    5112.018140589612
  ],
  scene16: [
    690000,
    9600.000000000022
  ],
  scene16_1: [
    701000,
    49152.01814058958
  ],
  scene2: [
    752000,
    28919.99999999996
  ],
  scene3: [
    782000,
    71255.9863945578
  ],
  scene4: [
    855000,
    13055.986394557862
  ],
  scene4DragAndDrop: [
    870000,
    9720.000000000027
  ],
  scene5: [
    881000,
    28752.0181405896
  ],
  scene6: [
    911000,
    17664.013605442164
  ],
  scene6Item1: [
    930000,
    7368.004535147406
  ],
  scene6Item2: [
    939000,
    9215.98639455783
  ],
  scene6Item3: [
    950000,
    13968.00453514743
  ],
  scene6_2: [
    965000,
    13272.01814058958
  ],
  scene7: [
    980000,
    25992.018140589607
  ],
  scene8: [
    1007000,
    18312.018140589542
  ],
  scene9: [
    1027000,
    26759.999999999993
  ],
  usar1: [
    1055000,
    24215.986394557833
  ],
  usar2: [
    1081000,
    19920.000000000073
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
