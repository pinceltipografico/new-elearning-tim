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
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.image'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(null)
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
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      animation: imageAnimation 5s infinite ease-in-out alternate;
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    .script1{
      background-color: #1E3144;
      color:#fff;
      padding: 20px;
      width: 100%;
      top:50%;
      @include font-size(2);
      h1{
        max-width: 500px;
        margin-left: 70px;
      }
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
