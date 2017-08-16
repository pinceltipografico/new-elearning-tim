<template>
  <section class="page">
    <div class="middle-image"></div>
    <div class="script1">
      <h1>
        <span>A CHAVE É:</span><br/>
        <small>Antecipar -se as tendências, <br/>adaptar-se com velocidade e criar verdadeiros seguidores</small>
      </h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  export default {
    name: 'page6',
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.middle-image'
        }, {
          time: 500,
          step: 'animate',
          selector: '.middle-image'
        }, {
          time: 500,
          step: 'show',
          selector: '.overlay'
        }, {
          time: 1500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 400,
          step: 'animate',
          selector: '.script1'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    },
    
    /**
     | ----------------------------------------------
     * WHEN DESTROY COMPONENT
     | ----------------------------------------------
     **/
    destroyed () {
      this.stopAudio()
      Animations.destroyAnimations()
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page1/07.png") no-repeat;
    background-size: cover;
    overflow: hidden;
    
    * {
      transition: all $animationTime;
    }
  }
  
  .middle-image {
    background: url("../assets/backgrounds/page1/08.png") no-repeat bottom;
    width: 35%;
    height: 100%;
    position: absolute;
    left: 27%;
    bottom: 0px;
    transform: translateX(-50%);
    opacity: 0;
    &.show {
      transform: translateX(-10%);
      opacity: 1;
    }
    &.animate {
      animation: imageAnimation 5s infinite ease-in-out alternate;
    }
  }
  
  .script1,
  .middle-image {
    z-index: 4;
    position: absolute;
  }
  
  .script1 {
    width: 45%;
    color: #fff;
    background-color: #1E3144;
    padding: 20px 40px 20px 100px;
    transform-origin: 0 50%;
    transform: scaleX(0) translateX(-10%);
    top: 35%;
    left: 55%;
    z-index: 3;
    h1 {
      @include font-size(2.5);
    }
    &.show {
      transform: scaleX(1) translateX(-10%);
    }
    &.animate {
      animation: imageAnimation 10s infinite ease-in-out alternate;
    }
  }
  
  @keyframes imageAnimation {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(-20%);
    }
  }
</style>
