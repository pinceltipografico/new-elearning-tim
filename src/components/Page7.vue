<template>
  <section class="page">
    <div class="image-background"></div>
    <div class="white"></div>
    <div class="icon">
      <i class="fa fa-user"></i>
    </div>
    <div class="script1">
      <h1>
        <span>admire</span>.
      </h1>
    </div>
    <div class="script2">
      <h1>
        <span>imagine</span>
      </h1>
    </div>
    <div class="script3">
      <h1>
        <span>Sinta</span>
      </h1>
    </div>
    <div class="script4">
      <h1>
        <span>influencie</span>
      </h1>
    </div>
    <div class="script5">
      <h1>
        Arraste três palavras até a <span>sacola de compras</span>
      </h1>
    </div>
    <div class="script6">
      <div class="drag" style="margin-bottom: 50px;">
        <draggable :list="list.upvotes" :options="{group:'people'}">
          <transition-group>
            <div class="elements" v-for="(element, index) in list" :key="element.name">
              <span>{{element.name}}</span>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="bag">
        <draggable :list="list2.upvotes" :options="{group:'people'}">
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
  export default {
    /**
     | ----------------------------------------------
     * WHEN component was ready
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'step1',
          selector: '.white'
        }, {
          time: 500,
          step: 'step2',
          selector: '.white'
        }, {
          time: 500,
          step: 'step1',
          selector: '.icon'
        }, {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 2000,
          step: 'show',
          selector: '.script2'
        }, {
          time: 2000,
          step: 'show',
          selector: '.script3'
        }, {
          time: 2000,
          step: 'show',
          selector: '.script4'
        }, {
          time: 500,
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
      Animations.animationTimeline(function () {})
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
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
        list2: []
      }
    },
    /**
     | ----------------------------------------------
     * COMPONENTS USE IN THIS COMPONENT
     | ----------------------------------------------
     **/
    components: {
      draggable
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .image-background {
    background: url("../assets/backgrounds/page7/01.jpg") no-repeat;
    background-size: cover;
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
    
    &.step1 {
      right: 0%;
      opacity: 1;
      bottom: 50px;
    }
    &.step2 {
      height: 30%;
    }
    &.step3 {
      bottom: 0;
    }
    &.step4 {
      height: 100%;
      z-index: 5;
    }
    &.step5 {
      @extend %gradient;
    }
  }
  
  .icon {
    left: 50%;
    bottom: 150px;
    @include font-size(10);
    transform: translateX(-50%);
    color: #666;
    opacity: 0;
    &.step1 {
      opacity: 1;
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
    @include font-size(2);
    color: #fff;
    text-align: center;
    top: -100px;
    h1 {
      display: inline-block;
      max-width: 40%;
    }
    &.step1 {
      top: 100px;
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
      background: url("../assets/sprites/bag.png") no-repeat;
      width: 372px;
      height: 500px;
      position: absolute;
      right: 5%;
      top: 45%;
      transform: translateY(-50%) rotate(0deg);
      transform-origin: 50% 0;
      animation: rotate 5s infinite ease-in-out alternate;
      
      > div{
        position: absolute;
        height: 270px;
        top:40%;
        bottom:0;
        left: 20px;
        right: 40px;
        
        > span{
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
      top: 50%;
      transform: translateY(-50%);
      max-width: 550px;
      .elements {
        display: inline-block;
        width: auto;
        background: $brand-details;
        float: left;
        margin: 0 0 10px 10px;
        color: #fff;
        padding: 20px;
        border: 1px solid #fff;
        span {
          display: inline-block;
          font-weight: bold;
          @include font-size(2);
        }
      }
    }
    .buttons{
      position: absolute;
      bottom:50px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @keyframes rotate {
    0%{
      transform: translateY(-50%) rotate(-2deg);
    }
    100%{
      transform: translateY(-50%) rotate(2deg);
    }
  }
</style>
