<template>
  <section class="page gradient">
    <div class="tiles">
      <div class="tile tile1"></div>
      <div class="tile tile2"></div>
      <div class="tile tile3"></div>
      <div class="tile tile4"></div>
      <div class="tile tile5"></div>
      <div class="tile tile6"></div>
      <div class="tile tile7"></div>
      <div class="tile tile8"></div>
      <div class="tile tile9"></div>
      <div class="tile tile10"></div>
      <div class="tile tile11"></div>
      <div class="tile tile12"></div>
      <div class="tile tile13"></div>
      <div class="tile tile14"></div>
      <div class="tile tile15"></div>
      <div class="tile tile16"></div>
      <div class="tile tile17"></div>
      <div class="tile tile18"></div>
      <div class="tile tile19"></div>
      <div class="tile tile20"></div>
      <div class="tile tile21"></div>
      <div class="tile tile22"></div>
      <div class="tile tile23"></div>
      <div class="tile tile24"></div>
      <div class="tile tile25"></div>
      <div class="tile tile26"></div>
      <div class="tile tile27"></div>
      <div class="tile tile28"></div>
      <div class="tile tile29"></div>
      <div class="tile tile30"></div>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  import dna from '../assets/svgs/DNA.svg'
  import { EventBus } from '../events/index'
  import anime from 'animejs'
  
  export default {
    data () {
      return {
        TimelineCtrl: null
      }
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      
      this.playAudio('scene24', 'static/subtitles/page24.json', null, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
      
      this.TimelineCtrl = anime.timeline()
      this.TimelineCtrl
        .add({
          targets: '.tile',
          duration: 500,
          easing: 'linear',
          opacity: [0, 1],
          delay: function (el, i) {
            return 300 * i
          }
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
    },
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
  
  .tiles {
    width: 100%;
    height: 100%;
    $limit: 5;
    $cols: 0;
    $rows: 0;
    $height: 120;
    $width: percentage(1/5);
    .tile {
      position: absolute;
      display: block;
      border: 2px solid #fff;
      transition: all $animationTime;
      opacity: 0;
      background: #fff;
      height: #{$height}px;
      width: $width;
      
      @for $i from 1 through 30 {
        &:nth-of-type(#{$i}) {
          /*background: url(../assets/backgrounds/page41/tiles-#{$i}.jpg) no-repeat;*/
          background-size: cover;
          @if ($cols == $limit) {
            $cols: 0;
            $rows: $rows+1;
          }
          left: #{$width * $cols};
          top: #{($height * $rows)}px;
          $cols: $cols + 1;
        }
      }
    }
    &.active {
      .tile {
        opacity: 1;
      }
    }
  }
</style>
