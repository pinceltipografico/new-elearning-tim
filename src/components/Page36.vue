<template>
  <div class="outer-page gradient">
    <section class="page" v-if="scene === 0">
      <div class="start">
        <h1>
          O Monitoramento em uma abordagem de CX vai muito além de relatórios e KPIs que já são utilizados pelas diferentes áreas da <span>TIM</span>
          para fazer a gestão de suas atividades.</h1>
        <div class="buttons" @click="startAnim">
          <span>Ver como funciona</span>
          <i class="material-icons">&#xE038;</i>
        </div>
      </div>
    </section>
    <section class="page monitoring" v-if="scene === 1">
      <div class="people">
        <people></people>
        <h1>60<br/>milhões</h1>
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
        <h2>insight</h2>
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
        <img src="../assets/backgrounds/page33/circlel.png"/>
      </div>
      <div class="customer_centric">
        <h2>customer centric</h2>
        <costumer-centric></costumer-centric>
      </div>
      <div class="customer_experience">
        <h2>Customer Experience</h2>
        <img src="../assets/backgrounds/page33/circle2.png"/>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
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
      Arrow2
    },
    data () {
      return {
        scene: 0
      }
    },
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      this.$store.commit('setCanAdvance', false)
    },
    destroyed () {
      Animations.destroyAnimations()
    },
    methods: {
      startAnim () {
        this.scene = 1
        var animations = [
          {
            time: 3000,
            step: 'step1',
            selector: '.people'
          }, {
            time: 500,
            step: 'step1',
            selector: '.informacao'
          }, {
            time: 50,
            step: 'step2',
            selector: '.informacao'
          }, {
            time: 150,
            step: 'step3',
            selector: '.informacao'
          }, {
            time: 1500,
            step: 'step1',
            selector: '.server'
          }, {
            time: 1500,
            step: 'step1',
            selector: '.big-data'
          }, {
            time: 50,
            step: 'step2',
            selector: '.big-data'
          }, {
            time: 150,
            step: 'step3',
            selector: '.big-data'
          }, {
            time: 1500,
            step: 'step1',
            selector: '.brain'
          }, {
            time: 500,
            step: 'step1',
            selector: '.arrow1'
          }, {
            time: 500,
            step: 'step1',
            selector: '.analise'
          }, {
            time: 500,
            step: 'step1',
            selector: '.arrow2'
          }, {
            time: 500,
            step: 'step1',
            selector: '.idea'
          }, {
            time: 500,
            step: 'step1',
            selector: '.arrow3'
          }, {
            time: 500,
            step: 'step1',
            selector: '.clock'
          }, {
            time: 2500,
            step: 'step1',
            selector: '.arrow4'
          }, {
            time: 1000,
            step: 'step1',
            selector: '.engajamento'
          }, {
            time: 1000,
            step: 'step1',
            selector: '.customer_centric'
          }, {
            time: 1000,
            step: 'step1',
            selector: '.customer_experience'
          }, {
            time: 4000,
            step: 'step1',
            selector: '.customer_experience'
          }
        ]
        Animations.setAnimations(animations)
        Animations.animationTimeline(function () {
          this.$store.commit('setCanAdvance', true)
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
      color: #fff;
      @include font-size(2.5);
      text-align: center;
    }
  }
  
  .monitoring {
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
        @include font-size(3);
        left: 65%;
      }
      &.step1 {
        transform: translate(-50%, -50%) scale(0.3);
        left: 310px;
        top: 160px;
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
      &.step1 {
        .dot {
          transform: scale(1);
        }
      }
      &.step2 {
        .arrow {
          width: 120px;
        }
      }
      &.step3 {
        h2 {
          opacity: 1;
        }
      }
    }
    .server {
      width: 120px;
      top: 120px;
      left: 540px;
      opacity: 0;
      &.step1 {
        opacity: 1;
      }
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
        top: -40px;
        left: 20px;
        opacity: 0;
      }
      &.step1 {
        .dot {
          transform: scale(1);
        }
      }
      &.step2 {
        .arrow {
          width: 80px;
        }
      }
      &.step3 {
        h2 {
          opacity: 1;
        }
      }
    }
    .brain {
      width: 200px;
      top: 10%;
      left: 770px;
      h2 {
        text-align: center;
        color: #fff;
      }
      transform: scale(0);
      &.step1 {
        transform: scale(1);
      }
    }
    .arrow1 {
      width: 130px;
      left: 950px;
      top: 150px;
      h2 {
        position: absolute;
        color: #fff;
        left: 40px;
        top: 15px;
      }
      transform: rotate(-50deg);
      opacity: 0;
      &.step1 {
        opacity: 1;
        transform: rotate(0deg);
      }
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
      &.step1 {
        transform: scale(1);
        opacity: 1;
      }
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
      &.step1 {
        opacity: 1;
        transform: rotate(90deg);
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
      &.step1 {
        transform: scale(1);
      }
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
      &.step1 {
        transform: rotate(220deg);
        opacity: 1;
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
      &.step1 {
        opacity: 1;
        transform: translateY(0%);
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
      &.step1 {
        transform: scale(1);
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
      &.step1 {
        transform: scale(1);
      }
    }
    .arrow4 {
      width: 590px;
      top: 330px;
      left: 200px;
      transform: rotate(-10deg);
      opacity: 0;
      &.step1 {
        opacity: 0.3;
      }
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
      }
      img {
        width: 100%;
      }
      &.step1 {
        transform: scale(1);
      }
    }
  }
</style>
