<template>
  <section class="page page14">
    <div class="script1">
      <h1>Você também faz parte desta <span>mudança!</span></h1>
    </div>
    <div class="image">
      <img src="../assets/backgrounds/page14/01.png" alt="Person">
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
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.image'
        }, {
          time: 2500,
          step: 'show',
          selector: '.image'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline()
      this.playAudio('scene14', 'static/subtitles/page14.json', null, function () {
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
      this.stopAudio()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page1/07.png") no-repeat;
    background-size: cover;
    
    .image {
      bottom:0;
      left: 50%;
      transform: translateX(-50%);
      animation: imageAnimation 5s infinite ease-in-out alternate;
      opacity: 0;
      &.show {
        opacity: 1;
      }
      @include responsive('laptopS'){
        left: 60%;
      }
    }
    .script1 {
      background-color: #1E3144;
      color: #fff;
      padding: 20px;
      width: 100%;
      top: 50%;
      @include font-size(2);
      h1 {
        max-width: 500px;
        margin-left: 70px;
      }
      @include responsive('laptopS'){
        h1{
          max-width: 400px;
        }
      }
    }
  }
  
  @keyframes imageAnimation {
    0% {
      transform: translate(-10%, 0);
    }
    100% {
      transform: translate(-20%, 0);
    }
  }
</style>
