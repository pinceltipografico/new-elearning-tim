<template>
  <section class="page gradient">
    <div class="dna">
      <img src="../assets/backgrounds/page40/dna.png" alt="DNA"/>
      <div class="shadow"></div>
    </div>
    <div class="item costumer">
      <div class="icon">
        <i class="material-icons">&#xE228;</i>
      </div>
      <span><strong>Customer Centric</strong></span>
      <span>Entender as necessidades</span>
    </div>
    <div class="item user-experience">
      <div class="icon">
        <img src="../assets/backgrounds/page40/touch.png"/>
      </div>
      <span><strong>User Experience</strong></span>
      <span>Emoções Preferências</span>
      <span>Comportamentos</span>
      <span>Realizações</span>
    </div>
    <div class="item custumer-monitoring">
      <div class="icon">
        <i class="material-icons">&#xE8B6;</i>
      </div>
      <span><strong>Monitoring & Analisys</strong></span>
      <span>O que são?</span>
      <span>O que querem?</span>
      <span>Quando e como querem?</span>
    </div>
    <div class="item crew-experience">
      <div class="icon">
        <i class="material-icons">&#xE7FD;</i>
      </div>
      <span><strong>Crew Experience</strong></span>
      <span>Oferecer a melhor experiência para os colaboradores é a chave</span>
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
    components: {
      dna
    },
    data () {
      return {}
    },
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var dnaAnimation = [
        {
          time: 500,
          step: 'show',
          selector: '.dna'
        }, {
          time: 1500,
          step: 'show',
          selector: '.costumer'
        }, {
          time: 1500,
          step: 'show',
          selector: '.user-experience'
        }, {
          time: 1500,
          step: 'show',
          selector: '.custumer-monitoring'
        }, {
          time: 1500,
          step: 'show',
          selector: '.crew-experience'
        }
      ]
      Animations.setAnimations(dnaAnimation)
      Animations.animationTimeline(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this))
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    },
    destroyed () {
      Animations.destroyAnimations()
      this.stopAudio()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .dna {
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -40%);
    img {
      width: 100%;
    }
    opacity: 0;
    &.show{
      opacity: 1;
    }
  }
  .item {
    width: 250px;
    text-align: center;
    .icon {
      display: inline-block;
      background: $brand-details;
      border: 5px solid #fff;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      line-height: 75px;
      color: #fff;
      margin-bottom: 5px;
      img {
        display: inline;
        margin-top: 15px;
      }
      i {
        @include font-size(4);
        line-height: inherit;
      }
    }
    span {
      color: #fff;
      display: block;
      @include font-size(1.4);
    }
    &.costumer {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -200%);
    }
    &.user-experience {
      left: 50%;
      top: 48%;
      transform: translate(-50%, 90%);
    }
    &.custumer-monitoring {
      top: 50%;
      left: 50%;
      transform: translate(80%, -50%);
    }
    &.crew-experience {
      top: 50%;
      left: 50%;
      transform: translate(-230%, -40%);
      width: 180px;
    }
    opacity: 0;
    &.show{
      opacity: 1;
    }
  }
</style>
