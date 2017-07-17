<template>
  <main id="app">
    <div class="logo">
      <span style="width: 80px;"><logo></logo></span>
      <div class="title">
        <h2>Somos a geração <span>CX</span>
          <small id="pageTitle">Modulo:<span>Introdução</span></small>
        </h2>
      </div>
    </div>
    <transition name="fade">
      <nav class="user-interface" v-if="showInterfaceItems">
        <ul>
          <li>
            <i class="fa fa-volume-up"></i>
          </li>
          <li><i class="fa fa-times"></i></li>
        </ul>
      </nav>
    </transition>
    <transition name="fade">
      <div class="progress-audio" v-if="showInterfaceItems">
        <div :style="'width:'+pageProgress+'%'"></div>
      </div>
    </transition>
    <transition name="fade">
      <a class="nav-button next-page" v-if="showInterfaceItems" @click="nextPage">
        <i class="fa fa-chevron-right"></i>
      </a>
    </transition>
    <transition name="fade">
      <a class="nav-button prev-page" v-if="showInterfaceItems" @click="prevPage">
        <i class="fa fa-chevron-left"></i>
      </a>
    </transition>
    <router-view></router-view>
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
        pages: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 4, 20, 30, 31, 4, 33]
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
      if (this.$cookie.get('explain_viewed') && this.$route.name !== 'Hello' && this.$route.name !== null) {
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
  
  main {
    position: fixed;
    display: table;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background: #fff;
    max-height: 800px;
    width: 100%;
    
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
      height: 100%;
      width: 100%;
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
  * ANIMATIONS FOR V-IF OR V-FOR
  * ----------------------------------------------
  **/
  .fade-enter-active, .fade-leave-active {
    transition: opacity $animationTime;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
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
</style>
