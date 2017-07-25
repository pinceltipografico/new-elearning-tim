<template>
  <section class="page gradient">
    <div class="tiles">
      <div class="tile tile1"></div>
      <div class="tile tile2"></div>
      <div class="tile tile3"></div>
      <div class="tile tile4">
        <span>customer experience</span>
      </div>
      <div class="tile tile5">
        <i class="material-icons">&#xE815;</i>
      </div>
      <div class="tile tile6"></div>
      <div class="tile tile7"></div>
      <div class="tile tile8"></div>
      <div class="tile tile9">
        <span>customer centric</span>
      </div>
      <div class="tile tile10">
        <span>persona tim</span>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  import dna from '../assets/svgs/DNA.svg'
  import { EventBus } from '../events/index'
  var Animations = require('../lib/ChainAnimation')
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 7000)
      this.$store.commit('setCanAdvance', false)
      var animations = [
        {
          time: 500,
          step: 'active',
          selector: '.tiles'
        }, {
          time: 4500,
          step: 'active',
          selector: '.tiles'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
      var progress = document.querySelector('.progress-audio')
      if (progress) {
        progress.style.display = 'none'
      }
    },
    destroyed () {
      var progress = document.querySelector('.progress-audio')
      if (progress) {
        progress.style.display = 'block'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .tiles {
    width: 100%;
    height: 100%;
    .tile {
      position: absolute;
      display: block;
      border: 2px solid #fff;
      transition: all $animationTime;
      opacity: 0;
      
      @for $i from 1 through 12 {
        &.tile#{$i} {
          transition-delay: #{(random()* 2)+'s'};
        }
      }
      
      &.tile1,
      &.tile2 {
        border-top: 0;
      }
      
      &.tile1 {
        width: 16%;
        height: 100px;
        background: url("../assets/backgrounds/page41/tiles-1.jpg") no-repeat;
        background-size: cover;
        top: 0;
        left: 0;
      }
      &.tile2 {
        width: 25%;
        height: 300px;
        background: url("../assets/backgrounds/page41/tile-2.jpg") no-repeat;
        background-size: cover;
        top: 0;
        left: 16%;
      }
      &.tile3 {
        top: 0;
        width: 32%;
        height: 215px;
        background: url("../assets/backgrounds/page41/tile-3.jpg") no-repeat;
        background-size: cover;
      }
      &.tile3,
      &.tile4 {
        left: 41%;
      }
      &.tile4 {
        background: $brand-details;
        width: 32%;
        height: 85px;
        top: 215px;
        text-align: center;
        line-height: 85px;
        span {
          color: #fff;
          @include font-size(2);
          font-weight: bold;
        }
      }
      &.tile5 {
        width: 16%;
        height: 200px;
        background: darken($brand-details, 20%);
        text-align: center;
        color: #fff;
        text-align: center;
        top: 100px;
        line-height: 200px;
        i {
          @include font-size(10);
          line-height: inherit;
        }
      }
      &.tile6,
      &.tile7 {
        width: 30%;
        left: 73%;
      }
      &.tile6 {
        top: 0;
        background: url("../assets/backgrounds/page41/tile-4.jpg") no-repeat;
        background-size: cover;
        height: 180px;
      }
      &.tile7 {
        top: 180px;
        height: 400px;
        background: url("../assets/backgrounds/page41/tile-8.jpg") no-repeat;
        background-size: cover;
      }
      &.tile8 {
        width: 53%;
        height: 380px;
        background: url('../assets/backgrounds/page41/tile-6.jpg') no-repeat;
        background-size: cover;
        top: 300px;
        left: 20%;
      }
      &.tile9 {
        width: 20%;
        height: 500px;
        background: $brand-primary;
        top: 300px;
        line-height: 330px;
        color: #fff;
        text-align: center;
        @include font-size(2);
        font-weight: bold;
      }
      &.tile10 {
        width: 28%;
        height: 200px;
        background: $brand-secondary;
        left: 73%;
        top: 580px;
        text-align: center;
        line-height: 65px;
        color: #fff;
        @include font-size(2);
        font-weight: bold;
      }
    }
    &.active {
      .tile {
        opacity: 1;
      }
    }
  }
</style>
