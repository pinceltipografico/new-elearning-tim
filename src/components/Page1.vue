<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="blue-left"></div>
    <div class="script1">
      <h1>
        Queremos mais <span>velocidade</span> e <span>autonomia</span>
      </h1>
    </div>
    <div class="script2">
      <h1>
        Soluções específicas para as nossas necessidades
      </h1>
    </div>
    <div class="image-left"></div>
    <div class="image-right"></div>
    <div class="image-full"></div>
    <div class="tags tag1">conectividade</div>
    <div class="tags tag2">interação</div>
    <div class="tags tag3">tecnologia</div>
    <div class="script3">
      <h1>Um movimento que <span>não para de crescer</span></h1>
    </div>
    <div class="script4 end-tag">
      <h1>
        <span>Uma geração que quer ser </span>ouvida e atendida</h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var Animations = require('../lib/ChainAnimation')
  import anime from 'animejs'
  import { EventBus } from '../events/index'
  
  export default {
    data () {
      return {
        TimelineCtrl: null
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var vm = this
      
      this.TimelineCtrl = anime.timeline({
        direction: 'alternate',
        loop: false,
        elasticity: 0,
        update: function (anim) {}
      })
        .add({
          targets: '.script1',
          translateY: ['100%', '-50%'],
          easing: 'linear',
          opacity: 1,
          duration: 200
        })
        .add({
          targets: '.blue-left',
          height: '100%',
          opacity: 1,
          easing: 'linear',
          duration: 200,
          offset: 500
        })
        .add({
          targets: '.blue-left',
          width: 1280,
          easing: 'linear',
          duration: 200,
          offset: '+=4500'
        })
        .add({
          targets: '.blue-left',
          backgroundColor: '#09182d',
          easing: 'linear',
          duration: 200,
          offset: '+=200'
        })
        .add({
          targets: '.script1',
          easing: 'linear',
          opacity: 0,
          duration: 200
        })
        .add({
          targets: '.image-right',
          easing: 'linear',
          translateX: [{value: '100%', duration: 0}, {value: 0, delay: 100}],
          duration: 500,
          opacity: 1,
          offset: '+=200'
        })
        .add({
          targets: '.script2',
          easing: 'linear',
          scaleX: [{value: 0, duration: 0}, {value: 1, delay: 100}],
          paddingBottom: [{value: 70, duration: 6700}],
          paddingTop: [{value: 70, duration: 6700}],
          top: [{value: -500, duration: 500, delay: 6700}],
          opacity: 1,
          duration: 500,
          offset: '+=300'
        })
        .add({
          targets: '.image-right',
          easing: 'linear',
          translateX: '100%',
          duration: 200,
          offset: '+=300'
        })
        .add({
          targets: '.blue-left',
          backgroundColor: '#fff',
          easing: 'linear',
          duration: 200,
          offset: '+=200'
        })
        .add({
          targets: '.image-full',
          easing: 'linear',
          opacity: 1,
          duration: 200,
          offset: '+=200'
        })
        .add({
          targets: ['.tag1', '.tag2', '.tag3'],
          easing: 'linear',
          opacity: 1,
          duration: 200,
          translateY: [0, function (item, index) {
            var ammount = ((50 * index) * -1)
            return ammount
          }],
          delay: function () {
            return 1
          },
          offset: '+=200'
        })
        .add({
          targets: '.blue-left',
          backgroundColor: '#fff',
          opacity: [{value: 0, duration: 0}, {value: 0.8, delay: 200}],
          width: 450,
          height: [{value: 0, duration: 0}, {value: 890, delay: 400, duration: 500}],
          left: '55%',
          zIndex: 6,
          easing: 'linear',
          duration: 200,
          offset: '+=1000'
        })
        .add({
          targets: '.script3',
          opacity: 1,
          translateX: 0,
          translateY: '-50%',
          duration: 300,
          offset: '+=500'
        })
        .add({
          targets: '.script3',
          opacity: 0,
          translateX: 0,
          translateY: '-50%',
          duration: 300,
          offset: '+=5500'
        })
        .add({
          targets: '.blue-left',
          backgroundColor: '#fff',
          opacity: 1,
          width: 1280,
          left: 0,
          easing: 'linear',
          duration: 200,
          offset: '+=1000'
        })
        .add({
          targets: {prop1: 0},
          prop1: 100,
          begin: function () {
            var el = document.querySelector('.image-full')
            vm.removeClass(el, 'step3')
          },
          complete: function () {
            var el = document.querySelector('.image-full')
            vm.addClass(el, 'step3')
          },
          duration: 100
        })
        .add({
          targets: '.blue-left',
          opacity: 0,
          offset: '+=1000'
        })
        .add({
          targets: '.script4',
          translateY: ['100%', '-50%'],
          opacity: [0, 1],
          duration: 300,
          easing: 'linear',
          offset: '+=100'
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
      
      this.playAudio('scene1', 'static/subtitles/page1_1.json', function (pos) {}, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    destroyed () {
      EventBus.$off('pause')
      EventBus.$off('rewind')
      this.stopAudio()
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page1/shutterstock_516175918.jpg") no-repeat;
    background-size: cover;
  }
  
  .image-full {
    width: 100%;
    height: 100%;
    background: url("../assets/backgrounds/page1/shutterstock_379691755.jpg") no-repeat;
    background-size: cover;
    opacity: 0;
    &.step3 {
      background: url("../assets/backgrounds/page1/shutterstock_450689707.jpg") no-repeat;
      background-size: cover;
      z-index: 5;
    }
  }
  
  .image-right {
    width: 50%;
    height: 100%;
    background: url("../assets/backgrounds/page1/03.png") no-repeat;
    background-size: cover;
    right: 0;
    transform: translateX(100%);
    opacity: 0;
  }
  
  .blue-left {
    width: 40%;
    height: 0;
    background: $brand-primary;
  }
  
  .script1 {
    top: 50%;
    left: 100px;
    max-width: 400px;
    @include font-size(2.5);
    color: #fff;
    opacity: 0;
    span {
      color: $brand-details;
    }
  }
  
  .script2 {
    width: 100%;
    color: #fff;
    background: $brand-details;
    top: 50%;
    padding: 20px 40px;
    transform-origin: 0 50%;
    opacity: 0;
    h1 {
      max-width: 45%;
      @include font-size(3);
    }
  }
  
  .tags {
    @include font-size(2);
    padding: 10px;
    font-weight: bold;
    border-radius: 7px;
    top: 40%;
    opacity: 0;
    transition: all $animationTime;
    &:before {
      display: block;
      content: '';
      position: absolute;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid $brand-details;
      right: 100%;
      top: 50%;
      margin-top: -8px;
    }
    &.tag1,
    &.tag3 {
      background: $brand-details; //rgba($brand-details,0.8);
      left: 100px;
      color: #fff;
    }
    &.tag1 {
    }
    &.tag2 {
      background: #fff;
      color: #666;
      left: 180px;
      transition-delay: 0.5s;
      &:before {
        border-right-color: #fff;
      }
    }
    &.tag3 {
      transition-delay: 1s;
    }
  }
  
  .script3 {
    max-width: 400px;
    top: 50%;
    right: 10%;
    padding: 15px;
    opacity: 0;
    z-index: 6;
    h1 {
      @include font-size(3);
      color: #666;
      span {
        color: $brand-details;
      }
    }
  }
  
  .script4 {
    z-index: 7;
  }
  
  @keyframes scaleUp {
    to {
      padding: 100px 40px;
    }
  }
</style>
