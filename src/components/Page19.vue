<template>
  <section class="page">
    <div class="script1">
      <h1>Parabéns! Você completou o módulo: <span>introdução!</span></h1>
    </div>
    <div class="image">
      <div class="shadow"></div>
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
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 10000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(null)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    },
    destroyed () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    @extend %gradient;
  }
  
  .image {
    position: relative;
    width: 426px;
    height: 650px;
    background: url("../assets/backgrounds/page19-1.png") no-repeat;
    top: 50%;
    left: 10%;
    transform: translateY(-55%);
    animation: imageAnimation 5s infinite ease-in-out alternate;
    .shadow {
      position: absolute;
      bottom: 0;
    }
  }
  
  .script1 {
    color: #666;
    @include font-size(2);
    text-transform: uppercase;
    top: 40%;
    left: 0;
    width: 100%;
    background: #fff;
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
    h1 {
      max-width: 500px;
      margin-left: 40%;
      padding: 40px 0;
    }
  }
  
  @keyframes imageAnimation {
    0% {
      transform: translateY(-60%);
    }
    100% {
      transform: translateY(-50%);
    }
  }
</style>
