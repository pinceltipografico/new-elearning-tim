<template>
  <div class="outer-page">
    <section class="page step1 page11" :class="{'hide':scene === 1}" v-if="scene < 2">
      <div class="script2">
        <h1>
          Foi criada uma estrutura de <span>Customer Experience</span>
        </h1>
      </div>
      <div class="blue"></div>
      <div class="text-animation">
        <span></span>
      </div>
      <div class="buttons" @click="startTodo">
        <span>Clique aqui e veja o que já existe desde então:</span>
      </div>
    </section>
    <section class="page gradient scene2 page11" style="position: absolute; top:0; left:0;">
      <div class="dna">
        <img src="../assets/backgrounds/page40/dna.png" alt="DNA"/>
        <!--<div class="shadow"></div>-->
      </div>
      <div class="item costumer">
        <div class="icon">
          <i class="material-icons">&#xE228;</i>
        </div>
        <span><strong>Customer Centric</strong></span>
        <span>Entender as necessidades</span>
        <span class="tooltip">Centrado nos Clientes</span>
      </div>
      <div class="item user-experience">
        <div class="icon">
          <img src="../assets/backgrounds/page40/touch.png"/>
        </div>
        <span><strong>User Experience</strong></span>
        <span>Emoções Preferências</span>
        <span>Comportamentos e Realizações</span>
        <span class="tooltip">Experiência do Usuário</span>
      </div>
      <div class="item custumer-monitoring">
        <div class="icon">
          <i class="material-icons">&#xE8B6;</i>
        </div>
        <span><strong>Monitoring & Analisys</strong></span>
        <span>O que são?</span>
        <span>O que querem?</span>
        <span>Quando e como querem?</span>
        <span class="tooltip">Análise e Monitoramento</span>
      </div>
      <div class="item crew-experience">
        <div class="icon">
          <i class="material-icons">&#xE7FD;</i>
        </div>
        <span><strong>Crew Experience</strong></span>
        <span>Oferecer a melhor experiência para os colaboradores é a chave</span>
        <span class="tooltip right">Experiência da Equipe</span>
      </div>
    </section>
    <section class="page todo page11" v-if="scene === 2">
      <div class="icon-container">
        <div class="icone one">
          <icon-one></icon-one>
          <div class="shadow"></div>
        </div>
        <div class="icone two">
          <icon-two></icon-two>
          <div class="shadow"></div>
        </div>
        <div class="icone three">
          <icon-three></icon-three>
          <div class="shadow"></div>
        </div>
        <div class="icone four">
          <icon-four></icon-four>
          <div class="shadow"></div>
        </div>
        <div class="icone five">
          <icon-five></icon-five>
          <div class="shadow"></div>
        </div>
        <div class="icone six">
          <icon-six></icon-six>
          <div class="shadow"></div>
        </div>
        <div class="icone seven">
          <icon-seven></icon-seven>
          <div class="shadow"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from '../events/index'
  import anime from 'animejs'
  import iconOne from '../assets/svgs/page13-1.svg'
  import iconTwo from '../assets/svgs/page13-2.svg'
  import iconThree from '../assets/svgs/page13-3.svg'
  import iconFour from '../assets/svgs/page13-4.svg'
  import iconFive from '../assets/svgs/page13-5.svg'
  import iconSix from '../assets/svgs/page13-6.svg'
  import iconSeven from '../assets/svgs/page13-7.svg'
  
  export default {
    components: {
      iconOne,
      iconTwo,
      iconThree,
      iconFour,
      iconFive,
      iconSix,
      iconSeven
    },
    /**
     | ----------------------------------------------
     * RETURN DATA OF THE COMPONENT
     | ----------------------------------------------
     **/
    data () {
      return {
        year: 1995,
        showTodo: false,
        activeTotoList: [],
        scene: 0,
        canShowTags: false,
        TimeLineCtrl: null
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPOENENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      this.startSceneOne()
//      this.startTodo()
    },
    /**
     | ----------------------------------------------
     * RETURN METHODS OF THE COMPOENNT
     | ----------------------------------------------
     **/
    methods: {
      /**
       | ----------------------------------------------
       * START THE TODO LIST
       | ----------------------------------------------
       **/
      startTodo () {
        this.showTodo = true
        this.scene = 2
        var vm = this
        var els
        vm.canShowTags = true
        
        function PlayAudio (index) {
          if (!vm.canShowTags) {
            return
          }
          if (index === 7) {
            vm.playAudio('scene11_2', 'static/subtitles/page11_2.json', null, function () {
              vm.$store.commit('setCanAdvance', true)
            })
            return
          }
          vm.addClass(els[index], 'active')
          switch (index) {
            case 0:
              vm.playAudio('guidelineCX', 'static/subtitles/page11_guidelines.json', null, function () {
                vm.addClass(els[index], 'small')
                vm.$store.commit('setPageProgress', 0)
                setTimeout(function () {
                  PlayAudio(1)
                }, 500)
              })
              break
            case 1:
              vm.playAudio('aprovado', 'static/subtitles/page11_aprovado.json', null, function () {
                vm.addClass(els[index], 'small')
                vm.$store.commit('setPageProgress', 0)
                setTimeout(function () {
                  PlayAudio(2)
                }, 500)
              })
              break
            case 2:
              vm.playAudio('FocusGroup', 'static/subtitles/page11_focus_group.json', null, function () {
                vm.addClass(els[index], 'small')
                vm.$store.commit('setPageProgress', 0)
                setTimeout(function () {
                  PlayAudio(3)
                }, 500)
              })
              break
            case 3:
              vm.playAudio('NPS', 'static/subtitles/page11_nps.json', null, function () {
                vm.addClass(els[index], 'small')
                vm.$store.commit('setPageProgress', 0)
                setTimeout(function () {
                  PlayAudio(4)
                }, 500)
              })
              break
            case 4:
              vm.playAudio('LojaFuturo', 'static/subtitles/page11_loja.json', null, function () {
                vm.addClass(els[index], 'small')
                vm.$store.commit('setPageProgress', 0)
                setTimeout(function () {
                  PlayAudio(5)
                }, 500)
              })
              break
            case 5:
              vm.playAudio('TransformacaoDigital', 'static/subtitles/page11_transformacao.json', null, function () {
                vm.addClass(els[index], 'small')
                vm.$store.commit('setPageProgress', 0)
                setTimeout(function () {
                  PlayAudio(6)
                }, 500)
              })
              break
            case 6:
              vm.playAudio('RealTime', 'static/subtitles/page11_realtime.json', null, function () {
                vm.addClass(els[index], 'small')
                vm.$store.commit('setPageProgress', 0)
                setTimeout(function () {
                  PlayAudio(7)
                }, 500)
              })
              break
          }
        }
        
        setTimeout(function () {
          els = vm.$el.querySelectorAll('.icone')
          PlayAudio(0)
        }, 500)
      },
      /**
       | ----------------------------------------------
       * START THE FIRST SCENE ANIMATION
       | ----------------------------------------------
       **/
      startSceneOne () {
        var vm = this
        var years = {year: 1995}
        var yearEl = document.querySelector('.text-animation span')
        this.canShowTags = false
        
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        this.TimelineCtrl
          .add({
            targets: '.script2',
            translateX: ['-100%', '0%'],
            translateY: ['-50%', '-50%'],
            duration: 200,
            easing: 'linear',
            offset: '+=500'
          })
          .add({
            targets: '.blue',
            height: [0, '100%'],
            duration: 300,
            easing: 'linear',
            offset: '+=14000'
          })
          .add({
            targets: '.text-animation',
            opacity: 1,
            translateX: '0%',
            translateY: '-50%',
            left: [80, 80],
            top: ['50%', '50%']
          })
          .add({
            targets: years,
            year: 2016,
            easing: 'linear',
            update: function (y) {
              yearEl.innerHTML = Math.floor(years.year)
            },
            duration: 1000
          })
          .add({
            targets: '.scene2',
            opacity: 1,
            duration: 300,
            easing: 'linear',
            offset: '+=11000',
            begin: function () {
              var _el = document.querySelector('.scene2')
              if (_el) {
                _el.style.zIndex = 5
              }
            }
          })
          .add({
            targets: '.dna',
            opacity: 1,
            easing: 'linear',
            duration: 300
          })
          .add({
            targets: '.costumer',
            opacity: 1,
            easing: 'linear',
            duration: 300,
            offset: '+=17000'
          })
          .add({
            targets: '.user-experience',
            opacity: 1,
            easing: 'linear',
            duration: 300,
            offset: '+=10000'
          })
          .add({
            targets: '.custumer-monitoring',
            opacity: 1,
            easing: 'linear',
            duration: 300,
            offset: '+=22000'
          })
          .add({
            targets: '.crew-experience',
            opacity: 1,
            easing: 'linear',
            duration: 300,
            offset: '+=17000'
          })
          .add({
            targets: '.scene2',
            opacity: 0,
            easing: 'linear',
            duration: 1000,
            offset: '+=18000',
            complete: function () {
              var _el = document.querySelector('.scene2')
              _el.style.zIndex = -1
            }
          })
          .add({
            targets: '.script2',
            translateX: '-100%',
            translateY: '-50%',
            duration: 200,
            easing: 'linear'
          })
          .add({
            targets: '.blue',
            left: 0,
            easing: 'linear',
            width: [{value: 1280, delay: 300}],
            duration: 400
          })
          .add({
            targets: '.text-animation',
            translateX: '-50%',
            translateY: ['-50%', '-50%'],
            top: ['50%', '50%'],
            left: ['50%'],
            easing: 'linear',
            duration: 400
          })
          .add({
            targets: years,
            year: 2017,
            easing: 'linear',
            update: function (y) {
              yearEl.innerHTML = Math.floor(years.year)
            },
            duration: 100
          })
          .add({
            targets: '.buttons',
            opacity: 1,
            duration: 300
          })
        
        EventBus.$on('pause', function (paused) {
          if (this.TimelineCtrl) {
            (paused ? this.TimelineCtrl.pause : this.TimelineCtrl.play)()
          }
        }.bind(this))
        EventBus.$on('rewind', function () {
          if (this.TimelineCtrl) {
            this.TimelineCtrl.restart()
          }
        }.bind(this))
        
        this.playAudio('scene11', 'static/subtitles/page11.json', function (pos) {
        }, function () {})
      }
    },
    
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      this.canShowTags = false
      EventBus.$off('pause')
      EventBus.$off('rewind')
      this.stopAudio()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    
    &.scene2 {
      opacity: 0;
      transition: opacity $animationTime;
      z-index: -1;
    }
    
    .dna {
      top: 50%;
      left: 50%;
      width: 400px;
      transform: translate(-50%, -40%);
      img {
        width: 100%;
      }
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    .item {
      width: 250px;
      text-align: center;
      .icon {
        display: inline-block;
        background: $brand-details;
        border: 5px solid #fff;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        line-height: 75px;
        color: #fff;
        margin-bottom: 5px;
        img {
          display: inline;
          margin-top: 15px;
        }
        i {
          @include font-size(4);
          line-height: inherit;
        }
      }
      span {
        color: #fff;
        display: block;
        @include font-size(1.4);
      }
  
      span.tooltip{
        display: block;
        width: 170px;
        padding: 10px;
        position: absolute;
        top:50%;
        left:80%;
        transform: translateY(-50%);
        background: $brand-details;
        border-radius:5px;
        opacity: 0;
        transition: opacity $animationTime;
        &:before{
          position: absolute;
          content: '';
          display: block;
          left: -8px;
          top:50%;
          margin-top: -8px;
          border-bottom: 8px solid transparent;
          border-top: 8px solid transparent;
          border-right: 8px solid $brand-details;
        }
        &.right{
          left: auto;
          right: 80%;
        }
        &.right:before{
          left:auto;
          right:-8px;
          border-right: none;
          border-left: 8px solid $brand-details;
        }
      }
      &:hover{
        span.tooltip{
          opacity: 1;
        }
      }
      
      &.costumer {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -200%);
      }
      &.user-experience {
        left: 50%;
        top: 50%;
        transform: translate(-50%, 90%);
      }
      &.custumer-monitoring {
        top: 50%;
        left: 50%;
        transform: translate(80%, -50%);
      }
      &.crew-experience {
        top: 50%;
        left: 50%;
        transform: translate(-230%, -40%);
        width: 180px;
      }
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    
    &.step1 {
      background: url("../assets/backgrounds/page11/shutterstock_448523395.jpg") no-repeat;
      background-size: cover;
    }
    &.todo {
      @extend %gradient;
    }
    &.hide {
      display: none;
    }
    
    .blue {
      width: 47%;
      height: 0;
      top: 0;
      background: $brand-details;
      left: 130px;
      &.show {
        height: 100%;
      }
      &.step2 {
        left: 0;
      }
      &.step3 {
        width: 100%;
        background: darken($brand-details, 30%);
      }
      @include responsive('laptopS') {
        width: 40%;
      }
    }
    
    .text-animation {
      top: 50%;
      left: 80px;
      width: 300px;
      height: 100px;
      overflow: hidden;
      transform: translate(0, -50%);
      zoom: 2;
      opacity: 0;
      span {
        display: block;
        width: 100%;
        height: 100px;
        @include font-size(9);
        line-height: 100px;
        text-align: center;
        transform: translateY(0);
        font-weight: bold;
        color: #fff;
      }
      @include responsive('laptopS') {
        width: 210px;
        span {
          width: 210px;
          @include font-size(7);
        }
      }
    }
    .script2 {
      color: #fff;
      width: 100%;
      @include font-size(2);
      top: 50%;
      left: 0;
      transform: translate(-100%, -50%);
      background: rgba(#000, 0.6);
      h1 {
        margin-left: 60%;
        max-width: 450px;
      }
      @include responsive('laptopS') {
        @include font-size(1.8);
        h1 {
          margin-left: 65%;
          max-width: 400px;
        }
      }
    }
    .buttons {
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      animation: buttonAnimation 2s infinite ease-in-out alternate;
      &.show {
        opacity: 1;
      }
    }
    
    .icon-container {
      width: 100%;
      height: 100%;
      
      .icone {
        position: absolute;
        width: 40%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all $animationTime;
        
        &.small {
          width: 12%;
          opacity: 0.8;
        }
        
        &.one.small {
          left: calc(12.5% * 1);
        }
        &.two.small {
          left: calc(12.5% * 2);
        }
        &.three.small {
          left: calc(12.5% * 3);
        }
        &.four.small {
          left: calc(12.5% * 4);
        }
        &.five.small {
          left: calc(12.5% * 5);
        }
        &.six.small {
          left: calc(12.5% * 6);
        }
        &.seven.small {
          left: calc(12.5% * 7);
        }
        &.active {
          opacity: 1;
        }
      }
    }
  }
  
  @keyframes buttonAnimation {
    to {
      background: $brand-details;
      color: #fff;
    }
  }
</style>
