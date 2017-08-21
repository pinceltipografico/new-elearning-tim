<template>
  <section class="page page9">
    <div class="image-background"></div>
    <div class="white"></div>
    <div class="image">
      <img src="../assets/backgrounds/page9/04.png" alt="">
      <img src="../assets/backgrounds/page9/03.png"/>
    </div>
    <div class="icon-1"><img src="../assets/sprites/celphone-page12.jpg" alt=""></div>
    <div class="icon-2"><img src="../assets/sprites/note-page12.png" alt=""></div>
    <div class="icon-3"><img src="../assets/sprites/wireless-page12.jpg" alt=""></div>
    <div class="icon-4"><img src="../assets/sprites/cloud-page12.jpg" alt=""></div>
    <div class="icon-5"><img src="../assets/sprites/computer-page12.jpg" alt=""></div>
    <div class="icon-6"><img src="../assets/sprites/message-page12.png" alt=""></div>
    <div class="script1">
      <h1>Esta interação pode se dar de vários <span>níveis e formas</span></h1>
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
  import anime from 'animejs'
  
  export default {
    // component name
    name: 'Page12',
    data () {
      return {
        TimeLineCtrl: null
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      // set progress of current page
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      
      this.TimelineCtrl = anime.timeline({
        loop: false
      })
      this.TimelineCtrl
        .add({
          targets: '.white',
          width: [0, 1280],
          duration: 200,
          easing: 'linear'
        })
        .add({
          targets: '.script1',
          opacity: 1,
          left: 75,
          easing: 'linear',
          duration: 200
        })
        .add({
          targets: '.script2',
          opacity: 1,
          right: 75,
          duration: 200,
          easing: 'linear',
          offset: '+=9000'
        })
        .add({
          targets: '.script2',
          opacity: 0,
          easing: 'linear',
          duration: 200,
          offset: '+=6000'
        })
        .add({
          targets: '.script1',
          opacity: 0,
          easing: 'linear',
          duration: 200
        })
        .add({
          targets: '.white',
          backgroundColor: '#fff',
          easing: 'linear',
          duration: 1000
        })
        .add({
          targets: ['.icon-1', '.icon-2', '.icon-3', '.icon-4', '.icon-5', '.icon-6'],
          opacity: 1,
          duration: 300,
          easing: 'linear',
          delay: function (el, i) {
            return 1000 * i
          },
          offset: '+=400'
        })
        .add({
          targets: '.script3',
          opacity: 1,
          translateX: ['-50%', '-50%'],
          translateY: ['0%', '-50%'],
          easing: 'linear',
          duration: 300,
          offset: '+=200'
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
      
      this.playAudio('scene9', 'static/subtitles/page9.json', null, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    /**
     | ----------------------------------------------
     * DESTROYED
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
      
      @include responsive('laptopS') {
        animation: personScaleDown 10s infinite ease-in-out alternate;
      }
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
      @include responsive('laptopS') {
        transform: scale(0.8);
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
      @include responsive('laptopS'){
        max-width: 250px;
        @include font-size(1.8);
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
      @include responsive('laptopS'){
        @include font-size(1.5);
        top:52%;
      }
    }
    .script3 {
      background: rgba(#000, 0.6);
      opacity: 1;
      max-width: none;
      width: 100%;
      left: 50%;
      bottom: 0;
      padding: 0 40px;
      opacity: 0;
      h1 {
        max-width: 600px;
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
    @keyframes personScaleDown {
      0% {
        transform: translateX(-45%) scale(0.9);
      }
      100% {
        transform: translateX(-55%) scale(0.9);
      }
    }
  }
</style>
