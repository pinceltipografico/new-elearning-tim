<template>
  <section class="page page2">
    <div class="image-background step4 image4"></div>
    <div class="image-background step3 image3"></div>
    <div class="image-background step2 image2"></div>
    <div class="image-background image1"></div>
    <div class="effects step3"></div>
    <div class="script1">
      <h1>Adapte-se a este <span>contexto!</span></h1>
    </div>
    <div class="script2">
      <h1>A <span class="tim">TIM</span> está se movimentando para esta <span>mudança</span></h1>
      <div class="shadow"></div>
    </div>
    <div class="script3">
      <h1>
        <strong>Empresa</strong><br/><strong>Colaboradores</strong><br/><strong>Clientes</strong>
        <br/>
        <span>Uma única perspectiva</span></h1>
      <div class="effect"></div>
      <div class="effect"></div>
      <div class="effect"></div>
      <div class="effect"></div>
    </div>
    <div class="script4">
      <h1>Compartilhando,<br/><span>Construindo,</span><br/>Evoluindo</h1>
    </div>
    <div class="script5 end-tag">
      <h1>Somos a <span>Geração CX TIM</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from '../events/index'
  import anime from 'animejs'
  
  export default {
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
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var vm = this
      
      this.TimelineCtrl = anime.timeline({
        loop: false,
        elasticity: 0,
        update: function (anim) {}
      })
      
      this.TimelineCtrl
        .add({
          targets: '.effects',
          left: [-450, '55%'],
          backgroundColor: '#fff',
          opacity: 1,
          easing: 'linear',
          duration: 500
        })
        .add({
          targets: '.script1',
          translateY: '-50%',
          scale: [0, 1],
          opacity: [{value: 1}, {value: 0, delay: 7000}], // 75000
          easing: 'linear',
          duration: 200,
          offset: '+=400'
        })
        .add({
          targets: '.effects',
          left: 0,
          width: [{value: 1280, delay: 500}],
          easing: 'linear',
          duration: 300,
          offset: '+=300'
        })
        .add({
          targets: '.image1',
          opacity: 0,
          duration: 100,
          offset: '+=400'
        })
        .add({
          targets: '.effects',
          backgroundColor: ['#ffffff', '#073143'],
          duration: 100,
          easing: 'linear',
          offset: '+=200'
        })
        .add({
          targets: '.script2',
          translateX: ['-50%', '-50%'],
          translateY: [
            {value: '-100%'},
            {value: '-50%'},
            {value: '-60%', duration: 500},
            {value: '-50%', duration: 500}
          ],
          opacity: [{value: 1, duration: 500}, {value: 0, delay: 2300}],
          duration: 500,
          easing: 'linear',
          offset: '+=300'
        })
        .add({
          targets: '.image1',
          opacity: 0,
          duration: 100,
          offset: '+=300'
        })
        .add({
          targets: '.effects',
          opacity: 0
        })
        .add({
          targets: '.script3',
          opacity: 1,
          translateX: ['140%', '40%'],
          translateY: ['-50%', '-50%'],
          easing: 'linear',
          duration: '200',
          begin: function () {
            var el = document.querySelector('.script3')
            vm.removeClass(el, 'step2')
          },
          complete: function () {
            var el = document.querySelector('.script3')
            vm.addClass(el, 'step2')
          }
        })
        .add({
          targets: '.script3',
          translateX: '140%',
          translateY: '-50%',
          duration: 300,
          opacity: 0,
          easing: 'linear',
          offset: '+=2000'
        })
        .add({
          targets: '.effects',
          backgroundColor: [{value: '#1a4582', duration: 0}],
          opacity: 1,
          duration: 400,
          easing: 'linear',
          offset: '+=100'
        })
        .add({
          targets: '.image2',
          opacity: 0,
          duration: 100,
          offset: '+=100'
        })
        .add({
          targets: '.effects',
          opacity: 0,
          duration: 200,
          easing: 'linear',
          offset: '+=100'
        })
        .add({
          targets: '.script4',
          opacity: [{value: 1, duration: 400}, {value: 0, delay: 3500, duration: 1000}],
          duration: 500,
          offset: '+=200'
        })
        .add({
          targets: '.effects',
          backgroundColor: '#ffffff',
          opacity: 1,
          duration: 100,
          easing: 'linear'
        })
        .add({
          targets: '.image3',
          opacity: 0,
          duration: 100,
          offset: '+=100'
        })
        .add({
          targets: '.effects',
          opacity: 0,
          offset: '+=500',
          easing: 'linear',
          duration: 500
        })
        .add({
          targets: '.script5',
          translateY: [0, '-50%'],
          opacity: 1,
          easing: 'linear',
          duration: 400
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
      
      this.playAudio('scene2', 'static/subtitles/page2.json', function (pos) {}, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    destroyed () {
      this.stopAudio()
      EventBus.$off('pause')
      EventBus.$off('rewind')
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .image-background {
    background: url("../assets/backgrounds/page2/shutterstock_316452626.jpg") no-repeat;
    background-size: cover;
    &.step1 {
      background: url("../assets/backgrounds/page2/02.jpg") no-repeat;
      background-size: cover;
    }
    &.step2 {
      background: url("../assets/backgrounds/page2/shutterstock_524512507.jpg") no-repeat;
      background-size: cover;
    }
    &.step3 {
      background: $brand-primary url("../assets/backgrounds/page2/04.jpg") no-repeat bottom center;
      background-size: 100% auto;
      background-blend-mode: multiply;
    }
    &.step4 {
      background: url("../assets/backgrounds/page2/shutterstock_371017109.jpg") no-repeat;
      background-size: cover;
    }
  }
  
  .effects {
    height: 100%;
    width: 450px;
    background: #fff;
    left: -450px;
    transition: background $animationTime;
  }
  
  .script1 {
    max-width: 400px;
    @include font-size(2.5);
    left: 58%;
    top: 50%;
    color: #666;
    transform-origin: 50% 50%;
    transform: scale(0) translateY(-50%);
  }
  
  .script2 {
    max-width: 65%;
    width: 100%;
    top: 50%;
    left: 50%;
    @include font-size(2.5);
    text-align: center;
    opacity: 0;
    h1,
    .shadow {
      transition: all $animationTime;
      opacity: 1;
    }
    h1 {
      width: 100%;
      color: #fff;
    }
    .shadow {
      transform: translateY(-100%);
    }
  }
  
  .script3 {
    top: 50%;
    left: 50%;
    transform: translate(140%, -50%);
    @include font-size(2);
    color: #fff;
    text-align: center;
    opacity: 0;
    padding: 10px 25px;
    border-top: 1px solid transparent;
    h1 {
      text-align: left;
      span {
        display: inline-block;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        background: #fff;
        margin-top: 20px;
        padding: 5px 10px;
        text-transform: none;
      }
      strong:nth-of-type(1) {
        font-size: 190%;
      }
      strong:nth-of-type(2) {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
      }
      strong:nth-of-type(3) {
        font-size: 195%;
      }
    }
    .effect {
      position: absolute;
      background: #fff;
      transition: all $animationTime;
      &:nth-of-type(1),
      &:nth-of-type(3) {
        width: 0;
        height: 2px;
      }
      &:nth-of-type(2),
      &:nth-of-type(4) {
        height: 0;
        width: 2px;
      }
      &:nth-of-type(1) {
        top: 0;
        left: 0;
      }
      &:nth-of-type(3) {
        bottom: 0;
        right: 0;
      }
      &:nth-of-type(2) {
        bottom: 0;
        left: 0;
      }
      &:nth-of-type(4) {
        top: 0;
        right: 0;
      }
    }
    
    &.step2 {
      .effect {
        &:nth-of-type(1),
        &:nth-of-type(3) {
          width: 100%;
        }
        &:nth-of-type(2),
        &:nth-of-type(4) {
          height: 100%;
        }
      }
    }
  }
  
  .script4 {
    top: 100px;
    left: 100px;
    @include font-size(2);
    max-width: 500px;
    color: #fff;
    opacity: 0;
    h1 {
      transition: all $animationTime;
      border-top: 1px solid #fff;
      padding: 20px 0;
      opacity: 1;
    }
  }
  
  .people {
    bottom: -50px;
    left: 50%;
    transform: translatex(-50%);
  }
</style>
