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
      <h1>Juntos na <span>geração CX</span></h1>
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
          time: 500,
          step: 'step1',
          selector: '.animation1'
        }, {
          time: 500,
          step: 'step2',
          selector: '.animation1'
        }, {
          time: 500,
          step: 'step1',
          selector: '.animation2'
        }, {
          time: 500,
          step: 'step2',
          selector: '.animation2'
        }, {
          time: 2000,
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
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
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
  
    .script{
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      @include font-size(2);
      background: rgba(#000,0.5);
      padding: 0 25px;
      color:#fff;
      opacity: 0;
      &.show{
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
      &.step1{
        transform: translateY(-100%);
      }
    }
    .clientes {
      right: 0;
      background: $brand-details;
      &.step1{
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
      &.step3{
        width: 480px;
        &:after{
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
      &.step3{
        top:43%;
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
      &.step3{
        top: 57%;
        &:after{
          top:-92px;
        }
      }
    }
  }
</style>
