<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="infographic">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="script1">
      <h1>
        É necessário olhar o Cliente <span>mais de perto</span>
      </h1>
    </div>
    <div class="script2">
      <h1>A <span class="tim">TIM</span> está passando por este <span>movimento!</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */
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
      var els = this.$el.querySelectorAll('.infographic > div')
      
      this.TimelineCtrl = anime.timeline({
        loop: false
      })
      this.TimelineCtrl
        .add({
          targets: '.script2',
          translateY: ['100%', '0'],
          easing: 'linear',
          opacity: 1,
          duration: 500
        })
        .add({
          targets: '.script1 h1:first-of-type',
          translateX: ['100%', '0'],
          translateY: ['-50%', '-50%'],
          opacity: 1,
          easing: 'linear',
          duration: 500,
          offset: '+=9000'
        })
        .add({
          targets: els,
          opacity: 1,
          duration: 300,
          delay: function (el, i) {
            if (i === 5) {
              return 0
            }
            return 1000 * i
          },
          offset: '+=11500'
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
      
      this.playAudio('scene7', 'static/subtitles/page7.json', null, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    
    /**
     | ----------------------------------------------
     * WHEN DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      this.$store.state.audio.stop()
      EventBus.$off('pause')
      EventBus.$off('rewind')
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    @extend %gradient;
  }
  
  .script1,
  .script2,
  .infographic {
    z-index: 4;
    position: absolute;
  }
  
  .infographic {
    width: 370px;
    height: 365px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    background-size: 100% auto;
    
    div {
      position: absolute;
      opacity: 0;
      transition: all $animationTime;
  
      &:nth-of-type(1) {
        background: url("../assets/backgrounds/page7/accontability.png") no-repeat;
        width: 450px;
        height: 70px;
        z-index: 5;
        bottom: -70px;
        left: 50%;
        margin-left: -225px;
      }
      
      &:nth-of-type(2),
      &:nth-of-type(3) {
        top: 0;
      }
      &:nth-of-type(2) {
        width: #{(421/2)+'px'};
        height: #{(364/2)+'px'};
        background: url("../assets/backgrounds/page7/graph4.png") no-repeat;
        background-size: 100% auto;
        left: 0;
      }
      &:nth-of-type(3) {
        width: #{(395/2)+'px'};
        height: #{(417/2)+'px'};
        background: url("../assets/backgrounds/page7/graph3.png") no-repeat;
        background-size: 100% auto;
        right: 0;
      }
      &:nth-of-type(4),
      &:nth-of-type(5) {
        bottom: 0;
      }
      &:nth-of-type(4) {
        width: #{(397/2)+'px'};
        height: #{(420/2)+'px'};
        background: url("../assets/backgrounds/page7/graph1.png") no-repeat;
        background-size: 100% auto;
        left: 0;
      }
      &:nth-of-type(5) {
        width: #{(425/2)+'px'};
        height: #{(442/2)+'px'};
        background: url("../assets/backgrounds/page7/graph2.png") no-repeat;
        background-size: 100% auto;
        right: 0;
      }
    }
  }
  
  .script1,
  .script2 {
    @include font-size(2.5);
    color: #fff;
  }
  
  .script1 {
    top: 30%;
    max-width: 25%;
    left: 5%;
  }
  
  .script1 h1 {
    padding: 10px;
    @include font-size(2.5);
    color: #fff;
    transform: translate(100%, -50%) scale(1) rotate(0deg);
    opacity: 0;
  }
  
  .script2 {
    max-width: 25%;
    color: #fff;
    bottom: 100px;
    right: 5%;
    text-align: right;
    transform: translateY(100%);
    opacity: 0;
    h1 {
      @include font-size(2.5);
      padding: 10px 0;
      display: inline-block;
    }
  }
</style>
