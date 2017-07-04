<template>
  <main id="app">
    <div class="image-background"></div>
    <div class="logo">
      <img src="~@/assets/svgs/logo-01.svg" alt="Tim"/>
    </div>
    <router-view></router-view>
  </main>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style lang="scss">
  $fa-font-path:'../node_modules/font-awesome/fonts';
  @import "scss/reset";
  @import "scss/variables";
  @import "scss/mixins";
  @import "scss/commons";
  @import "../node_modules/font-awesome/scss/font-awesome";
  
  html,
  body{
    width: 100%;
    height: 100%;
  }
  
  main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background: #fff;
    
    .image-background{
      display: block;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: url("assets/backgrounds/home.jpg") no-repeat;
      background-size: cover;
    }
    
    .overlay{
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(#000,0.3);
    }
    
    .logo{
      position: absolute;
      z-index: 3;
      width: 120px;
      top:40px;
      left: 40px;
    }
    
    section.page{
      height: 100%;
      width: 100%;
      position: relative;
      border:0 solid #fff;
      z-index: 2;
      animation: enterBorder $animationTime forwards;
    }
  }
  
  @keyframes enterBorder {
    to{
      border:15px solid #fff;
    }
  }
</style>
