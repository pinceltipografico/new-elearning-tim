<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="script1 end-tag">
      <h1>entender o que bate em seu coração</h1>
    </div>
    <div class="effect"></div>
    <div class="script2">
      <h1>Mas nós todos <span>como clientes</span> desejamos mais...</h1>
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
    * WHEN COMPOENNT IS READY
    | ----------------------------------------------
    **/
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 20000)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 2000,
          step: 'step1',
          selector: '.effect'
        }, {
          time: 100,
          step: 'step2',
          selector: '.image-background'
        }, {
          time: 100,
          step: 'show',
          selector: '.script2'
        }, {
          time: 0,
          step: 'hide',
          selector: '.script1'
        }, {
          time: 1500,
          step: 'step2',
          selector: '.effect'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    div.image-background {
      background: url("../assets/backgrounds/page8-1.jpg") no-repeat;
      background-size: cover;
      
      &.step2{
        background: url('../assets/backgrounds/page8-2.jpg') no-repeat;
        background-size: cover;
      }
    }
    
    .script1{
      &.hide{
        display: none;
      }
    }
  
    .effect{
      width: 0;
      height: 100%;
      background: #fff;
      left: 0;
      top:0;
      
      &.step1{
        width: 100%;
      }
      &.step2{
        width: 40%;
        left: 50%;
      }
    }
    .script2{
      right: 10%;
      top:50%;
      transform: translateY(-50%);
      @include font-size(2);
      max-width: 37%;
      opacity: 0;
      h1{
        color:#666;
      }
      &.show{
        opacity: 1;
      }
    }
  }
</style>
