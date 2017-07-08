<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="wish">
      <h1>O que desejamos?</h1>
    </div>
    <div class="script1">
      <h1 v-on:click="newHtml($event,'1')" data-index="1">
        <div>Nova abordagem de relacionamento</div>
      </h1>
      <h1 v-on:click="newHtml($event,'2')" data-index="2">
        <div>ser surpreendido onde estiver,</div>
      </h1>
      <h1 v-on:click="newHtml($event,'3')" data-index="3">
        <div>previsão de seus comportamentos</div>
      </h1>
      <h1 v-on:click="newHtml($event,'4')" data-index="4">
        <div>fluxo contínuo, sem quebra na jornada de relacionamento</div>
      </h1>
      <h1 v-on:click="newHtml($event,'5')" data-index="5">
        <div>garantia de seu valor.</div>
      </h1>
    </div>
    <div class="script2">
      <div class="close" @click="closeItem"><i class="fa fa-times-circle"></i>fechar</div>
      <p></p>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */
  /* eslint-disable no-trailing-spaces */
  
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  export default {
    created () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.wish'
        }, {
          time: 1500,
          step: 'show',
          selector: '.script1 h1:first-of-type'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(2)'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(3)'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(4)'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1 h1:nth-child(5)'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
    },
    methods: {
      newHtml ($event, value) {
        var vm = this
        var parent = this.$el.querySelector('.script1');
        parent.querySelectorAll('h1').forEach(function (h1) {
          vm.removeClass(h1, 'active')
          vm.removeClass(h1, 'to-left')
          if (h1.getAttribute('data-index') !== value) {
            vm.addClass(h1, 'to-left')
          } else {
            vm.addClass(h1, 'active')
          }
        })
        this.addClass(this.$el.querySelector('.script2'), 'show')
        this.$el.querySelector('.script2 p').innerHTML = this.texts[value]
      },
      closeItem: function () {
        var vm = this
        this.removeClass(this.$el.querySelector('.script2'), 'show')
        setTimeout(function () {
          vm.$el.querySelectorAll('.script1 h1').forEach(function (h1) {
            vm.removeClass(h1, 'active')
            vm.removeClass(h1, 'to-left')
          })
        }, 500)
      }
    },
    data: function () {
      return {
        texts: {
          '1': 'Bancos que proporcionam o aluguel de bicicletas por meio eletrônico.',
          '2': 'Cafeterias que oferecem mais do que café, tornam-se escritórios e sala de estar.',
          '3': 'Facilitando a vida do consumidor',
          '4': 'Ser sempre bem atendido e compreendido',
          '5': 'Ir muito além do serviço tradicional, pensar novos modelos, formatos e surpreender. '
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    background: url('../assets/backgrounds/page9-1.jpg') no-repeat;
    background-size: cover;
    text-transform: uppercase;
  }
  
  .wish {
    top: 50%;
    left: 50%;
    @include font-size(3);
    color: #fff;
    transform: translate(-50%, -50%);
    visibility: hidden;
    h1 {
      padding: 20px 40px;
      border-top: 2px dotted $brand-details;
      border-bottom: 2px dotted $brand-details;
    }
    &.show {
      animation: slideInLeft 0.350s forwards;
    }
  }
  
  .script1 {
    width: 100%;
    height: 100%;
  }
  
  .script1 h1 {
    position: absolute;
    top: 0;
    width: 20%;
    height: 100%;
    transform: translateY(-110%);
    opacity: 0.9;
    transition: all $animationTime;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 20px;
    
    div {
      width: 100%;
      display: block;
      color: #fff;
      @include font-size(1.5);
      &:after {
        content: 'clique aqui';
        display: block;
        border: 1px solid $brand-primary;
        background: #fff;
        margin: 10px auto;
        color:#666;
        max-width: 50%;
        border-radius: 5px;
        padding: 5px;
      }
    }
    
    @for $i from 1 through 5 {
      &:nth-of-type(#{$i}) {
        $pct: ($i * 10) * 1%;
        background: darken($brand-details, $pct);
        left: (($i - 1) * 20) * 1%;
      }
    }
    
    &:hover {
      background: $brand-details;
      opacity: 1;
    }
    &.show {
      transform: translateY(0);
    }
    
    &.active,
    &.to-left {
      left: 0;
      div:after{
        display: none !important;
      }
    }
    &.active {
      z-index: 4;
      background: $brand-details;
      opacity: 1;
    }
    &.to-left {
      z-index: 2;
    }
  }
  
  .script2 {
    width: 80%;
    height: 100%;
    z-index: 4;
    right: 0;
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
    padding: 20px;
    background: $brand-primary;
    transform: translateX(100%);
    div{
      display: flex;
      align-items: center;
      margin-top: 100px;
      cursor: pointer;
    }
    i {
      @include font-size(4);
      color: #fff;
      margin-right: 10px;
    }
    p{
      padding: 50px;
      @include font-size(3);
    }
    &.show {
      transform: translateX(0%);
    }
  }
  
  @keyframes slideInLeft {
    from {
      transform: translate3d(-100%, -50%, 0);
      visibility: visible;
    }
    
    to {
      transform: translate3d(-50%, -50%, 0);
      visibility: visible;
    }
  }
</style>
