<template>
  <section class="page hello">
    <div class="overlay"></div>
    <div class="intro-title" v-bind:class="{'animation':animation}">
      <hr>
      <h1>Customer</h1>
      <h1>experience <span>CX</span></h1>
      <hr>
      <div class="buttons" @click="gotoExplain">
        <span>iniciar</span>
        <i class="material-icons">&#xE038;</i>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    //
    // APP NAME
    name: 'hello',
    /**
     | ----------------------------------------------
     * RETURN THE DATA OF COMPONENT
     | ----------------------------------------------
     **/
    data () {
      return {
        animation: false,
        blinkButton: false
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', false)
      setTimeout(function () {
        this.animation = true
      }.bind(this), 1000)
//      console.log('dunha')
    },
    /**
     | ----------------------------------------------
     * RETURN THE COMPONENT METHODS
     | ----------------------------------------------
     **/
    methods: {
      gotoExplain: function () {
        this.animation = false
        var isViewd = (this.$cookie.get('explain_viewed') === 'true')
        if (isViewd) {
          this.$router.replace('page1')
        } else {
          this.$router.replace('explain')
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/home/shutterstock_367752371.jpg") no-repeat;
    background-size: cover;
  }
  
  .intro-title {
    position: absolute;
    left: 50%;
    bottom: 70px;
    text-align: center;
    transform: translateX(-50%);
    z-index: 3;
    text-transform: uppercase;
    
    * {
      transition: all $animationTime;
    }
    
    hr {
      opacity: 0;
      &:nth-of-type(1) {
        transform: translateX(-100%);
      }
      &:nth-of-type(2) {
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
      @include font-size(6.8);
      color: $brand-details;
    }
    h1:nth-of-type(2) {
      margin-top: -15px;
      span {
        color: $brand-secondary;
      }
    }
    
    .buttons {
      transition-delay: 1s;
      transform: translateY(100%);
      opacity: 0;
    }
    
    &.animation {
      > span {
        transform: scaleY(1);
      }
      hr {
        opacity: 1;
        transform: translateX(0);
      }
      h1 {
        opacity: 1;
      }
      .buttons {
        transform: translateY(0);
        opacity: 1;
        animation-delay: 1s;
        border: 2px solid #fff;
        animation: blinkButton 1s infinite;
      }
    }
  }
  
  @keyframes blinkButton {
    0% {
      border: 2px solid #fff;
    }
    50% {
      border: 2px solid $brand-details;
    }
    100% {
      border: 2px solid #fff;
    }
  }
</style>
