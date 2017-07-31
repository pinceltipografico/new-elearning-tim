<template>
  <div class="outer-page diretrizes">
    <transition name="fade">
      <div class="popups" v-if="showPopup">
        <div class="inner" :class="{'active':showInnerPopup}">
          <div class="close" @click="closePopup()">
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
    <!-- scene comunicação -->
    <section class="page comunicacao gradient">
      <router-link to="/page33" v-if="showVoltar" class="backButton">
        <i class="material-icons">&#xE314;</i>
        <span>Voltar</span>
      </router-link>
      <span class="title"><i class="material-icons">&#xE5D2;</i>Interação</span>
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
          <span>Canais diversos, experiência única.</span>
        </div>
        <div class="icone" @click="onShowPopup(5)">
          <viver></viver>
          <span>Viver a experiência</span>
        </div>
        <div class="icone" @click="onShowPopup(6)">
          <customizar></customizar>
          <span>Customizar para satisfazer.</span>
        </div>
      </div>
    </section>
    <!-- scene comunicação -->
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
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
        popups: [
          {
            html: '<h1>OUVIR O CLIENTE<small></small></h1><h4>Mesmo quando o cliente não tem razão:</h4><span>a percepção dele em relação ao problema é real e deve ser considerada </span><span>E se o cliente está pedindo a nossa ajuda, pode ser uma oportunidade</span>'
          }, {
            html: '<h1>CONHECER O CLIENTE <small></small></h1><h4>Ele Espera encontrar:</h4><span>seu perfil de consumo</span><span>suas transações</span><span>reclamações ou solicitações recentes</span>'
          }, {
            html: '<h1>OTIMIZAR O AUTOATENDIMENTO<small></small></h1><h4>A tendência atual: </h4><span>canais digitais de suporte</span><span>maior autonomia</span><span>menor necessidade de contato</span>'
          }, {
            html: '<h1>Criar uma interface amigável<small></small></h1><h4></h4><span>estimula o uso da solução</span><span>ideal para soluções mais interativas</span><span>disponibilidade imediata</span><span>custo menor</span><span>personalizada.</span></h4>'
          }, {
            html: '<h1>Canais diversos, experiência única.<small></small><h4><span>Buscar a uniformidade da experiência em todos os canais</span></h4>'
          }, {
            html: '<h1>VIVER A EXPERIÊNCIA <small></small><h4><span>A organização deve “respirar” Customer Experience! Os comportamentos e atitudes de todas as áreas devem estar voltados às possibilidades de melhoria da experiencia do cliente.</span></h4>'
          }, {
            html: '<h1>CUSTOMIZAR PARA SATISFAZER<small></small><h4><span>A possibilidade de escolher e combinar elementos que melhor se adequam aos hábitos dos clientes é o diferencial na experiência de sua jornada</span></h4>'
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
        if (this.itemsComunicacao.length === 7) {
          this.showVoltar = true
        }
      }
    }
  }
</script>
