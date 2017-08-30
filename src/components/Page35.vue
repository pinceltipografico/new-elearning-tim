<template>
  <div class="outer-page diretrizes gradient">
    <transition name="fade">
      <div class="popups" v-if="showPopup">
        <div class="inner" :class="{'active':showInnerPopup}">
          <div class="ribbon">Interação</div>
          <div class="close" @click="closePopup()" v-if="canClose">
            <i class="material-icons">&#xE5CD;</i>
          </div>
          <div class="image">
            <img src="../assets/backgrounds/page17/ref-127829156.jpg" v-if="actualPopup === 0"/>
            <img src="../assets/backgrounds/page17/ref-536781589.jpg" v-if="actualPopup === 1"/>
            <img src="../assets/backgrounds/page17/ref-551829490.jpg" v-if="actualPopup === 2"/>
            <img src="../assets/backgrounds/page17/ref-265400186.jpg" v-if="actualPopup === 3"/>
            <img src="../assets/backgrounds/page17/ref-210974194.jpg" v-if="actualPopup === 4"/>
            <img src="../assets/backgrounds/page17/ref-514763773.jpg" v-if="actualPopup === 5"/>
            <img src="../assets/backgrounds/page17/ref-454777204.jpg" v-if="actualPopup === 6"/>
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
          <a>
            <div class="item1 active">
              <span>COMUNICAÇÃO</span>
              <i class="material-icons">&#xE0BF;</i>
            </div>
          </a>
          <a>
            <div class="item2 active">
              <span>INTERAÇÃO</span>
              <i class="material-icons">&#xE5D2;</i>
            </div>
          </a>
          <a>
            <div class="item3 active">
              <span>MONITORAMENTO</span>
              <i class="material-icons">&#xE8B6;</i>
            </div>
          </a>
        </div>
        <div class="shadow"></div>
      </div>
    </section>
    <!-- scene comunicação -->
    <section class="page comunicacao" v-show="activeScene">
      <a class="backButton" @click="onBAck" v-if="showVoltar">
        <i class="material-icons">&#xE314;</i>
        <span>Voltar</span>
      </a>
      <h1 v-show="!showPopup">Comportamentos que devemos <span>Incorporar, Estimular e Mobilizar</span><br/>
        <small>Clique em cada um deles para visualizar</small>
      </h1>
      <div class="icones">
        <div class="icone icone-1" @click="onShowPopup(0)">
          <ouvir></ouvir>
          <span>Ouvir o cliente</span>
        </div>
        <div class="icone icone-2" @click="onShowPopup(1)">
          <conhecer></conhecer>
          <span>Conhecer o cliente</span>
        </div>
        <div class="icone icone-3" @click="onShowPopup(2)">
          <otimizar></otimizar>
          <span>Otimizar o autoatendimento</span>
        </div>
        <div class="icone icone-4" @click="onShowPopup(3)">
          <interface></interface>
          <span>Criar uma interface amigável</span>
        </div>
        <div class="icone icone-5" @click="onShowPopup(4)">
          <canais></canais>
          <span>Canais diversos, experiência única</span>
        </div>
        <div class="icone icone-6" @click="onShowPopup(5)">
          <viver></viver>
          <span>Viver a experiência</span>
        </div>
        <div class="icone icone-7" @click="onShowPopup(6)">
          <customizar></customizar>
          <span>Customizar para satisfazer</span>
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
  import Ouvir from '../assets/svgs/icon-ouvir.svg'
  import Conhecer from '../assets/svgs/icon-conhecer.svg'
  import Otimizar from '../assets/svgs/icon-otimizar.svg'
  import Interface from '../assets/svgs/icon-interface.svg'
  import Canais from '../assets/svgs/icon-canais.svg'
  import Viver from '../assets/svgs/icon-viver.svg'
  import Customizar from '../assets/svgs/icon-sutomizar.svg'
  import anime from 'animejs'
  
  export default {
    components: {
      Ouvir,
      Conhecer,
      Otimizar,
      Interface,
      Canais,
      Viver,
      Customizar
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
        animation: null,
        popups: [
          {
            html: '<h1>Ouvir o cliente<small></small></h1><h4>Mesmo quando o cliente não tem razão:</h4><span>a percepção dele em relação ao problema é real e deve ser considerada </span><span>e se o cliente está pedindo a nossa ajuda, pode ser uma oportunidade</span>'
          }, {
            html: '<h1>Conhecer o cliente <small></small></h1><h4>Ele espera encontrar:</h4><span>seu perfil de consumo</span><span>suas transações</span><span>reclamações ou solicitações recentes</span>'
          }, {
            html: '<h1>Otimizar o autoatendimento<small></small></h1><h4>A tendência atual: </h4><span>canais digitais de suporte</span><span>maior autonomia</span><span>menor necessidade de contato</span>'
          }, {
            html: '<h1>Criar uma interface amigável<small></small></h1><h4>A interface passa a ser elemento chave na conquista de uma experiência diferenciada:</h4><span>estímulo à solução</span><span>soluções mais interativas</span><span>disponibilidade imediata</span><span>custo menor</span><span>personalizada</span></h4>'
          }, {
            html: '<h1>Experiência única nos diversos canais<small></small><h4>Buscar a uniformidade da experiência em todos os canais:</h4><span>fluxo contínuo</span>'
          }, {
            html: '<h1>Viver a experiência <small></small><h4>A organização deve respirar Customer Experience:</h4><span>personificação</span><span>comportamentos</span><span>atitudes</span><span>cuidado adicional</span><span>atenção</span>'
          }, {
            html: '<h1>Customizar para satisfazer<small></small><h4>Diferencial na experiência de sua jornada:</h4><span>possibilidade de escolha</span><span>combinação de elementos</span><span>flexibilidade</span><span>customização</span>'
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
          step: 'interacao',
          selector: '.menu'
        }, {
          time: 200,
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
      setTimeout(function () {
        this.playAudio('interacao_intro', 'static/subtitles/page20.json', function (pos) {
          if (pos === 0) {
            anime({
              targets: '.icone-1 .circle',
              fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
              duration: 500,
              easing: 'linear',
              loop: 3
            })
          }
          if (pos === 2) {
            anime({
              targets: '.icone-2 .circle',
              fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
              duration: 500,
              easing: 'linear',
              loop: 3
            })
          }
          if (pos === 4) {
            anime({
              targets: '.icone-3 .circle',
              fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
              duration: 500,
              easing: 'linear',
              loop: 3
            })
          }
          if (pos === 6) {
            anime({
              targets: '.icone-4 .circle',
              fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
              duration: 500,
              easing: 'linear',
              loop: 3
            })
          }
          if (pos === 8) {
            anime({
              targets: '.icone-5 .circle',
              fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
              duration: 500,
              easing: 'linear',
              loop: 3
            })
          }
          if (pos === 10) {
            anime({
              targets: '.icone-6 .circle',
              fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
              duration: 500,
              easing: 'linear',
              loop: 3
            })
          }
          if (pos === 12) {
            anime({
              targets: '.icone-7 .circle',
              fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
              duration: 500,
              easing: 'linear',
              loop: 3
            })
          }
        }, function () {
          this.animation = anime({
            targets: '.icone-1 .circle',
            fill: [{value: '#ffffff'}, {value: '#ff0000'}, {value: '#ffffff'}],
            duration: 500,
            easing: 'linear',
            loop: true
          })
          this.canClick = true
        }.bind(this))
      }.bind(this), 1000)
    },
    destroyed () {
      this.stopAudio()
      Animations.destroyAnimations()
    },
    methods: {
      onBAck () {
        this.$emit('back', 'page35')
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
            this.playAudio('ouvir_cliente', 'static/subtitles/page20_ouvir.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 1:
            this.playAudio('conhecer_cliente', 'static/subtitles/page20_conhecer.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 2:
            this.playAudio('otimizar_autoatendimento', 'static/subtitles/page20_otimizar.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 3:
            this.playAudio('criar_interface', 'static/subtitles/page20_interface.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 4:
            this.playAudio('canais_diversos', 'static/subtitles/page20_canais.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 5:
            this.playAudio('viver_experiencia', 'static/subtitles/page20_viver.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
          case 6:
            this.playAudio('customizar_satisfazer', 'static/subtitles/page20_customizar.json', null, function () {
              this.canClose = true
            }.bind(this))
            break
        }
      },
      closePopup () {
        this.showPopup = this.showInnerPopup = false
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
        this.stopAudio()
        
        if (this.itemsComunicacao.length === 7) {
          this.showVoltar = true
        }
      }
    }
  }
</script>
