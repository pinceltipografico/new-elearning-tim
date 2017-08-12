<template>
  <section class="page">
    <div class="image-background step2"></div>
    <div class="image-background image1"></div>
    <div class="script1 video-overlay">
      <video src="/tim/static/video/560156650.m4v" autoplay loop></video>
      <h1>entender o que bate em seu coração</h1>
    </div>
    <div class="effect"></div>
    <div class="script2">
      <h1>Mas nós todos, <span>como clientes</span>, desejamos mais...</h1>
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
     * WHEN COMPOENNT IS READY
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
          targets: '.script1',
          opacity: 1,
          duration: 100,
          begin: function () {
            var el = document.querySelector('.script1')
            vm.removeClass(el, 'step1')
            vm.removeClass(el, 'step2')
            vm.addClass(el, 'show')
          },
          complete: function () {
            var el = document.querySelector('.script1')
            vm.addClass(el, 'step1')
            setTimeout(function () {
              vm.addClass(el, 'step2')
            }, 1000)
          }
        })
        .add({
          targets: '.effect',
          width: [0, 1280],
          easing: 'linear',
          duration: 200,
          offset: '+=14000'
        })
        .add({
          targets: '.script1',
          opacity: 0
        })
        .add({
          targets: '.image1',
          opacity: 0,
          duration: 100
        })
        .add({
          targets: '.script2',
          opacity: 1,
          easing: 'linear',
          duration: 500
        })
        .add({
          targets: '.effect',
          width: 550,
          left: '50%',
          easing: 'linear',
          duration: 100
        })
      
      EventBus.$on('pause', function (paused) {
        (paused ? this.TimelineCtrl.pause : this.TimelineCtrl.play)()
      }.bind(this))
      EventBus.$on('rewind', function () {
        this.TimelineCtrl.restart()
      }.bind(this))
      
      this.playAudio('scene5', '/static/subtitles/page5.json', function () {}, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      this.$store.state.audio.stop()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    div.image-background {
      background: #000;
      &.step2 {
        background: url('../assets/backgrounds/page8/01.jpg') no-repeat;
        background-size: cover;
      }
    }
    
    .script1 {
      width: 100%;
      height: 100%;
      video {
        margin-top: -20px;
        width: 100%;
        height: 110%;
      }
    }
    
    .effect {
      width: 0;
      height: 100%;
      background: #fff;
      left: 0;
      top: 0;
    }
    .script2 {
      right: 10%;
      top: 50%;
      transform: translateY(-50%);
      @include font-size(2);
      max-width: 37%;
      opacity: 0;
      h1 {
        color: #666;
      }
    }
  }
</style>
