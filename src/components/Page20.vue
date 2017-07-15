<template>
  <div class="outer-page">
    <div class="svg-container" :class="{'small':smallMenu}">
      <div class="client-image">
        <img src="../assets/backgrounds/smilie-page20.jpg" alt="Client">
      </div>
      <h1>Precisar</h1>
      <svg-item id="graph"></svg-item>
    </div>
    <section class="page intro">
      <div class="script1">
        <h1>Vamos começar pelo <span>ciclo de vida</span> de um cliente.</h1>
      </div>
      <div class="buttons start" @click="startSceneOne">
        <span>Iniciar</span>
        <i class="fa fa-play"></i>
      </div>
    </section>
    <section class="page precisar">
      <div class="image-background"></div>
      <div class="white"></div>
      <div class="script1">
        <h1>É Quando surge a necessidade de <span>comprar</span></h1>
      </div>
      <div class="script2">
        <h1>Quais as reais necessidades de compra dos nossos clientes?</h1>
        <div class="buttons" style="text-align: center;" @click="startSceneTow"><span> clique e veja um exemplo de precisar</span>
        </div>
      </div>
      <div class="script3">
        <h1>Um guia completo para as novas mães em um app, serviço que vai muito além de um plano.</h1>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  var svgItem = require('../assets/svgs/infinity.svg')
  var Animation = require('../lib/ChainAnimation')
  export default {
    data () {
      return {
        smallMenu: false,
        titles: ['precisar', 'pesquisar', 'escolher', 'comprar', 'receber', 'usar', 'mater', 'recomendar']
      }
    },
    components: {
      svgItem
    },
    mounted () {
      this.showSvgEls()
//      this.startSceneOne()
    },
    destroyed () {
    },
    methods: {
      showSvgEls () {
        var els = document.querySelectorAll('#graph > g')
        if (!els) {
          return
        }
        els.forEach(function (el, index) {
          el.setAttribute('class', 'has-animation')
          el.style.opacity = 0
        })
        var counter = 0
        
        function enter () {
          let el = els[counter]
          el.style.opacity = 1
          if (++counter < els.length) {
            setTimeout(enter, 1000)
          } else {
            setTimeout(() => {
              document.querySelector('.start').style.display = 'block'
            }, 2000)
          }
        }
        
        enter()
      },
      hideEles (keepIndex) {
        var h1 = document.querySelector('#graph h1')
        if (h1) {
          h1.innerText = this.titles[keepIndex]
        }
        this.smallMenu = true
      },
      startSceneOne (event) {
        document.querySelector('.start').style.display = 'none'
        this.hideEles(0)
        var animations = [
          {
            time: 0,
            step: 'show',
            selector: '.precisar'
          }, {
            time: 500,
            step: 'hide',
            selector: '.script1'
          }, {
            time: 500,
            step: 'hide',
            selector: '.start'
          }, {
            time: 500,
            step: 'step1',
            selector: '.precisar > .white'
          }, {
            time: 100,
            step: 'step1',
            selector: '.precisar > .image-background'
          }, {
            time: 400,
            step: 'step1',
            selector: '.precisar > .white'
          }, {
            time: 400,
            step: 'step2',
            selector: '.precisar > .white'
          }, {
            time: 400,
            step: 'step3',
            selector: '.precisar > .white'
          }, {
            time: 100,
            step: 'step4',
            selector: '.precisar > .white'
          }, {
            time: 100,
            step: 'show',
            selector: '.precisar > .script1'
          }, {
            time: 3000,
            step: 'step5',
            selector: '.precisar > .white'
          }, {
            time: 500,
            step: 'step1',
            selector: '.precisar > .script1'
          }, {
            time: 1000,
            step: 'show',
            selector: '.precisar > .script2'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(null)
      },
      startSceneTow () {
        var anim = [
          {
            time: 0,
            step: 'show',
            selector: '.precisar > .script2',
            reverse: true
          }, {
            time: 0,
            step: 'step6',
            selector: '.precisar > .white'
          }, {
            time: 400,
            step: 'hide',
            selector: '.precisar > .script1'
          }, {
            time: 0,
            step: 'step2',
            selector: '.precisar > .image-background'
          }, {
            time: 1000,
            step: 'step7',
            selector: '.precisar > .white'
          }, {
            time: 1000,
            step: 'show',
            selector: '.precisar > .script3'
          }
        ]
        Animation.setAnimations(anim)
        Animation.animationTimeline(null)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    @extend %gradient;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .svg-container {
    position: absolute;
    z-index: 3;
    width: 55%;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -50%);
    
    h1 {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      text-transform: uppercase;
      transform: translate(-50%, -100%);
      background: $brand-details;
      color: #fff;
      @include font-size(2);
      padding: 0 5px;
      border-radius: 7px;
    }
    
    &.small {
      width: 200px;
      left: auto;
      right: 2%;
      top: auto;
      bottom: 0;
      .client-image {
        display: none;
      }
      h1 {
        display: block;
      }
    }
    .client-image {
      width: 130px;
      height: 130px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-60%, -50%);
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid $brand-details;
      img {
        width: 100%;
      }
    }
  }
  
  .intro {
    z-index: 2;
    .script1 {
      max-width: 300px;
      color: #ffffff;
      top: 50%;
      left: 100px;
      transform: translateY(-50%);
      h1 {
        @include font-size(3);
      }
      &.hide {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
    .start {
      display: none;
      left: 50%;
      bottom: 50px;
      transform: translateX(-50%);
      &.hide {
        display: none;
      }
    }
  }
  
  .precisar {
    opacity: 0;
    z-index: -1;
    &.show{
      z-index: 2;
      opacity: 1;
    }
    .image-background {
      &.step1 {
        background: url("../assets/backgrounds/page20/02.jpg") no-repeat;
        background-size: cover;
      }
      &.step2 {
        background: url("../assets/backgrounds/page20/01.jpg") no-repeat;
        background-size: cover;
      }
    }
    .white {
      width: 100%;
      height: 100%;
      background: #fff;
      &.step1 {
        opacity: 0;
      }
      &.step2 {
        width: 40%;
        height: 0;
        top: 0;
        right: 10%;
      }
      &.step3 {
        opacity: 1;
      }
      &.step4 {
        height: 100%;
      }
      &.step5 {
        width: 100%;
        height: 50%;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        background: $brand-secondary;
      }
      &.step6 {
        top: 0;
        transform: translateY(0);
        height: 100%;
        background: #fff;
      }
      &.step7 {
        opacity: 0;
      }
    }
    .script1 {
      top: 50%;
      max-width: 35%;
      right: 10%;
      transform: translateY(-50%);
      opacity: 0;
      h1 {
        color: #666;
        @include font-size(3);
        padding: 0 30px;
      }
      &.show {
        opacity: 1;
      }
      &.step1 {
        right: 100%;
        h1 {
          color: #fff;
        }
      }
      &.hide {
        opacity: 0;
      }
    }
    .script2 {
      max-width: 35%;
      left: 50%;
      top: 50%;
      transform: translate(-100%, -50%);
      border-left: 2px solid #fff;
      border-right: 2px solid #fff;
      opacity: 0;
      h1 {
        @include font-size(2);
        padding: 0 30px;
        color: #fff;
        text-align: center;
      }
      &.show {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
    .script3 {
      top: 50%;
      right: 10%;
      width: 350px;
      background: $brand-details;
      color: #fff;
      transform: translateY(-50%);
      border-radius: 10px;
      opacity: 0;
      &.show {
        opacity: 1;
      }
      h1 {
        padding: 10px 30px;
        @include font-size(1.8);
      }
    }
  }
</style>
