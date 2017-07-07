<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="script1">
      <h1>
        As empresas precisam olhar para o cliente mais de perto, o acompanhar em cada passo da jornada de interação da marca.
      </h1>
      <h1>
        Aqui na TIM estamos passando por esse movimento, implantando novos conceitos de relação com o cliente, adaptando novos formatos considerando colaborador e cliente nessa única jornada.
      </h1>
    </div>
    <div class="script2">
      <h1>
        Nos tornando a Geração Customer Experience alinhado com os pilares estratégicos:
      </h1>
    </div>
    <div class="script3">
      <div class="diagram">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="diagramText">
        <span>Infraestrutura</span>
        <span>Oferta</span>
        <span>Eficiencia</span>
        <span>Customer Experience</span>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */

  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  export default {
    created () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1 h1:first-of-type'
        },
        {
          time: 4000,
          step: 'hide',
          selector: '.script1 h1:first-of-type'
        },
        {
          time: 1000,
          step: 'show',
          selector: '.script1 h1:nth-child(2)'
        },
        {
          time: 4000,
          step: 'hide',
          selector: '.script1 h1:nth-child(2)'
        }, {
          time: 1000,
          step: 'show',
          selector: '.script1 h1:nth-child(2)'
        }, {
          time: 500,
          step: 'show',
          selector: '.script2'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagram div:first-of-type'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagramText span:first-of-type'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagram div:nth-child(2)'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagramText span:nth-child(2)'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagram div:nth-child(3)'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagramText span:nth-child(3)'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagram div:nth-child(4)'
        }, {
          time: 500,
          step: 'show',
          selector: '.diagramText span:nth-child(4)'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page-1.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    
    * {
      transition: all $animationTime;
    }
  }
  
  .script1,
  .script2,
  .script3{
    z-index: 4;
    position: absolute;
    @include font-size(2.5);
    color: #fff;
    text-transform: uppercase;
  }

  .script1{
    top:30%;
    height: 100%;
    width: 50%;
    left:10%;
  }
  .script1 h1 {
    position: absolute;
    padding: 10px;
    max-width: 700px;
    @include font-size(2.5);
    color: #fff;
    text-transform: uppercase;
    transform: translate(100%, -50%) scale(1) rotate(0deg);
    opacity: 0;

    &.show {
      transform: translate(0%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
    &.hide {
      transform: translate(0, -50%) scale(0) rotate(180deg);
    }
  }

  .script2 {
    width: 100%;
    text-transform: uppercase;
    color: #fff;
    top: 35%;
    background: rgba(#000, 0.5);
    text-align: center;
    padding: 30px;
    transform: translateY(100%);
    opacity: 0;
    h1 {
      @include font-size(3);
      border-top: 2px dotted $brand-details;
      border-bottom: 2px dotted $brand-details;
      padding: 10px 0;
      max-width: 80%;
      display: inline-block;
    }

    &.show {
      transform: translateY(-50%);
      opacity: 1;
    }
  }

  .script3{
    bottom: 10%;
    width: 100%;
    height:20%;
  }
  .script3 .diagram {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .script3 .diagram div{
    position: absolute;
    width: 20%;
    height: 50px;
    padding: 10px;
    background-color: #2eb1e8;
    transform: rotate(110deg);
    opacity: 0;
    &.show {
      transform: translateY(50%) rotate(90deg);
      opacity: 1;
    }
  }
  .script3 .diagram div{
    margin-left: 0%;
  }
  .script3 .diagram div:nth-child(2){
    margin-left: 25%;
  }
  .script3 .diagram div:nth-child(3){
    margin-left: 50%;
  }
  .script3 .diagram div:nth-child(4){
    margin-left: 75%;
  }

  .script3 .diagramText span{
    position: absolute;
    top: -75%;
    left: 10%;
    transform: rotate(-15deg);
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }

  .script3 .diagramText span:nth-child(2){
    left: 35%;
  }
  .script3 .diagramText span:nth-child(3){
    left: 60%;
  }
  .script3 .diagramText span:nth-child(4){
    left: 85%;
  }


</style>
