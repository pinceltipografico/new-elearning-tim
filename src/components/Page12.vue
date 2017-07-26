<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="white"></div>
    <div class="image">
      <img src="../assets/backgrounds/page12/04.png" alt="">
      <img src="../assets/backgrounds/page12/03.png"/>
    </div>
    <div class="icon-1"><img src="../assets/sprites/celphone-page12.jpg" alt=""></div>
    <div class="icon-2"><img src="../assets/sprites/note-page12.png" alt=""></div>
    <div class="icon-3"><img src="../assets/sprites/wireless-page12.jpg" alt=""></div>
    <div class="icon-4"><img src="../assets/sprites/cloud-page12.jpg" alt=""></div>
    <div class="icon-5"><img src="../assets/sprites/computer-page12.jpg" alt=""></div>
    <div class="icon-6"><img src="../assets/sprites/message-page12.png" alt=""></div>
    <div class="script1">
      <h1>Essa interação pode se dar de vários <span>níveis</span> e <span>formas</span></h1>
    </div>
    <div class="script2">
      <h1>Abordagem multicanal contínua e proporcionando uma <span>experiência única</span></h1>
    </div>
    <div class="script3">
      <h1>O cliente no centro em <span>todos os movimentos de uma organização</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from '../events/index'
  var Animations = require('../lib/ChainAnimation')
  export default {
    // component name
    name: 'Page12',
    /**
     | ----------------------------------------------
     * WHEN COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      // set progress of current page
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      this.$store.commit('setCanAdvance', false)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
      
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.white'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 500,
          step: 'show',
          selector: '.script2'
        }, {
          time: 8000,
          step: 'show',
          selector: '.script2',
          reverse: true
        }, {
          time: 10,
          step: 'show',
          selector: '.script1',
          reverse: true
        }, {
          time: 500,
          step: 'step1',
          selector: '.white'
        }, {
          time: 200,
          step: 'show',
          selector: '.image > img:nth-of-type(1)'
        }, {
          time: 500,
          step: 'show',
          selector: '.icon-2'
        }, {
          time: 500,
          step: 'show',
          selector: '.icon-4'
        }, {
          time: 500,
          step: 'show',
          selector: '.icon-1'
        }, {
          time: 500,
          step: 'show',
          selector: '.icon-3'
        }, {
          time: 500,
          step: 'show',
          selector: '.icon-6'
        }, {
          time: 500,
          step: 'show',
          selector: '.icon-5'
        }, {
          time: 500,
          step: 'step2',
          selector: '.page'
        }, {
          time: 500,
          step: 'show',
          selector: '.script3'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
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
  
  section.page {
    background: #1883b0;
    transition: background $animationTime;
    &.step2 {
      /*background: darken(#1883b0,20%);*/
    }
    .white {
      width: 0;
      height: 50%;
      top: 50%;
      transform: translateY(-40%);
      background: darken($brand-details, 30%);
      &.show {
        width: 100%;
      }
      &.step1 {
        background: #fff;
      }
    }
    .image {
      width: 401px;
      height: 639px;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      animation: person 10s infinite ease-in-out alternate;
      img {
        position: absolute;
      }
      img:nth-of-type(2) {
        z-index: 2;
      }
      img:nth-of-type(1) {
        top: -15px;
        left: -15px;
        opacity: 0;
        transition: all $animationTime;
        &.show {
          opacity: 1;
        }
      }
    }
    .icon-1,
    .icon-2,
    .icon-3,
    .icon-4,
    .icon-5,
    .icon-6 {
      width: 100px;
      height: 100px;
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    .icon-1 {
      top: 50%;
      left: 10%;
    }
    .icon-2 {
      top: 60%;
      left: 20%;
    }
    .icon-3 {
      top: 40%;
      left: 20%;
    }
    .icon-4 {
      right: 7%;
      top: 50%;
    }
    .icon-5,
    .icon-6 {
      right: 20%;
    }
    .icon-5 {
      top: 55%;
    }
    .icon-6 {
      top: 40%;
    }
    
    .script1,
    .script2,
    .script3 {
      color: #fff;
      max-width: 300px;
      @include font-size(2);
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    .script1 {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      &.show {
        left: 75px;
      }
    }
    .script2 {
      top: 40%;
      right: 0;
      &.show {
        right: 75px;
      }
    }
    .script3 {
      background: rgba(#000, 0.6);
      opacity: 1;
      max-width: none;
      width: 100%;
      left: 50%;
      bottom: 50px;
      padding: 0 40px;
      transform: translate(-50%, 100%);
      opacity: 0;
      h1 {
        max-width: 600px;
      }
      &.show {
        transform: translate(-50%, 0);
      }
    }
    
    @keyframes person {
      0% {
        transform: translateX(-45%);
      }
      100% {
        transform: translateX(-55%);
      }
    }
  }
</style>
