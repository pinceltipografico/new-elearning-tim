<template>
  <div class="outer-page diretrizes">
    <transition name="fade">
      <div class="popups" v-if="showPopup">
        <div class="inner" :class="{'active':showInnerPopup}">
          <div class="close" @click="closePopup()">
            <i class="material-icons">&#xE5CD;</i>
          </div>
          <div class="image">
            <img src="../assets/backgrounds/page33/02.jpg" v-if="actualPopup === 0"/>
            <img src="../assets/backgrounds/page33/ref-326696885.jpg" v-if="actualPopup === 1"/>
            <img src="../assets/backgrounds/page33/ref-201601247.jpg" v-if="actualPopup === 2"/>
            <img src="../assets/backgrounds/page33/ref-509785477.jpg" v-if="actualPopup === 3"/>
            <img src="../assets/backgrounds/page33/ref-662955334.jpg" v-if="actualPopup === 4"/>
          </div>
          <div class="text">
            <div v-html="popups[actualPopup].html"></div>
          </div>
        </div>
      </div>
    </transition>
    <!-- scene comunicação -->
    <section class="page comunicacao gradient">
      <router-link to="/page33" v-if="showVoltar" class="backButton">
        <i class="material-icons">&#xE314;</i>
        <span>Voltar</span>
      </router-link>
      
      <span class="title"><i class="material-icons">&#xE0BF;</i>Comunicação</span>
      <h1>Comportamentos que devemos <span>incorporar, estimular e mobilizar</span><br/>
        <small>Clique em cada um deles para visualizar</small>
      </h1>
      <div class="icones">
        <div class="icone" @click="onShowPopup(0)">
          <persona></persona>
          <span>Usar a persona TIM</span>
        </div>
        <div class="icone" @click="onShowPopup(1)">
          <comunicacao></comunicacao>
          <span>Comunicar de forma clara e transparente</span>
        </div>
        <div class="icone" @click="onShowPopup(2)">
          <falar-lingua></falar-lingua>
          <span>Falar a língua do cliente</span>
        </div>
        <div class="icone" @click="onShowPopup(3)">
          <se-mudar></se-mudar>
          <span>Se mudar, tem que comunicar</span>
        </div>
        <div class="icone" @click="onShowPopup(4)">
          <ecantar></ecantar>
          <span>Encantar o cliente.</span>
        </div>
      </div>
    </section>
    <!-- scene comunicação -->
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  import Persona from '../assets/svgs/icone-persona.svg'
  import Comunicacao from '../assets/svgs/icone-comunicar.svg'
  import FalarLingua from '../assets/svgs/icone-falar-cliente.svg'
  import SeMudar from '../assets/svgs/icone-semudar.svg'
  import Ecantar from '../assets/svgs/icon-encantar.svg'
  export default {
    components: {
      Persona,
      Comunicacao,
      FalarLingua,
      SeMudar,
      Ecantar
    },
    data () {
      return {
        itemsComunicacao: [],
        showPopup: false,
        showInnerPopup: false,
        actualPopup: 0,
        showVoltar: false,
        popups: [
          {
            html: '<h1>Usar a persona TIM<small>Uma espécie de identidade padrão</small></h1><h4>A comunicação com o cliente deve sempre ser:</h4><span>coesa e padronizada</span><span>Cada produto pode ter uma linguagem diferente</span><h4>PERSONA TIM é:</h4><span>Carismática</span><span>leve</span><span>autêntica e espontânea</span>'
          }, {
            html: '<h1>Comunicar de forma clara e transparente<small></small></h1><h4>Usar os 7 Cs da Comunicação:</h4><span>Claro</span><span>Conciso</span><span>Concreto</span><span>Correto</span><span>Coerente</span><span>Completo</span><span>Cortês</span><h4>Para esclarecer, usar técnicas como:</h4><span>Perguntar</span><span>repetir</span><span>sumarizar</span><span>exemplificar</span>'
          }, {
            html: '<h1>Falar a língua do cliente<small></small></h1><h4>Criar empatia com o cliente</h4><span>crie conexão</span><span>seja objetivo</span><h4>Sempre lembrar:</h4><span>Falar diferente com gente diferente</span><span>Considerar a linguagem do cliente</span><span>Dispensar o termo técnico</span>'
          }, {
            html: '<h1>Se mudar, tem que comunicar<small></small></h1><h4>Ao comunicar uma mudança é importante:</h4><span>pensar além do cumprimento de regras</span><span>Considerar como essas mudanças afetarão o cliente</span>'
          }, {
            html: '<h1>Encantar o cliente.<small></small></h1><h4>Lembrando que:</h4><span>cada pessoa pode escolher o mesmo produto por diferentes razões</span><h4>Adequar a comunicação:</h4><span>ofereceça o que realmente é do interesse dele!</span>'
          }
        ]
      }
    },
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 0)
      this.$store.commit('setCanAdvance', false)
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
