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
      <h1>Comportamentos que devemos <span>incorporar, estimular e mobilizar.</span><br/>
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
            html: '<h1>OUVIR O CLIENTE<small>alta de informação e dificuldade de uso de algum equipamento ou funcionalidade podem ser o motivo de uma reclamação</small></h1><h4>Mesmo quando o cliente não tem razão:</h4><span>a percepção dele em relação ao problema é real e deve ser considerada </span><span>E se o cliente está pedindo a nossa ajuda, pode ser uma oportunidade</span>'
          }, {
            html: '<h1>CONHECER O CLIENTE <small>O cliente espera que a TIM, em qualquer de seus canais ou representantes, tenha disponível suas informações</small></h1><h4>Ele Espera achar:</h4><span>seu perfil de consumo</span><span>suas transações</span><span>reclamações ou solicitações recentes</span>'
          }, {
            html: '<h1>OTIMIZAR O AUTOATENDIMENTO<small>Soluções digitais não substituem a interação humana, e sim complementam.</small></h1><h4>A tendência atual: </h4><span>canais digitais de suporte</span><span>menor necessidade de contato</span>'
          }, {
            html: '<h1>Criar uma interface amigável<small>Se a tendência atual é o crescimento dos canais digitais com maior autonomia do cliente, a interface passa a ser elemento-chave na conquista de uma experiência diferenciada. </small></h1><h4></h4><span>Uma interface amigável estimula o uso da solução, seja em qualquer ferramenta é ideal para soluções mais interativas, disponibilidade imediata e custo menor, podendo ainda ser personalizada.</h4span>'
          }, {
            html: '<h1>Canais diversos, experiência única.<small>Ainda que existam limitações e diferenças entre canais, buscar a uniformidade da experiência em todos eles é fundamental</small>'
          }, {
            html: '<h1>VIVER A EXPERIÊNCIA <small>A organização deve “respirar” Customer Experience! Os comportamentos e atitudes de todas as áreas devem estar voltados às possibilidades de melhoria da experiencia do cliente.</small>'
          }, {
            html: '<h1>CUSTOMIZAR PARA SATISFAZER<small>A possibilidade de escolher e combinar elementos que melhor se adequam aos hábitos dos clientes é o diferencial na experiência de sua jornada</small>'
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
