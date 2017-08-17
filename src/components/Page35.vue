<template>
  <div class="outer-page diretrizes gradient">
    <transition name="fade">
      <div class="popups" v-if="showPopup">
        <div class="inner" :class="{'active':showInnerPopup}">
          <div class="close" @click="closePopup()" v-if="canClose">
            <i class="material-icons">&#xE5CD;</i>
          </div>
          <div class="image">
            <img src="../assets/backgrounds/page33/ref-127829156.jpg" v-if="actualPopup === 0"/>
            <img src="../assets/backgrounds/page33/ref-536781589.jpg" v-if="actualPopup === 1"/>
            <img src="../assets/backgrounds/page33/ref-551829490.jpg" v-if="actualPopup === 2"/>
            <img src="../assets/backgrounds/page33/ref-265400186.jpg" v-if="actualPopup === 3"/>
            <img src="../assets/backgrounds/page33/ref-210974194.jpg" v-if="actualPopup === 4"/>
            <img src="../assets/backgrounds/page33/ref-514763773.jpg" v-if="actualPopup === 5"/>
            <img src="../assets/backgrounds/page33/ref-454777204.jpg" v-if="actualPopup === 6"/>
          </div>
          <div class="text">
            <div v-html="popups[actualPopup].html"></div>
          </div>
        </div>
      </div>
    </transition>
    <section class="page page-menu">
      <div class="menu">
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
    <section class="page comunicacao" v-if="activeScene">
      <router-link to="/page17" v-if="showVoltar" class="backButton">
        <i class="material-icons">&#xE314;</i>
        <span>Voltar</span>
      </router-link>
      <h1>Comportamentos que devemos <span>incorporar, estimular e mobilizar</span><br/>
        <small>Clique em cada um deles para visualizar</small>
      </h1>
      <div class="icones">
        <div class="icone" @click="onShowPopup(0)">
          <ouvir></ouvir>
          <span>Ouvir o cliente</span>
        </div>
        <div class="icone" @click="onShowPopup(1)">
          <conhecer></conhecer>
          <span>Conhecer o cliente</span>
        </div>
        <div class="icone" @click="onShowPopup(2)">
          <otimizar></otimizar>
          <span>Otimizar o autoatendimento</span>
        </div>
        <div class="icone" @click="onShowPopup(3)">
          <interface></interface>
          <span>Criar uma interface amigável</span>
        </div>
        <div class="icone" @click="onShowPopup(4)">
          <canais></canais>
          <span>Canais diversos, experiência única</span>
        </div>
        <div class="icone" @click="onShowPopup(5)">
          <viver></viver>
          <span>Viver a experiência</span>
        </div>
        <div class="icone" @click="onShowPopup(6)">
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
        popups: [
          {
            html: '<h1>OUVIR O CLIENTE<small></small></h1><h4>Mesmo quando o cliente não tem razão:</h4><span>a percepção dele em relação ao problema é real e deve ser considerada </span><span>E se o cliente está pedindo a nossa ajuda, pode ser uma oportunidade</span>'
          }, {
            html: '<h1>CONHECER O CLIENTE <small></small></h1><h4>Ele Espera encontrar:</h4><span>Seu perfil de consumo</span><span>Suas transações</span><span>Reclamações ou solicitações recentes</span>'
          }, {
            html: '<h1>OTIMIZAR O AUTOATENDIMENTO<small></small></h1><h4>A tendência atual: </h4><span>Canais digitais de suporte</span><span>Maior autonomia</span><span>Menor necessidade de contato</span>'
          }, {
            html: '<h1>Criar uma interface amigável<small></small></h1><h4>A interface passa a ser elemento chave na conquista de uma experiência diferenciada</h4><span>Estímulo a solução</span><span>Soluções mais interativas</span><span>Disponibilidade imediata</span><span>Custo menor</span><span>Personalizada</span></h4>'
          }, {
            html: '<h1>Canais diversos, experiência única.<small></small><h4>buscar a uniformidade da experiência em todos os canais:</h4><span>Fluxo contínuo</span><span>Experiência única nos diversos canais</span>'
          }, {
            html: '<h1>VIVER A EXPERIÊNCIA <small></small><h4>A organização dever respirar customer experience</h4><span>Personificação</span><span>Comportamentos</span><span>Atitudes</span><span>Cuidado adicional</span><span>Atenção</span>'
          }, {
            html: '<h1>CUSTOMIZAR PARA SATISFAZER<small></small><h4>Diferencial na experiência de sua jornada</h4><span>Possibilidade de escolha</span><span>Combinação de elementos</span><span>Flexibilidade</span><span>Customização</span>'
          }
        ]
      }
    },
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var animations = [
        {
          time: 500,
          step: 'step1',
          selector: '.menu'
        }, {
          time: 500,
          step: 'interacao',
          selector: '.menu'
        }, {
          time: 500,
          step: 'step2',
          selector: '.menu'
        }, {
          time: 500,
          step: 'step3',
          selector: '.menu'
        }, {
          time: 500,
          step: 'step4',
          selector: '.menu'
        }, {
          time: 500,
          step: 'absolute',
          selector: '.page-menu'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.activeScene = true
      }.bind(this))
      setTimeout(function () {
        this.playAudio('interacao_intro', 'static/subtitles/page20.json', null, null)
      }.bind(this), 1000)
    },
    destroyed () {
      this.stopAudio()
      Animations.destroyAnimations()
    },
    methods: {
      onShowPopup (popup) {
        this.canClose = false
        this.showPopup = true
        this.actualPopup = popup
        if (this.itemsComunicacao.indexOf(popup) === -1) {
          this.itemsComunicacao.push(popup)
        }
        setTimeout(function () {
          this.showInnerPopup = true
        }.bind(this), 500)
        
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
        if (this.itemsComunicacao.length === 7) {
          this.showVoltar = true
        }
      }
    }
  }
</script>
