<template>
  <section class="page">
    <div class="script1"
         data-0="opacity:1;"
         data-50="opacity:0;">
      <h1>Use o scroll do seu mouse para visualizar o conteúdo<span>
        <i class="fa fa-chevron-right fa-rotate-90"></i></span>
      </h1>
    </div>
    <div class="script2"
         data-start="width:0%; opacity:0;"
         data-50="width:0%; opacity:0;"
         data-100="width:100%;opacity:1;"
         data-400="width:100%;opacity:1;"
         data-410="width:100%;opacity:0;">
      <h1>A gente muda, o mundo muda a gente e a gente muda o mundo.</h1>
    </div>
    <div class="world"
         data-0="transform: translateY(-50%) rotateZ(0deg); opacity:1;"
         data-50="transform: translateY(-50%) rotateZ(0deg); opacity:1;"
         data-100="transform: translateY(-50%) rotateZ(360deg); opacity:1;"
         data-400="transform: translateY(-50%) rotateZ(360deg); opacity:1;"
         data-410="transform: translateY(-100%) rotateZ(360deg); opacity:0;">
    </div>
    <div class="image-market"
         data-0="opacity:0;"
         data-410="opacity:0;"
         data-420="opacity:1;"
         data-800="opacity:1;"
         data-810="opacity:0;">
    </div>
    <div class="script3"
         data-0="transform: translate(-50%,-50%) scale(0);"
         data-410="transform: translate(-50%,-50%) scale(0);"
         data-420="transform: translate(-50%,-50%) scale(1);"
         data-800="transform: translate(-50%,-50%) scale(1);"
         data-810="transform: translate(-50%,-50%) scale(0);">
      <h1>O mercado está passando por rompimento de paradigmas</h1>
    </div>
    <div class="image-tec"
         data-0="opacity:0;"
         data-610="opacity:0;"
         data-650="opacity:1;">
      <div class="script4"
           data-0="top:0px;opacity:0;"
           data-650="top:0px; opacity:0;"
           data-750="top:100px; opacity:1;">
        <!-- -->Novas tecnologias mudam profundamente nossa sociedade.<!-- -->
      </div>
      <div class="script5"
           data-0="right:-100%;"
           data-750="right:-100%;"
           data-950="right:0%;"><!-- -->Facilitam o acesso a informação<!-- -->
      </div>
    </div>
    <div class="impactos"
         data-0="transform:translateX(100%);"
         data-1200="transform:translateX(100%);"
         data-1250="transform:translateX(0%);">
      <div class="script6">
        <!-- -->Que impactos isso pode acarretar?<!-- -->
      </div>
    </div>
    <div class="adaptar"
         data-0="opacity:0;"
         data-1700="opacity:0;"
         data-1750="opacity:1;">
      <div class="script7"
           data-0="opacity:0; transform:translate(-100%,0%);"
           data-1800="opacity:0; transform:translate(-100%,0%);"
           data-1900="opacity:1; transform:translate(0%,0%);"
           data-2400="opacity:1; transform:translate(0%,300%);"><h1>É necessário se adaptar</h1></div>
    </div>
    <div class="organization"
         data-start="opacity:0;"
         data-2400="opacity:0;"
         data-2450="opacity:1;">
      <div class="background"
           data-start="opacity:0;"
           data-2550="opacity:0;"
           data-2650="opacity:0.8;"></div>
      <div class="script7"
           data-start="opacity:0;"
           data-2650="opacity:0;"
           data-2800="opacity:1;">
        <h1>E neste desafio, <span>todas as pessoas da organização</span> se tornam responsáveis pelo objetivo de <span>conquistar o cliente e mante-lo.</span>
        </h1></div>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var skrollr = require('skrollr')
  export default {
    //
    // component nam
    name: 'Page5',
    /**
    | ----------------------------------------------
    * return data of the component
    | ----------------------------------------------
    **/
    data () {
      return {
        scroller: null
      }
    },
    /**
    | ----------------------------------------------
    * WHEN THE COMPONENT IS READY
    | ----------------------------------------------
    **/
    mounted () {
      setTimeout(function () {
        this.scroller = skrollr.init()
      }.bind(this), 1000)
    },
    /**
    | ----------------------------------------------
    * WHEN COMPOONENT WAS DESTROYED
    | ----------------------------------------------
    **/
    destroyed () {
      if (this.scroller) {
        this.scroller.destroy()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/mixins";
  @import "../scss/variables";
  
  section.page {
    @extend %gradient;
    text-transform: uppercase;
  }
  
  .world {
    width: 639px;
    height: 595px;
    background: url("../assets/sprites/world.png") no-repeat;
    top: 50%;
    left: 100px;
    transform: translateY(-50%) rotateZ(0deg);
  }
  
  .script1 {
    @include font-size(2);
    color: #fff;
    max-width: 400px;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    text-align: center;
    h1 span {
      display: block;
      animation: scrollIndicator 3s infinite;
    }
  }
  
  .script2 {
    top: 50%;
    transform: translateY(-50%);
    background: $brand-details;
    width: 0;
    opacity: 0;
    padding: 20px;
    text-align: right;
    h1 {
      display: inline-block;
      max-width: 300px;
      margin-right: 100px;
      @include font-size(2);
      color: #fff;
    }
  }
  
  .image-market,
  .image-tec,
  .impactos,
  .adaptar,
  .organization {
    width: 100%;
    height: 100%;
  }
  
  .image-market {
    background: url("../assets/backgrounds/page5-1.jpg") no-repeat;
    background-size: cover;
    opacity: 0;
  }
  
  .script3 {
    top: 50%;
    left: 50%;
    background: rgba($brand-secondary, 0.7);
    @include font-size(2);
    transform: translate(-50%, -50%) scale(0);
    padding: 20px;
    text-align: center;
    h1 {
      color: #fff;
    }
  }
  
  .image-tec {
    background: #fff url("../assets/backgrounds/page5-3.jpg") no-repeat center left;
    background-size: 60% auto;
    background-blend-mode: multiply;
    opacity: 0;
    
    .script4,
    .script5 {
      position: absolute;
    }
    .script4 {
      top: 100px;
      right: 10%;
      max-width: 450px;
      @include font-size(3);
      color: $brand-details;
      font-weight: bold;
      border-left: 2px solid $brand-primary;
      padding-left: 15px;
    }
    .script5 {
      background: $brand-details;
      bottom: 100px;
      right: 0;
      @include font-size(4);
      text-transform: none;
      color: #fff;
      padding: 0 20px;
    }
  }
  
  .impactos {
    background: url("../assets/backgrounds/page5-4.jpg") no-repeat;
    background-size: cover;
    transform: translateX(100%);
    
    .script6 {
      position: absolute;
      top: 50%;
      left: 0;
      max-width: 40%;
      @include font-size(4);
      background: #fff;
      color: #666;
      font-weight: bold;
      padding: 20px 20px 20px 100px;
      border: 2px solid $brand-details;
      border-left: none;
    }
  }
  
  .adaptar {
    background: url("../assets/backgrounds/page5-5.jpg") no-repeat;
    background-size: cover;
    opacity: 0;
    .script7 {
      position: absolute;
      background: rgba(#000, 0.5);
      color: #fff;
      width: 100%;
      @include font-size(2);
      top: 100px;
      left: 0%;
      transform: translate(0%, 0%);
      padding: 20px;
      h1 {
        text-align: center;
        border-top: 1px solid $brand-details;
        border-bottom: 1px solid $brand-details;
        padding: 10px 0;
      }
    }
  }
  
  .organization {
    background: url("../assets/backgrounds/page5-6.jpg") no-repeat;
    opacity: 0;
    div {
      position: absolute;
    }
    div.background {
      width: 100%;
      height: 100%;
      @extend %gradient;
      opacity: 0;
    }
    div.script7 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      h1 {
        @include font-size(3);
        border-top: 2px dotted $brand-details;
        border-bottom: 2px dotted $brand-details;
        padding: 20px 40px;
      }
    }
  }
  
  @keyframes scrollIndicator {
    to {
      transform: translateY(20%);
    }
  }
</style>
