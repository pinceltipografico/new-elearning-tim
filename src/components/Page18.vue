<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="effects"></div>
    <div class="script1">
      <h1>proporcionando boas experiências</h1>
    </div>
    <div class="script1_2">
      <h1>compreender o outro<br/>cada vez melhor</h1>
    </div>
    <div class="script2">
      <h1>simplificando e potencializando esta experiência</h1>
    </div>
    <div class="script3 end-tag">
      <h1>todos os colaboradores da <span class="red">TIM</span> <br/>vivendo a <span>experiência CX</span></h1>
    </div>
    <div class="script4">
      <h1>é o que chamamos de Crew Experience</h1>
    </div>
    <div class="script5">
      <h1>colaborador e cliente na mesma sintonia</h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  import { EventBus } from '../events/index'
  
  var Animations = require('../lib/ChainAnimation')
  export default {
    /**
     | ----------------------------------------------
     * WHEN COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var vm = this
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1_2'
        }, {
          time: 2000,
          step: 'step1',
          selector: '.script1_2'
        }, {
          time: 6000,
          step: 'hide',
          selector: '.script1_2'
        }, {
          time: 500,
          step: 'step1',
          selector: '.effects'
        }, {
          time: 1000,
          step: 'step1',
          selector: '.image-background'
        }, {
          time: 100,
          step: 'step2',
          selector: '.effects'
        }, {
          time: 50,
          step: 'step2_1',
          selector: '.effects'
        }, {
          time: 500,
          step: 'show',
          selector: '.script2'
        }, {
          time: 8000,
          step: 'show',
          selector: '.script2',
          reverse: true
        }, {
          time: 1000,
          step: 'step3',
          selector: '.effects'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 4000,
          step: 'show',
          selector: '.script1',
          reverse: true
        }, {
          time: 500,
          step: 'step3',
          selector: '.effects',
          reverse: true
        }, {
          time: 1000,
          step: 'step2',
          selector: '.image-background'
        }, {
          time: 500,
          step: 'step4',
          selector: '.effects'
        }, {
          time: 1500,
          step: 'show',
          selector: '.script3'
        }, {
          time: 6000,
          step: 'show',
          selector: '.script3',
          reverse: true
        }, {
          time: 500,
          step: 'step5',
          selector: '.effects'
        }, {
          time: 1000,
          step: 'step3',
          selector: '.image-background'
        }, {
          time: 100,
          step: 'step6',
          selector: '.effects'
        }, {
          time: 1500,
          step: 'show',
          selector: '.script5'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline()
      setTimeout(function () {
        vm.playAudio('scene13', 'static/subtitles/page13.json', null, function () {
          vm.$store.commit('setCanAdvance', true)
        })
      }, 500)
    },
    
    /**
     | ----------------------------------------------
     * DESTROY
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
      this.$store.state.audio.stop()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .image-background {
    background: url("../assets/backgrounds/page18/ref-525655138.jpg") no-repeat;
    background-size: cover;
    &.step1 {
      background: url("../assets/backgrounds/page18/02.jpg") no-repeat;
      background-size: cover;
    }
    &.step2 {
      background: url("../assets/backgrounds/page18/01.jpg") no-repeat;
      background-size: cover;
    }
    &.step3 {
      background: url("../assets/backgrounds/page18/ref-565936849.jpg") no-repeat;
      background-size: cover;
    }
  }
  
  .effects {
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    opacity: 0;
    
    &.step1 {
      opacity: 1;
    }
    &.step2_1 {
      background: $brand-details;
    }
    &.step2_1_2 {
      opacity: 1;
    }
    &.step3 {
      width: 40%;
      left: 55%;
    }
    &.step4 {
      opacity: 0;
    }
    &.step5 {
      opacity: 1;
    }
    &.step6 {
      transform: translateX(-100%);
    }
  }
  
  .script1 {
    @include font-size(2.3);
    max-width: 350px;
    color: #fff;
    top: 50%;
    transform: translate(100%, -50%);
    left: 60%;
    opacity: 0;
    &.show {
      opacity: 1;
      transform: translate(0, -50%);
    }
    &.hide {
      opacity: 0;
    }
  }
  
  .script1_2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    @include font-size(2.5);
    text-align: center;
    display: block;
    color: #fff;
    opacity: 0;
    h1 {
      background: $brand-details;
      margin: 0;
      padding: 0 20px;
    }
    &.show {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    &.step1 {
      border: 10px double $brand-details;
    }
    &.hide {
      opacity: 0;
    }
  }
  
  .script2 {
    @include font-size(2.5);
    max-width: 60%;
    text-align: center;
    color: #fff;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    opacity: 0;
    &.show {
      opacity: 1;
    }
    &.hide {
      opacity: 0;
    }
  }
  
  .script4 {
    top: 50%;
    left: 100px;
    color: $brand-details;
    background: #fff;
    @include font-size(2);
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 0;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2);
    }
    h1 {
      padding: 20px;
      max-width: 400px;
      &:after {
        content: '';
        width: 80%;
        display: inline-block;
        background: $brand-secondary;
        height: 4px;
      }
    }
    &.show {
      opacity: 1;
      transform: translate(0, -50%) rotate(0deg);
    }
    &.step2 {
      transform: translate(0, -50%) rotate(-2deg);
    }
  }
  
  .script5 {
    top: 50%;
    right: -105%;
    transform: translateY(-50%);
    h1 {
      @include font-size(3.5);
      max-width: 400px;
      color: #fff;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 10px 0;
    }
    &.show {
      right: 5%;
    }
  }
</style>
