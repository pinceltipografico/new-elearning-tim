<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="effects"></div>
    <div class="script1">
      <h1>Adapte-se a esse <span>contexto!</span></h1>
    </div>
    <div class="script2">
      <h1>A TIM está se movimentando para esta <span>mudança!</span></h1>
      <div class="shadow"></div>
    </div>
    <div class="script3">
      <h1>
        <strong>Empresa</strong><br/><strong>Colaboradores</strong><br/><strong>Clientes</strong>
        <br/>
        <span>Uma única perspectiva.</span></h1>
      <div class="effect"></div>
      <div class="effect"></div>
      <div class="effect"></div>
      <div class="effect"></div>
    </div>
    <div class="script4">
      <h1>Compartilhando,<br/><span>Construindo,</span><br/>Evoluindo.</h1>
    </div>
    <div class="script5 end-tag">
      <h1>Somos a <span>Geração CX TIM.</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  export default {
    /**
    | ----------------------------------------------
    * WHEN COMPONENT IS READY
    | ----------------------------------------------
    **/
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 20000)
      var animations = [
        {
          time: 500,
          step: 'step1',
          selector: '.effects'
        }, {
          time: 500,
          step: 'step1',
          selector: '.script1'
        }, {
          time: 2500,
          step: 'step2',
          selector: '.script1'
        }, {
          time: 100,
          step: 'step2',
          selector: '.effects'
        }, {
          time: 400,
          step: 'step3',
          selector: '.effects'
        }, {
          time: 400,
          step: 'step1',
          selector: '.script2'
        }, {
          time: 5000,
          step: 'step3',
          selector: '.script2'
        }, {
          time: 10,
          step: 'step5',
          selector: '.effects'
        }, {
          time: 250,
          step: 'step2',
          selector: '.image-background'
        }, {
          time: 400,
          step: 'step6',
          selector: '.effects'
        }, {
          time: 400,
          step: 'step1',
          selector: '.script3'
        }, {
          time: 400,
          step: 'step2',
          selector: '.script3'
        }, {
          time: 2500,
          step: 'step2',
          selector: '.script3',
          reverse: true
        }, {
          time: 300,
          step: 'step3',
          selector: '.script3'
        }, {
          time: 0,
          step: 'step7',
          selector: '.effects'
        }, {
          time: 300,
          step: 'step8',
          selector: '.effects'
        }, {
          time: 300,
          step: 'step9',
          selector: '.effects'
        }, {
          time: 300,
          step: 'step3',
          selector: '.image-background'
        }, {
          time: 300,
          step: 'step10',
          selector: '.effects'
        }, {
          time: 300,
          step: 'step1',
          selector: '.script4'
        }, {
          time: 2500,
          step: 'step2',
          selector: '.script4'
        }, {
          time: 300,
          step: 'step11',
          selector: '.effects'
        }, {
          time: 300,
          step: 'step4',
          selector: '.image-background'
        }, {
          time: 300,
          step: 'step12',
          selector: '.effects'
        }, {
          time: 600,
          step: 'show',
          selector: '.script5'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .image-background {
    background: url("../assets/backgrounds/page2-1.jpg") no-repeat;
    background-size: cover;
    &.step1 {
      background: url("../assets/backgrounds/page2-2.jpg") no-repeat;
      background-size: cover;
    }
    &.step2 {
      background: url("../assets/backgrounds/page2-4.png") no-repeat;
      background-size: cover;
    }
    &.step3 {
      background: $brand-primary url("../assets/backgrounds/page2-5.jpg") no-repeat bottom center;
      background-size: 100% auto;
      background-blend-mode: multiply;
    }
    &.step4 {
      background: url("../assets/backgrounds/page2-6.jpg") no-repeat;
      background-size: cover;
    }
  }
  
  .effects {
    height: 100%;
    width: 450px;
    background: #fff;
    left: -450px;
    
    &.step1 {
      left: 55%;
    }
    &.step2 {
      left: 0;
      width: 100%;
    }
    &.step3 {
      background: darken($brand-details, 40%);
    }
    &.step4 {
      opacity: 0;
    }
    &.step5 {
      background: #fff;
      opacity: 1;
    }
    &.step6 {
      opacity: 0;
    }
    &.step7 {
      top: 0;
      left: 0;
      width: 0;
      background: $brand-primary;
    }
    &.step8 {
      opacity: 1;
    }
    &.step9 {
      width: 100%;
    }
    &.step10 {
      opacity: 0;
    }
    &.step11 {
      background: #fff;
      opacity: 1;
    }
    &.step12 {
      opacity: 0;
    }
  }
  
  .script1 {
    max-width: 400px;
    @include font-size(2.5);
    left: 58%;
    top: 50%;
    color: #666;
    transform-origin: 50% 50%;
    transform: scale(0) translateY(-50%);
    
    &.step1 {
      transform: scale(1) translateY(-50%);
    }
    &.step2 {
      opacity: 0;
    }
  }
  
  .script2 {
    max-width: 65%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: scale(1) translate(-50%, -50%);
    @include font-size(2.5);
    text-align: center;
    h1,
    .shadow {
      transition: all $animationTime;
      opacity: 0;
    }
    h1 {
      width: 100%;
      color: #fff;
      transform: translateY(-59%);
      opacity: 0;
    }
    &.step1 {
      h1,
      .shadow {
        opacity: 1;
        transform: translateY(0);
      }
      transform: scale(1) translate(-50%, -50%);
      transform-origin: 100%;
      animation: pendulum 5s infinite ease-in-out;
    }
    &.step2 {
      animation: none;
    }
    &.step3 {
      opacity: 0;
    }
  }
  
  .script3 {
    top: 50%;
    left: 50%;
    transform: translate(140%, -50%);
    @include font-size(2);
    color: #fff;
    text-align: center;
    opacity: 0;
    padding: 10px 25px;
    border-top: 1px solid transparent;
    h1 {
      text-align: left;
      span {
        display: inline-block;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        background: #fff;
        margin-top: 20px;
        padding: 5px 10px;
        text-transform: none;
      }
      strong:nth-of-type(1) {
        font-size: 190%;
      }
      strong:nth-of-type(2) {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
      }
      strong:nth-of-type(3) {
        font-size: 195%;
      }
    }
    .effect {
      position: absolute;
      background: #fff;
      transition: all $animationTime;
      &:nth-of-type(1),
      &:nth-of-type(3) {
        width: 0;
        height: 2px;
      }
      &:nth-of-type(2),
      &:nth-of-type(4) {
        height: 0;
        width: 2px;
      }
      &:nth-of-type(1) {
        top: 0;
        left: 0;
      }
      &:nth-of-type(3) {
        bottom: 0;
        right: 0;
      }
      &:nth-of-type(2) {
        bottom: 0;
        left: 0;
      }
      &:nth-of-type(4) {
        top: 0;
        right: 0;
      }
    }
    
    &.step1 {
      opacity: 1;
      transform: translate(40%, -50%);
    }
    &.step2 {
      .effect {
        &:nth-of-type(1),
        &:nth-of-type(3) {
          width: 100%;
        }
        &:nth-of-type(2),
        &:nth-of-type(4) {
          height: 100%;
        }
      }
    }
    &.step3 {
      transform: translate(140%, -50%);
      opacity: 0;
    }
  }
  
  .script4 {
    top: 100px;
    left: 100px;
    @include font-size(2);
    max-width: 500px;
    color: #fff;
    h1 {
      transition: all $animationTime;
      border-top: 1px solid #fff;
      padding: 20px 0;
      opacity: 0;
    }
    &.step1 {
      h1 {
        opacity: 1;
      }
    }
    &.step2 {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
  
  .script5 {
    &.show {
      transform: translateY(-50%);
      opacity: 1;
    }
  }
  
  .people {
    bottom: -50px;
    left: 50%;
    transform: translatex(-50%);
  }
  
  @keyframes pendulum {
    0% {
      transform: translate(-50%, -40%);
    }
    50% {
      transform: translate(-50%, -50%);
    }
    100% {
      transform: translate(-50%, -40%);
    }
  }
</style>
