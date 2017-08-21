<template>
  <section class="page page7">
    <transition name="enter-nav">
      <a class="nav-button next-page can-advance" v-if="showNext" @click="step2">
        <i class="material-icons">&#xE5CC;</i>
      </a>
    </transition>
    <div class="image-background"></div>
    <div class="white"></div>
    <div class="icon">
      <i class="material-icons">&#xE55A;</i>
    </div>
    <div class="script1">
      <h1>
        <span>admira</span>
      </h1>
    </div>
    <div class="script2">
      <h1>
        <span>imagine</span>
      </h1>
    </div>
    <div class="script3">
      <h1>
        <span>sinta</span>
      </h1>
    </div>
    <div class="script4">
      <h1>
        <span>influencia</span>
      </h1>
    </div>
    <div class="script5">
      <h1>
        Escolha <span>três palavras</span>
        que representam o que você mais valoriza na hora da compra e leve-as até a sacola:
      </h1>
    </div>
    <div class="script6">
      <div class="drag" style="margin-bottom: 50px;">
        <draggable v-model="list" :options="{group:'people'}">
          <transition-group>
            <div class="elements" v-for="(element, index) in list" :key="element.name">
              <span>{{element.name}}</span>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="bag">
        <draggable v-model="list2" :options="{group:'people'}" @add="onAdded()">
          <transition-group>
            <div class="elements" v-for="(element, index) in list2" :key="element.name">
              <span>{{element.name}}</span>
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  import draggable from 'vuedraggable'
  import anime from 'animejs'
  
  export default {
    /**
     | ----------------------------------------------
     * WHEN component was ready
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var vm = this
      this.TimelineCtrl = anime.timeline({
        elasticity: 0,
        complete: function () {}
      })
      this.TimelineCtrl
        .add({
          targets: '.white',
          right: ['100%', '0%'],
          easing: 'linear',
          height: [{value: 0}, {value: 200, delay: 300}],
          bottom: 50,
          duration: 500,
          offset: '+=300'
        })
        .add({
          targets: '.icon',
          opacity: 1,
          offset: '+=300'
        })
        .add({
          targets: ['.script1', '.script2', '.script3', '.script4'],
          opacity: 1,
          easing: 'linear',
          translateX: ['100%', 0],
          duration: 200,
          delay: function (el, i, l) {
            if (i === 0) {
              return 0
            } else if (i === 1) {
              return 2000
            } else if (i === 2) {
              return 4500
            } else {
              return 7500
            }
          }
        })
      
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
      
      this.playAudio('scene4', 'static/subtitles/page4.json', function (pos) {
      }, function () {
        this.showNext = true
      }.bind(this))
    },
    
    /**
     | ----------------------------------------------
     * RETURN DATA OF THE COMPONENT
     | ----------------------------------------------
     **/
    data () {
      return {
        list: [
          {name: 'Segurança', order: 1},
          {name: 'Design', order: 2},
          {name: 'Status', order: 3},
          {name: 'Preço', order: 4},
          {name: 'Funcionalidade', order: 5},
          {name: 'Qualidade', order: 6}
        ],
        list2: [],
        currentScene: 1,
        showNext: false,
        TimeLineCtrl: null
      }
    },
    /**
     | ----------------------------------------------
     * COMPONENTS USE IN THIS COMPONENT
     | ----------------------------------------------
     **/
    components: {
      draggable
    },
    methods: {
      onAdded () {
        if (this.list2 && this.list2.length === 3) {
          this.$store.commit('setCanAdvance', true)
        }
      },
      step2 () {
        this.showNext = false
        var animations = [
          {
            time: 50,
            step: 'step3',
            selector: '.white'
          }, {
            time: 500,
            step: 'step4',
            selector: '.white'
          }, {
            time: 500,
            step: 'step5',
            selector: '.white'
          }, {
            time: 500,
            step: 'step1',
            selector: '.script5'
          }, {
            time: 500,
            step: 'step1',
            selector: '.script6'
          }, {
            time: 500,
            step: 'show',
            selector: '.script6'
          }
        ]
        Animations.setAnimations(animations)
        Animations.animationTimeline(function () {
          this.playAudio('scene4DragAndDrop', 'static/subtitles/page4_2.json')
        }.bind(this))
      }
    },
    
    /**
     | ----------------------------------------------
     * WHEN DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      EventBus.$off('pause')
      EventBus.$off('rewind')
      Animations.destroyAnimations()
      this.stopAudio()
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .image-background {
    background: url("../assets/backgrounds/page4/shutterstock_342602372.jpg") no-repeat;
    background-size: cover;
  }
  
  * {
    transition: all $animationTime;
  }
  
  .script1,
  .script2,
  .script3,
  .script4,
  .script5,
  .script6,
  .white,
  .icon {
    z-index: 4;
    position: absolute;
  }
  
  .white {
    background: #fff;
    width: 100%;
    height: 0%;
    right: 100%;
    
    &.step3 {
      bottom: 0 !important;
    }
    &.step4 {
      height: 100% !important;
      z-index: 5;
    }
    &.step5 {
      @extend %gradient;
    }
  }
  
  .icon {
    left: 50%;
    bottom: 120px;
    transform: translateX(-50%);
    color: #666;
    opacity: 0;
    i {
      @include font-size(12);
    }
    &.step1 {
      opacity: 1;
    }
    span {
      display: block;
      position: absolute;
      text-align: center;
      left: 50%;
      bottom: -25px;
      transform: translateX(-50%);
      color: #fff;
      @include font-size(2);
      cursor: pointer;
      background: $brand-details;
      border-radius: 10px;
      text-transform: uppercase;
      padding: 5px 10px;
      animation: proximoAnim 1s infinite ease-in-out alternate;
    }
  }
  
  .script1,
  .script2,
  .script3,
  .script4 {
    bottom: 60px;
    max-width: 700px;
    @include font-size(2.5);
    color: #fff;
    transform: translate(100%, -50%) scale(1) rotate(0deg);
    opacity: 0;
    
    span {
      color: $brand-details;
    }
    
    &.show {
      transform: translate(0%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
    &.hide {
      transform: translate(0, -50%) scale(0) rotate(0deg);
    }
  }
  
  .script1 {
    left: 10%;
  }
  
  .script2 {
    left: 25%;
  }
  
  .script3 {
    left: 62%;
  }
  
  .script4 {
    left: 75%;
  }
  
  .script5,
  .script6 {
    z-index: 6;
  }
  
  .script5 {
    width: 100%;
    @include font-size(1.5);
    color: #fff;
    top: -100px;
    padding-left: 100px;
    opacity: 0;
    h1 {
      display: inline-block;
      max-width: 60%;
    }
    &.step1 {
      top: 100px;
      opacity: 1;
    }
  }
  
  .script6 {
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    opacity: 0;
    
    .bag {
      background: url("../assets/backgrounds/page4/bag.png") no-repeat;
      width: 372px;
      height: 500px;
      position: absolute;
      right: 5%;
      top: 45%;
      transform: translateY(-50%) rotate(0deg);
      transform-origin: 50% 0;
      animation: rotate 5s infinite ease-in-out alternate;
      
      > div {
        position: absolute;
        height: 270px;
        top: 40%;
        bottom: 0;
        left: 20px;
        right: 40px;
        
        > span {
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          padding: 20px;
          
          div {
            float: left;
            background: $brand-details;
            color: #fff;
            @include font-size(2);
            margin: 0 10px 10px 0;
            border-radius: 5px;
            padding: 10px;
          }
        }
      }
    }
    
    &.step1 {
      display: block;
    }
    &.show {
      opacity: 1;
    }
    .drag {
      position: absolute;
      left: 10%;
      top: 60%;
      transform: translateY(-50%);
      max-width: 550px;
      
      @include responsive('laptopS'){
        max-width: 400px;
      }
      .elements {
        display: inline-block;
        width: auto;
        background: $brand-details;
        float: left;
        margin: 0 0 10px 10px;
        color: #fff;
        padding: 20px;
        border: 1px solid #fff;
        cursor: pointer;
        span {
          display: inline-block;
          font-weight: bold;
          @include font-size(2);
        }
        @include responsive('laptopS'){
          span{
            @include font-size(1.5);
          }
        }
      }
    }
    .buttons {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @keyframes rotate {
    0% {
      transform: translateY(-50%) rotate(-2deg);
    }
    100% {
      transform: translateY(-50%) rotate(2deg);
    }
  }
  
  @keyframes proximoAnim {
    to {
      background: darken($brand-details, 20%);
    }
  }
</style>
