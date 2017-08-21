<template>
  <section class="page gradient page12">
    <div class="button" @click="buttonClick">
      <div>
        <span>Próximo</span>
        <i class="material-icons">&#xE038;</i>
      </div>
    </div>
    <!-- scene DE -->
    <div class="scene de">
      <div class="effect-timeline"></div>
      <div class="effect-timeline"></div>
      <span>DE</span>
      <div class="script2">
        <h1>Abordagem tradicional de mercado
        </h1>
      </div>
      <div class="abordages-tradicionais">
        <div>Sem diferenciação por cliente</div>
        <div>Sem integração</div>
        <div>Mal suportada pelas novas tecnologias</div>
        <div>Básica</div>
      </div>
    </div>
    <!-- scene DE-->
    <!-- scene PARA-->
    <div class="scene para">
      <span>PARA</span>
      <div class="script3">
        <h1>Uma nova Visão
          <small>
            <hr/>
            <div>Cliente único</div>
            <div>Experiência única</div>
            <div>Soluções inovadoras</div>
            <div>Rentável</div>
          </small>
        </h1>
      </div>
      <div class="customer_centric">
        <infographic></infographic>
      </div>
    </div>
    <!-- scene PARA-->
    <!-- INTRODUÇÃO -->
    <div class="scene intro gradient">
      <div class="script1">
        <h1>Uma mudança de <span>perspectiva</span></h1>
        <i class="material-icons">&#xE8D4;</i>
      </div>
    </div>
    <!-- INTRODUÇÃO -->
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from '../events/index'
  import anime from 'animejs'
  
  var Animations = require('../lib/ChainAnimation')
  var infographic = require('../assets/svgs/customer_centric.svg')
  export default {
    data () {
      return {
        step: 0,
        TimeLineCtrl: null
      }
    },
    components: {
      infographic
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var elsTrad = this.$el.querySelectorAll('.abordages-tradicionais > div')
      var elsPara = this.$el.querySelectorAll('.script3 > h1 div')
      var svgItems = this.$el.querySelectorAll('.item-icon')
      var vm = this
      
      this.TimelineCtrl = anime.timeline({
        loop: false,
        elasticity: 100,
        easing: [0.91, -0.54, 0.29, 1.56],
        update: function (anim) {
          vm.step = Math.floor(anim.progress)
        }
      })
      
      this.TimelineCtrl
        .add({
          targets: '.script1',
          translateY: ['-1000%', '-50%'],
          translateX: ['-50%', '-50%'],
          opacity: 1,
          easing: 'linear',
          duration: 300
        })
        .add({
          targets: '.intro',
          translateX: '-100%',
          easing: 'linear',
          duration: 300,
          opacity: 0,
          offset: '+=3500'
        })
        .add({
          targets: '.de',
          left: 0,
          easing: 'linear',
          duration: 300,
          begin: function () {
            var el = document.querySelector('.de')
            vm.removeClass(el, 'step2')
          }
        })
        .add({
          targets: elsTrad,
          translateX: ['100%', 0],
          opacity: 1,
          easing: 'linear',
          duration: 300,
          delay: function (el, i) {
            if (i === 0) {
              return 1000
            } else if (i === 1) {
              return 5000
            } else if (i === 2) {
              return 8000
            } else {
              return 14000
            }
          }
        })
        .add({
          targets: '.button',
          left: ['40%', '50%'],
          easing: 'linear',
          opacity: 0,
          begin: function () {
            var el = document.querySelector('.button')
            el.style.display = 'block'
          },
          complete: function () {
//            vm.TimelineCtrl.pause()
//            var CurrentAudio = vm.getCurrentAudioId()
//            vm.$store.state.audio.pause(CurrentAudio)
          },
          duration: 300,
          offset: '+=6000'
        })
        .add({
          targets: '.button',
          opacity: 0,
          duration: 300,
          easing: 'linear',
          complete: function () {
            var el = document.querySelector('.button')
            el.style.display = 'block'
          }
        })
        .add({
          targets: '.de',
          width: ['100%', '50%'],
          left: 0,
          duration: 300,
          easing: 'linear'
        })
        .add({
          targets: '.para',
          right: 0,
          duration: 300,
          easing: 'linear',
          begin: function () {
            var el = document.querySelector('.para')
            vm.removeClass(el, 'step2')
          }
        })
        .add({
          targets: elsPara,
          translateX: ['100%', 0],
          opacity: 1,
          duration: 300,
          easing: 'linear',
          delay: function (el, i) {
            if (i === 0) {
              return 4000
            } else if (i === 1) {
              return 10000
            } else if (i === 2) {
              return 14000
            } else {
              return 20000
            }
          }
        })
        .add({
          targets: '.para',
          width: ['50%', '90%'],
          easing: 'linear',
          duration: 500,
          complete: function () {
            var el = document.querySelector('.para')
            vm.addClass(el, 'step2')
          },
          offset: '+=4000'
        })
        .add({
          targets: '.de',
          width: ['50%', '10%'],
          easing: 'linear',
          duration: 500,
          offset: '-=300',
          begin: function () {
            var el = document.querySelector('.de')
            vm.addClass(el, 'step2')
          }
        })
        .add({
          targets: '.customer_centric',
          opacity: 1,
          easing: 'linear',
          duration: 300
        })
        .add({
          targets: svgItems,
          opacity: 1,
          easing: 'linear',
          duration: 100
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
      
      this.playAudio('scene12', 'static/subtitles/page12.json', null, function () {
        vm.$store.commit('setCanAdvance', true)
      })
    },
    methods: {
      buttonClick () {
        var currentAudio = this.getCurrentAudioId()
        this.$store.state.audio.play(currentAudio)
        this.TimelineCtrl.play()
      }
    },
    /**
     | ----------------------------------------------
     * WHEN THE COMPONENT WAS DESTROYED
     | ----------------------------------------------
     **/
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
  
  .button {
    display: none;
    width: 120px;
    height: 120px;
    background: $brand-details;
    top: 50%;
    margin-top: -60px;
    z-index: 4;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    border: 4px solid #fff;
    animation: buttonAnimation 2.5s infinite ease-in-out alternate;
    cursor: pointer;
    opacity: 0;
    
    div {
      display: table-cell;
      height: 120px;
      width: 120px;
      vertical-align: middle;
      span {
        font-weight: bold;
        display: block;
        @include font-size(1.4);
      }
    }
    i {
      line-height: normal;
    }
  }
  
  .scene {
    width: 100%;
    height: 100%;
    
    &.intro {
      > * {
        position: absolute;
        transition: all $animationTime;
      }
      .script1 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        text-align: center;
        max-width: 400px;
        @include font-size(3);
        opacity: 0;
        h1 {
          margin: 0;
        }
        i {
          @include font-size(10);
        }
      }
    }
    
    &.para,
    &.de {
      width: 50%;
      top: 0;
      > span {
        @include font-size(7);
        font-weight: bold;
        text-transform: uppercase;
      }
      > * {
        position: absolute;
        transition: all $animationTime;
      }
      &:before {
        position: absolute;
        content: '';
        display: block;
        width: 100%;
        height: 0;
      }
      &:before {
        top: 50%;
      }
    }
    
    &.para {
      right: -100%;
      &:before {
        border-top: 10px double $brand-details;
      }
      span {
        color: $brand-details;
        top: 38%;
      }
      .script3 {
        top: 50%;
        color: #fff;
        @include font-size(1.5);
        small {
          display: block;
          color: $brand-details;
          hr {
            opacity: 0;
          }
          div {
            color: #fff;
            @include font-size(1.8);
            border-left: 5px double $brand-details;
            padding: 0 5px 0 15px;
            margin-bottom: 5px;
            transform: translateX(100%);
            opacity: 0;
            transition: all $animationTime;
            &.show {
              transform: translateX(0);
              opacity: 1;
            }
          }
        }
      }
      .customer_centric {
        width: 550px;
        right: 2%;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
      }
      &.step2 {
        &:before,
        &:after {
          transition: all $animationTime;
          width: 52%;
        }
        @include responsive('laptopS'){
          &:before,
          &:after{
            width: 40%;
          }
        }
      }
    }
    &.de {
      left: 100%;
      width: 100%;
      &:before {
        border-top: 10px double #fff;
      }
      span {
        color: #fff;
        top: 38%;
        left: 10%;
      }
      .script2 {
        left: 10%;
        top: 50%;
        color: #fff;
        @include font-size(1.5);
        small {
          display: block;
          color: $brand-details;
        }
      }
      .abordages-tradicionais {
        top: 60%;
        left: 15%;
        div {
          color: #fff;
          @include font-size(1.8);
          border-left: 5px double $brand-details;
          padding: 0 5px 0 15px;
          margin-bottom: 5px;
          transform: translateX(100%);
          opacity: 0;
          transition: all $animationTime;
          &.show {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
      &.step2 {
        .script2,
        .abordages-tradicionais {
          display: none;
        }
        span {
          @include font-size(5);
          top: 42%;
        }
      }
    }
  }
  
  @keyframes buttonAnimation {
    to {
      background: #fff;
      color: $brand-details;
    }
  }
</style>
