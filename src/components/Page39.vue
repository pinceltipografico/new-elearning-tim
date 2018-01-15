<template>
  <section class="page">
    <div class="colaboradores">
      <div>
        <span>Colaboradores e Parceiros</span>
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
      this.$store.commit('toggleIterface', true)
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
        var el = document.querySelectorAll('.palavras-colaborador > span')
        var el2 = document.querySelectorAll('.palavras-clientes span')
        for (var i = 0; i < el.length; i++) {
          el[i].style.opacity = 0
        }
        for (var j = 0; j < el2.length; j++) {
          el2[j].style.opacity = 0
        }
        this.doAnimation()
      }.bind(this))
      this.doAnimation()
    },
    methods: {
      doAnimation () {
        var vm = this
        var el = document.querySelectorAll('.palavras-colaborador > span')
        var el2 = document.querySelectorAll('.palavras-clientes > span')
        this.playAudio('scene23', 'static/subtitles/page23.json', function (pos) {
          if (pos === 18) {
            el[0].style.opacity = 1
          }
          if (pos === 19) {
            el[1].style.opacity = 1
          }
          if (pos === 20) {
            el[2].style.opacity = 1
          }
          if (pos === 21) {
            el[3].style.opacity = 1
          }
          if (pos === 22) {
            el[4].style.opacity = 1
          }
          if (pos === 23) {
            el[5].style.opacity = 1
          }
          if (pos === 24) {
            el[6].style.opacity = 1
          }
          if (pos === 25) {
            el[7].style.opacity = 1
          }
          if (pos === 28) {
            el2[0].style.opacity = 1
          }
          if (pos === 29) {
            el2[1].style.opacity = 1
          }
          if (pos === 30) {
            el2[2].style.opacity = 1
          }
          if (pos === 31) {
            el2[3].style.opacity = 1
          }
          if (pos === 32) {
            el2[4].style.opacity = 1
          }
          if (pos === 33) {
            el2[5].style.opacity = 1
          }
          if (pos === 35) {
            el2[6].style.opacity = 1
          }
        }, function () {
          var tim = vm.$el.querySelector('.script')
          tim.innerHTML = '<h1>Uma comunidade <span class="tim">TIM</span></h1>'
          vm.playAudio('scene23_1', 'static/subtitles/page23_1.json', null, function () {
            console.log('audio done')
            vm.$store.commit('setCanAdvance', true)
            console.log(vm.$store.state.canAdvance)
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
            opacity: [0, 1],
            offset: '+=3000'
          })
          .add({
            targets: '.palavras-clientes',
            duration: '300',
            easing: 'linear',
            opacity: 1,
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
      display: block;
      @include responsive('laptopS') {
        width: 200px;
      }
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
        @include responsive('laptopS') {
          @include font-size(1.2);
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
