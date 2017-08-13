<template>
  <section class="page">
    <div class="overlay darken"></div>
    <div class="explain-item legenda">
      <!-- --> Clique aqui para ativar ou desativar as legendas do curso<!-- -->
    </div>
    <div class="explain-item volume">
      <!-- --> Clique aqui para ativar ou desativar o áudio do curso<!-- -->
    </div>
    <div class="explain-item close">
      <!-- --> Clique aqui para sair do curso<!-- -->
    </div>
    <div class="explain-item progress-bar">
      <!-- --> Esta barra indica o progresso de sua página <!-- -->
    </div>
    <div class="explain-item next-button">
      <!-- --> Clique aqui para avançar para a próxima página <!-- -->
    </div>
    <div class="explain-item prev-button">
      <!-- --> Clique aqui para voltar uma página <!-- -->
    </div>
    <div class="explain-item play-button">
      <!-- -->Clique aqui para pausar seu curso<!-- -->
    </div>
    <div class="explain-item rewind-button">
      <!-- -->Clique aqui para voltar para o começo da página<!-- -->
    </div>
    <div class="accpet">
      <span>Ok. Entendi</span>
      <label for="accpet"><input id="accpet" type="checkbox" v-model="preventView"/>Não mostrar novamente</label>
      <div class="buttons" @click="onAccept">
        <span>ir para o curso</span>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  var Animation = require('../lib/ChainAnimation')
  export default {
    /**
     | ----------------------------------------------
     * RETURN THE DATA OF COMPOENET
     | ----------------------------------------------
     **/
    data () {
      return {
        preventView: false
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      let animationsScene = [
        {
          time: 500,
          step: 'show',
          selector: '.explain-item.legenda'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.legenda'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.volume'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.volume'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.close'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.close'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.next-button'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.next-button'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.prev-button'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.prev-button'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.play-button'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.play-button'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.rewind-button'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.rewind-button'
        }, {
          time: 500,
          step: 'show',
          selector: '.explain-item.progress-bar'
        }, {
          time: 8000,
          step: 'hide',
          selector: '.explain-item.progress-bar'
        }, {
          time: 500,
          step: 'show',
          selector: '.accpet'
        }
      ]
      Animation.setAnimations(animationsScene)
      Animation.animationTimeline()
    },
    /**
     | ----------------------------------------------
     * RETURN THE METHODS OF COMPONENT
     | ----------------------------------------------
     **/
    methods: {
      onAccept: function () {
        this.$cookie.set('explain_viewed', this.preventView)
        this.$router.replace('page1')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/home/home.jpg") no-repeat;
    background-size: cover;
  }
  
  .explain-item {
    position: absolute;
    display: block;
    z-index: 3;
    color: $brand-details;
    @include font-size(1.5);
    max-width: 300px;
    padding: 10px;
    border-top: 1px solid $brand-details;
    transition: opacity $animationTime, transform $animationTime;
    transform: translateX(-100%);
    opacity: 0;
    text-transform: uppercase;
    font-weight: bold;
    
    &.progress-bar,
    &.play-button,
    &.rewind-button {
      bottom: 70px;
      max-width: 250px;
      border-bottom: 1px solid $brand-details;
      border-top: none;
      left: 15%;
      
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
    &.play-button,
    &.rewind-button {
      bottom: 80px;
      &:before {
        right: auto;
        left: 0;
      }
    }
    &.play-button {
      left: 90px;
    }
    &.rewind-button {
      left: 45px;
    }
    
    &.next-button {
      top: 50%;
      right: 7%;
      &:before {
        position: absolute;
        top: 0%;
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
    
    &.prev-button {
      top: 50%;
      left: 7%;
      &:before {
        position: absolute;
        top: 0%;
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
    &.close,
    &.legenda {
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
    &.legenda {
      right: 130px;
    }
    
    &.show {
      transform: translateX(0);
      opacity: 1;
    }
    
    &.hide {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
  
  .accpet {
    position: absolute;
    z-index: 3;
    width: 500px;
    text-align: center;
    transform: translate(-50%, -50%) scale(0);
    transition: transform $animationTime;
    top: 50%;
    left: 50%;
    padding-top: 10px;
    background: $brand-primary;
    span {
      display: block;
      @include font-size(2);
      color: #fff;
    }
    label {
      color: #fff;
      @include font-size(1.5);
      input {
        margin-right: 5px;
      }
    }
    &.show {
      transform: translate(-50%, -50%) scale(1);
    }
  }
</style>
