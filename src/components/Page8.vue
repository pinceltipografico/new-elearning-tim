<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="script1">
      <video src="/static/video/560156650.m4v" autoplay loop></video>
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
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 10000)
      this.$store.commit('setCanAdvance', false)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
      
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 1500,
          step: 'step1',
          selector: '.script1'
        }, {
          time: 500,
          step: 'step2',
          selector: '.script1'
        }, {
          time: 8000,
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
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    div.image-background {
      &.step2 {
        background: url('../assets/backgrounds/page8/02.jpg') no-repeat;
        background-size: cover;
      }
    }
    
    .script1 {
      width: 100%;
      height: 100%;
      video{
        margin-top: -20px;
        width: 100%;
        height: 110%;
      }
      h1{
        position: absolute;
        @include font-size(2);
        color:#fff;
        top:50%;
        right: -100%;
        transform: translateY(-50%);
        background: rgba(#000,0.5);
        padding: 20px;
        transition: all $animationTime;
        
        &:after,
        &:before{
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #fff;
          transform: scaleX(0);
          transition: all $animationTime;
        }
        &:before{
          top:-5px;
          left: 0;
          transform-origin: 0 0;
        }
        &:after{
          bottom:-5px;
          right: 0;
          transform-origin: 100% 0;
        }
      }
      &.hide {
        display: none;
      }
      &.step1{
        h1{
          right: 5%;
        }
      }
      &.step2{
        h1:before,
        h1:after{
          transform: scaleX(1);
        }
      }
    }
    
    .effect {
      width: 0;
      height: 100%;
      background: #fff;
      left: 0;
      top: 0;
      
      &.step1 {
        width: 100%;
      }
      &.step2 {
        width: 40%;
        left: 50%;
      }
    }
    .script2 {
      right: 10%;
      top: 50%;
      transform: translateY(-50%);
      @include font-size(2);
      max-width: 37%;
      opacity: 0;
      h1 {
        color: #666;
      }
      &.show {
        opacity: 1;
      }
    }
  }
</style>
