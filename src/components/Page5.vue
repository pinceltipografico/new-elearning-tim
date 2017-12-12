<template>
  <section class="page page3">
    <div class="sections" style="display: none;">
      <!-- SCENE 2 -->
      <section class="page-item">
        <div class="scene2">
          <div class="script2"><h1>A gente muda, o mundo muda a gente e a gente muda o mundo</h1></div>
          <div class="world">
            <world-map></world-map>
          </div>
        </div>
      </section>
      <!-- SCENE 2 -->
      <!-- SCENE 4 -->
      <section class="page-item" style="z-index: 4;">
        <div class="scene4">
          <div class="script3">
            O mercado está passando por rompimento de paradigmas
          </div>
          <div class="script4">
            <!-- -->Novas tecnologias mudam profundamente nossa sociedade<!-- -->
          </div>
        </div>
      </section>
      <!-- SCENE 4 -->
      <!-- SCENE 5 -->
      <section class="page-item">
        <div class="scene6 video-overlay">
          <video src="static/video/583335745.m4v" autoplay loop></video>
          <h1>Cada vez mais autônomas</h1>
        </div>
      </section>
      <!-- SCENE 6 -->
      <section class="page-item" style="z-index: 6;">
        <div class="scene5">
          <div class="script6">
            <!-- -->Que impactos isto pode acarretar?<!-- -->
          </div>
        </div>
      </section>
      <!-- SCENE 6 -->
      <section class="page-item">
        <div class="scene8">
          <h1>É necessário se adaptar</h1>
        </div>
      </section>
      <!-- SCENE 8 -->
      <section class="page-item">
        <div class="scene7">
          <div class="background"></div>
          <div class="script7">
            <h1>E neste desafio, <span>todas as pessoas da organização, e os prestadores de serviço,</span>
              tornam-se responsáveis pelo objetivo de <span>conquistar o cliente e mantê-lo</span>
            </h1></div>
        </div>
      </section>
      <!-- SCENE 8 -->
      <!-- SCENE 9 -->
      <section class="page-item">
        <div class="scene9">
          <div class="script1">
            <h1>
              <span>A CHAVE É:</span><br/>
              <small>Antecipar-se às tendências, <br/>adaptar-se com velocidade e criar verdadeiros seguidores</small>
            </h1>
          </div>
          <div class="middle-image"></div>
        </div>
      </section>
      <!-- SCENE 9 -->
    </div>
    <ul class="scroll-indicator">
    </ul>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  import ScrollOnePage from '../lib/ScrollOnePage'
  import MouseScroll from '../assets/svgs/mouse.svg'
  import Arrows from '../assets/svgs/arrows.svg'
  import WorldMap from '../assets/svgs/world-page5.svg'
  import { EventBus } from '../events/index'
  
  export default {
    components: {
      MouseScroll,
      Arrows,
      WorldMap
    },
    //
    // component nam
    name: 'Page5',
    /**
     | ----------------------------------------------
     * return data of the component
     | ----------------------------------------------
     **/
    data () {
      return {
        scroller: null,
        currentSection: 0
      }
    },
    /**
     | ----------------------------------------------
     * WHEN THE COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var vm = this
      this.scroller = new ScrollOnePage()
      this.scroller.start('.page', '.scroll-indicator', false, function (index) {
        vm.currentSection = index
      })
      this.playAudio('scene3', 'static/subtitles/page3.json', function (pos) {
        if (pos === 7) {
          vm.scroller.gotoSection(1)
        } else if (pos === 18) {
          vm.scroller.gotoSection(2)
        } else if (pos === 34) {
          vm.scroller.gotoSection(3)
        } else if (pos === 43) {
          vm.scroller.gotoSection(4)
        } else if (pos === 56) {
          vm.scroller.gotoSection(5)
        } else if (pos === 64) {
          vm.scroller.gotoSection(6)
        }
      }, function () {
        vm.$store.commit('setCanAdvance', true)
      })
      
      EventBus.$on('rewind', function () {
        if (vm.scroller) {
          vm.scroller.gotoSection(0)
        }
      })
    },
    /**
     | ----------------------------------------------
     * WHEN COMPOONENT WAS DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      if (this.scroller) {
        this.scroller.removeScrollListeners()
        this.scroller = null
      }
      this.stopAudio()
      EventBus.$off('rewind')
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/mixins";
  @import "../scss/variables";
  
  section.page {
    @extend %gradient;
    
    * {
      transition: all $animationTime;
    }
    
    .scroll-arrow {
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0);
      color: #fff;
      animation: scrollIndicator infinite 1s ease-in-out alternate;
      z-index: 99;
      i {
        @include font-size(5);
        color: $brand-details;
      }
    }
    
    .sections {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      &:after {
        content: '';
        display: table;
        clear: both;
      }
      section {
        position: relative;
        width: 100%;
        height: 100%;
        * {
          transition: all $animationTime;
        }
        
        //
        // cena 2
        .scene2 {
          > * {
            position: absolute;
            transition: all $animationTime;
          }
          .script2 {
            top: 50%;
            transform: translate(-100%, -50%);
            background: $brand-details;
            width: 100%;
            opacity: 1;
            padding: 20px;
            h1 {
              display: block;
              @include font-size(2);
              color: #fff;
              padding-left: 60%;
              padding-right: 40px;
              margin: 0;
            }
          }
          .explain {
            position: absolute;
            max-width: 550px;
            right: 10%;
            bottom: 0;
            transform: translate(0, -50%);
            text-align: center;
            opacity: 0;
            h1 {
              color: #fff;
              @include font-size(3);
              letter-spacing: 2px;
              span {
                color: $brand-details;
              }
            }
            .icons {
              display: inline-block;
              width: 60%;
              > div {
                width: 45%;
                &:nth-of-type(1) {
                  float: left;
                }
                &:nth-of-type(2) {
                  float: right;
                }
              }
            }
          }
          .world {
            width: 500px;
            height: 500px;
            background-size: 100% auto;
            top: 50%;
            left: 100px;
            transform: translateY(-50%) rotateZ(0deg);
            transition: all $animationTime;
            @include responsive('laptopS', true) {
              left: 50px;
            }
          }
        }
        
        //
        // scene 4
        .scene4 {
          width: 100%;
          height: 100%;
          background: #fff url("../assets/backgrounds/page3/03.jpg") no-repeat center left;
          background-size: 60% auto;
          
          @include responsive('laptopS', true) {
            background-size: 45% auto;
          }
          
          .script4,
          .script3,
          .script5 {
            position: absolute;
          }
          .script4,
          .script3 {
            right: 0;
            opacity: 0;
            @include font-size(3);
            color: $brand-details;
            font-weight: bold;
            border-left: 2px solid $brand-primary;
            padding-left: 15px;
            
            @include responsive('laptopS', true) {
              @include font-size(2.8);
            }
          }
          .script3 {
            top: 180px;
            max-width: 450px;
          }
          .script4 {
            max-width: 450px;
            top: 340px;
          }
          .script5 {
            background: $brand-details;
            bottom: 100px;
            right: 0;
            transform: translateX(100%);
            @include font-size(4);
            text-transform: none;
            color: #fff;
            padding: 0 20px;
          }
        }
        
        //
        // SCENE 5
        .scene5 {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: url("../assets/backgrounds/page3/05.jpg") no-repeat;
          background-size: cover;
          transform: translateX(100%);
          transition-delay: 0.5s;
          
          .script6 {
            position: absolute;
            top: 50%;
            left: -500px;
            max-width: 40%;
            @include font-size(4);
            background: #fff;
            color: #666;
            font-weight: bold;
            padding: 20px 20px 20px 100px;
            border: 2px solid $brand-details;
            border-left: none;
            @include responsive('laptopS', true) {
              @include font-size(3);
            }
          }
        }
        
        //
        // SCENE 3
        .scene6 {
          height: 100%;
          width: 100%;
          overflow: hidden;
          > * {
            position: absolute;
          }
          video {
            width: 100%;
            height: 110%;
            top: -10%;
            left: 0;
          }
          @include responsive('laptopS', true) {
            background: #000;
            video {
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
        
        //
        // scene 7
        .scene7 {
          width: 100%;
          height: 100%;
          background: url("../assets/backgrounds/page3/shutterstock_495493495.jpg") no-repeat;
          background-size: cover;
          div {
            position: absolute;
          }
          div.script7 {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            background: rgba(#000, 0.5);
            padding: 0 40px;
            h1 {
              @include font-size(3);
              border-top: 2px dotted $brand-details;
              border-bottom: 2px dotted $brand-details;
              padding: 20px 40px;
            }
            @include responsive('laptopS', true) {
              h1 {
                @include font-size(2);
              }
            }
          }
        }
        
        //
        // scene 8
        .scene8 {
          width: 100%;
          height: 100%;
          background: url("../assets/backgrounds/page3/shutterstock_485074453.jpg") no-repeat;
          background-size: cover;
          
          h1 {
            position: absolute;
            top: 30%;
            left: -100%;
            padding: 20px 15px 20px 50px;
            @include font-size(4);
            background: rgba(#000, 0.4);
            color: #fff;
            transition: all $animationTime;
          }
        }
        
        .scene9 {
          width: 100%;
          height: 100%;
          background: url("../assets/backgrounds/page1/07.png") no-repeat;
          background-size: cover;
          
          .script1,
          .middle-image {
            position: absolute;
          }
          .middle-image {
            background: url("../assets/backgrounds/page1/08.png") no-repeat bottom;
            width: 35%;
            height: 100%;
            left: 27%;
            bottom: 0px;
            transform: translateX(-50%);
            opacity: 0;
          }
          
          .script1 {
            width: 45%;
            color: #fff;
            background-color: #1E3144;
            padding: 20px 40px 20px 100px;
            transform-origin: 0 50%;
            transform: scaleX(0) translateX(-10%);
            top: 35%;
            left: 55%;
            h1 {
              @include font-size(2.5);
            }
          }
        }
        
        &.active {
          //
          // scene 2
          .scene2 {
            .script2 {
              transition-delay: 1s;
              transform: translate(0, -50%);
            }
            .world {
              transition-delay: 0s;
              transform: translateY(-50%) rotateZ(360deg);
            }
            .explain {
              transition-delay: 1.8s;
              bottom: 50px;
              opacity: 1;
            }
          }
          
          //
          // SCENE 3
          .scene3 {
            .script3 {
              transition-delay: 0.5s;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          //
          // scene 4
          .scene4 {
            .script4,
            .script3 {
              opacity: 1;
              right: 2%;
            }
            .script3 {
              transition-delay: 0.5s;
            }
            .script4 {
              transition-delay: 2.5s;
            }
            .script5 {
              transform: translateX(0);
              transition-delay: 1.5s;
            }
          }
          
          //
          // scene 5
          .scene5 {
            transform: translateX(0%);
            .script6 {
              transition-delay: 1.5s;
              left: 0;
            }
          }
          
          //
          // SCENE 6
          .scene6 {
            h1 {
              right: 5%;
              transition-delay: 0.5s;
            }
            h1:before,
            h1:after {
              transition-delay: 1s;
              transform: scaleX(1);
            }
          }
          
          //
          // SCENE 8
          .scene8 {
            h1 {
              transition-delay: 1s;
              left: 0;
            }
          }
          
          //
          // SCENE 9
          .scene9 {
            .middle-image {
              animation: imageAnimation 5s infinite ease-in-out alternate;
              opacity: 1;
            }
            .script1 {
              animation: imageAnimation 10s infinite ease-in-out alternate;
            }
          }
        }
      }
    }
  }
  
  .scroll-indicator {
    position: fixed;
    z-index: 8;
    bottom: 10%;
    right: 2%;
    width: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
      width: 10px;
      height: 10px;
      background: $brand-details;
      margin-bottom: 10px;
      border-radius: 50%;
      opacity: 0.2;
      &.active {
        opacity: 1;
      }
    }
  }
  
  @keyframes worldRotation {
    to {
      transform: translateY(-50%) rotate(-360deg);
    }
  }
  
  @keyframes scrollIndicator {
    to {
      transform: translate(-50%, 20%);
    }
  }
  
  @keyframes imageAnimation {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(-20%);
    }
  }
</style>
