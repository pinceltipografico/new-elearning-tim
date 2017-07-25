<template>
  <section class="page">
    <div class="overlay" :class="{'step2':showEnd}"></div>
    <div class="wish">
      <h1 v-if="!showEnd">O que desejamos?</h1>
    </div>
    <div class="script1" v-if="!showEnd">
      <h1 v-on:click="newHtml($event,'1')" data-index="1">
        <div>Nova abordagem de relacionamento</div>
      </h1>
      <h1 v-on:click="newHtml($event,'2')" data-index="2">
        <div>Sermos surpreendidos onde estivermos</div>
      </h1>
      <h1 v-on:click="newHtml($event,'3')" data-index="3">
        <div>previsão de seus comportamentos</div>
      </h1>
    </div>
    <div class="script2" v-if="!showEnd">
      <div class="image"></div>
      <div class="close" @click="closeItem"><i class="fa fa-times-circle"></i>fechar</div>
      <p></p>
    </div>
    <div class="script3 end-tag" :class="{'show':showEnd}">
      <h1>Estes são apenas alguns exemplos que já incorporamos na <span>nossa maneira de pensar a compra</span></h1>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */
  /* eslint-disable no-trailing-spaces */
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  export default {
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 10000)
      this.$store.commit('setCanAdvance', false)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.wish'
        }, {
          time: 3500,
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
     * RETURN THE COMPONENT METHODS
     | ----------------------------------------------
     **/
    methods: {
      newHtml ($event, value) {
        var vm = this
        var parent = this.$el.querySelector('.script1')
        var h1s = parent.querySelectorAll('h1')
        for (var i = 0; i < h1s.length; i++) {
          var h1 = h1s[i]
          vm.removeClass(h1, 'active')
          vm.removeClass(h1, 'to-left')
          if (h1.getAttribute('data-index') !== value) {
            vm.addClass(h1, 'to-left')
          } else {
            vm.addClass(h1, 'active')
          }
        }
        
        this.addClass(this.$el.querySelector('.script2'), 'show')
        this.$el.querySelector('.script2 p').innerHTML = this.texts[value]
        this.addClass(this.$el.querySelector('.script2 div.image'), 'style' + value)
        
        if (this.viewed.indexOf(value) === -1) {
          this.viewed.push(value)
        }
      },
      closeItem: function () {
        var vm = this
        this.removeClass(this.$el.querySelector('.script2'), 'show')
        setTimeout(function () {
          var h1s = vm.$el.querySelectorAll('.script1 h1')
          for (var i = 0; i < h1s.length; i++) {
            var h1 = h1s[i]
            vm.removeClass(h1, 'active')
            vm.removeClass(h1, 'to-left')
            setTimeout(function () {
              if (vm.viewed.length === 3) {
                vm.showEnd = true
                setTimeout(function () {
                  vm.$store.commit('setCanAdvance', true)
                }, 3000)
              }
            }, 1000)
          }
        }, 500)
      }
    },
    /**
     | ----------------------------------------------
     * RETURN COMPONENT DATA
     | ----------------------------------------------
     **/
    data: function () {
      return {
        texts: {
          '1': 'Bancos que proporcionam o aluguel de bicicletas por meio eletrônico.',
          '2': 'Hoje temos cafeterias que oferecem mais do que café, tornam-se escritórios e sala de estar.',
          '3': 'Serviços de comércio eletrônico, por exemplo, que extrapolam a simples entrega, em que desde a navegação de pesquisa além do serviço tradicional, pensar novos modelos, formatos e surpreender'
        },
        viewed: [],
        showEnd: false
      }
    },
    
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    background: url('../assets/backgrounds/page9/01.jpg') no-repeat;
    background-size: cover;
  }
  
  .overlay.step2 {
    animation: overlay 1.5s forwards;
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
    width: calc(100% / 3);
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
        color: #666;
        max-width: 50%;
        border-radius: 5px;
        padding: 5px;
      }
    }
    
    @for $i from 0 through 2 {
      &:nth-of-type(#{($i + 1)}) {
        $pct: ($i * 10) * 1%;
        background: darken($brand-details, $pct);
        $left: percentage(1/3);
        left: $left * $i;
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
      width: 20%;
      @include font-size(1);
      div:after {
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
    font-size: 20px;
    padding: 20px;
    background: $brand-primary;
    transform: translateX(100%);
    div.close,
    p {
      position: relative;
      z-index: 2;
      background: $brand-details;
      padding: 5px 20px;
      font-weight: bold;
    }
    div.close {
      display: flex;
      align-items: center;
      margin-top: 100px;
      cursor: pointer;
      animation: closeButton 2s infinite ease-in-out alternate;
      i {
        @include font-size(4);
        color: #fff;
        margin-right: 10px;
      }
    }
    p {
      margin: 5px 0;
      padding: 50px;
      @include font-size(3);
    }
    div.image {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 0.6;
      &.style1 {
        background: url("../assets/backgrounds/page9/04.jpg") no-repeat;
        background-size: cover;
      }
      &.style2 {
        background: url("../assets/backgrounds/page9/03.jpg") no-repeat;
        background-size: cover;
      }
      &.style3 {
        background: url("../assets/backgrounds/page9/02.jpg") no-repeat;
        background-size: cover;
      }
    }
    &.show {
      transform: translateX(0%);
    }
  }
  
  .script3 {
    transition-delay: 1s;
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
  
  @keyframes overlay {
    0% {
      z-index: 4;
      background: #fff;
      opacity: 0;
    }
    50% {
      z-index: 4;
      background: #fff;
      opacity: 1;
    }
    100% {
      z-index: 4;
      background: #fff;
      opacity: 0;
    }
  }
  
  @keyframes closeButton {
    to {
      background: $brand-secondary;
    }
  }
</style>
