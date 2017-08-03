<template>
  <section class="page">
    <div class="colaboradores">
      <div>
        <span>Colaboradores</span>
      </div>
    </div>
    <div class="clientes">
      <div>
        <span>Clientes</span>
      </div>
    </div>
    <div class="animation1"></div>
    <div class="animation2"></div>
    <div class="script">
      <h1>Uma comunidade <span>única</span></h1>
    </div>
    <div class="palavras-colaborador">
      <span>Conhecimento</span><span>Crescimento</span><span>Suporte</span><span>Conexão</span><span>Satisfação</span><span>Empoderamento</span><span>Paixão </span><span>Celebração</span>
    </div>
    <div class="palavras-clientes">
      <span>Suporte</span><span>Conexão</span><span>Conhecimento</span><span>Satisfação</span><span>Encantamento</span><span>Lealdade</span><span>Felicidade</span>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  import { EventBus } from '../events/index'
  
  var Animations = require('../lib/ChainAnimation')
  export default {
    data () {
      return {}
    },
    mounted () {
      var animations = [
        {
          time: 1500,
          step: 'step1',
          selector: '.animation1'
        }, {
          time: 500,
          step: 'step2',
          selector: '.animation1'
        }, {
          time: 1500,
          step: 'step1',
          selector: '.animation2'
        }, {
          time: 500,
          step: 'step2',
          selector: '.animation2'
        }, {
          time: 4000,
          step: 'step1',
          selector: '.colaboradores'
        }, {
          time: 20,
          step: 'step1',
          selector: '.clientes'
        }, {
          time: 1000,
          step: 'show',
          selector: '.script'
        }, {
          time: 500,
          step: 'step3',
          selector: '.animation1'
        }, {
          time: 0,
          step: 'step3',
          selector: '.animation2'
        }, {
          time: 2000,
          step: 'show',
          selector: '.palavras-colaborador'
        }, {
          time: 5000,
          step: 'show',
          selector: '.palavras-clientes'
        }, {
          time: 10000,
          step: 'show',
          selector: '.palavras-clientes'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
        var tim = this.$el.querySelector('.script')
        tim.innerHTML = '<h1>Uma comunidade <span class="tim">TIM</span></h1>'
      }.bind(this))
    },
    destroyed () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page39/ref-390285811.jpg") no-repeat;
    background-size: cover;
    
    .script {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @include font-size(2);
      background: rgba(#000, 0.5);
      padding: 0 25px;
      color: #fff;
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    
    .clientes,
    .colaboradores {
      width: 50%;
      height: 100%;
      top: 0;
      div,
      span {
        height: 100%;
        width: 100%;
      }
      div {
        position: relative;
        display: table;
      }
      span {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        color: #fff;
        @include font-size(3);
        font-weight: bold;
      }
    }
    .colaboradores {
      left: 0;
      background: darken($brand-details, 20%);
      &.step1 {
        transform: translateY(-100%);
      }
    }
    .clientes {
      right: 0;
      background: $brand-details;
      &.step1 {
        transform: translateY(100%);
      }
    }
    
    .animation1,
    .animation2 {
      width: 670px;
      left: 50%;
      transform: translateX(-50%);
      &:before,
      &:after {
        position: absolute;
        content: '';
        display: block;
        background: #fff;
        transition: all $animationTime;
      }
      &:before {
        width: 100%;
        height: 2px;
        transform: scaleX(0);
      }
      &:after {
        height: 40px;
        width: 2px;
        transform: scaleY(0);
      }
      
      &.step1:after {
        transform: scaleY(1);
      }
      &.step2:before {
        transform: scaleX(1);
      }
      &.step3 {
        width: 480px;
        &:after {
          height: 92px;
        }
      }
    }
    .animation1 {
      top: 40%;
      &:after {
        transform-origin: 50% 100%;
      }
      &:before {
        transform-origin: 0% 50%;
      }
      &.step3 {
        top: 43%;
      }
    }
    .animation2 {
      top: 60%;
      &:after {
        left: 100%;
        top: -40px;
        transform-origin: 50% 100%;
      }
      &:before {
        transform-origin: 100% 50%;
      }
      &.step3 {
        top: 57%;
        &:after {
          top: -92px;
        }
      }
    }
    .palavras-colaborador,
    .palavras-clientes {
      position: absolute;
      top: 50%;
      width: 300px;
      transform: translateY(-50%);
      span {
        display: inline-block;
        color: #fff;
        @include font-size(1.5);
        margin: 0 10px 10px 0;
        padding: 5px 10px;
        font-weight: bold;
        border-radius: 5px;
        opacity: 0;
        transition: all $animationTime;
        
        @for $i from 1 through 10 {
          &:nth-of-type(#{$i}) {
            transition-delay: #{(0.5 * $i)+'s'};
          }
        }
      }
      &.show {
        span {
          opacity: 1;
        }
      }
    }
    .palavras-colaborador {
      left: 50px;
      span {
        background: $brand-details;
      }
    }
    .palavras-clientes {
      text-align: right;
      right: 50px;
      span {
        background: darken($brand-details, 20%);
      }
    }
  }
</style>
