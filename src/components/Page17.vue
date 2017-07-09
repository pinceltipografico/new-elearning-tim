<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="effects"></div>
    <div class="script1">
      <h1>valorizamos aspectos diferentes</h1>
    </div>
    <div class="script2 end-tag">
      <h1>surpreenda! provocando uma <br/><span>satisfação inesquecível.</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  import { EventBus } from '../events/index'
  var Animations = require('../lib/ChainAnimation')
  export default {
    mounted () {
      //
      // set global vars
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
      
      var animations = [
        {
          time: 500,
          step: 'step1',
          selector: '.effects'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 2000,
          step: 'step2',
          selector: '.effects'
        }, {
          time: 0,
          step: 'hide',
          selector: '.script1'
        }, {
          time: 500,
          step: 'step3',
          selector: '.effects'
        }, {
          time: 0,
          step: 'step1',
          selector: '.image-background'
        }, {
          time: 1000,
          step: 'hide',
          selector: '.effects'
        }, {
          time: 1000,
          step: 'show',
          selector: '.script2'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(null)
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  .image-background{
    background: url("../assets/backgrounds/page17-1.jpg") no-repeat;
    background-size: cover;
    
    &.step1{
      background: url("../assets/backgrounds/page17-2.jpg") no-repeat;
      background-size: cover;
    }
  }
  .effects{
    width: 38%;
    height: 0;
    background: darken($brand-details,20%);
    left:10%;
    &.step1{
      height: 100%;
    }
    &.step2{
      left:0;
    }
    &.step3{
      width: 100%;
      background: #fff;
    }
    &.hide{
      opacity: 0;
    }
  }
  .script1{
    max-width: 38%;
    color:#fff;
    @include font-size(2);
    text-transform: uppercase;
    top:50%;
    left: 10%;
    transform: translateY(-50%);
    opacity: 0;
    &.show{
      opacity: 1;
    }
    &.hide{
      opacity: 0;
    }
    h1{
      padding: 20px;
    }
  }
</style>
