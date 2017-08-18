<template>
  <section class="page menu-page">
    <div class="menu">
      <div class="item-container">
        <div class="item" @click="onItemClick(0)">
          <i class="material-icons">&#xE88E;</i>
        </div>
        <!--<div class="item" @click="onItemClick(1)">-->
        <!--dna -->
        <!--</div>-->
        <div class="item" @click="onItemClick(1)">
          <!-- infinite -->
        </div>
        <div class="item" @click="onItemClick(2)">
          <i class="material-icons">&#xE871;</i>
        </div>
        <!--<div class="item" @click="onItemClick(4)">-->
        <!--<i class="material-icons">&#xE8DC;</i>-->
        <!--</div>-->
      </div>
    </div>
    <div class="hand-pointing" :class="'item-'+item" v-if="showHand">
      <img src="../assets/sprites/hand-pointing.png" alt="pointing">
    </div>
    <div class="script1">
      <h1>Vamos para o nosso <span>{{moduleTitle}} módulo</span></span></h1>
    </div>
    <transition name="enter">
      <div class="popup" v-if="showPopup">
        <div class="inner">
          <div class="close" @click="closePopup"><i class="material-icons">&#xE5CD;</i></div>
          <h1>{{text}}</h1>
          <div class="buttons" v-if="allowToSee" @click="gotoModule(text)">
            <!-- -->Ver Módulo<!-- -->
          </div>
          <div v-if="!allowToSee">
            <span>Você ainda não pode visualizar este conteúdo. Faça o módulo anterior e tente novamente!</span>
            <div class="buttons" @click="closePopup">Voltar</div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  export default {
    //
    // APP NAME
    name: 'Menu',
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      this.moduleTitle = this.$route.meta.module
      var itens = this.$el.querySelectorAll('.item-container > div')
      var vm = this
      
      for (var i = 0; i < itens.length; i++) {
        vm.removeClass(itens[i], 'active')
        vm.addClass(itens[i], 'inactive')
      }
      if (vm.moduleTitle === 'primeiro') {
        this.item = 1
        this.playAudio('menuintro', 'static/subtitles/menu_1.json', function (pos) {
          if (pos >= 10 && pos < 14) {
            vm.addClass(itens[0], 'active')
          } else if (pos >= 14 && pos < 16) {
            vm.removeClass(itens[0], 'active')
            vm.addClass(itens[1], 'active')
          } else if (pos >= 16) {
            vm.removeClass(itens[1], 'active')
            vm.addClass(itens[2], 'active')
          }
        }, function () {
          vm.playAudio('menuItem1', 'static/subtitles/menu_2.json', function () {}, function () {
            vm.removeClass(itens[0], 'inactive')
            vm.addClass(itens[0], 'active')
            vm.showHand = true
          })
        })
      } else if (vm.moduleTitle === 'segundo') {
        this.item = 2
        vm.playAudio('menuItem2', 'static/subtitles/menu_3.json', function () {}, function () {
          vm.removeClass(itens[1], 'inactive')
          vm.addClass(itens[1], 'active')
          vm.showHand = true
        })
      } else if (vm.moduleTitle === 'terceiro') {
        this.item = 3
        vm.playAudio('menuItem3', 'static/subtitles/menu_4.json', function () {}, function () {
          vm.removeClass(itens[2], 'inactive')
          vm.addClass(itens[2], 'active')
          vm.showHand = true
        })
      }
    },
    /**
     | ----------------------------------------------
     * RETURN DATA OF THE COMPONENT
     | ----------------------------------------------
     **/
    data () {
      return {
        text: '',
        texts: [
          'O Porquê das mudanças e conceito de CX',
          'Ciclo do Cliente',
          'Diretrizes de Customer Experience'
        ],
        showPopup: false,
        allowToSee: false,
        moduleTitle: '',
        showHand: false,
        item: 1
      }
    },
    /**
     | ----------------------------------------------
     * RETURN THE METHODS OF COMPONENT
     | ----------------------------------------------
     **/
    methods: {
      onItemClick: function (index) {
        this.allowToSee = true // this.$store.state.modulesAllowed.indexOf(index) !== -1
        this.text = this.texts[index]
        this.showPopup = true
      },
      closePopup: function () {
        this.showPopup = false
      },
      gotoModule (t) {
        if (t === this.texts[0]) {
          this.$router.replace('page3')
        }
        if (t === this.texts[1]) {
          this.$router.replace('/page15')
        }
        if (t === this.texts[2]) {
          this.$router.replace('/page17')
        }
      }
    },
    
    destroyed () {
      this.stopAudio()
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  @import "../scss/variables";
  
  section.page {
    @extend %gradient;
  }
  
  .menu {
    width: 845px;
    height: 800px;
    background: url("../assets/backgrounds/menu/01.png") no-repeat;
    right: 0;
    bottom: 0;
    animation: slideImage 10s infinite ease-in-out;
    .item-container {
      position: absolute;
      background: #fff;
      top: 315px;
      bottom: 170px;
      left: 245px;
      right: 145px;
      
      div.item {
        position: absolute;
        display: table-cell;
        width: span(3.8 of 12);
        height: 46%;
        background: $brand-details;
        cursor: pointer;
        text-align: center;
        color: #fff;
        vertical-align: middle;
        transition: background $animationTime;
        
        i {
          display: inline-block;
          @include font-size(7);
          line-height: 300px;
        }
        
        &:nth-of-type(1),
        &:nth-of-type(3) {
          &.active {
            animation: activeItem 0.300s infinite ease-in-out alternate;
          }
        }
        
        &:nth-of-type(1) {
          left: 10px;
        }
        &:nth-of-type(3) {
          right: 10px;
        }
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3) {
          top: 10px;
          height: 94%;
        }
        &:nth-of-type(2) {
          left: 50%;
          transform: translatex(-50%);
          line-height: 340px;
          background: darken($brand-details, 40%) url("../assets/sprites/infinite.png") no-repeat center;
          background-size: 85% auto;
          &.active {
            animation: activeItem2 0.300s infinite ease-in-out alternate;
          }
        }
        
        &:hover {
          background: $brand-primary;
          &:nth-of-type(2) {
            background: $brand-primary url("../assets/sprites/infinite.png") no-repeat center;
            background-size: 85% auto;
          }
        }
        &.inactive {
          opacity: 0.3;
          background: #666;
          &:nth-of-type(2) {
            background: #666 url("../assets/sprites/infinite.png") no-repeat center;
            background-size: 85% auto;
          }
        }
      }
    }
  }
  
  .script1 {
    top: 40%;
    left: 100px;
    transform: translateY(-50%);
    max-width: 300px;
    @include font-size(1.8);
    color: #fff;
    animation: slideText 10s ease-in-out alternate infinite;
  }
  
  .popup {
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.4);
    .inner {
      position: absolute;
      text-align: center;
      padding: 20px;
      width: 450px;
      height: auto;
      background: darken($brand-details, 10%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        color: #fff;
        @include font-size(2.3);
      }
      > div {
        @include font-size(1.5);
      }
      .close {
        position: absolute;
        color: $brand-details;
        right: -13px;
        top: -13px;
        background: #fff;
        @include font-size(3);
        border-radius: 50%;
        width: 30px;
        height: 30px;
      }
    }
  }
  
  .hand-pointing {
    position: absolute;
    z-index: 3;
    animation: handSlide 1s infinite ease-in-out alternate;
    transform: translate(0, -50%);
    top: 50%;
    
    &.item-1 {
      left: 42%;
    }
    &.item-2 {
      left: 55%;
    }
    &.item-3 {
      left: 67%;
    }
  }
  
  @keyframes slideImage {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(2%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  
  @keyframes slideText {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(10%);
    }
  }
  
  @keyframes handSlide {
    to {
      transform: translate(10%, -50%);
    }
  }
  
  @keyframes activeItem {
    to {
      background: $brand-secondary;
    }
  }
  
  @keyframes activeItem2 {
    to {
      background: $brand-secondary url("../assets/sprites/infinite.png") no-repeat center;
      background-size: 85% auto;
    }
  }
</style>
