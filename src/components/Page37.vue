<template>
  <div class="outer-page diretrizes gradient">
    <transition name="fade">
      <div class="popups" v-if="showPopup">
        <div class="inner" :class="{'active':showInnerPopup}">
          <div class="ribbon">Monitoramento</div>
          <div class="close" @click="closePopup()" v-if="canClose">
            <i class="material-icons">&#xE5CD;</i>
          </div>
          <div class="image">
            <img src="../assets/backgrounds/page17/ref-354939284.jpg" v-if="actualPopup === 0"/>
            <img src="../assets/backgrounds/page17/ref-428959477.jpg" v-if="actualPopup === 1"/>
            <img src="../assets/backgrounds/page17/ref-399241594.jpg" v-if="actualPopup === 2"/>
            <img src="../assets/backgrounds/page17/ref-572233399.jpg" v-if="actualPopup === 3"/>
            <img src="../assets/backgrounds/page17/ref-577848541.jpg" v-if="actualPopup === 4"/>
          </div>
          <div class="text">
            <div v-html="popups[actualPopup].html"></div>
          </div>
        </div>
      </div>
    </transition>
    <section class="page page-menu">
      <div class="menu" v-show="!showPopup">
        <div class="tim-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="items">
          <router-link to="/page34">
            <div class="item1 active">
              <span>COMUNICAÇÃO</span>
              <i class="material-icons">&#xE0BF;</i>
            </div>
          </router-link>
          <router-link to="/page35">
            <div class="item2 active">
              <span>INTERAÇÃO</span>
              <i class="material-icons">&#xE5D2;</i>
            </div>
          </router-link>
          <router-link to="/page36">
            <div class="item3 active">
              <span>MONITORAMENTO</span>
              <i class="material-icons">&#xE8B6;</i>
            </div>
          </router-link>
        </div>
        <div class="shadow"></div>
      </div>
    </section>
    <!-- scene comunicação -->
    <section class="page comunicacao" v-show="activeScene">
      <a class="backButton" @click="onBack" v-if="showVoltar">
        <i class="material-icons">&#xE314;</i>
        <span>Voltar</span>
      </a>
      <h1 v-show="!showPopup">Comportamentos que devemos <span>Incorporar, Estimular e Mobilizar</span><br/>
        <small>Clique em cada um deles para visualizar</small>
      </h1>
      <div class="icones">
        <div class="icone icone-1" @click="onShowPopup(0)">
          <avaliar></avaliar>
          <span>Avaliar a satisfação do cliente</span>
        </div>
        <div class="icone icone-2" @click="onShowPopup(1)">
          <informacao></informacao>
          <span>Informação deve ser transformada em ação</span>
        </div>
        <div class="icone icone-3" @click="onShowPopup(2)">
          <analitics></analitics>
          <span>Prever usando analytics</span>
        </div>
        <div class="icone icone-4" @click="onShowPopup(3)">
          <indicadores></indicadores>
          <span>Criar e gerir os indicadores</span>
        </div>
        <div class="icone icone-5" @click="onShowPopup(4)">
          <reter></reter>
          <span>Reter ou conquistar o cliente</span>
        </div>
      </div>
    </section>
    <!-- scene comunicação -->
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  var Animations = require('../lib/ChainAnimation')
  import Avaliar from '../assets/svgs/icon-avaliar.svg'
  import Informacao from '../assets/svgs/ico-info.svg'
  import Analitics from '../assets/svgs/icon-analitcs.svg'
  import Indicadores from '../assets/svgs/icon-indicadores.svg'
  import Reter from '../assets/svgs/icon-reter.svg'
  import anime from 'animejs'
  
  export default {
    components: {
      Avaliar,
      Informacao,
      Analitics,
      Indicadores,
      Reter
    },
    data () {
      return {
        itemsComunicacao: [],
        showPopup: false,
        showInnerPopup: false,
        actualPopup: 0,
        showVoltar: false,
        activeScene: false,
        canClose: false,
        nextItem: 0,
        canClick: false,
        popups: [
          {
            html: '<h1>Avaliar a satisfação do cliente<small></small></h1><h4>É essencial que a avaliação seja:</h4><span>simples e rápida</span><span>em tempo real</span>'
          }, {
            html: '<h1>Informação deve ser transformada em ação<small></small><h4>Agir para:</h4><span>focar em soluções</span><span>reverter insatisfações</span><span>proporcionar emoções</span>'
          }, {
            html: '<h1>Prever usando analytcs<small></small><h4>Usar os dados disponíveis para:</h4><span>monitorar a satisfação</span><span>se antecipar ao cliente</span><span>propor a melhor oferta ou comunicação para o cliente</span>'
          }, {
            html: '<h1>Criar e gerir os indicadores<small></small></h1><h4>Para isso é essencial:</h4><span>estabelecer indicadores relevantes com metas</span><span>um processo recorrente de análise</span><span>planos de ação de melhorias</span>'
          }, {
            html: '<h1>Reter ou conquistar o cliente<small></small><h4>Aproveitar as informações para:</h4><span>entender a necessidade do cliente</span><span>reconhecê-lo como único</span><span>surpreendê-lo</span>'
          }
        ]
      }
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var animations = [
        {
          time: 500,
          step: 'step1',
          selector: '.menu'
        }, {
          time: 100,
          step: 'monitoramento',
          selector: '.menu'
        }, {
          time: 100,
          step: 'step2',
          selector: '.menu'
        }, {
          time: 500,
          step: 'step3',
          selector: '.menu'
        }, {
          time: 100,
          step: 'step4',
          selector: '.menu'
        }, {
          time: 100,
          step: 'absolute',
          selector: '.page-menu'
        }
      ]
      var icones = this.$el.querySelector('.icones')
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.activeScene = true
      }.bind(this))
      
      this.playAudio('monitoramento_2', 'static/subtitles/monitoramento_intro_2.json', function (pos) {
        if (pos === 7) {
          anime({
            targets: '.icone-1 .circle',
            fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
            duration: 500,
            easing: 'linear',
            loop: 3
          })
        }
        if (pos === 9) {
          anime({
            targets: '.icone-2 .circle',
            fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
            duration: 500,
            easing: 'linear',
            loop: 3
          })
        }
        if (pos === 11) {
          anime({
            targets: '.icone-3 .circle',
            fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
            duration: 500,
            easing: 'linear',
            loop: 3
          })
        }
        if (pos === 13) {
          anime({
            targets: '.icone-4 .circle',
            fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
            duration: 500,
            easing: 'linear',
            loop: 3
          })
        }
        if (pos === 15) {
          anime({
            targets: '.icone-5 .circle',
            fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
            duration: 500,
            easing: 'linear',
            loop: 3
          })
        }
      }, function () {
        anime({
          targets: '.icone-1 .circle',
          fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
          duration: 500,
          easing: 'linear',
          loop: 3
        })
        this.canClick = true
      }.bind(this))
    },
    destroyed () {
      this.stopAudio()
      Animations.destroyAnimations()
    },
    methods: {
      onBack () {
        this.$emit('back')
      },
      onShowPopup (popup) {
        if (!this.canClick) {
          return
        }
        this.canClose = false
        this.showPopup = true
        this.actualPopup = popup
        if (this.itemsComunicacao.indexOf(popup) === -1) {
          this.itemsComunicacao.push(popup)
        }
        setTimeout(function () {
          this.showInnerPopup = true
        }.bind(this), 500)
        
        this.nextItem = popup + 2
        
        switch (popup) {
          case 0:
            this.playAudio('monitoramento_avaliar', 'static/subtitles/monitoramento_avaliar.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 1:
            this.playAudio('monitoramento_informacao', 'static/subtitles/monitoramento_informacao.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 2:
            this.playAudio('monitoramento_analitics', 'static/subtitles/monitoramento_analitics.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 3:
            this.playAudio('monitoramento_indicadores', 'static/subtitles/monitoramento_indicadores.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 4:
            this.playAudio('monitoramento_reter', 'static/subtitles/monitoramento_reter.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
        }
      },
      closePopup () {
        this.showPopup = this.showInnerPopup = false
        this.stopAudio()
        if (this.animation) {
          this.animation.seek(0)
          this.animation.pause()
        }
        this.animation = anime({
          targets: '.icone-' + this.nextItem + ' .circle',
          fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
          duration: 500,
          easing: 'linear',
          loop: true
        })
        if (this.itemsComunicacao.length === 5) {
          this.showVoltar = true
        }
      }
    }
  }
</script>
