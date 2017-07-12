<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="infographic">
      <img src="~@/assets/svgs/infographic_page10.svg" alt="Infographic">
    </div>
    <div class="script1">
      <h1>
        É necessário olhar o cliente <span>mais de perto</span>
      </h1>
    </div>
    <div class="script2">
      <h1>Na TIM estamos passando por esse <span>movimento!</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */
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
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1 h1:first-of-type'
        }, {
          time: 1500,
          step: 'show',
          selector: '.infographic'
        }, {
          time: 1500,
          step: 'show',
          selector: '.script2'
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
  
  section.page {
    @extend %gradient;
    * {
      transition: all $animationTime;
    }
  }
  
  .script1,
  .script2,
  .infographic {
    z-index: 4;
    position: absolute;
  }
  
  .infographic {
    width: 550px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    
    &.show {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  .script1,
  .script2 {
    @include font-size(2.5);
    color: #fff;
  }
  
  .script1 {
    top: 30%;
    max-width: 25%;
    left: 5%;
  }
  
  .script1 h1 {
    padding: 10px;
    @include font-size(2.5);
    color: #fff;
    transform: translate(100%, -50%) scale(1) rotate(0deg);
    opacity: 0;
    
    &.show {
      transform: translate(0%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
  }
  
  .script2 {
    max-width: 25%;
    color: #fff;
    bottom: 100px;
    right: 5%;
    text-align: right;
    transform: translateY(100%);
    opacity: 0;
    h1 {
      @include font-size(2.5);
      padding: 10px 0;
      display: inline-block;
    }
    
    &.show {
      transform: translateY(-50%);
      opacity: 1;
    }
  }
</style>
