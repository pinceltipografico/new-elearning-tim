<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="intro-title" v-bind:class="{'animation':animation}">
      <span>Bem-vindo ao e-learning</span>
      <hr>
      <h1>Customer</h1>
      <h1>experience</h1>
      <hr>
      <div class="buttons">
        <span>iniciar</span>
        <i class="fa fa-play-circle"></i>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        animation: false,
        blinkButton: false
      }
    },
    mounted () {
      setTimeout(function () {
        this.animation = true
      }.bind(this), 2000)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .intro-title {
    position: absolute;
    left: 50%;
    bottom: 70px;
    text-transform: uppercase;
    text-align: center;
    transform: translateX(-50%);
    z-index: 3;
    
    *{
      transition: all $animationTime;
    }
    
    hr{
      opacity: 0;
      &:nth-of-type(1){
        transform: translateX(-100%);
      }
      &:nth-of-type(2){
        transform: translateX(100%);
      }
    }
    
    h1,
    span {
      color: #fff;
    }
    > span {
      display: inline-block;
      @include font-size(2);
      transform: scaleY(0);
    }
    h1 {
      @include font-size(5);
      margin: 0;
      font-weight: 300;
      text-align: left;
      padding: 0 40px;
      opacity: 0;
      transition-delay: 0.4s;
    }
    h1:nth-of-type(1) {
      @include font-size(5.4);
      color: $brand-details;
    }
    h1:nth-of-type(2) {
      margin-top: -15px;
    }
    
    .buttons{
      transition-delay: 1s;
      transform: translateY(100%);
      opacity: 0;
    }
    
    &.animation {
      > span {
        transform: scaleY(1);
      }
      hr{
        opacity: 1;
        transform: translateX(0);
      }
      h1{
        opacity: 1;
      }
      .buttons{
        transform: translateY(0);
        opacity: 1;
        animation-delay: 1s;
        border:2px solid #fff;
        animation: blinkButton 1s infinite;
      }
    }
  }
  @keyframes blinkButton {
    0%{
      border:2px solid #fff;
    }
    50%{
      border:2px solid $brand-details;
    }
    100%{
      border:2px solid #fff;
    }
  }
</style>
