<template>
  <section class="page">
    <div class="script1">
      <h1>você também faz parte desta <span>mudança!</span></h1>
    </div>
    <div class="image">
      <img src="../assets/backgrounds/page16/01.png" alt="Person">
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
  
  section.page {
    background: url("../assets/backgrounds/page1/07.png") no-repeat;
    background-size: cover;
    
    .image {
      top: 60%;
      left: 50%;
      transform: translate(-50%, -100%);
      animation: imageAnimation 5s infinite ease-in-out alternate;
      opacity: 0;
      &.show {
        opacity: 1;
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
    }
  }
  
  @keyframes imageAnimation {
    0% {
      transform: translate(-10%, -50%);
    }
    100% {
      transform: translate(-20%, - 50%);
    }
  }
</style>
