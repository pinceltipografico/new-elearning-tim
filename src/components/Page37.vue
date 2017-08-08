<template>
  <div class="outer-page diretrizes gradient">
    <transition name="fade">
      <div class="popups" v-if="showPopup">
        <div class="inner" :class="{'active':showInnerPopup}">
          <div class="close" @click="closePopup()">
            <i class="material-icons">&#xE5CD;</i>
          </div>
          <div class="image">
            <img src="../assets/backgrounds/page33/ref-354939284.jpg" v-if="actualPopup === 0"/>
            <img src="../assets/backgrounds/page33/ref-428959477.jpg" v-if="actualPopup === 1"/>
            <img src="../assets/backgrounds/page33/ref-399241594.jpg" v-if="actualPopup === 2"/>
            <img src="../assets/backgrounds/page33/ref-572233399.jpg" v-if="actualPopup === 3"/>
            <img src="../assets/backgrounds/page33/ref-577848541.jpg" v-if="actualPopup === 4"/>
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
      <router-link to="/page33" v-if="showVoltar" class="backButton">
        <i class="material-icons">&#xE314;</i>
        <span>Voltar</span>
      </router-link>
      <h1>Comportamentos que devemos <span>incorporar, estimular e mobilizar</span><br/>
        <small>Clique em cada um deles para visualizar</small>
      </h1>
      <div class="icones">
        <div class="icone" @click="onShowPopup(0)">
          <avaliar></avaliar>
          <span>Avaliar a satisfação do cliente</span>
        </div>
        <div class="icone" @click="onShowPopup(1)">
          <informacao></informacao>
          <span>Informação deve ser transformada em ação</span>
        </div>
        <div class="icone" @click="onShowPopup(2)">
          <analitics></analitics>
          <span>Prever usando analytics</span>
        </div>
        <div class="icone" @click="onShowPopup(3)">
          <indicadores></indicadores>
          <span>Criar e gerir os indicadores</span>
        </div>
        <div class="icone" @click="onShowPopup(4)">
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
        popups: [
          {
            html: '<h1>AVALIAR A SATISFAÇÃO DO CLIENTE<small></small></h1><h4>É essencial que as avaliações sejam:</h4><span>uma avaliação simples e rápida aumenta a adesão do público</span><span>avaliar em tempo real</span>'
          }, {
            html: '<h1>INFORMAÇÃO DEVE SER TRANSFORMADA EM AÇÃO<small></small><h4>é importante para:</h4><span>tagir em prol de soluções</span><span>treverter insatisfações</span><span>tproporcionar emoções</span>'
          }, {
            html: '<h1>PREVER USANDO ANALYTCS<small></small><h4>Usar os dados disponíveis para</h4><span>Monitorar a satisfação</span><span>se antecipar ao cliente</span><span>propor a melhor oferta ou comunicação para o cliente</span>'
          }, {
            html: '<h1>CRIAR E GERIR OS INDICADORES<small></small></h1><h4>Para isso é essencial:</h4><span>estabelecer indicadores relevantes com metas</span><span>processo recorrente de análise</span><span>planos de ação de melhorias</span>'
          }, {
            html: '<h1>RETER OU CONQUISTAR O CLIENTE<small></small><h4>Aproveitar as informações para</h4><span>Entender a necessidade do cliente</span><span>Reconhece-lo como único</span><span>Surpreende-lo</span>'
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
          step: 'monitoramento',
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
    },
    destroyed () {
    },
    methods: {
      onShowPopup (popup) {
        this.showPopup = true
        this.actualPopup = popup
        if (this.itemsComunicacao.indexOf(popup) === -1) {
          this.itemsComunicacao.push(popup)
        }
        setTimeout(function () {
          this.showInnerPopup = true
        }.bind(this), 500)
      },
      closePopup () {
        this.showPopup = this.showInnerPopup = false
        if (this.itemsComunicacao.length === 5) {
          this.showVoltar = true
        }
      }
    }
  }
</script>
