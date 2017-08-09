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
        <div>previsão de nossos comportamentos e fluxo contínuo, sem quebra na jornada de relacionamento</div>
      </h1>
    </div>
    <div class="script2" v-if="!showEnd">
      <div class="image"></div>
      <div class="content">
        <div class="close" @click="closeItem" v-if="canClose"><i class="material-icons">&#xE5CD;</i></div>
        <p></p>
      </div>
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
  
  export default {
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
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
          selector: '.wish'
        }
      ]
      var els = this.$el.querySelectorAll('.script1 > h1')
      var vm = this
      Animations.setAnimations(animations)
      Animations.animationTimeline(null)
      this.playAudio('scene6', 'static/subtitles/page6.json', function (pos) {
        if (els) {
          if (pos === 2) {
            vm.addClass(els[0], 'show')
          }
          if (pos === 4) {
            vm.addClass(els[1], 'show')
          }
          if (pos === 7) {
            vm.addClass(els[2], 'show')
          }
        }
      }, function () {
        this.canClick = true
      }.bind(this))
    },
    /**
     | ----------------------------------------------
     * RETURN THE COMPONENT METHODS
     | ----------------------------------------------
     **/
    methods: {
      newHtml ($event, value) {
        if (!this.canClick) {
          return
        }
        this.canClose = false
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
        
        var sprite = 'scene6Item' + value
        var subtitle = 'static/subtitles/page6_' + value + '.json'
        this.playAudio(sprite, subtitle, null, function () {
          this.canClose = true
        }.bind(this))
        
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
                vm.playAudio('scene6_2', 'static/subtitles/page6_4.json', null, function () {
                  vm.$store.commit('setCanAdvance', true)
                })
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
          '1': 'Bancos que proporcionam o aluguel de bicicletas por meio eletrônico',
          '2': 'Hoje temos cafeterias que oferecem mais do que café, tornam-se escritórios e sala de estar',
          '3': 'Além do serviço tradicional, pensar novos modelos, formatos e surpreender'
        },
        viewed: [],
        showEnd: false,
        canClose: false,
        canClick: false
      }
    },
    
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
      this.$store.state.audio.stop()
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
    justify-content: center;
    text-align: center;
    cursor: pointer;
    padding: 20px;
    
    div {
      width: 80%;
      display: block;
      color: #fff;
      @include font-size(2.5);
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
        @include font-size(1.3);
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
      div:after {
        display: none !important;
      }
    }
    &.active {
      z-index: 4;
      background: $brand-details;
      opacity: 1;
      div {
        font-size: 130%;
      }
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
    padding: 20px 50px;
    background: $brand-primary;
    transform: translateX(100%);
    div.content {
      margin: 20% 0 0 5px;
      position: relative;
      z-index: 2;
      background: $brand-details;
      padding: 5px 20px;
      font-weight: bold;
    }
    div.close {
      position: absolute;
      top: -15px;
      right: -15px;
      width: 30px;
      height: 30px;
      display: block;
      cursor: pointer;
      animation: closeButton 2s infinite ease-in-out alternate;
      text-align: center;
      background: $brand-details;
      border: 1px solid #fff;
      border-radius: 50%;
      i {
        @include font-size(2);
        color: #fff;
        line-height: 30px;
      }
    }
    p {
      @include font-size(3);
      text-transform: none;
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
      background: darken($brand-secondary, 20%);
    }
  }
</style>
