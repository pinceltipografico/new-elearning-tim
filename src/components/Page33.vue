<template>
  <div class="outer-page diretrizes">
    <!-- SCENE MENU -->
    <section class="page gradient page-menu" v-if="!pageACtive">
      <h1 id="cliqueTag" style="display: none;" :class="{'active':started}">
        Clique em cada uma das diretrizes para visualizar</h1>
      <div class="menu">
        <div class="tim-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="items">
          <a @click="gotoPage('page34')">
            <div class="item1" :class="{'active':started,'destaque':actualPage === 'page34'}">
              <span>COMUNICAÇÃO</span>
              <i class="material-icons">&#xE0BF;</i>
            </div>
          </a>
          <a @click="gotoPage('page35')">
            <div class="item2" :class="{'active':started, 'destaque':actualPage === 'page35'}">
              <span>INTERAÇÃO</span>
              <i class="material-icons">&#xE5D2;</i>
            </div>
          </a>
          <a @click="gotoPage('page36')">
            <div class="item3" :class="{'active':started, 'destaque':actualPage === 'page36'}">
              <span>MONITORAMENTO</span>
              <i class="material-icons">&#xE8B6;</i>
            </div>
          </a>
        </div>
        <div class="shadow"></div>
      </div>
    </section>
    <!-- SCENE MENU -->
    <!-- comunicação -->
    <comunicacao v-if="scene == 'page34' && pageACtive" @back="onBack" :lastPages="this.pages"></comunicacao>
    <!-- comunicação -->
    <!-- interação -->
    <interacao v-if="scene == 'page35' && pageACtive" @back="onBack" :lastPages="this.pages"></interacao>
    <!-- interação -->
    <!-- monitoramento -->
    <monitoramento v-if="scene == 'page36' && pageACtive" @back="onBack" :lastPages="this.pages"></monitoramento>
    <!-- monitoramento -->
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from '../events/index'
  import anime from 'animejs'
  import Comunicacao from './Page34.vue'
  import Interacao from './Page35.vue'
  import Monitoramento from './Page36.vue'
  
  var Animations = require('../lib/ChainAnimation')
  export default {
    /**
     | ----------------------------------------------
     * RETURN DATA
     | ----------------------------------------------
     **/
    data () {
      return {
        scene: 'start',
        started: false,
        TimeLineCtrl: null,
        canClick: false,
        pageACtive: false,
        actualPage: '',
        pages: []
      }
    },
    components: {
      Comunicacao,
      Interacao,
      Monitoramento
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENTS IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setCanAdvance', false)
      EventBus.$on('pause', function (paused) {
        if (this.TimelineCtrl) {
          (paused ? this.TimelineCtrl.pause : this.TimelineCtrl.play)()
        }
      }.bind(this))
      EventBus.$on('rewind', function () {
        if (this.TimelineCtrl) {
          this.TimelineCtrl.restart()
        }
      }.bind(this))
      
      var hasViewd = this.$cookie.get('has_viewed')
      if (hasViewd) {
        this.actualPage = 'page34'
      }
      
      var _suspendData = this.getSuspendData()
      if (!_suspendData) {
        this.actualPage = 'page34'
        this.pages.push('page34')
        console.log(this.pages)
        this.startSCene()
        return
      }
      
      var _scene = _suspendData.split('|')[1]
      if (_scene) {
        var lastPage = _scene.split(':')[1]
        if (lastPage) {
          this.stopAudio()
          this.pageACtive = true
          this.scene = lastPage
          this.started = true
        }
      } else {
        var _lastMenu = _suspendData.split(':')[1]
        if (_lastMenu) {
          _lastMenu = _lastMenu.split(',')
          this.actualPage = _lastMenu[_lastMenu.length - 1]
          this.pages = _lastMenu
          this.startSCene()
        } else {
          this.actualPage = 'page34'
          this.pages.push('page34')
          this.setSuspendData('menu:' + this.pages.toString())
          this.startSCene()
        }
      }
    },
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      this.stopAudio()
      EventBus.$off('pause')
      EventBus.$off('rewind')
    },
    /**
     | ----------------------------------------------
     * METHODOS
     | ----------------------------------------------
     **/
    methods: {
      startSCene () {
        var vm = this
        var hasViewd = vm.$cookie.get('has_viewed')
        if (hasViewd) {
          vm.started = true
          return
        }
        vm.TimelineCtrl = anime.timeline()
        vm.TimelineCtrl
          .add({
            targets: '.item1',
            translateX: ['100%', '0%'],
            duration: 300,
            easing: 'linear',
            delay: 21000
          })
          .add({
            targets: '.item2',
            translateX: ['100%', '0%'],
            duration: 300,
            easing: 'linear',
            delay: 500
          })
          .add({
            targets: '.item3',
            translateX: ['100%', '0%'],
            duration: 300,
            easing: 'linear',
            delay: 500
          })
        vm.playAudio('scene18', 'static/subtitles/page18.json', function (pos) {
          if (pos === 36) {
            var tag = vm.$el.querySelector('#cliqueTag')
            tag.style.display = 'block'
          }
        }, function () {
          vm.canClick = true
          vm.actualPage = 'page34'
          vm.pages.push('page34')
          vm.setSuspendData('menu:' + vm.pages.toString())
          vm.$cookie.set('has_viewed', true)
        })
      },
      gotoPage (page) {
        if (this.pages.indexOf(page) === -1) {
          return
        }
        this.stopAudio()
        this.pageACtive = true
        this.scene = page
        this.started = true
      },
      addPageIndex (page) {
        if (this.pages.indexOf(page === -1)) {
          this.pages.push(page)
        }
      },
      onBack (page) {
        this.pageACtive = false
        this.scene = 'start'
        if (page === 'page34') {
          this.actualPage = 'page35'
          this.addPageIndex('page35')
        } else if (page === 'page35') {
          this.actualPage = 'page36'
          this.addPageIndex('page36')
        } else if (page === 'page36') {
          this.actualPage = 'page36'
          this.addPageIndex('end')
        }
        if (this.pages.length === 4) {
          this.$store.commit('setCanAdvance', true)
        }
        console.log(this.pages)
        this.setSuspendData('menu:' + this.pages.toString())
        this.startSCene()
      }
    }
  }
</script>
<style lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  div.outer-page.diretrizes {
    section.page-menu {
      h1 {
        top: 15%;
        left: 50%;
        color: #fff;
        max-width: 300px;
        transform: translateX(-50%);
        @include font-size(1.8);
        text-align: center;
        border-bottom: 1px solid $brand-details;
      }
      &.absolute {
        position: absolute;
      }
    }
    
    .menu {
      width: 100%;
      top: 55%;
      left: 50px;
      transform: translateY(-50%);
      transition: all $animationTime;
      * {
        transition: all $animationTime;
      }
      .shadow {
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
      }
      .tim-icon {
        width: 400px;
        transition: opacity $animationTime;
        div {
          position: relative;
          height: 70px;
          margin-bottom: 60px;
          width: 100%;
          
          &:nth-of-type(1) {
            background: $brand-secondary;
            border-radius: 7px;
          }
          &:nth-of-type(2),
          &:nth-of-type(3) {
            &:before,
            &:after {
              position: absolute;
              content: '';
              display: block;
              width: 40%;
              height: 70px;
              background: $brand-secondary;
            }
            &:after {
              right: 0;
              border-bottom-right-radius: 7px;
              border-top-right-radius: 7px;
            }
            &:before {
              border-top-left-radius: 7px;
              border-bottom-left-radius: 7px;
            }
          }
          
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      .items {
        position: absolute;
        width: 100%;
        top: 0;
        left: 440px;
        div {
          display: flex;
          width: 100%;
          height: 70px;
          background: $brand-secondary;
          margin-bottom: 60px;
          align-items: center;
          padding: 10px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: all $animationTime;
          transform: translateX(100%);
          
          &.active {
            transform: translateX(0%);
          }
          
          &.destaque {
            animation: animationItem 0.350s infinite ease-in-out alternate;
          }
          
          span {
            @include font-size(2.5);
          }
          i {
            @include font-size(4);
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid #fff;
          }
          &:hover {
            background: darken($brand-secondary, 30%);
          }
        }
      }
      
      &.step1 {
        .tim-icon {
          opacity: 0;
        }
        .shadow {
          display: none;
        }
      }
      
      //
      // comunicaao animation
      &.comunicacao {
        .items div.item2,
        .items div.item3 {
          transform: translateX(100%);
        }
      }
      &.comunicacao.step2 {
        left: 0;
        .items {
          left: 0;
        }
        .items div.item2,
        .items div.item3 {
          visibility: hidden;
        }
      }
      &.comunicacao.step2.step3 {
        top: 40%;
      }
      &.comunicacao.step2.step3.step4 {
        .item1 {
          width: 300px;
        }
      }
      
      //
      // interação
      &.interacao {
        .items div.item1,
        .items div.item3 {
          transform: translateX(100%);
        }
      }
      &.interacao.step2 {
        left: 0;
        .items {
          left: 0;
        }
        .items div.item1,
        .items div.item3 {
          visibility: hidden;
        }
      }
      &.interacao.step2.step3 {
        top: 20%;
      }
      &.interacao.step2.step3.step4 {
        .item2 {
          width: 300px;
        }
      }
      
      &.monitoramento {
        .items div.item1,
        .items div.item2 {
          transform: translateX(100%);
        }
      }
      &.monitoramento.step2 {
        left: 0;
        .items {
          left: 0;
        }
        div.item1,
        div.item2 {
          visibility: hidden;
        }
      }
      &.monitoramento.step2.step3 {
        top: 0%;
      }
      &.monitoramento.step2.step3.step4 {
        .items {
          width: 300px;
          a {
            span, i {
              @include font-size(2.3);
            }
          }
        }
      }
    }
    
    section.comunicacao {
      .title {
        background: $brand-secondary;
        color: #fff;
        top: 18%;
        @include font-size(3);
        padding: 5px 15px;
        text-transform: uppercase;
        i {
          margin-right: 10px;
        }
      }
      h1 {
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        @include font-size(3);
        text-align: center;
        span {
          color: $brand-details;
        }
        small {
          font-size: 50%;
          border-top: 1px solid $brand-details;
          padding-top: 5px;
        }
        @include responsive('laptopS') {
          max-width: 350px;
          top: 90px;
          @include font-size(2);
        }
      }
      .backButton {
        display: flex;
        left: 50%;
        bottom: 10%;
        align-items: center;
        background: $brand-secondary;
        padding: 0 20px;
        border-radius: 7px;
        color: #fff;
        animation: backButton 1s infinite ease-in-out alternate;
        @include font-size(1.8);
        font-weight: bold;
        transform: translateX(-50%);
        text-transform: uppercase;
      }
      .icones {
        width: 80%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -30%);
        display: flex;
        align-items: center;
        
        @include responsive('laptopS') {
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .icone {
          position: relative;
          width: 20%;
          cursor: pointer;
          text-align: center;
          padding: 0 10px;
          
          svg {
            circle {
              box-shadow: 10px 10px 10px rgba(#fff, 0.5);
            }
          }
          span {
            position: absolute;
            display: inline-block;
            background: $brand-details;
            color: #fff;
            padding: 7px;
            text-align: center;
            border-radius: 7px;
            top: 100%;
            left: 50%;
            font-weight: bold;
            transform: translateX(-50%);
            max-width: 90%;
            @include font-size(1.3);
          }
          
          @include responsive('laptopS') {
            width: 18%;
            margin-bottom: 10px;
            span {
              position: relative;
              top: auto;
              left: auto;
              transform: translate(0, 0);
              @include font-size(1);
            }
          }
        }
        
        @for $i from 1 through 10 {
          &.active-#{$i} {
            .icone-#{$i} {
              svg {
                circle {
                  animation: fillAnimation 0.350s infinite ease-in-out alternate;
                }
              }
            }
          }
        }
      }
    }
    
    @keyframes backButton {
      to {
        background: #fff;
        color: $brand-secondary;
      }
    }
    @keyframes fillAnimation {
      to {
        fill: $brand-secondary;
      }
    }
    @keyframes animationItem {
      to {
        background: lighten($brand-secondary, 15%);
      }
    }
  }
</style>
