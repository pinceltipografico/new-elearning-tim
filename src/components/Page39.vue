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
  import anime from 'animejs'
  
  var Animations = require('../lib/ChainAnimation')
  export default {
    data () {
      return {
        TimeLineCtrl: null
      }
    },
    mounted: function () {
      this.$store.commit('setCanAdvance', false)
      EventBus.$on('pause', function (paused) {
        if (this.TimelineCtrl) {
          (paused ? this.TimelineCtrl.pause : this.TimelineCtrl.play)()
        }
      }.bind(this))
      EventBus.$on('rewind', function () {
        if (this.TimelineCtrl) {
          this.TimelineCtrl.restart()
        }
        var el = document.querySelector('.palavras-colaborador')
        var el2 = document.querySelector('.palavras-clientes')
        this.removeClass(el, 'show')
        this.removeClass(el2, 'show')
        this.doAnimation()
      }.bind(this))
      this.doAnimation()
    },
    methods: {
      doAnimation () {
        var vm = this
        this.playAudio('scene23', 'static/subtitles/page23.json', null, function () {
          var tim = vm.$el.querySelector('.script')
          tim.innerHTML = '<h1>Uma comunidade <span class="tim">TIM</span></h1>'
          vm.playAudio('scene23_1', 'static/subtitles/page23_1.json', null, function () {
            vm.$store.commit('setCanAdvance', true)
          })
        })
        var beforeAnim = {count: 0}
        var anim1 = vm.$el.querySelector('.animation1')
        var anim2 = vm.$el.querySelector('.animation2')
        if (this.TimelineCtrl) {
          return
        }
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: beforeAnim,
            duration: '3000',
            easing: 'linear',
            count: 100,
            begin: function () {
              anim1.className = 'animation1'
              anim2.className = 'animation2'
            },
            update: function (ani) {
              var c = Math.floor(beforeAnim.count)
              if (c === 10) {
                vm.addClass(anim1, 'step1')
              } else if (c === 20) {
                vm.addClass(anim1, 'step2')
              } else if (c === 30) {
                vm.addClass(anim2, 'step1')
              } else if (c === 40) {
                vm.addClass(anim2, 'step2')
              }
            }
          })
          .add({
            targets: '.colaboradores',
            duration: '500',
            easing: 'linear',
            translateY: ['0%', '-100%'],
            offset: '+=6000'
          })
          .add({
            targets: '.clientes',
            duration: '500',
            easing: 'linear',
            translateY: ['0%', '100%']
          })
          .add({
            targets: '.script',
            opacity: [0, 1],
            duration: '500',
            easing: 'linear'
          })
          .add({
            targets: ['.animation1', '.animation2'],
            width: ['670px', '480px'],
            duration: '300',
            easing: 'linear'
          })
          .add({
            targets: '.animation1',
            top: ['40%', '43%'],
            duration: '300',
            easing: 'linear',
            offset: '-=300'
          })
          .add({
            targets: '.animation2',
            top: ['60%', '57%'],
            duration: '300',
            easing: 'linear',
            offset: '-=300'
          })
          .add({
            targets: '.palavras-colaborador',
            duration: '300',
            easing: 'linear',
            opacity: 1,
            begin: function () {
              var el = document.querySelector('.palavras-colaborador')
              vm.removeClass(el, 'show')
            },
            complete: function () {
              var el = document.querySelector('.palavras-colaborador')
              vm.addClass(el, 'show')
            },
            offset: '+=3000'
          })
          .add({
            targets: '.palavras-clientes',
            duration: '300',
            easing: 'linear',
            opacity: 1,
            begin: function () {
              var el = document.querySelector('.palavras-clientes')
              vm.removeClass(el, 'show')
            },
            complete: function () {
              var el = document.querySelector('.palavras-clientes')
              vm.addClass(el, 'show')
            },
            offset: '+=6000'
          })
      }
    },
    destroyed () {
      EventBus.$off('pause')
      EventBus.$off('rewind')
      this.stopAudio()
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
      display: none;
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
        display: block;
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
