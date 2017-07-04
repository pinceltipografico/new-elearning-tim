<template>
  <main id="app">
    <div class="logo">
      <img src="~@/assets/svgs/logo-01.svg" alt="Tim"/>
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
      <a class="nav-button next-page" v-if="showInterfaceItems">
        <i class="fa fa-chevron-right"></i>
      </a>
    </transition>
    <transition name="fade">
      <a class="nav-button prev-page" v-if="showInterfaceItems">
        <i class="fa fa-chevron-left"></i>
      </a>
    </transition>
    <router-view></router-view>
  </main>
</template>
<script>
  export default {
    name: 'app',
    mounted () {
      this.$store.commit('toggleIterface', false)
      if (this.$cookie.get('explain_viewed')) {
        this.$store.commit('toggleIterface', true)
      }
    },
    computed: {
      showInterfaceItems: function () {
        return this.$store.state.showUserInterface
      },
      pageProgress: function () {
        return this.$store.state.pageProgress
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
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  
  main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background: #fff;
    
    .image-background {
      display: block;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-size: cover;
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
      width: 120px;
      top: 40px;
      left: 40px;
    }
    
    section.page {
      height: 100%;
      width: 100%;
      position: relative;
      border: 0 solid #fff;
      z-index: 2;
      animation: enterBorder $animationTime forwards;
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
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }
  
  @keyframes enterBorder {
    to {
      border: 15px solid #fff;
    }
  }
</style>
