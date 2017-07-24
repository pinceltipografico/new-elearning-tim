<template>
  <main id="app">
    <div class="logo">
      <span style="width: 80px;"><logo></logo></span>
      <div class="title">
        <h2 style="padding-top: 7px;">Somos a geração <span>CX</span>
          <small id="pageTitle" style="display: none;"></small>
        </h2>
      </div>
    </div>
    <transition name="fade">
      <nav class="user-interface" v-if="showInterfaceItems">
        <ul>
          <li>
            <i class="material-icons">&#xE04D;</i>
          </li>
          <li>
            <i class="material-icons">&#xE5CD;</i>
          </li>
        </ul>
      </nav>
    </transition>
    <transition name="fade">
      <div class="progress-audio" v-if="showInterfaceItems">
        <div :style="'width:'+pageProgress+'%'"></div>
      </div>
    </transition>
    <transition name="enter-nav">
      <a class="nav-button next-page" v-if="showInterfaceItems && canAdvance || isExplainScreen" @click="nextPage"
         :class="{'can-advance':canAdvance}">
        <i class="material-icons">&#xE5CC;</i>
      </a>
    </transition>
    <transition name="enter-nav">
      <a class="nav-button prev-page" v-if="showInterfaceItems && canAdvance || isExplainScreen" @click="prevPage">
        <i class="material-icons">&#xE5CB;</i>
      </a>
    </transition>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </main>
</template>
<script>
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from './events/index'
  const Logo = require('./assets/svgs/logo-01.svg')
  export default {
    components: {
      Logo
    },
    /**
     | ----------------------------------------------
     * RETURN DATA OF COMPOENTN
     | ----------------------------------------------
     **/
    data () {
      return {
        counter: null,
        pageIndex: 0,
        pages: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 4, 20, 30, 31, 4, 33, 38, 39, 40, 41]
      }
    },
    //
    // name of the component
    name: 'app',
    /**
     | ----------------------------------------------
     * WHEN THE COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', false)
      if (this.$cookie.get('explain_viewed') && '|Hello|explain|'.indexOf('|' + this.$route.name) && this.$route.name !== null) {
        this.$store.commit('toggleIterface', true)
      }
      
      // start the progress bar
      EventBus.$on('start-progress', this.startProgress.bind(this))
      
      //
      // GET THE LAST PAGE
      /* eslint-disable no-unused-vars */
      if (this.$route.name === null) {
        this.$router.replace('Hello')
      } else if (this.$route.name !== 'Hello') {
        var lastPage = Number(this.$route.path.split('page')[1]) || 0
        var hasPage = this.pages.indexOf(lastPage)
        this.pageIndex = (hasPage !== -1) ? hasPage : 1
        this.$router.replace('page' + this.pages[this.pageIndex])
        this.$store.commit('toggleIterface', true)
      }
    },
    /**
     | ----------------------------------------------
     * RETURN THE METHODS OF COMPONENT
     | ----------------------------------------------
     **/
    methods: {
      /**
       | ----------------------------------------------
       * START TH PROGRESS COUNTER OF PAGE
       * need to change when audio was delivered
       | ----------------------------------------------
       **/
      startProgress: function () {
        this.$store.commit('setCanAdvance', false)
        var total = this.totalProgress
        var pct = 100 / total
        var vm = this
        var lastTime = 0
        this.couter = setInterval(function () {
          var _pct = pct * lastTime
          if (_pct <= 100) {
            lastTime += 100
            vm.$store.commit('setPageProgress', _pct)
          } else {
            clearInterval(vm.couter)
          }
        }, 100)
      },
      /**
       | ----------------------------------------------
       * GO TO NEXT PAGE OF ELEARNING
       * need to lock when apply scorm
       | ----------------------------------------------
       **/
      nextPage: function () {
        if (this.$route.name === 'explain') {
          return
        }
        if (this.pageIndex < this.pages.length - 1) {
          this.pageIndex++
          var page = this.pages[this.pageIndex]
          this.$router.replace('page' + page)
        }
      },
      /**
       | ----------------------------------------------
       * GO TO PREVIOUS PAGE OF ELEARNING
       | ----------------------------------------------
       **/
      prevPage: function () {
        if (this.$route.name === 'explain') {
          return
        }
        if (this.pageIndex > 0) {
          this.pageIndex--
          var page = this.pages[this.pageIndex]
          this.$router.replace('page' + page)
        }
      }
    },
    
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      if (this.counter) {
        clearInterval(this.couter)
      }
      EventBus.$off('start-progress', this.startProgress.bind(this))
    },
    
    /**
     | ----------------------------------------------
     | ----------------------------------------------
     **/
    computed: {
      showInterfaceItems: function () {
        return this.$store.state.showUserInterface
      },
      pageProgress: function () {
        return this.$store.state.pageProgress
      },
      totalProgress: function () {
        return this.$store.state.totalProgress
      },
      canAdvance () {
        return this.$store.state.canAdvance
      },
      isExplainScreen () {
        return this.$route.name === 'explain'
      }
    }
  }
</script>
<style lang="scss">
  $fa-font-path: '../node_modules/font-awesome/fonts';
  @import "scss/reset";
  @import "scss/variables";
  @import "scss/mixins";
  @import "scss/commons";
  @import "../node_modules/font-awesome/scss/font-awesome";
  
  body:after {
    display: none;
    content: url('assets/backgrounds/home/home.jpg') url("assets/backgrounds/page1/01.jpg") url("assets/backgrounds/page1/02.jpg") url("assets/backgrounds/page1/03.png") url("assets/backgrounds/page1/04.jpg") url("assets/backgrounds/page1/05.png") url("assets/backgrounds/page1/06.jpg") url("assets/backgrounds/page1/07.png") url("assets/backgrounds/page1/08.png") url("assets/backgrounds/page2/01.jpg") url("assets/backgrounds/page2/02.jpg") url("assets/backgrounds/page2/03.png") url("assets/backgrounds/page2/04.jpg") url("assets/backgrounds/page2/06.jpg") url("assets/backgrounds/page31/01.jpg") url("assets/backgrounds/page33/01.jpg") url("assets/backgrounds/page31/02.png") url("assets/backgrounds/page4/01.png") url("assets/backgrounds/page5/01.jpg") url("assets/backgrounds/page5/02.jpg") url("assets/backgrounds/page5/03.jpg") url("assets/backgrounds/page5/04.png") url("assets/backgrounds/page5/05.jpg") url("assets/backgrounds/page5/06.jpg") url("assets/backgrounds/page5/07.jpg") url("assets/backgrounds/page7/01.jpg") url("assets/backgrounds/page8/01.jpg") url("assets/backgrounds/page8/02.jpg") url("assets/backgrounds/page9/01.jpg") url("assets/backgrounds/page9/02.jpg") url("assets/backgrounds/page9/03.jpg") url("assets/backgrounds/page9/04.jpg") url("assets/backgrounds/page11/01.png") url("assets/backgrounds/page12/01.png") url("assets/backgrounds/page12/02.jpg") url("assets/backgrounds/page12/03.png") url("assets/backgrounds/page12/04.png") url("assets/backgrounds/page13/01.jpg") url("assets/backgrounds/page15/01.jpg") url("assets/backgrounds/page15/02.jpg") url("assets/backgrounds/page16/01.png") url("assets/backgrounds/page17/01.jpg") url("assets/backgrounds/page17/02.jpg") url("assets/backgrounds/page18/01.jpg") url("assets/backgrounds/page18/02.jpg") url("assets/backgrounds/page18/03.jpg") url("assets/backgrounds/page19/01.png") url("assets/backgrounds/page20/01.jpg") url("assets/backgrounds/page20/02.jpg") url("assets/backgrounds/page20/03.jpg") url("assets/backgrounds/page20/04.jpg") url("assets/backgrounds/page20/05.jpg") url("assets/backgrounds/page20/06.jpg") url("assets/backgrounds/page20/07.jpg") url("assets/backgrounds/page20/08.jpg") url("assets/backgrounds/page20/09.jpg") url("assets/backgrounds/page20/10.jpg") url("assets/backgrounds/page20/11.jpg") url("assets/backgrounds/page20/12.jpg") url("assets/backgrounds/page31/01.jpg") url("assets/backgrounds/page31/02.png") url("assets/backgrounds/page33/01.jpg") url("assets/backgrounds/page10/01.png") url("assets/backgrounds/page31/02.png") url("assets/backgrounds/page33/01.jpg") url("assets/backgrounds/page33/02.jpg") url("assets/backgrounds/page33/ref-326696885.jpg") url("assets/backgrounds/page33/ref-201601247.jpg") url("assets/backgrounds/page33/ref-509785477.jpg") url("assets/backgrounds/page33/ref-662955334.jpg") url("assets/backgrounds/page33/ref-127829156.jpg") url("assets/backgrounds/page33/ref-536781589.jpg") url("assets/backgrounds/page33/ref-551829490.jpg") url("assets/backgrounds/page33/ref-265400186.jpg") url("assets/backgrounds/page33/ref-210974194.jpg") url("assets/backgrounds/page33/ref-454777204.jpg") url("assets/backgrounds/page33/ref-354939284.jpg") url("assets/backgrounds/page33/ref-428959477.jpg") url("assets/backgrounds/page33/ref-399241594.jpg") url("assets/backgrounds/page33/ref-572233399.jpg") url("assets/backgrounds/page33/ref-577848541.jpg") url("assets/backgrounds/page33/circlel.png") url("assets/backgrounds/page33/circle2.png") url("assets/backgrounds/page40/touch.png") url("assets/backgrounds/page40/dna.png") url("assets/backgrounds/page41/tile-6.jpg") url("assets/backgrounds/page41/tile-5.jpg") url("assets/backgrounds/page41/tile-4.jpg") url("assets/backgrounds/page41/tile-3.jpg") url("assets/backgrounds/page41/tile-2.jpg") url("assets/backgrounds/page41/tiles-1.jpg") url("assets/backgrounds/page41/tile-8.jpg");
  }
  
  main {
    position: fixed;
    display: table;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
    max-height: 680px;
    max-width: 1280px;
    width: 100%;
    height: 100%;
    min-height: 680px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    
    .image-background,
    .outer-page {
      display: block;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-size: cover;
    }
    .outer-page {
      z-index: 2;
    }
    
    .overlay {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(#000, 0.3);
      
      &.darken {
        background: rgba(#000, 0.7);
      }
    }
    
    .logo {
      position: absolute;
      z-index: 3;
      display: flex;
      width: auto;
      top: 35px;
      left: 40px;
      align-items: center;
      img,
      div {
        float: left;
      }
      img {
        width: 100px;
      }
      div {
        margin-left: 10px;
        color: #fff;
        border-left: 4px double $brand-secondary;
        padding-left: 6px;
        height: 30px;
        h2 {
          margin: 0;
        }
        span {
          color: $brand-secondary;
        }
        small {
          display: block;
          span {
            margin-left: 5px;
          }
        }
      }
    }
    
    section.page {
      width: 100%;
      height: 100%;
      min-height: 680px;
      position: relative;
      border: 0 solid #fff;
      z-index: 2;
      animation: enterBorder $animationTime forwards;
      overflow: hidden;
      text-transform: uppercase;
      
      @include responsive('tablet', true) {
        zoom: 0.8;
      }
      
      > * {
        position: absolute;
        z-index: 3;
        transition: all $animationTime;
      }
      
      .image-background {
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 0;
        left: 0;
      }
      
      h1 {
        span {
          color: $brand-details;
          &.red {
            color: $brand-secondary;
          }
        }
      }
    }
    .user-interface {
      position: absolute;
      z-index: 3;
      top: 40px;
      right: 40px;
      left: 0;
      transition: all $animationTime;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: right;
        li {
          width: 35px;
          height: 35px;
          background: $brand-details;
          display: inline-block;
          border-radius: 50%;
          cursor: pointer;
          transition: background $animationTime;
          &:nth-of-type(1) {
            margin-right: 10px;
          }
          &:hover {
            background: $brand-primary;
          }
          i {
            width: 35px;
            height: 35px;
            @include font-size(2.6);
            color: #fff;
            text-align: center;
            line-height: 35px;
          }
        }
      }
    }
  }
  
  .progress-audio {
    position: absolute;
    width: 100%;
    max-width: 85%;
    height: 7px;
    background: rgba($brand-primary, 0.5);
    z-index: 3;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    
    div {
      width: 50%;
      height: 7px;
      background: $brand-details;
      transition: width $animationTime;
    }
  }
  
  .nav-button {
    position: absolute;
    z-index: 4;
    background: rgba(#000000, 0.5);
    color: #fff;
    top: 50%;
    margin-top: -25px;
    cursor: pointer;
    transition: background $animationTime;
    &:hover {
      background: $brand-details;
    }
    i {
      width: 60px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      @include font-size(2.5);
    }
    &.next-page {
      right: 0;
    }
    &.prev-page {
      left: 0;
    }
    &.can-advance {
      animation: nextAnimation 0.250s infinite ease-in-out alternate;
    }
  }
  
  .end-tag {
    width: 100%;
    text-transform: uppercase;
    color: #fff;
    top: 50%;
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
  
  .shadow {
    width: 80%;
    margin: 0 auto;
    height: 15px;
    background: rgba(#000, 0.3);
    border-radius: 50%;
    filter: blur(4px);
    transform: translateY(50%);
    opacity: 1;
  }
  
  .svg-group-element {
    transition: all $animationTime;
    cursor: pointer;
    &.hide {
      opacity: 0;
    }
  }
  
  .message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.5);
    .inner {
      background: $brand-details;
      border: 4px solid #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      span {
        display: table-cell;
        width: 200px;
        height: 200px;
        padding: 20px;
        vertical-align: middle;
        @include font-size(1.7);
        color: #fff;
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
  
  /**
  * ----------------------------------------------
  * POPUPS
  * ----------------------------------------------
  **/
  .popups {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    background: rgba(#000, 0.3);
    top: 0;
    left: 0;
    .inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scaleX(0);
      width: 70%;
      min-height: 300px;
      height: auto;
      padding: 20px;
      background: darken($brand-details, 20%);
      border: 10px solid #fff;
      transition: transform $animationTime;
      .close {
        position: absolute;
        background: $brand-secondary;
        color: #fff;
        border-radius: 50%;
        padding: 5px;
        transition: background $animationTime;
        top: -25px;
        right: 0;
        cursor: pointer;
        &:hover {
          background: darken($brand-secondary, 20%);
        }
      }
      &:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: -8px;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
      }
      .image,
      .text {
        float: left;
      }
      .image {
        width: 30%;
        overflow: hidden;
        img {
          width: auto;
          max-height: 300px;
        }
      }
      .text {
        width: 70%;
        > div {
          padding: 0 20px;
          color: #fff;
          h1,
          h4 {
            text-transform: uppercase;
          }
          h1 {
            margin-bottom: 0;
            max-width: 90%;
            @include font-size(2.5);
            small {
              display: block;
              font-size: 50%;
            }
          }
          h4 {
            @include font-size(1.8);
            margin-bottom: 5px;
          }
          span {
            display: inline-block;
            background: $brand-secondary;
            color: #fff;
            margin: 0 5px 5px 0;
            @include font-size(1.5);
            padding: 5px 10px;
            font-weight: bold;
            border-radius: 5px;
          }
        }
      }
      &.active {
        transform: translate(-50%, -50%) scaleX(1);
      }
    }
  }
  
  /**
  * ----------------------------------------------
  * ANIMATIONS FOR V-IF OR V-FOR
  * ----------------------------------------------
  **/
  .fade-enter-active, .fade-leave-active {
    transition: opacity $animationTime;
    position: absolute !important;
    top: 0;
    left: 0;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }
  
  /**
  * ----------------------------------------------
  * ANIMATIONS FOR V-IF OR V-FOR
  * ----------------------------------------------
  **/
  .enter-nav-enter-active, .enter-nav-leave-active {
    transition: opacity $animationTime;
  }
  
  .enter-nav-enter, .enter-nav-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0;
  }
  
  /**
  * ----------------------------------------------
  * EXIT SCENE
  * ----------------------------------------------
  **/
  .exit-scene-enter-active,
  .exit-scene-leave-active {
    transition: all $animationTime;
    position: absolute !important;
  }
  
  .exit-scene-enter,
  .exit-scene-leave-to {
    transform: translateX(-100%);
  }
  
  /**
  * ----------------------------------------------
  * ENTER SCENE
  * ----------------------------------------------
  **/
  .enter-scene-enter-active,
  .enter-scene-leave-active {
    transition: all $animationTime;
    position: absolute !important;
  }
  
  .enter-scene-enter {
    transform: translateX(100%);
    top: 0;
  }
  
  .enter-scene-leave-to {
    transform: translateX(0%);
    top: 0;
  }
  
  //
  // ENTER
  .enter-enter-active, .enter-leave-active {
    transition: opacity $animationTime;
  }
  
  .enter-enter, .enter-leave-to {
    opacity: 0
  }
  
  //
  // LIST ANIMATIONS
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  
  .list-enter-active, .list-leave-active {
    transition: all $animationTime;
  }
  
  .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */
  {
    opacity: 0;
    transform: translateX(100%);
  }
  
  @keyframes enterBorder {
    to {
      border: 15px solid #fff;
    }
  }
  
  //
  // mouse scrol indicadors
  .mouseScroll {
    animation: scrollIndicator 0.5s infinite ease-in-out alternate;
  }
  
  .arrowDown,
  .arrowUp {
    animation: scrollIndicator 1s infinite 0.5s ease-in-out alternate;
  }
  
  .arrowDown {
    animation-delay: 1.5s;
  }
  
  .clock_minutes {
    transform-origin: 50% 100%;
    animation: clockRotation 2s infinite linear;
  }
  
  .clock_hours {
    transform-origin: 50% 100%;
    animation: clockRotation 4s infinite linear;
  }
  
  @keyframes scrollIndicator {
    to {
      opacity: 0;
    }
  }
  
  @keyframes nextAnimation {
    to {
      background: $brand-details;
    }
  }
  
  @keyframes clockRotation {
    to {
      transform: rotate(360deg);
    }
  }
</style>
