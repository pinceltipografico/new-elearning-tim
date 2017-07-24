<template>
  <section class="page">
    <div class="sections">
      <!-- SCENE 01 -->
      <section class="page-item">
        <div class="scene1">
          <h1>Utilize o scroll do mouse ou as setas do teclado para <span>visualizar o conteúdo</span></h1>
          <div class="icons">
            <div>
              <mouse-scroll></mouse-scroll>
            </div>
            <div>
              <arrows></arrows>
            </div>
          </div>
        </div>
      </section>
      <!-- SCENE 01 -->
      <!-- SCENE 2 -->
      <section class="page-item">
        <div class="scene2">
          <div class="script2"><h1>A gente muda, o mundo muda a gente e a gente muda o mundo.</h1></div>
          <div class="world">
            <world-map></world-map>
          </div>
        </div>
      </section>
      <!-- SCENE 2 -->
      <!-- SCENE 3 -->
      <section class="page-item">
        <div class="scene3">
          <div class="image-market"></div>
          <div class="script3">
            <h1>O mercado está passando por rompimento de paradigmas</h1>
          </div>
        </div>
      </section>
      <!-- SCENE 3 -->
      <!-- SCENE 4 -->
      <section class="page-item">
        <div class="scene4">
          <div class="script4">
            <!-- -->Novas tecnologias mudam profundamente nossa sociedade.<!-- -->
          </div>
          <div class="script5"><!-- -->Facilitam o acesso a informação<!-- -->
          </div>
        </div>
      </section>
      <!-- SCENE 4 -->
      <!-- SCENE 5 -->
      <section class="page-item" style="z-index: 5;">
        <div class="scene5">
          <div class="script6">
            <!-- -->Que impactos isso pode acarretar?<!-- -->
          </div>
        </div>
      </section>
      <!-- SCENE 5 -->
      <!-- SCENE 6 -->
      <section class="page-item">
        <div class="scene6">
          <video src="/tim/static/video/583335745.m4v" autoplay loop></video>
          <div class="script7"><h1>É necessário se adaptar</h1></div>
        </div>
      </section>
      <!-- SCENE 7 -->
      <section class="page-item">
        <div class="scene7">
          <div class="background"></div>
          <div class="script7">
            <h1>E neste desafio, <span>todas as pessoas da organização</span>
              se tornam responsáveis pelo objetivo de <span>conquistar o cliente e mante-lo.</span>
            </h1></div>
        </div>
      </section>
      <!-- SCENE 7 -->
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
  import WorldMap from '../assets/svgs/worldMap.svg'
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
        scroller: null
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
      
      setTimeout(function () {
        this.scroller = new ScrollOnePage('.page', '.scroll-indicator')
        this.scroller.start()
      }.bind(this), 500)
      
      setTimeout(function () {
        this.$store.commit('setCanAdvance', true)
      }.bind(this), 500)
    },
    /**
     | ----------------------------------------------
     * WHEN COMPOONENT WAS DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      if (this.scroller) {
        this.scroller.removeScrollListeners()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/mixins";
  @import "../scss/variables";
  
  section.page {
    @extend %gradient;
    
    .sections {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
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
        // cena 01
        .scene1 {
          position: absolute;
          max-width: 550px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
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
        
        //
        // cena 2
        .scene2 {
          > * {
            position: absolute;
          }
          .world {
            width: 500px;
            height: 500px;
            background-size: 100% auto;
            top: 50%;
            left: 200px;
            transform: translateY(-50%) rotateZ(0deg);
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
        }
        
        //
        // scene 3
        .scene3 {
          > * {
            position: absolute;
          }
          .image-market {
            background: url("../assets/backgrounds/page5/01.jpg") no-repeat;
            background-size: cover;
            opacity: 1;
            width: 100%;
            height: 100%;
          }
          .script3 {
            top: 50%;
            left: 50%;
            background: rgba($brand-secondary, 0.7);
            @include font-size(2);
            transform: translate(-50%, -50%) scale(0);
            padding: 20px;
            text-align: center;
            h1 {
              color: #fff;
            }
          }
        }
        
        //
        // scene 4
        .scene4 {
          width: 100%;
          height: 100%;
          background: #fff url("../assets/backgrounds/page5/03.jpg") no-repeat center left;
          background-size: 60% auto;
          
          .script4,
          .script5 {
            position: absolute;
          }
          .script4 {
            top: 100px;
            right: 0;
            opacity: 0;
            max-width: 450px;
            @include font-size(3);
            color: $brand-details;
            font-weight: bold;
            border-left: 2px solid $brand-primary;
            padding-left: 15px;
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
          background: url("../assets/backgrounds/page5/05.jpg") no-repeat;
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
          .script7 {
            position: absolute;
            background: $brand-details;
            color: #fff;
            width: 400px;
            @include font-size(2);
            top: 50%;
            right: -100%;
            transform: translate(0%, 0%);
            padding: 20px;
            border-radius: 15px;
            h1 {
              text-align: center;
              border-top: 1px solid $brand-details;
              border-bottom: 1px solid $brand-details;
              padding: 10px 0;
            }
          }
        }
        
        //
        // scene 7
        .scene7 {
          width: 100%;
          height: 100%;
          background: url("../assets/backgrounds/page5/07.jpg") no-repeat;
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
          }
        }
        
        &.active {
          //
          // scene 2
          .scene2 {
            .world {
              animation: worldRotation 20s infinite linear;
            }
            .script2 {
              transition-delay: 0.5s;
              transform: translate(0, -50%);
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
            .script4 {
              right: 10%;
              opacity: 1;
              transition-delay: 0.5s;
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
            .script7 {
              transition-delay: 0.5s;
              right: 10%;
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
</style>
