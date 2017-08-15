<template>
  <section class="page">
    <div class="image-background step1"></div>
    <div class="image-background image1"></div>
    <div class="effects"></div>
    <div class="script1">
      <h1>valorizamos aspectos diferentes</h1>
    </div>
    <div class="script2 end-tag">
      <h1><span>Surpreender</span></h1>
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
      //
      // set global vars
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      
      this.TimelineCtrl = anime.timeline({
        loop: false
      })
      this.TimelineCtrl
        .add({
          targets: '.effects',
          height: [0, '100%'],
          duration: 300,
          easing: 'linear'
        })
        .add({
          targets: '.script1',
          opacity: 1,
          duration: 300,
          easing: 'linear'
        })
        .add({
          targets: '.effects',
          left: 0,
          width: [{value: 1280, delay: 300}],
          duration: 200,
          offset: '+=7000',
          easing: 'linear'
        })
        .add({
          targets: '.script1',
          opacity: 0,
          duration: 200
        })
        .add({
          targets: '.image1',
          opacity: 0,
          duration: 100
        })
        .add({
          targets: '.effects',
          opacity: 0,
          duration: 200,
          easing: 'linear',
          offset: '+=400'
        })
        .add({
          targets: '.script2',
          opacity: 1,
          easing: 'linear',
          translateY: ['100%', '-50%'],
          duration: 200
        })
      
      EventBus.$on('pause', function (paused) {
        (paused ? this.TimelineCtrl.pause : this.TimelineCtrl.play)()
      }.bind(this))
      EventBus.$on('rewind', function () {
        this.TimelineCtrl.restart()
      }.bind(this))
      
      this.playAudio('scene10', 'static/subtitles/page10.json', null, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      this.stopAudio()
      EventBus.$off('pause')
      EventBus.$off('rewind')
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .image-background {
    background: url("../assets/backgrounds/page17/01.jpg") no-repeat;
    background-size: cover;
    
    &.step1 {
      background: url("../assets/backgrounds/page17/02.jpg") no-repeat;
      background-size: cover;
    }
  }
  
  .effects {
    width: 38%;
    height: 0;
    background: darken($brand-details, 20%);
    left: 10%;
  }
  
  .script1 {
    max-width: 38%;
    color: #fff;
    @include font-size(2);
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    opacity: 0;
    h1 {
      padding: 20px;
    }
  }
</style>
