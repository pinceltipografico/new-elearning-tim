<template>
  <section class="page">
    <div class="middle-image"></div>
    <div class="script1">
      <h1>
        A CHAVE É:<br /> ANTECIPAR -SE AS TENDÊNCIAS, ADAPTAR -SE COM VELOCIDE E CRIAR VERDADEIROS SEGUIDORES
      </h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  export default {
    created () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.overlay'
        }, {
          time: 1500,
          step: 'show',
          selector: '.script1'
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
    background: url("../assets/backgrounds/page-6-1.png") no-repeat;
    background-size: cover;
    overflow: hidden;
    
    * {
      transition: all $animationTime;
    }
  }

  .middle-image {
    background: url("../assets/backgrounds/page-6-2.png") no-repeat;
    width: 35%;
    height: 100%;
    position: absolute;
    left: 30%;
    bottom: 0px;
    background-position: bottom;
  }

  .script1,
  .middle-image{
    z-index: 4;
    position: absolute;
  }

  .script1 {
    width: 35%;
    color: #fff;
    background-color: #1E3144;
    padding: 20px 40px;
    transform-origin: 0 50%;
    transform: scaleX(0);
    top: 35%;
    left: 55%;
    z-index: 3;
    h1 {
      @include font-size(2.5);
    }
    &.show {
      transform: scaleX(1);
    }
  }

</style>
