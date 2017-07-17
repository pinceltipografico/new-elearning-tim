<template>
  <div class="outer-page">
    <section class="page gradient page-menu" v-if="scene === -1">
      <h1>Clique em cada uma das diretrizes pra visualizá-las</h1>
      <div class="menu">
        <div class="tim-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="items">
          <div>
            <span>COMUNICAÇÃO</span>
            <i class="fa fa-wechat"></i>
          </div>
          <div>
            <span>INTERAÇÃO</span>
            <i class="fa fa-navicon"></i>
          </div>
          <div>
            <span>MONITORAMENTO</span>
            <i class="fa fa-search-plus"></i>
          </div>
        </div>
        <div class="shadow"></div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        scene: -1
      }
    },
    mounted () {
    },
    destroyed () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
  }
  
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
  }
  
  .menu {
    width: 100%;
    top: 55%;
    left: 50px;
    transform: translateY(-50%);
    .shadow {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
    }
    .tim-icon {
      width: 400px;
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
        animation: itemAnimation 0.5s forwards 1s;
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
  }
  
  @keyframes itemAnimation {
    to {
      transform: translateX(0%);
    }
  }
</style>
