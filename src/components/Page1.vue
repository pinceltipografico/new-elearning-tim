<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="blue-left"></div>
    <div class="script1">
      <h1>
        Estamos todos muito mais exigentes, queremos mais <span>velocidade</span> e <span>autonomia.</span>
      </h1>
    </div>
    <div class="script2">
      <h1>
        Soluções específicas para as nossas necessidades e para o nosso jeito de ser, tanto no trabalho, nas nossas relações e na nossa forma de consumir.
      </h1>
    </div>
    <div class="image-left"></div>
    <div class="image-right"></div>
    <div class="image-full"></div>
    <div class="script3">
      <h1>
        <span>Conexão</span> e <span>interação,</span> a <span>tecnologia</span>
        nos trouxe esta possibilidade. Rupturas de padrões, um movimento que não para de crescer</h1>
    </div>
    <div class="script4">
      <h1>
        Somos todos de uma só geração, a geração que quer ser ouvida e atendida a partir de necessidades específicas, sem rótulos.</h1>
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
          selector: '.script1'
        }, {
          time: 700,
          step: 'show',
          selector: '.blue-left'
        }, {
          time: 2000,
          step: 'large',
          selector: '.blue-left'
        }, {
          time: 100,
          step: 'blue',
          selector: '.blue-left'
        }, {
          time: 100,
          step: 'hide',
          selector: '.script1'
        }, {
          time: 400,
          step: 'show',
          selector: '.image-right'
        }, {
          time: 400,
          step: 'show',
          selector: '.script2'
        }, {
          time: 4500,
          step: 'hide',
          selector: '.script2'
        }, {
          time: 400,
          step: 'hide',
          selector: '.image-right'
        }, {
          time: 400,
          step: 'white',
          selector: '.blue-left'
        }, {
          time: 400,
          step: 'show',
          selector: '.image-full'
        }, {
          time: 400,
          step: 'show',
          selector: '.script3'
        }, {
          time: 3000,
          step: 'hide',
          selector: '.script3'
        }, {
          time: 400,
          step: 'texture',
          selector: '.blue-left'
        }, {
          time: 400,
          step: 'hide',
          selector: '.image-full'
        }, {
          time: 400,
          step: 'show',
          selector: '.script4'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
      EventBus.$emit('start-progress')
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page-1.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    
    * {
      transition: all $animationTime;
    }
  }
  
  .script1,
  .blue-left,
  .image-right,
  .script2,
  .script3,
  .image-full,
  .script4 {
    z-index: 4;
    position: absolute;
  }
  
  .image-full {
    width: 100%;
    height: 100%;
    background: url("../assets/backgrounds/page-1-4.jpg") no-repeat;
    background-size: cover;
    opacity: 0;
    &.show {
      opacity: 1;
    }
    &.hide {
      opacity: 0;
    }
  }
  
  .image-right {
    width: 50%;
    height: 100%;
    background: url("../assets/backgrounds/page-1-2.png") no-repeat;
    background-size: cover;
    right: 0;
    transform: translateX(100%);
    
    &.show {
      transform: translateX(0);
    }
    &.hide {
      transform: translateX(100%);
    }
  }
  
  .blue-left {
    width: 40%;
    height: 100%;
    background: $brand-primary;
    transform: translate(0, -110%);
    
    &.show {
      transform: translate(0, 0);
    }
    &.blue {
      background: darken($brand-primary, 20%);
    }
    &.large {
      width: 100%;
    }
    &.white {
      background: #fff;
    }
    &.texture {
      background: url("../assets/backgrounds/page-1-5.jpg") no-repeat;
      background-size: cover;
    }
  }
  
  .script1 {
    top: 50%;
    left: 100px;
    max-width: 400px;
    @include font-size(2.5);
    color: #fff;
    text-transform: uppercase;
    transform: translate(100%, -50%) scale(1) rotate(0deg);
    opacity: 0;
    span {
      color: $brand-details;
    }
    
    &.show {
      transform: translate(0%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
    &.hide {
      transform: translate(0, -50%) scale(0) rotate(180deg);
    }
  }
  
  .script2 {
    width: 100%;
    color: #fff;
    background: $brand-details;
    top: 50%;
    padding: 20px 40px;
    transform-origin: 0 50%;
    transform: scaleX(0);
    h1 {
      max-width: 45%;
      @include font-size(2.5);
    }
    &.show {
      transform: scaleX(1);
      animation: scaleUp 5s forwards;
    }
    &.hide {
      top: 100%;
    }
  }
  
  .script3 {
    max-width: 400px;
    top: 50%;
    right: 10%;
    transform: translate(100%, -50%);
    background: rgba(#000, 0.5);
    border: 2px solid $brand-details;
    padding: 15px;
    opacity: 0;
    &:before {
      content: '';
      display: block;
      position: absolute;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      border-right: 20px solid $brand-details;
      right: 100%;
      top: 50%;
      margin-top: -20px;
    }
    h1 {
      @include font-size(2.5);
      color: #fff;
      text-transform: uppercase;
      span {
        color: $brand-details;
      }
    }
    &.show {
      transform: translate(0, -50%);
      opacity: 1;
    }
    &.hide {
      transform: translate(100%, -50%);
      opacity: 0;
    }
  }
  
  .script4 {
    width: 100%;
    text-transform: uppercase;
    color: #fff;
    top: 50%;
    background: rgba(#000, 0.5);
    text-align: center;
    padding: 30px;
    transform: translateY(100%);
    opacity: 0;
    h1 {
      @include font-size(3);
      border-top: 2px dotted $brand-details;
      border-bottom: 2px dotted $brand-details;
      padding: 10px 0;
      max-width: 80%;
      display: inline-block;
    }
    
    &.show {
      transform: translateY(-50%);
      opacity: 1;
    }
  }
  
  @keyframes scaleUp {
    to {
      padding: 100px 40px;
    }
  }
</style>
