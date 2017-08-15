<template>
  <section class="page page8">
    <canvas id="customer_experience" width="600" height="600"></canvas>
    <div class="script1">
      <h1>Mas o que é?</h1>
    </div>
    <div class="image">
      <img src="../assets/backgrounds/page11/01.png" alt="O que é Customer Experiencie">
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var WorldCluod = require('wordcloud')
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  
  export default {
    /**
     | ----------------------------------------------
     * WHEN COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.image'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1'
        }
      ]
      var self = this
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {
        WorldCluod(document.querySelector('#customer_experience'), {
          list: [
            ['CUSTOMER EXPERIENCE', 36],
            ['Sonhos', 10],
            ['Experience', 10],
            ['Status', 14],
            ['Organizações', 10],
            ['Identidade', 12],
            ['Cliente', 18],
            ['Business', 8],
            ['Quality', 15],
            ['Business', 8],
            ['Qualidade', 20],
            ['Resultados', 20],
            ['Cliente', 10],
            ['Care', 20],
            ['Customer', 10],
            ['Serviços', 15],
            ['Experiencia', 10],
            ['Sucesso', 12],
            ['Pessoas', 20],
            ['Cuidado', 15],
            ['Vontade', 25],
            ['Pertencer', 15],
            ['Identidade', 10],
            ['Sonhos', 10],
            ['Experience', 10],
            ['Status', 14],
            ['Organizações', 10],
            ['Identidade', 12],
            ['Cliente', 18],
            ['Business', 8],
            ['Quality', 15],
            ['Business', 8],
            ['Qualidade', 20],
            ['Resultados', 20],
            ['Cliente', 10],
            ['Care', 20],
            ['Customer', 10],
            ['Serviços', 15],
            ['Experiencia', 10],
            ['Sucesso', 12],
            ['Pessoas', 20],
            ['Cuidado', 15],
            ['Vontade', 25],
            ['Pertencer', 15],
            ['Identidade', 10]
          ],
          wait: 300,
          maxRotation: 0,
          clearCanvas: true,
          backgroundColor: 'transparent',
          rotateRatio: 0,
          gridSize: 8,
          weightFactor: 1.2,
          color: function (word, weight, fontSize, distance, theta) {
            return (word === 'CUSTOMER EXPERIENCE') ? '#2eb1e8' : '#bbbaba'
          },
          drawOutOfBound: true
        })
      })
      this.playAudio('scene8', 'static/subtitles/page8.json', null, function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
    },
    
    /**
     | ----------------------------------------------
     * destroyed
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
      this.$store.state.audio.stop()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/mixins";
  @import "../scss/variables";
  
  section.page {
    @extend %gradient;
    
    > * {
      position: absolute;
      transition: all $animationTime;
    }
    
    canvas {
      top: 50%;
      left: 50%;
      transform: translate(-20%, -50%);
    }
    .image {
      bottom: 0;
      left: 100px;
      transform: translateX(-100%);
      opacity: 0;
      &.show {
        transform: translateX(0%);
        opacity: 1;
      }
    }
    .script1 {
      top: 140px;
      left: 300px;
      color: #666;
      @include font-size(1.8);
      background: #fff;
      padding: 0 20px 0 100px;
      transform-origin: 0 0;
      transform: rotate(0deg);
      opacity: 0;
      &.show {
        transform: rotate(-10deg);
        opacity: 1;
      }
    }
  }
</style>
