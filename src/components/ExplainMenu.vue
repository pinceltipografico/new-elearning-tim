<template>
  <section class="page">
    <div class="overlay darken"></div>
    <div class="explain-item volume">
      <!-- --> Clique aqui para ativar ou desativar o audio<!-- -->
    </div>
    <div class="explain-item close">
      <!-- --> Clique aqui para sair do curso<!-- -->
    </div>
    <div class="explain-item progress-bar">
      <!-- --> Esta barra indica o progresso de sua página <!-- -->
    </div>
    <div class="explain-item next-button">
      <!-- --> Clique aqui para avançar uma página <!-- -->
    </div>
    <div class="explain-item prev-button">
      <!-- --> Clique aqui para avançar uma página <!-- -->
    </div>
  </section>
</template>
<script type="text/javascript">
  var Animation = require('../lib/ChainAnimation')
  export default {
    mounted () {
      this.$store.commit('toggleIterface', true)
      let animationsScene = [
        {
          time: 500,
          step: 'show',
          selector: '.explain-item.volume'
        }, {
          time: 2000,
          step: 'hide',
          selector: '.explain-item.volume'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.close'
        }, {
          time: 2000,
          step: 'hide',
          selector: '.explain-item.close'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.progress-bar'
        }, {
          time: 2000,
          step: 'hide',
          selector: '.explain-item.progress-bar'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.next-button'
        }, {
          time: 2000,
          step: 'hide',
          selector: '.explain-item.next-button'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.prev-button'
        }, {
          time: 2000,
          step: 'hide',
          selector: '.explain-item.prev-button'
        }
      ]
      Animation.setAnimations(animationsScene)
      Animation.animationTimeline(function () {
        console.log('done')
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .explain-item {
    position: absolute;
    display: block;
    z-index: 3;
    color: #fff;
    @include font-size(1.5);
    max-width: 200px;
    padding: 10px;
    border-top: 1px solid $brand-details;
    transition: opacity $animationTime, transform $animationTime;
    transform: translateX(-100%);
    text-transform: uppercase;
    opacity: 0;
    
    &.progress-bar{
      bottom:70px;
      max-width: 250px;
      border-bottom: 1px solid $brand-details;
      border-top: none;
      left:15%;
      
      &:before {
        position: absolute;
        bottom: -15px;
        right: 0;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid $brand-details;
      }
    }
    
    &.next-button{
      top:50%;
      right: 7%;
      &:before {
        position: absolute;
        top:0%;
        right: -15px;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        border-left: 8px solid $brand-details;
      }
    }
  
    &.prev-button{
      top:50%;
      left: 7%;
      &:before {
        position: absolute;
        top:0%;
        left: -15px;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        border-right: 8px solid $brand-details;
      }
    }
    
    &.volume,
    &.close {
      top: 80px;
      &:before {
        position: absolute;
        top: -15px;
        right: 0;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid $brand-details;
      }
    }
    &.volume {
      right: 82px;
    }
    &.close {
      right: 35px;
    }
    
    &.show{
      transform: translateX(0);
      opacity: 1;
    }
    &.hide{
      transform: translateX(-100%);
      opacity: 0;
    }
  }
</style>
