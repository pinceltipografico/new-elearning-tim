<template>
  <section class="page gradient">
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
        <h1>abordagem tradicional de mercado
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
        <h1>Uma Nova Visão
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
  
  var Animations = require('../lib/ChainAnimation')
  var infographic = require('../assets/svgs/customer_centric.svg')
  export default {
    data () {
      return {
        scene: 0
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
      //
      // animations
      //
      var animations = [
        {
          time: 500,
          step: 'step1',
          selector: '.intro > .script1'
        }, {
          time: 3500,
          step: 'step1',
          selector: '.intro'
        }, {
          time: 500,
          step: 'hide',
          selector: '.intro'
        }, {
          time: 0,
          step: 'step0',
          selector: '.de'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(null)
      var els = this.$el.querySelectorAll('.abordages-tradicionais > div')
      var btn = this.$el.querySelector('.button')
      var vm = this
      setTimeout(function () {
        vm.playAudio('scene12', 'static/subtitles/page12.json', function (pos) {
          if (pos === 6) {
            vm.addClass(els[0], 'show')
          }
          if (pos === 10) {
            vm.addClass(els[1], 'show')
          }
          if (pos === 13) {
            vm.addClass(els[2], 'show')
          }
          if (pos === 19) {
            vm.addClass(els[3], 'show')
          }
        }, function () {
          vm.addClass(btn, 'step1')
        })
      }, 500)
    },
    methods: {
      step2 () {
        var animations = [
          {
            time: 0,
            step: 'step1',
            selector: '.button',
            reverse: true
          }, {
            time: 400,
            step: 'step1',
            selector: '.de'
          }, {
            time: 0,
            step: 'step1',
            selector: '.para'
          }
        ]
        Animations.setAnimations(animations)
        Animations.animationTimeline()
        var els = this.$el.querySelectorAll('.script3 > h1 div')
        var de = this.$el.querySelector('.de')
        var para = this.$el.querySelector('.para')
        var svgItems = this.$el.querySelectorAll('.item-icon')
        var vm = this
        this.playAudio('scene12_1', 'static/subtitles/page12_1.json', function (pos) {
          if (pos === 6) {
            vm.addClass(els[0], 'show')
          }
          if (pos === 12) {
            vm.addClass(els[1], 'show')
          }
          if (pos === 16) {
            vm.addClass(els[2], 'show')
          }
          if (pos === 20) {
            vm.addClass(els[3], 'show')
          }
          if (pos === 24) {
            vm.addClass(de, 'step2')
            vm.addClass(para, 'step2')
          }
          if (pos === 25) {
            vm.addClass(para, 'step3')
          }
          if (pos === 26) {
            svgItems[0].style.opacity = 1
            svgItems[1].style.opacity = 1
            svgItems[2].style.opacity = 1
            svgItems[3].style.opacity = 1
            svgItems[4].style.opacity = 1
            svgItems[5].style.opacity = 1
            svgItems[6].style.opacity = 1
          }
        }, function () {
          vm.$store.commit('setCanAdvance', true)
        })
      },
      buttonClick () {
        if (this.scene === 0) {
          this.step2()
          this.scene++
        } else if (this.scene === 1) {
          this.step3()
        }
      }
    },
    /**
     | ----------------------------------------------
     * WHEN THE COMPONENT WAS DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
      this.$store.state.audio.stop()
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
    
    &.step1 {
      left: 50%;
      display: block;
    }
    &.step2 {
      left: auto;
      right: 5%;
      display: block;
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
      &.step1 {
        transform: translateY(-100%);
      }
      &.hide {
        z-index: -1;
      }
      .script1 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
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
        
        &.step1 {
          transform: translate(-50%, -50%);
          opacity: 1;
        }
      }
    }
    
    &.para,
    &.de {
      width: 50%;
      top: 0;
      > span {
        @include font-size(10);
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
        top: 34%;
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
      &.step1 {
        right: 0;
      }
      &.step2 {
        width: 90%;
        &:before,
        &:after {
          width: 52%;
        }
      }
      &.step3 {
        .customer_centric {
          opacity: 1;
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
        top: 34%;
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
      &.step0 {
        left: 0;
      }
      &.step1 {
        left: 0;
        width: 50%;
      }
      &.step2 {
        width: 10%;
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
