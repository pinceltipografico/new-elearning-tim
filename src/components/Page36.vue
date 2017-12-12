<template>
  <div class="outer-page gradient">
    <template v-if="!seeAnim">
      <transition name="enter-nav">
        <a class="nav-button next-page can-advance" @click="seeAnim = true" v-if="showNext">
          <i class="material-icons">&#xE5CC;</i>
        </a>
      </transition>
      <section class="page" v-show="scene === 0">
        <div class="start">
          <h1>
            O Monitoramento em uma abordagem de <span>Customer Experience</span>
            vai muito além de relatórios e indicadores</h1>
          <div class="buttons" @click="startAnim" v-if="showStart">
            <span>Ver como funciona</span>
            <i class="material-icons">&#xE038;</i>
          </div>
        </div>
      </section>
      <section class="page monitoring" v-show="scene === 1">
        <div class="people">
          <people></people>
          <h1>milhões de<br/>clientes</h1>
        </div>
        <div class="informacao">
          <h2>Informação</h2>
          <div class="dot"></div>
          <div class="arrow"></div>
        </div>
        <div class="server">
          <server></server>
        </div>
        <div class="big-data">
          <h2>Big Data</h2>
          <div class="dot"></div>
          <div class="arrow"></div>
        </div>
        <div class="brain">
          <h2>algorítimo</h2>
          <brain></brain>
        </div>
        <div class="arrow1">
          <h2>Visualização</h2>
          <arrow1></arrow1>
        </div>
        <div class="analise">
          <h2>Análise</h2>
          <analise></analise>
        </div>
        <div class="arrow2">
          <arrow1></arrow1>
          <h2>descobertas</h2>
        </div>
        <div class="idea">
          <h2>aprendizado</h2>
          <idea></idea>
        </div>
        <div class="arrow3">
          <h2>Aperfeiçoamento</h2>
          <arrow1></arrow1>
        </div>
        <div class="clock">
          <h4>REAL TIME</h4>
          <clock></clock>
        </div>
        <div class="arrow4">
          <arrow2></arrow2>
        </div>
        <div class="engajamento">
          <h2>engajamento multidisciplinar</h2>
          <img src="../assets/backgrounds/page17/circlel.png"/>
        </div>
        <div class="customer_centric">
          <h2>Centrado noCliente</h2>
          <costumer-centric></costumer-centric>
        </div>
        <div class="customer_experience">
          <h2>Customer Experience</h2>
          <img src="../assets/backgrounds/page17/circle2.png"/>
        </div>
      </section>
    </template>
    <monitoramento v-if="seeAnim" @back="onBack"></monitoramento>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import anime from 'animejs'
  import { EventBus } from '../events/index'
  import Animations from '../lib/ChainAnimation'
  import People from '../assets/svgs/people-page36.svg'
  import Server from '../assets/svgs/server_page36.svg'
  import Brain from '../assets/svgs/cerebro_page36.svg'
  import Arrow1 from '../assets/svgs/arrow_1_page36.svg'
  import Analise from '../assets/svgs/analisis_page36.svg'
  import Idea from '../assets/svgs/ideia_page36.svg'
  import Clock from '../assets/svgs/clock_page36.svg'
  import CostumerCentric from '../assets/svgs/customer_centric.svg'
  import Arrow2 from '../assets/svgs/arrow2_page36.svg'
  import Monitoramento from './Page37.vue'
  
  export default {
    components: {
      People,
      Server,
      Brain,
      Arrow1,
      Analise,
      Idea,
      Clock,
      CostumerCentric,
      Arrow2,
      Monitoramento
    },
    data () {
      return {
        seeAnim: false,
        scene: 0,
        showNext: false,
        showStart: false,
        TimeLineCtrl: null
      }
    },
    props: {
      lastPages: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      this.setSuspendData('menu:' + this.lastPages.toString() + '|scene17:page36')
      
      console.log(this.lastPages)
      
      this.playAudio('monitoramento_intro', 'static/subtitles/monitoramento_intro.json', null, function () {
        this.showStart = true
      }.bind(this))
      EventBus.$on('pause', function (paused) {
        if (!this.TimelineCtrl) {
          return
        }
        (paused ? this.TimelineCtrl.pause : this.TimelineCtrl.play)()
      }.bind(this))
      EventBus.$on('rewind', function () {
        if (this.TimelineCtrl) {
          this.TimelineCtrl.restart()
        }
      }.bind(this))
    },
    destroyed () {
      this.stopAudio()
      EventBus.$off('pause')
      EventBus.$off('rewind')
    },
    methods: {
      onBack () {
        this.$emit('back', 'page36', this.lastPages)
      },
      startAnim () {
        this.scene = 1
        this.TimelineCtrl = anime.timeline()
        
        this.TimelineCtrl
          .add({
            targets: '.people',
            duration: 300,
            easing: 'linear',
            translateY: [{value: '-50%'}, {value: '-50%', delay: 5000}], // 5000
            translateX: [{value: '-50%'}, {value: '-50%', delay: 5000}],
            scale: [{value: 1}, {value: 0.3, delay: 5000}],
            left: [{value: '50%'}, {value: '25%', delay: 5000}],
            top: [{value: '50%'}, {value: '25%', delay: 5000}]
          })
          .add({
            targets: '.informacao > .dot',
            duration: 300,
            easing: 'linear',
            scale: [0, 1]
          })
          .add({
            targets: '.informacao > .arrow',
            duration: 300,
            easing: 'linear',
            width: [{value: '0px'}, {value: '120px'}]
          })
          .add({
            targets: '.informacao > h2',
            duration: 300,
            easing: 'linear',
            opacity: [0, 1]
          })
          .add({
            targets: '.server',
            duration: 300,
            easing: 'linear',
            opacity: [0, 1],
            offset: '+=5000'
          })
          .add({
            targets: '.big-data > .dot',
            duration: 300,
            easing: 'linear',
            scale: [0, 1]
          })
          .add({
            targets: '.big-data > .arrow',
            duration: 300,
            easing: 'linear',
            width: [{value: '0px'}, {value: '120px'}]
          })
          .add({
            targets: '.big-data > h2',
            duration: 300,
            easing: 'linear',
            opacity: [0, 1]
          })
          .add({
            targets: '.brain',
            duration: 300,
            easing: 'linear',
            scale: [0, 1],
            offset: '+=5000'
          })
          .add({
            targets: '.arrow1',
            duration: 300,
            easing: 'linear',
            opacity: [0, 1],
            rotate: ['50deg', '0deg']
          })
          .add({
            targets: '.analise',
            duration: 300,
            easing: 'linear',
            scale: [0, 1],
            opacity: [0, 1]
          })
          .add({
            targets: '.arrow2',
            duration: 300,
            easing: 'linear',
            opacity: [0, 1],
            rotate: ['-90deg', '90deg']
          })
          .add({
            targets: '.idea',
            duration: 300,
            easing: 'linear',
            scale: [0, 1]
          })
          .add({
            targets: '.arrow3',
            rotate: ['-220deg', '220deg'],
            duration: 300,
            easing: 'linear',
            opacity: [0, 1]
          })
          .add({
            targets: '.clock',
            opacity: 1,
            duration: 300,
            easing: 'linear',
            translateY: ['-50%', '0%']
          })
          .add({
            targets: '.arrow4',
            duration: 300,
            easing: 'linear',
            opacity: [0, 0.3],
            offset: '+=3000'
          })
          .add({
            targets: '.engajamento',
            duration: 300,
            easing: 'linear',
            scale: [0, 1]
          })
          .add({
            targets: '.customer_centric',
            scale: [0, 1],
            duration: 300,
            easing: 'linear',
            offset: '+=2500'
          })
          .add({
            targets: '.customer_experience',
            duration: 300,
            easing: 'linear',
            scale: [0, 1],
            offset: '+=3500'
          })
        
        this.playAudio('monitoramento_anim', 'static/subtitles/monitoramento_animation.json', null, function () {
          this.showNext = true
        }.bind(this))
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .start {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      max-width: 500px;
      color: #fff;
      @include font-size(2.5);
      text-align: center;
    }
  }
  
  .monitoring {
    text-transform: uppercase;
    @include font-size(1);
    
    @include responsive('laptopS') {
      transform: scale(0.8);
      transform-origin: 10% 50%;
      border: none;
      animation: none;
      overflow: visible;
    }
    
    /*zoom: 0.9;*/
    .people {
      width: 500px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      h1 {
        position: absolute;
        color: #fff;
        bottom: 0;
        @include font-size(2.5);
        left: 65%;
      }
    }
    .informacao {
      top: 150px;
      left: 400px;
      * {
        position: absolute;
        transition: all $animationTime;
      }
      .dot {
        width: 20px;
        height: 20px;
        background: $brand-secondary;
        border-radius: 50%;
        transform: scale(0);
      }
      .arrow {
        width: 0;
        height: 4px;
        background: $brand-secondary;
        top: 8px;
        left: 5px;
      }
      h2 {
        color: #fff;
        top: -25px;
        left: 18px;
        opacity: 0;
      }
    }
    .server {
      width: 120px;
      top: 120px;
      left: 540px;
      opacity: 0;
    }
    .big-data {
      top: 150px;
      left: 670px;
      * {
        position: absolute;
        transition: all $animationTime;
      }
      .dot {
        width: 20px;
        height: 20px;
        background: $brand-secondary;
        border-radius: 50%;
        transform: scale(0);
      }
      .arrow {
        width: 0;
        height: 4px;
        background: $brand-secondary;
        top: 8px;
        left: 5px;
      }
      h2 {
        color: #fff;
        top: -25px;
        left: 30px;
        opacity: 0;
        width: 100px;
      }
    }
    .brain {
      width: 200px;
      top: 10%;
      left: 810px;
      transform: scale(0);
      h2 {
        text-align: center;
        color: #fff;
      }
    }
    .arrow1 {
      width: 130px;
      left: 980px;
      top: 150px;
      h2 {
        position: absolute;
        color: #fff;
        left: 40px;
        top: 15px;
      }
      transform: rotate(-50deg);
      opacity: 0;
    }
    .analise {
      width: 180px;
      left: 1000px;
      top: 250px;
      h2 {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 60px;
      }
      transform: scale(0);
      opacity: 0;
    }
    .arrow2 {
      width: 130px;
      left: 980px;
      top: 420px;
      opacity: 0;
      transform: rotate(0deg);
      h2 {
        position: absolute;
        transform: rotate(-90deg);
        top: 10px;
        left: 50px;
        color: #fff;
      }
    }
    .idea {
      width: 110px;
      top: 450px;
      left: 880px;
      h2 {
        text-align: center;
        color: #fff;
        position: absolute;
        top: -20px;
      }
      transform: scale(0);
    }
    .arrow3 {
      width: 130px;
      left: 750px;
      top: 320px;
      transform: rotate(0deg);
      opacity: 0;
      h2 {
        position: absolute;
        transform: rotate(-220deg);
        top: 0;
        left: 0;
        color: #fff;
      }
    }
    .clock {
      width: 50px;
      left: 900px;
      top: 330px;
      transform: translateY(-50%);
      opacity: 0;
      h4 {
        position: absolute;
        top: 50px;
        text-align: center;
        color: #fff;
      }
    }
    .engajamento {
      width: 150px;
      top: 420px;
      left: 570px;
      transform: scale(0);
      h2 {
        position: absolute;
        color: #fff;
        text-align: center;
        bottom: -50px;
      }
      img {
        width: 100%;
      }
    }
    .customer_centric {
      width: 250px;
      top: 350px;
      left: 250px;
      transform: scale(0);
      h2 {
        position: absolute;
        bottom: -30px;
        text-align: center;
        width: 100%;
        color: #fff;
      }
    }
    .arrow4 {
      width: 590px;
      top: 330px;
      left: 200px;
      transform: rotate(-10deg);
      opacity: 0;
    }
    .customer_experience {
      width: 250px;
      top: 170px;
      left: 20px;
      transform: scale(0);
      h2 {
        position: absolute;
        display: block;
        color: #fff;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        background: $brand-details;
        text-align: center;
        border-radius: 7px;
        @include font-size(1.5);
      }
      img {
        width: 100%;
      }
    }
  }
</style>
