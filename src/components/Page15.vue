<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="script1">
      <h1>Uma mudança de <span>perspectiva</span></h1>
    </div>
    <div class="effects"></div>
    <div class="de">
      <!-- -->DE<!-- -->
    </div>
    <div class="script2">
      <h1>abordagem tradicional de mercado
        <!-- -->
        <small>Não integrada, a oferta é o centro, sem context, reativa</small><!-- -->
      </h1>
    </div>
    <div class="abordages-tradicionais">
      <div>Sem diferença por cliente</div>
      <div>Sem integração</div>
      <div>Mal suportada pelas novas tecnologias</div>
      <div>Básica</div>
    </div>
    <div class="para">
      <!-- -->PARA<!-- -->
    </div>
    <div class="script3">
      <h1>Uma Nova Visão
        
        <small>Onde o <span class="red">cliente</span> está sempre no centro
          
          <div>
            Podendo utilizar todos os nossos canais: email, apps, Web, Phone, IVR (interative voice response) o atendimento automático, POS – point of sale, CC
          
          </div>
          <div>Onde nossas soluções devem ser inovadoras, Rentáveis, Multichannel, Processo Cross</div>
        </small>
      </h1>
    </div>
    <div class="customer_centric">
      <infographic></infographic>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from '../events/index'
  var Animations = require('../lib/ChainAnimation')
  var infographic = require('../assets/svgs/customer_centric.svg')
  export default {
    components: {
      infographic
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      //
      // animations
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 1500,
          step: 'show',
          selector: '.script1',
          reverse: true
        }, {
          time: 500,
          step: 'step1',
          selector: '.effects'
        }, {
          time: 400,
          step: 'step1',
          selector: '.image-background'
        }, {
          time: 400,
          step: 'step2',
          selector: '.effects'
        }, {
          time: 0,
          step: 'step1',
          selector: '.de'
        }, {
          time: 500,
          step: 'show',
          selector: '.script2'
        }, {
          time: 500,
          step: 'show',
          selector: '.abordages-tradicionais'
        }, {
          time: 3500,
          step: 'show',
          selector: '.script2',
          reverse: true
        }, {
          time: 500,
          step: 'show',
          selector: '.abordages-tradicionais',
          reverse: true
        }, {
          time: 1500,
          step: 'step2',
          selector: '.effects',
          reverse: true
        }, {
          time: 0,
          step: 'step1',
          selector: '.de',
          reverse: true
        }, {
          time: 400,
          step: 'step2',
          selector: '.image-background'
        }, {
          time: 1000,
          step: 'step3',
          selector: '.effects'
        }, {
          time: 0,
          step: 'step1',
          selector: '.para'
        }, {
          time: 500,
          step: 'show',
          selector: '.script3'
        }, {
          time: 500,
          step: 'show',
          selector: '.customer_centric'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(null)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    },
    /**
     | ----------------------------------------------
     * WHEN THE COMPONENT WAS DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    @extend %gradient;
  }
  
  .image-background {
    &.step1 {
      background: url("../assets/backgrounds/page15/01.jpg") no-repeat;
      background-size: cover;
    }
    &.step2 {
      background: transparent;
    }
  }
  
  .effects {
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff;
    &.step1 {
      width: 100%;
    }
    &.step2 {
      width: 50%;
      left: 50%;
    }
    &.step3 {
      width: 10%;
      background: darken($brand-details, 30%);
    }
  }
  
  .de,
  .para {
    width: 100px;
    height: 100px;
    background: $brand-secondary;
    color: #fff;
    text-align: center;
    line-height: 100px;
    @include font-size(2);
    border-radius: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  
  .de {
    left: -50%;
    &.step1 {
      left: 50%;
    }
  }
  
  .para {
    left: 125%;
    &.step1 {
      left: 10%;
    }
  }
  
  .script1 {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: #fff;
    @include font-size(2);
    &.show {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  .script2,
  .script3 {
    max-width: 400px;
    top: 50%;
    transform: translateY(-50%);
    @include font-size(2);
    color: #666;
    opacity: 0;
    small {
      display: block;
      border-top: 2px solid $brand-details;
      margin-top: 5px;
      padding-top: 5px;
      font-size: 50%;
      
      div {
        display: block;
        padding: 10px;
        @include font-size(1.2);
        text-transform: none;
        border-left: 2px dotted $brand-details;
        margin: 10px 0 0 10px;
      }
    }
    &.show {
      opacity: 1;
    }
  }
  
  .script2 {
    right: 10%;
  }
  
  .script3 {
    left: 15%;
    color: #fff;
    max-width: 250px;
    @include font-size(1.7);
  }
  
  .abordages-tradicionais {
    top: 50%;
    left: 75px;
    transform: translateY(-50%);
    max-width: 35%;
    > div {
      display: block;
      @include font-size(2);
      margin-bottom: 5px;
      color: #fff;
      font-weight: bold;
      transform: translateX(-50%);
      opacity: 0;
      transition: all $animationTime;
      &:before {
        content: '• ';
      }
      @for $i from 1 through 5 {
        &:nth-of-type(#{$i}) {
          transition-delay: #{(0.250 * $i)+'s'};
        }
      }
    }
    &.show {
      > div {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  
  .customer_centric {
    width: 50%;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }
</style>
