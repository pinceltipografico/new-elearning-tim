<template>
  <section class="page">
    <div class="image-background step3 image4"></div>
    <div class="image-background step2 image3"></div>
    <div class="image-background step1 image2"></div>
    <div class="image-background image1"></div>
    <div class="effects"></div>
    <div class="script1">
      <h1>proporcionando boas experiências</h1>
    </div>
    <div class="script1_2">
      <h1>compreender o outro<br/>cada vez melhor</h1>
    </div>
    <div class="script2">
      <h1>simplificando e potencializando esta experiência</h1>
    </div>
    <div class="script3 end-tag">
      <h1>todos os colaboradores da <span class="red">TIM</span> <br/>vivendo a <span>experiência CX</span></h1>
    </div>
    <div class="script4">
      <h1>é o que chamamos de Crew Experience</h1>
    </div>
    <div class="script5">
      <h1>colaborador e cliente na mesma sintonia</h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
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
        loop: false
      })
      this.TimelineCtrl
        .add({
          targets: '.script1_2',
          translateY: ['-100%', '-50%'],
          translateX: ['-50%', '-50%'],
          opacity: [{value: 1}],
          easing: 'linear',
          duration: 300,
          begin: function () {
            var el = document.querySelector('.script1_2')
            vm.removeClass(el, 'step1')
          },
          complete: function () {
            setTimeout(function () {
              var el = document.querySelector('.script1_2')
              vm.addClass(el, 'step1')
            }, 1000)
          }
        })
        .add({
          targets: '.script1_2',
          opacity: 0,
          duration: 300,
          easing: 'linear',
          offset: '+=10000'
        })
        .add({
          targets: '.effects',
          opacity: 1,
          easing: 'linear',
          duration: 300,
          offset: '+=500'
        })
        .add({
          targets: '.image1',
          opacity: 0,
          duration: 100
        })
        .add({
          targets: '.effects',
          backgroundColor: [{value: '#2eb1e8', delay: 0}],
          easing: 'linear',
          duration: 300,
          offset: '+=500'
        })
        .add({
          targets: '.script2',
          opacity: [{value: 1}, {value: 0, delay: 7000}],
          duration: 400,
          easing: 'linear'
        })
        .add({
          targets: '.effects',
          opacity: [{value: 0}, {value: 1, delay: 1000}],
          width: [{value: 400, delay: 500}],
          left: [{value: '57%', delay: 500}],
          easing: 'linear',
          duration: 300
        })
        .add({
          targets: '.script1',
          opacity: [{value: 1}, {value: 0, delay: 6000}],
          duration: 300,
          easing: 'linear'
        })
        .add({
          targets: '.effects',
          width: '100%',
          left: 0,
          duration: 300,
          easing: 'linear'
        })
        .add({
          targets: '.image2',
          opacity: 0,
          duration: 10
        })
        .add({
          targets: '.effects',
          opacity: 0,
          duration: 300,
          easing: 'linear',
          offset: '+=500'
        })
        .add({
          targets: '.script3',
          translateY: '-50%',
          opacity: [{value: 1}, {value: 0, delay: 6000}],
          duration: 300,
          easing: 'linear'
        })
        .add({
          targets: '.effects',
          opacity: 1,
          duration: 300,
          easing: 'linear'
        })
        .add({
          targets: '.image3',
          opacity: 0,
          duration: 100
        })
        .add({
          targets: '.effects',
          opacity: 0,
          duration: 300,
          easing: 'linear',
          offset: '+=300'
        })
        .add({
          targets: '.script5',
          right: ['-105%', '5%'],
          duration: 300,
          easing: 'linear'
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
      
      this.playAudio('scene13', 'static/subtitles/page13.json', null, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    
    /**
     | ----------------------------------------------
     * DESTROY
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
  
  .image-background {
    background: url("../assets/backgrounds/page18/ref-525655138.jpg") no-repeat;
    background-size: cover;
    &.step1 {
      background: url("../assets/backgrounds/page18/02.jpg") no-repeat;
      background-size: cover;
    }
    &.step2 {
      background: url("../assets/backgrounds/page18/01.jpg") no-repeat;
      background-size: cover;
    }
    &.step3 {
      background: url("../assets/backgrounds/page18/ref-565936849.jpg") no-repeat;
      background-size: cover;
    }
  }
  
  .effects {
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    opacity: 0;
    
    &.step3 {
      width: 40%;
      left: 55%;
    }
    &.step4 {
      opacity: 0;
    }
    &.step5 {
      opacity: 1;
    }
    &.step6 {
      transform: translateX(-100%);
    }
  }
  
  .script1 {
    @include font-size(2.3);
    max-width: 350px;
    color: #fff;
    top: 50%;
    transform: translate(0, -50%);
    left: 60%;
    opacity: 0;
  }
  
  .script1_2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include font-size(2.5);
    text-align: center;
    display: block;
    color: #fff;
    opacity: 0;
    transition: border $animationTime;
    h1 {
      background: $brand-details;
      margin: 0;
      padding: 0 20px;
    }
    &.step1 {
      border: 10px double $brand-details;
    }
  }
  
  .script2 {
    @include font-size(2.5);
    max-width: 60%;
    text-align: center;
    color: #fff;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    opacity: 0;
  }
  
  .script4 {
    top: 50%;
    left: 100px;
    color: $brand-details;
    background: #fff;
    @include font-size(2);
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 0;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2);
    }
    h1 {
      padding: 20px;
      max-width: 400px;
      &:after {
        content: '';
        width: 80%;
        display: inline-block;
        background: $brand-secondary;
        height: 4px;
      }
    }
    &.show {
      opacity: 1;
      transform: translate(0, -50%) rotate(0deg);
    }
    &.step2 {
      transform: translate(0, -50%) rotate(-2deg);
    }
  }
  
  .script5 {
    top: 50%;
    right: -105%;
    transform: translateY(-50%);
    h1 {
      @include font-size(3.5);
      max-width: 400px;
      color: #fff;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 10px 0;
    }
    &.show {
      right: 5%;
    }
  }
</style>
