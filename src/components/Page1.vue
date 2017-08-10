<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="blue-left"></div>
    <div class="script1">
      <h1>
        Queremos mais <span>velocidade</span> e <span>autonomia</span>
      </h1>
    </div>
    <div class="script2">
      <h1>
        Soluções específicas para as nossas necessidades
      </h1>
    </div>
    <div class="image-left"></div>
    <div class="image-right"></div>
    <div class="image-full"></div>
    <div class="tags tag1">conectividade</div>
    <div class="tags tag2">interação</div>
    <div class="tags tag3">tecnologia</div>
    <div class="script3">
      <h1>Um movimento que <span>não para de crescer</span></h1>
    </div>
    <div class="script4 end-tag">
      <h1>
        <span>Uma geração que quer ser </span>ouvida e atendida</h1>
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
      this.$store.commit('setCanAdvance', false)
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
          time: 5000,
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
          time: 9000,
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
          selector: '.tag1'
        }, {
          time: 400,
          step: 'show',
          selector: '.tag2'
        }, {
          time: 400,
          step: 'show',
          selector: '.tag3'
        }, {
          time: 0,
          step: 'step4',
          selector: '.blue-left'
        }, {
          time: 2550,
          step: 'step5',
          selector: '.blue-left'
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
          step: 'step6',
          selector: '.blue-left'
        }, {
          time: 400,
          step: 'step3',
          selector: '.image-full'
        }, {
          time: 1000,
          step: 'hide',
          selector: '.blue-left'
        }, {
          time: 400,
          step: 'show',
          selector: '.script4'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
      
      this.playAudio('scene1', 'static/subtitles/page1_1.json', function (pos) {}, function () {})
    },
    destroyed () {
      this.$store.state.audio.stop()
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page1/01.jpg") no-repeat;
    background-size: cover;
  }
  
  .image-full {
    width: 100%;
    height: 100%;
    background: url("../assets/backgrounds/page1/04.jpg") no-repeat;
    background-size: cover;
    opacity: 0;
    &.show {
      opacity: 1;
    }
    &.hide {
      opacity: 0;
    }
    &.step3 {
      background: url("../assets/backgrounds/page1/06.jpg") no-repeat;
      background-size: cover;
      z-index: 5;
    }
  }
  
  .image-right {
    width: 50%;
    height: 100%;
    background: url("../assets/backgrounds/page1/03.png") no-repeat;
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
    &.step4 {
      width: 40%;
      height: 0;
      background: rgba(#fff, 0.8);
      right: 6%;
    }
    &.step5 {
      z-index: 5;
      height: 100%;
    }
    &.step6 {
      background: #fff;
      width: 100%;
      right: 0;
      z-index: 6;
    }
    &.hide {
      opacity: 0;
    }
  }
  
  .script1 {
    top: 50%;
    left: 100px;
    max-width: 400px;
    @include font-size(2.5);
    color: #fff;
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
      @include font-size(3);
    }
    &.show {
      transform: scaleX(1);
      animation: scaleUp 5s forwards;
    }
    &.hide {
      top: 100%;
    }
  }
  
  .tags {
    @include font-size(2);
    padding: 10px;
    font-weight: bold;
    border-radius: 7px;
    top: 40%;
    opacity: 0;
    &.show {
      opacity: 1;
    }
    &:before {
      display: block;
      content: '';
      position: absolute;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid $brand-details;
      right: 100%;
      top: 50%;
      margin-top: -8px;
    }
    &.tag1,
    &.tag3 {
      background: $brand-details; //rgba($brand-details,0.8);
      left: 100px;
      color: #fff;
    }
    &.tag1 {
    }
    &.tag2 {
      background: #fff;
      color: #666;
      left: 180px;
      transition-delay: 0.5s;
      &:before {
        border-right-color: #fff;
      }
      &.show {
        transform: translateY(-120%);
      }
    }
    &.tag3 {
      transition-delay: 1s;
      &.show {
        transform: translateY(-240%);
      }
    }
  }
  
  .script3 {
    max-width: 400px;
    top: 50%;
    right: 10%;
    transform: translate(100%, -50%);
    padding: 15px;
    opacity: 0;
    z-index: 6;
    h1 {
      @include font-size(3);
      color: #666;
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
    z-index: 5;
  }
  
  @keyframes scaleUp {
    to {
      padding: 100px 40px;
    }
  }
</style>
