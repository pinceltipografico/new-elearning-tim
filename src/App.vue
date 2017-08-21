<template>
  <main id="app" :class="{'subtitle-active':showSubtitle}">
    <div class="menu-overlay">
      <div id="timer"
           style="font-size: 24px; width: 100%; color:#fff; text-align: center; display: none; visibility: hidden;"></div>
    </div>
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
          <li class="last">
            <i class="material-icons">&#xE5CD;</i>
          </li>
          <li :class="{'active':!isMute, 'inactive':isMute}" @click="setVolume">
            <i class="material-icons">&#xE04D;</i>
          </li>
          <li class="small" :class="{'active':showSubtitle, 'inactive':!showSubtitle}"
              @click="showSubtitle = !showSubtitle">
            <i class="material-icons">&#xE0CA;</i>
          </li>
        </ul>
      </nav>
    </transition>
    <div class="subtitles" id="subtitles" v-show="showSubtitle">
      <p></p>
    </div>
    <transition name="fade" v-if="showInterfaceItems">
      <div class="player-controls">
        <div class="back-button" @click="onRewind">
          <i class="material-icons">&#xE020;</i>
        </div>
        <div class="play-pause-button" @click="onPause" :class="{'active':!isPaused}">
          <i class="material-icons" v-if="isPaused">&#xE038;</i>
          <i class="material-icons" v-if="!isPaused">&#xE035;</i>
        </div>
        <div class="progress-audio">
          <div :style="'width:'+pageProgress+'%'"></div>
        </div>
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
    <router-view></router-view>
  </main>
</template>
<script>
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
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
        pageIndex: 2,
        pages: null,
        showSubtitle: false,
        isMute: false,
        isPaused: false,
        pageIsDone: false
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
      console.log('|Hello|explain|'.indexOf('|' + this.$route.name))
      if (this.$cookie.get('explain_viewed') && '|Hello|explain|'.indexOf('|' + this.$route.name) === -1) {
        this.$store.commit('toggleIterface', true)
      }
      
      // start the progress bar
      this.pages = this.$router.options.routes
      
      //
      // GET THE LAST PAGE
      /* eslint-disable no-unused-vars */
      if (this.$route.name === null) {
        this.$router.replace('Hello')
      } else if (this.$route.name !== 'Hello') {
        var lastPage = this.$route.name
        var lastRouteIndex = this.getRouteByName(lastPage)
        console.log(lastRouteIndex)
        this.pageIndex = lastRouteIndex
        this.$store.commit('toggleIterface', true)
      }
      
      EventBus.$on('audio-started', function () {
        this.isPaused = false
        this.pageIsDone = false
      }.bind(this))
      
      EventBus.$on('audio-end', function () {
        this.isPaused = true
        this.pageIsDone = true
      }.bind(this))
    },
    /**
     | ----------------------------------------------
     * RETURN THE METHODS OF COMPONENT
     | ----------------------------------------------
     **/
    methods: {
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
          this.$router.push({name: page.name})
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
        if (this.pageIndex > 2) {
          this.pageIndex--
          var page = this.pages[this.pageIndex]
          this.$router.push({name: page.name})
        }
      },
      
      /**
       | ----------------------------------------------
       * GET A ROUTE BY NAAME
       | ----------------------------------------------
       **/
      getRouteByName (name) {
        var result = null
        for (var i = 0; i < this.pages.length; i++) {
          if (this.pages[i].name === name) {
            result = i
          }
        }
        return result
      },
      
      /**
       | ----------------------------------------------
       * MUTE OR UNMUTE
       | ----------------------------------------------
       **/
      setVolume () {
        this.isMute = !this.isMute
        window.Howler.mute(this.isMute)
      },
      
      /**
       | ----------------------------------------------
       * ON PAUSE COURSE
       | ----------------------------------------------
       **/
      onPause () {
        this.isPaused = !this.isPaused
        EventBus.$emit('pause', this.isPaused)
        if (!this.$store.state.audio) {
          return
        }
        var currentId = this.getCurrentAudioId()
        if (currentId) {
          this.isPaused ? this.$store.state.audio.pause(currentId) : this.$store.state.audio.play(currentId)
          if (this.pageIsDone && !this.isPaused) {
            this.onRewind()
            this.pageIsDone = false
          }
        }
      },
      
      /**
       | ----------------------------------------------
       * ON REWIND
       | ----------------------------------------------
       **/
      onRewind () {
        if (this.$route.name.indexOf('menu') !== -1) {
          return
        }
        EventBus.$emit('rewind')
        if (!this.$store.state.audio) {
          return
        }
        var currentId = this.getCurrentAudioId()
        if (currentId) {
          this.$store.state.audio.seek(0, currentId)
          if (this.isPaused) {
            this.$store.state.audio.play(currentId)
            this.isPaused = false
          }
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
      canAdvance () {
        return this.$store.state.canAdvance
      },
      isExplainScreen () {
        return this.$route.name === 'explain'
      }
    },
    
    watch: {
      '$route': function () {
        this.$store.commit('setCanAdvance', false)
        window.history.forward(1)
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
    content: url("assets/backgrounds/home/shutterstock_367752371.jpg") url("assets/backgrounds/page1/shutterstock_516175918.jpg") url("assets/backgrounds/page1/shutterstock_379691755.jpg") url("assets/backgrounds/page1/shutterstock_450689707.jpg") url("assets/backgrounds/page2/shutterstock_316452626.jpg") url("assets/backgrounds/page2/shutterstock_371017109.jpg") url('assets/backgrounds/page2/shutterstock_524512507.jpg') url("assets/backgrounds/page3/shutterstock_485074453.jpg") url("assets/backgrounds/page3/shutterstock_495493495.jpg") url("assets/backgrounds/page3/03.jpg") url("assets/backgrounds/page3/05.jpg") url('assets/backgrounds/page4/shutterstock_342602372.jpg') url("assets/backgrounds/page4/bag.png") url("assets/backgrounds/page5/shutterstock_552386662.jpg") url("assets/backgrounds/page5/shutterstock_525052798.jpg") url("assets/backgrounds/page6/shutterstock_379865653.jpg") url("assets/backgrounds/page6/shutterstock_397015894.jpg") url("assets/backgrounds/page6/shutterstock_87209047.jpg") url("assets/backgrounds/page6/shutterstock_315826034.jpg") url("assets/backgrounds/page8/01.png") url("assets/backgrounds/page9/03.png") url("assets/backgrounds/page9/04.png") url("assets/backgrounds/page10/shutterstock_337783478.jpg") url("assets/backgrounds/page10/shutterstock_613155317.jpg") url("assets/backgrounds/page11/shutterstock_448523395.jpg") url("assets/backgrounds/page13/shutterstock_565936849.jpg") url("assets/backgrounds/page13/shutterstock_525655138.jpg") url("assets/backgrounds/page13/shutterstock_521540137.jpg") url("assets/backgrounds/page13/shutterstock_450852736.jpg") url("assets/backgrounds/page14/01.png") url("assets/backgrounds/page15/shutterstock_526149550.jpg") url("assets/backgrounds/page15/shutterstock_392372638.jpg") url("assets/backgrounds/page15/shutterstock_393506530.jpg") url("assets/backgrounds/page15/shutterstock_565003417.jpg") url("assets/backgrounds/page15/shutterstock_567726835.jpg") url("assets/backgrounds/page15/shutterstock_326967050.jpg") url("assets/backgrounds/page15/shutterstock_163505738.jpg") url("assets/backgrounds/page15/shutterstock_359139920.jpg") url("assets/backgrounds/page15/shutterstock_361009364.jpg") url("assets/backgrounds/page15/shutterstock_513792328.jpg") url("assets/backgrounds/page15/shutterstock_656349286.jpg") url("assets/backgrounds/page15/shutterstock_599683739.jpg") url("assets/backgrounds/page15/shutterstock_580048861.jpg") url("assets/backgrounds/page15/shutterstock_505576180.jpg") url("assets/backgrounds/page15/shutterstock_393304039.jpg") url("assets/backgrounds/page15/shutterstock_521627071.jpg") url("assets/backgrounds/page15/shutterstock_505539793.jpg") url("assets/backgrounds/page15/13.png") url("assets/backgrounds/page16/02.png") url("assets/backgrounds/page17/shutterstock_520928407.jpg") url("assets/backgrounds/page39/ref-390285811.jpg") url("assets/backgrounds/page40/dna.png") url("assets/backgrounds/page40/touch.png") url("assets/backgrounds/page41/tile-1.jpg") url("assets/backgrounds/page41/tile-2.jpg") url("assets/backgrounds/page41/tile-3.jpg") url("assets/backgrounds/page41/tile-4.jpg") url("assets/backgrounds/page41/tile-5.jpg") url("assets/backgrounds/page41/tile-6.jpg") url("assets/backgrounds/page41/tile-7.jpg") url("assets/backgrounds/page41/tile-8.jpg") url("assets/backgrounds/page41/tile-9.jpg") url("assets/backgrounds/page41/tile-10.jpg") url("assets/backgrounds/page41/tile-11.jpg") url("assets/backgrounds/page41/tile-12.jpg") url("assets/backgrounds/page41/tile-13.jpg") url("assets/backgrounds/page41/tile-14.jpg") url("assets/backgrounds/page41/tile-15.jpg") url("assets/backgrounds/page41/tile-16.jpg") url("assets/backgrounds/page41/tile-17.jpg") url("assets/backgrounds/page41/tile-18.jpg") url("assets/backgrounds/page41/tile-19.jpg") url("assets/backgrounds/page41/tile-20.jpg") url("assets/backgrounds/page41/tile-21.jpg") url("assets/backgrounds/page42/ref-287713304.jpg") url("assets/backgrounds/page17/shutterstock_520928407.jpg") url("assets/backgrounds/page17/01.jpg") url("assets/backgrounds/page17/ref-662955334.jpg") url("assets/backgrounds/page17/ref-626767202.jpg") url("assets/backgrounds/page17/ref-577848541.jpg") url("assets/backgrounds/page17/ref-572233399.jpg") url("assets/backgrounds/page17/ref-551829490.jpg") url("assets/backgrounds/page17/ref-536781589.jpg") url("assets/backgrounds/page17/ref-514763773.jpg") url("assets/backgrounds/page17/ref-509785477.jpg") url("assets/backgrounds/page17/ref-454777204.jpg") url("assets/backgrounds/page17/ref-428959477.jpg") url("assets/backgrounds/page17/ref-399241594.jpg") url("assets/backgrounds/page17/ref-354939284.jpg") url("assets/backgrounds/page17/ref-326696885.jpg") url("assets/backgrounds/page17/ref-265400186.jpg") url("assets/backgrounds/page17/ref-210974194.jpg") url("assets/backgrounds/page17/ref-201601247.jpg") url("assets/backgrounds/page17/ref-127829156.jpg") url("assets/backgrounds/page17/circlel.png") url("assets/backgrounds/page17/circle2.png");
  }
  
  main {
    position: fixed;
    display: table;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
    max-width: 1280px;
    width: 100%;
    height: 680px;
    min-height: 680px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    
    &.subtitle-active {
      
      .logo {
        top: 15px !important;
      }
      .user-interface {
        top: 15px;
      }
      .menu-overlay {
        top: 5px;
      }
      
      section.page,
      .outer-page {
        height: 600px;
      }
      .player-controls {
        bottom: 15px;
        left: 15px;
        right: 15px;
      }
      .subtitles {
        background: #000;
      }
      
      section.page9 {
        .image {
          bottom: -100px;
        }
        .script3 {
          bottom: -30px;
        }
      }
      
      section.page8 {
        .image {
          bottom: -50px;
        }
      }
      
      section.page11 {
        &.scene2 {
          //transform: translate(-50%, -40%) scale(0.8);
        }
      }
      
      section.page8,
      section.page3,
      section.page15,
      section.usar {
        video {
          height: 125% !important;
        }
      }
      
      section.recomendar {
        .homem {
          bottom: -150px;
        }
      }
      
      section.page16 {
        .image {
          bottom: -40px;
        }
      }
      
      section.page9 {
        .script3 {
          bottom: -60px;
        }
      }
      
      section.page-menu {
        h1 {
          top: 10% !important;
        }
      }
      
      .svg-container {
        transform: translate(-50%, -50%) scale(0.8);
        &.small {
          top: 90%;
          left: 94%;
        }
      }
      
      section.menu-page .menu {
        animation: slideImageSmall 10s infinite ease-in-out;
        bottom: -40px;
        right: -40px;
      }
      
      section.page.monitoring {
        .engajamento {
        }
        transform: scale(0.85);
        overflow: visible;
        border: none;
        animation: none;
      }
    }
  }
  
  .IE11,
  .MSIE10 {
    .logo {
      height: 30px;
    }
  }
  
  .MSIE10,
  .IE11 {
    font-size: 66.5%;
    .shadow {
      opacity: 0.3;
    }
    .logo {
      svg {
        width: 70px;
      }
    }
    .player-controls {
      .progress-audio {
        width: 93%;
      }
    }
    section.page2 {
      .script1 h1 {
        @include font-size(3.2);
      }
      .script3 {
        @include font-size(1.5);
      }
    }
    section.page7 {
      .script1,
      .script2,
      .script3,
      .script4 {
        @include font-size(1.5);
      }
      .icon {
        bottom: 60px;
      }
    }
    section.page8 {
      .script3 {
        max-width: 500px;
      }
      .script3 h1 {
        @include font-size(2.5);
        text-align: center;
        padding: 10px 100px 10px 40px;
      }
    }
    section.page6 {
      .wish {
        @include font-size(2.5);
      }
    }
    section.page9 {
      .script1 h1 {
        @include font-size(2);
      }
      .script2 h1 {
        @include font-size(2);
      }
      .script3 h1 {
        @include font-size(2.7);
      }
    }
    section.page11 {
      .script2 h1 {
        @include font-size(2.7);
      }
      .text-animation {
        left: 120px;
        padding-left: 20px;
        padding-right: 40px;
        width: 550px;
        span {
          width: 550px;
        }
      }
      
      .dna {
        img {
          height: auto;
        }
        .shadow {
          display: none;
          position: absolute;
          left: 50%;
          bottom: 20px;
        }
      }
      
      .user-experience {
        position: absolute;
        top: 60%;
      }
      
      .icon-container {
        .icone {
          width: 400px;
          svg {
            width: 100%;
            height: 450px;
          }
          &.small {
            .shadow {
              position: absolute;
              top: 80%;
              left: 50%;
              transform: translateX(-50%);
            }
            svg {
              width: 100%;
              height: 200px;
            }
          }
        }
      }
    }
    
    section.page12 {
      .customer_centric {
        svg {
          height: 500px;
        }
      }
      .script1 h1 {
        @include font-size(4);
      }
      .para {
        h1 {
          @include font-size(2.2);
          small div {
            @include font-size(1);
          }
        }
      }
      .de {
        h1 {
          @include font-size(2.2);
        }
      }
    }
    
    section.page13 {
      .script1_2 h1 {
        @include font-size(3.5);
      }
      .script2 h1,
      .script1 h1 {
        @include font-size(3);
      }
    }
    
    section.page14 {
      .script1 h1 {
        @include font-size(3);
      }
    }
    
    div.page15 {
      .svg-container {
        svg {
          height: 800px;
        }
      }
    }
    section.page16 {
      .script1 h1 {
        @include font-size(3);
      }
    }
  }
  
  /**
  * ----------------------------------------------
  * COMMOM STYLES
  * ----------------------------------------------
  **/
  .uppercase {
    text-transform: uppercase !important;
  }
  
  /**
  * ----------------------------------------------
  * IMAGE BACKGROUNDS AND OUTER PAGES
  * ----------------------------------------------
  **/
  .image-background,
  .outer-page {
    display: block;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  
  /**
  * ----------------------------------------------
  * MENU OVERLAY
  * ----------------------------------------------
  **/
  .menu-overlay {
    width: 100%;
    height: 55px;
    background: rgba(#000, 0.6);
    position: absolute;
    z-index: 3;
    top: 25px;
    transition: top $animationTime;
  }
  
  /**
  * ----------------------------------------------
  * OVERLAY
  * ----------------------------------------------
  **/
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
  
  /**
  * ----------------------------------------------
  * BRAND LOGO
  * ----------------------------------------------
  **/
  .logo {
    position: absolute;
    z-index: 3;
    display: flex;
    width: auto;
    top: 35px;
    left: 40px;
    align-items: center;
    transition: top $animationTime;
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
        @include font-size(1.4);
      }
      small {
        color: $brand-secondary;
        display: block;
      }
    }
  }
  
  /**
  * ----------------------------------------------
  * MAIN PAGE
  * ----------------------------------------------
  **/
  section.page {
    position: relative;
    width: 100%;
    height: 680px;
    border: 0 solid #fff;
    z-index: 2;
    animation: enterBorder $animationTime forwards;
    overflow: hidden;
    //text-transform: lowercase !important;
    transition: all $animationTime;
    
    > * {
      position: absolute;
      z-index: 3;
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
  
  /**
  * ----------------------------------------------
  * USER INTERFACE
  * ----------------------------------------------
  **/
  .user-interface {
    position: absolute;
    z-index: 3;
    top: 35px;
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
        display: block;
        float: right;
        background: #000;
        border-radius: 50%;
        cursor: pointer;
        transition: background $animationTime;
        margin-right: 10px;
        background: $brand-details;
        
        &.last {
          margin: 0;
        }
        &:hover {
          background: $brand-primary;
        }
        &.inactive {
          background: black;
          i {
            color: darken(#fff, 20%);
          }
        }
        &.active {
        }
        i {
          width: 35px;
          height: 35px;
          @include font-size(2.6);
          color: #fff;
          text-align: center;
          line-height: 35px;
        }
        &.small {
          i {
            @include font-size(2);
            line-height: 35px;
          }
        }
      }
    }
  }
  
  /**
  * ----------------------------------------------
  * PLAYER CONTROLES
  * ----------------------------------------------
  **/
  .player-controls {
    position: absolute;
    bottom: 20px;
    left: 50px;
    right: 50px;
    z-index: 3;
    display: flex;
    align-items: center;
    background: rgba(#000, 0.1);
    border-radius: 10px;
    transition: all $animationTime;
    .play-pause-button,
    .back-button {
      position: relative;
      cursor: pointer;
      border-radius: 50%;
      i {
        position: relative;
        color: $brand-details;
        transition: all $animationTime;
        z-index: 2;
      }
      &:hover i,
      &.active i {
        color: $brand-primary;
      }
    }
    .play-pause-button {
      i {
        @include font-size(5);
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        background: #fff;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 50%;
        margin: -15px 0 0 -15px;
        z-index: 1;
      }
    }
    .back-button i {
      @include font-size(3);
    }
    .progress-audio {
      width: 100%;
      height: 7px;
      background: rgba($brand-primary, 0.5);
      left: 50%;
      bottom: 10px;
      margin-right: 10px;
      div {
        width: 50%;
        height: 7px;
        background: $brand-details;
        transition: width $animationTime;
      }
    }
  }
  
  /**
  * ----------------------------------------------
  * LEGENDAS
  * ----------------------------------------------
  **/
  .subtitles {
    position: absolute;
    z-index: 99;
    height: 55px;
    bottom: 45px;
    right: 15px;
    left: 15px;
    overflow: hidden;
    background: rgba(#000, 0.3);
    z-index: 3;
    transition: all $animationTime;
    p {
      color: #fff;
      padding: 0 100px;
      @include font-size(1.3);
      font-weight: bold;
    }
  }
  
  /**
  * ----------------------------------------------
  * BOTOES DE NAVEGAÇÃO
  * ----------------------------------------------
  **/
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
  
  /**
  * ----------------------------------------------
  * TAG THAT ENDS SLIDES
  * ----------------------------------------------
  **/
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
  
  /**
  * ----------------------------------------------
  * SHADOWS
  * ----------------------------------------------
  **/
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
  
  /**
  * ----------------------------------------------
  * SCVGS ELEMENTS
  * ----------------------------------------------
  **/
  .svg-group-element {
    transition: all $animationTime;
    cursor: pointer;
    &.hide {
      opacity: 0;
    }
  }
  
  /**
  * ----------------------------------------------
  * MESSAGES
  * ----------------------------------------------
  **/
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
    background: rgba(#000, 0.6);
    top: 0;
    left: 0;
    
    .inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scaleX(0);
      width: 80%;
      min-height: 300px;
      height: auto;
      padding: 20px;
      background: darken($brand-details, 20%);
      border: 10px solid #fff;
      transition: transform $animationTime;
      @include responsive('laptopS') {
        width: 85%;
      }
      
      .ribbon {
        position: absolute;
        top: 10px;
        left: 10px;
        background: $brand-secondary;
        color: #fff;
        left: -10px;
        @include font-size(1.5);
        padding: 4px 10px;
        &:after,
        &:before {
          content: '';
          display: block;
          position: absolute;
        }
        &:before {
          width: 30px;
          height: 100%;
          background: $brand-secondary;
          left: -30px;
          top: 0;
        }
        &:after {
          height: 100%;
          top: 100%;
          left: -30px;
          border-top: 20px solid darken($brand-secondary, 15%);
          border-left: 30px solid transparent;
        }
      }
      
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
            /*text-transform: uppercase;*/
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
            display: block;
            color: #fff;
            margin: 0;
            @include font-size(1.5);
            padding: 2px 10px;
            font-weight: bold;
            border-radius: 5px;
            &:before {
              content: '• ';
            }
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
  * DESTAQUE NAS PALAVRAS TIM
  * ----------------------------------------------
  **/
  span.tim {
    text-transform: uppercase !important;
  }
  
  /**
  * ----------------------------------------------
  * VIDEO OVERLAYS
  * ----------------------------------------------
  **/
  .video-overlay {
    h1 {
      position: absolute;
      @include font-size(2);
      color: #fff;
      top: 50%;
      right: -100%;
      transform: translateY(-50%);
      background: rgba(#000, 0.5);
      padding: 20px;
      transition: all $animationTime;
      
      &:after,
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: #fff;
        transform: scaleX(0);
        transition: all $animationTime;
      }
      &:before {
        top: -5px;
        left: 0;
        transform-origin: 0 0;
      }
      &:after {
        bottom: -5px;
        right: 0;
        transform-origin: 100% 0;
      }
    }
    &.hide {
      display: none;
    }
    &.step1 {
      h1 {
        right: 5%;
      }
    }
    &.step2 {
      h1:before,
      h1:after {
        transform: scaleX(1);
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
  
  .item-icon {
    transition: all $animationTime;
    opacity: 0;
    &.show {
      opacity: 1 !important;
    }
    @for $i from 1 through 7 {
      &.item-#{$i} {
        transition-delay: #{(0.5 * $i)+'s'};
      }
    }
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
  
  @keyframes slideImageSmall {
    0% {
      transform: translateX(0) scale(0.9);
    }
    50% {
      transform: translateX(2%) scale(0.9);
    }
    100% {
      transform: translateX(0%) scale(0.9);
    }
  }
</style>
