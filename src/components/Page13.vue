<template>
  <div class="outer-page">
    <section class="page step1" v-if="!showTodo">
      <div class="script2">
        <h1>
          Criamos uma estrutura de <span>customer experience</span>
        </h1>
      </div>
      <div class="blue"></div>
      <div class="text-animation">
        <span v-for="date in dates" v-bind:key="date" class="list-item">{{ date }}</span>
      </div>
      <div class="buttons" @click="startTodo">
        <span>Clique aqui e veja o que já existe desde então:</span>
      </div>
    </section>
    <section class="page todo" v-if="showTodo">
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
  var Animations = require('../lib/ChainAnimation')
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
        dates: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        showTodo: false,
        activeTotoList: []
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
      this.$store.commit('setTotalProgress', 40000)
      this.$store.commit('setCanAdvance', false)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
      this.startSceneOne()
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
        var animations = [
          {
            time: 500,
            step: 'active',
            selector: '.icon-container > .one'
          }, {
            time: 4000,
            step: 'small',
            selector: '.icon-container > .one'
          }, {
            time: 300,
            step: 'active',
            selector: '.icon-container > .two'
          }, {
            time: 4000,
            step: 'small',
            selector: '.icon-container > .two'
          }, {
            time: 300,
            step: 'active',
            selector: '.icon-container > .three'
          }, {
            time: 4000,
            step: 'small',
            selector: '.icon-container > .three'
          }, {
            time: 300,
            step: 'active',
            selector: '.icon-container > .four'
          }, {
            time: 4000,
            step: 'small',
            selector: '.icon-container > .four'
          }, {
            time: 300,
            step: 'active',
            selector: '.icon-container > .five'
          }, {
            time: 4000,
            step: 'small',
            selector: '.icon-container > .five'
          }, {
            time: 300,
            step: 'active',
            selector: '.icon-container > .six'
          }, {
            time: 4000,
            step: 'small',
            selector: '.icon-container > .six'
          }, {
            time: 300,
            step: 'active',
            selector: '.icon-container > .seven'
          }
        ]
        Animations.setAnimations(animations)
        Animations.animationTimeline(function () {
          this.$store.commit('setCanAdvance', true)
        }.bind(this))
      },
      /**
       | ----------------------------------------------
       * START THE FIRST SCENE ANIMATION
       | ----------------------------------------------
       **/
      startSceneOne () {
        var vm = this
        var animations = [
          {
            time: 500,
            step: 'show',
            selector: '.blue'
          }, {
            time: 500,
            step: 'show',
            selector: '.text-animation'
          }
        ]
        Animations.setAnimations(animations)
        Animations.animationTimeline(function () {
          removeItem()
        })
        
        function removeItem () {
          if (vm.dates.length - 2) {
            vm.dates.shift()
            setTimeout(removeItem, 50)
          } else {
            animations = [
              {
                time: 500,
                step: 'show',
                selector: '.script2'
              }
            ]
            Animations.setAnimations(animations)
            Animations.animationTimeline(() => {
              setTimeout(() => { showEnd() }, 8000)
            })
          }
        }
        
        function showEnd () {
          animations = [
            {
              time: 500,
              step: 'hide',
              selector: '.script2'
            }, {
              time: 500,
              step: 'step2',
              selector: '.blue'
            }, {
              time: 500,
              step: 'step3',
              selector: '.blue'
            }, {
              time: 500,
              step: 'step1',
              selector: '.text-animation'
            }, {
              time: 500,
              step: 'show',
              selector: '.buttons'
            }
          ]
          Animations.setAnimations(animations)
          Animations.animationTimeline(() => {
            vm.dates.shift()
          })
        }
      }
    },
    
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    &.step1 {
      background: url("../assets/backgrounds/page13/01.jpg") no-repeat;
      background-size: cover;
    }
    &.todo {
      @extend %gradient;
    }
    
    .blue {
      width: 40%;
      height: 0;
      top: 0;
      background: $brand-details;
      left: 180px;
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
    }
    
    .text-animation {
      top: 50%;
      left: 100px;
      width: 240px;
      height: 100px;
      overflow: hidden;
      transform: translate(0, -50%);
      zoom: 2;
      opacity: 0;
      span {
        display: block;
        width: 240px;
        height: 100px;
        @include font-size(9);
        line-height: 100px;
        text-align: center;
        transform: translateY(0);
        font-weight: bold;
        color: #fff;
      }
      &.show {
        opacity: 1;
      }
      &.step1 {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
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
      &.show {
        transform: translate(0, -50%);
      }
      &.hide {
        opacity: 0;
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
          left: 120px;
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
