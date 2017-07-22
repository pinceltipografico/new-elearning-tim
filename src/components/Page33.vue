<template>
  <div class="outer-page">
    <transition name="exit-scene">
      <section class="page gradient page-menu" v-if="scene === -1">
        <h1>Clique em cada uma das diretrizes pra visualizá-las</h1>
        <div class="menu">
          <div class="tim-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="items">
            <div @click="startSceneOne">
              <span>COMUNICAÇÃO</span>
              <i class="material-icons">&#xE0BF;</i>
            </div>
            <div>
              <span>INTERAÇÃO</span>
              <i class="material-icons">&#xE5D2;</i>
            </div>
            <div>
              <span>MONITORAMENTO</span>
              <i class="material-icons">&#xE8B6;</i>
            </div>
          </div>
          <div class="shadow"></div>
        </div>
      </section>
    </transition>
    <transition name="enter-scene">
      <section class="page comunicacao" v-if="scene === 0">
        <div class="image-background"></div>
        <div class="effects"></div>
        <div class="script1">
          <h1>Comportamentos que devemos incorporar, estimular e mobilizar</h1>
          <ul>
            <li v-for="item in itemsComunicacao">{{item}}</li>
          </ul>
        </div>
      </section>
    </transition>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  var Animations = require('../lib/ChainAnimation')
  export default {
    /**
    | ----------------------------------------------
    * RETURN DATA
    | ----------------------------------------------
    **/
    data () {
      return {
        scene: -1,
        itemsComunicacao: ['Usar a persona TIM', 'Comunicar de forma clara e transparente', 'Falar a língua do cliente', 'Se mudar, tem que comunicar', 'Encantar o cliente.']
      }
    },
    /**
    | ----------------------------------------------
    * WHEN COMPONENTS IS READY
    | ----------------------------------------------
    **/
    mounted () {},
    /**
    | ----------------------------------------------
    * DESTROYED
    | ----------------------------------------------
    **/
    destroyed () {
      Animations.destroyAnimations()
    },
    /**
    | ----------------------------------------------
    * METHODOS
    | ----------------------------------------------
    **/
    methods: {
      startSceneOne () {
        this.scene = 0
        var animations = [
          {
            time: 1000,
            step: 'step1',
            selector: '.comunicacao > .effects'
          }, {
            time: 500,
            step: 'step1',
            selector: '.comunicacao > .script1'
          }, {
            time: 1500,
            step: 'enter',
            selector: '.comunicacao > .script1 > ul li:nth-of-type(1)'
          }, {
            time: 400,
            step: 'enter',
            selector: '.comunicacao > .script1 > ul li:nth-of-type(2)'
          }, {
            time: 400,
            step: 'enter',
            selector: '.comunicacao > .script1 > ul li:nth-of-type(3)'
          }, {
            time: 400,
            step: 'enter',
            selector: '.comunicacao > .script1 > ul li:nth-of-type(4)'
          }, {
            time: 400,
            step: 'enter',
            selector: '.comunicacao > .script1 > ul li:nth-of-type(5)'
          }
        ]
        Animations.setAnimations(animations)
        Animations.animationTimeline()
      }
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
  
  section.comunicacao {
    .image-background {
      background: url("../assets/backgrounds/page33/01.jpg") no-repeat;
      background-size: cover;
    }
    .effects {
      width: 40%;
      height: 0;
      background: #fff;
      left: 10%;
      &.step1 {
        height: 100%;
      }
    }
    .script1 {
      top: 50%;
      max-width: 35%;
      left: 15%;
      transform: translateY(-50%);
      opacity: 0;
      h1 {
        color: #666;
        @include font-size(2);
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 20px;
        li {
          @include font-size(1.5);
          margin-bottom: 10px;
          color: $brand-details;
          font-weight: bold;
          transform: translateX(100%);
          opacity: 0;
          transition: all $animationTime;
          &.enter {
            transform: translateX(0);
            opacity: 1;
          }
        }
      }
      &.step1 {
        opacity: 1;
      }
    }
  }
  
  @keyframes itemAnimation {
    to {
      transform: translateX(0%);
    }
  }
</style>
