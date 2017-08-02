<template>
  <div class="outer-page">
    <div class="svg-container" :class="{'small':smallMenu}">
      <div class="shadow"></div>
      <div class="client-image">
        <img src="../assets/backgrounds/smilie-page20.jpg" alt="Client">
      </div>
      <h1>Precisar</h1>
      <svg-item id="graph"></svg-item>
      <span v-if="!smallMenu"></span>
    </div>
    <!-- INTRO -->
    <section class="page intro" v-if="!started">
      <div class="buttons" @click="start">
        <span>iniciar</span>
      </div>
    </section>
    <!-- INTRO -->
    <!-- ANIMAÇÕES DE PRECISAR -->
    <section class="page precisar" v-if="scene === 0">
      <div class="image-background"></div>
      <div class="white"></div>
      <div class="script1">
        <h1>É Quando surge a necessidade de <span>comprar</span></h1>
      </div>
      <div class="iconButton" @click="startSceneTwo">
        <div>
          <span>Quais as reais necessidades de compra dos nossos clientes?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
      <div class="script3">
        <h1>Preciso de um <span>bom celular</span>, pois utilizo vários aplicativos e um plano que tenha mais internet , para pagar contas, pedir taxi, pedir comida em casa..
        </h1>
      </div>
    </section>
    <!-- ANIMAÇÕES DE PRECISAR -->
    <!-- ANIMAÇÕES DE PESQUISAR -->
    <section class="page pesquisar" v-if="scene === 1">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>é o momento em que o cliente vai perguntar para os amigos, <span>pesquisar na internet, visitar lojas</span>
        </h1>
      </div>
      <div class="script3">
        <h1>Imagine um aplicativo de festas. Poder criar um ambiente de interação com seus <span>convidados tão especiais</span>
        </h1>
      </div>
      <div class="iconButton" @click="startSceneFour">
        <div>
          <span>Como promover uma experiencia de pesquisa que seduza o cliente?</span>
          <span>Clique aqui e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE PESQUISAR -->
    <!-- ANIMAÇÕES DE ESCOLHER -->
    <section class="page escolher" v-if="scene === 2">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>O que pode ser oferecido para que ele sinta que o produto ou serviço seja adequado às <span>necessidades exclusivas dele?</span>
        </h1>
      </div>
      <div class="iconButton" @click="showSvgEls(3,startSceneSix)">
        <div>
          <span class="click">clique e</span>
          <span>Comprar</span>
          <i class="material-icons">&#xE263;</i>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE ESCOLHER -->
    <!-- ANIMAÇÕES DE COMPRAR -->
    <section class="page comprar" v-if="scene === 3">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>Fazer com que o cliente sinta que acertou na escolha</span>
        </h1>
      </div>
      <div class="script2">
        <h1>cadastros ágeis e inteligentes podem fazer a diferença. Facilitar a aquisição, <span>torna-la envolvente e prática</span>
        </h1>
      </div>
      <div class="iconButton" @click="startSceneSeven">
        <div>
          <span>Como podemos facilitar e melhorar a experiencia de compra?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE COMPRAR -->
    <!-- ANIMAÇÕES DE RECEBER -->
    <section class="page receber" v-if="scene === 4">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>Como tornar a entrega do produto ou serviço vendido uma <span>experiência única?</span></h1>
      </div>
      <div class="script2">
        <h1>O cliente pode preferir receber seu produto em <span>qualquer lugar</span>, em casa, trabalho ou na própria loja.
        </h1>
      </div>
      <div class="iconButton" @click="startSceneEight2">
        <div>
          <span>Como tornar a entrega do produto ou serviço vendido uma experiência única?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE RECEBER -->
    <!-- ANIMAÇÕES DE USAR -->
    <section class="page usar" v-if="scene === 5">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>O que a empresa e você podem fazer para melhorar cada vez mais a <span>experiencia do usuário?</span></h1>
      </div>
      <div class="script2">
        <h1>O que a empresa e você podem fazer para melhorar cada vez mais a experiencia do usuário?</h1>
      </div>
      <div class="video">
        <video src="/tim/static/video/vdeo3.m4v" autoplay loop></video>
        <h1>
          Imagine você organizando a tão esperada viagem, utilizando um app que te ajuda a identificar os melhores roteiros e passeios</h1>
      </div>
      <div class="iconButton" @click="startSceneNineTwo">
        <div>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE USAR -->
    <!-- ANIMAÇÕES DE MANTER -->
    <section class="page manter" v-if="scene === 6">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>Manter o cliente encantado com a marca, mesmo quando ele encontra contratempos ou quando <span>ele precisa de algum suporte</span>
        </h1>
      </div>
      <div class="script2">
        <h1><span>Agilidade e Eficiência</span> são as palavras importantes para esse momento</h1>
      </div>
      <div class="script3">
        <h1>Qual é a melhor forma de atende-lo quando ele já usa o produto ou serviço?</h1>
        <h1>O que pode ser feito para que le continue apaixonado e continue confiando na marca?</h1>
      </div>
      <div class="iconButton" @click="showSvgEls(7,startSceneEleven)">
        <div>
          <span class="click">clique para</span>
          <span>recomendar</span>
          <i class="material-icons">&#xE80D;</i>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE MANTER -->
    <!-- ANIMAÇÕES DE RECOMENDAR -->
    <section class="page recomendar" v-if="scene === 7">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1> Recomendar é o resultado de toda experiência que o cliente teve ao <span>longo da jornada de contato com o produto ou serviço</span>
        </h1>
      </div>
      <div class="homem"></div>
      <div class="script2">
        <h1>
          Recomendar é o resultado de toda boa experiência que o cliente teve ao lono da jornada de contato com o produto ou serviço
          <small>Precisamos tornar o cliente um defensor da marca!</small>
        </h1>
      </div>
    </section>
    <!-- ANIMAÇÕES DE RECOMENDAR -->
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  var svgItem = require('../assets/svgs/infinity.svg')
  var Animation = require('../lib/ChainAnimation')
  export default {
    /**
     | ----------------------------------------------
     * DADOS
     | ----------------------------------------------
     **/
    data () {
      return {
        scene: -1,
        smallMenu: false,
        started: false,
        titles: ['precisar', 'pesquisar', 'escolher', 'comprar', 'receber', 'usar', 'manter', 'recomendar']
      }
    },
    
    /**
     | ----------------------------------------------
     * components
     | ----------------------------------------------
     **/
    components: {
      svgItem
    },
    
    /**
     | ----------------------------------------------
     * WHEN COMPONENT IS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 20000)
      this.$store.commit('setCanAdvance', false)
      var gs = document.querySelectorAll('#graph > g')
      for (var i = 0; i < gs.length; i++) {
        var item = gs[i]
        item.style.opacity = 0
      }
//      this.started = true
//      this.scene = 7
//      this.startSceneEleven()
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENTS IS DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animation.destroyAnimations()
    },
    methods: {
      start () {
        this.started = true
        this.showSvgEls(0, this.startSceneOne)
      },
      /**
       | ----------------------------------------------
       * SHOW THE SVG ITEN LIST
       | ----------------------------------------------
       **/
      showSvgEls (index, callback) {
        this.smallMenu = false
        this.scene = -1
        var els = document.querySelectorAll('#graph > g')
        if (!els) {
          return
        }
        
        [].map.call(els, function (el, index) {
          el.setAttribute('class', 'svg-group-element')
          el.style.opacity = 0
        })
        
        var counter = 0
        var vm = this
        
        function enter () {
          let el = els[counter]
          el.style.opacity = 1
          if (++counter < els.length) {
            setTimeout(enter, 75)
          } else {
            setTimeout(function () {
              vm.hideEles(index, callback)
            }, 2000)
          }
        }
        
        enter()
      },
      
      /**
       | ----------------------------------------------
       * HIDE SVG ELEMENTS
       | ----------------------------------------------
       **/
      hideEles (keepIndex, callback) {
        var vm = this
        if (callback === void 0) { callback = null }
        var root = document.querySelector('.svg-container')
        var h1 = root.querySelector('h1')
        var span = root.querySelector('span')
        var g = document.querySelectorAll('#graph > g')
        if (h1) {
          h1.innerText = this.titles[keepIndex]
        }
        if (span) {
          span.style.display = 'block'
          span.innerText = 'Por favor clique em ' + this.titles[keepIndex]
        }
        
        [].map.call(g, function (item, index) {
          if (index !== keepIndex) {
            item.style.opacity = 0.2
            item.onclick = null
          } else {
            item.onclick = function () {
              vm.scene = keepIndex
              callback()
            }
          }
        })
      },
      
      //
      // add listeners
      addListenerSvg (index, cb) {
        var svgC = this.$el.querySelector('.svg-container')
        var h1 = svgC.querySelector('h1')
        h1.innerText = 'VOLTAR'
        this.addClass(svgC, 'animate')
        
        var vm = this
        svgC.onclick = function () {
          this.onclick = null
          vm.showSvgEls(index, cb)
          vm.removeClass(svgC, 'animate')
        }
      },
      
      /**
       | ----------------------------------------------
       * START SCENE ONE
       | ----------------------------------------------
       **/
      startSceneOne (event) {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.precisar'
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
            time: 4000,
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
          }, {
            time: 1000,
            step: 'show',
            selector: '.precisar > .iconButton'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(null)
      },
      startSceneTwo () {
        var anim = [
          {
            time: 0,
            step: 'show',
            selector: '.precisar > .iconButton',
            reverse: true
          },
          {
            time: 500,
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
            time: 500,
            step: 'show',
            selector: '.precisar > .script3'
          }, {
            time: 4000,
            step: 'show',
            selector: '.precisar > .script3'
          }
        ]
        Animation.setAnimations(anim)
        Animation.animationTimeline(function () {
          this.addListenerSvg(1, this.startSceneThree)
        }.bind(this))
      },
      
      /**
       | ----------------------------------------------
       * SCENE 2
       | ----------------------------------------------
       **/
      startSceneThree () {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.pesquisar'
          }, {
            time: 500,
            step: 'step1',
            selector: '.pesquisar > .effects'
          }, {
            time: 500,
            step: 'step1',
            selector: '.pesquisar > .script1'
          }, {
            time: 4000,
            step: 'step2',
            selector: '.pesquisar > .script1'
          }, {
            time: 500,
            step: 'step2',
            selector: '.pesquisar > .effects'
          }, {
            time: 500,
            step: 'show',
            selector: '.pesquisar > .iconButton'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(null)
      },
      startSceneFour () {
        var animations = [
          {
            time: 0,
            step: 'show',
            selector: '.pesquisar > .iconButton',
            reverse: true
          }, {
            time: 500,
            step: 'step4',
            selector: '.pesquisar > .effects'
          }, {
            time: 500,
            step: 'step2',
            selector: '.pesquisar > .image-background'
          }, {
            time: 1000,
            step: 'step5',
            selector: '.pesquisar > .effects'
          }, {
            time: 50,
            step: 'step3',
            selector: '.pesquisar > .script2'
          }, {
            time: 250,
            step: 'step4',
            selector: '.pesquisar > .script2'
          }, {
            time: 1000,
            step: 'step3',
            selector: '.pesquisar > .effects'
          }, {
            time: 500,
            step: 'step1',
            selector: '.pesquisar > .script3'
          }, {
            time: 3000,
            step: 'step1',
            selector: '.pesquisar > .script3'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(function () {
          this.addListenerSvg(2, this.startSceneFive)
        }.bind(this))
      },
      
      /**
       | ----------------------------------------------
       * SCENE 3
       | ----------------------------------------------
       **/
      startSceneFive () {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.escolher'
          }, {
            time: 250,
            step: 'show',
            selector: '.escolher > .script1'
          }, {
            time: 4050,
            step: 'show',
            selector: '.escolher > .script1'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(function () {
          this.addListenerSvg(3, this.startSceneSix)
        }.bind(this))
      },
      
      /**
       | ----------------------------------------------
       * START SCENE 6
       | ----------------------------------------------
       **/
      startSceneSix () {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.comprar'
          }, {
            time: 400,
            step: 'step1',
            selector: '.comprar > .effects'
          }, {
            time: 400,
            step: 'step1',
            selector: '.comprar > .script1'
          }, {
            time: 4000,
            step: 'step1',
            selector: '.comprar > .script1',
            reverse: true
          }, {
            time: 400,
            step: 'step2',
            selector: '.comprar > .effects'
          }, {
            time: 0,
            step: 'step3',
            selector: '.comprar > .effects'
          }, {
            time: 400,
            step: 'show',
            selector: '.comprar > .iconButton'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline()
      },
      startSceneSeven () {
        var animations = [
          {
            time: 0,
            step: 'show',
            selector: '.comprar > .iconButton',
            reverse: true
          }, {
            time: 400,
            step: 'step4',
            selector: '.comprar > .effects'
          }, {
            time: 1000,
            step: 'step2',
            selector: '.comprar > .image-background'
          }, {
            time: 400,
            step: 'step5',
            selector: '.comprar > .effects'
          }, {
            time: 1000,
            step: 'step3',
            selector: '.comprar > .effects'
          }, {
            time: 400,
            step: 'show',
            selector: '.comprar > .script2'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(function () {
          this.addListenerSvg(4, this.startSceneEight)
        }.bind(this))
      },
      
      /**
       | ----------------------------------------------
       * SCENE 7
       | ----------------------------------------------
       **/
      startSceneEight () {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.receber'
          }, {
            time: 400,
            step: 'show',
            selector: '.receber > .script1'
          }, {
            time: 4000,
            step: 'step2',
            selector: '.receber > .script1'
          }, {
            time: 500,
            step: 'show',
            selector: '.receber > .iconButton'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline()
      },
      startSceneEight2 () {
        var animations = [
          {
            time: 0,
            step: 'show',
            selector: '.receber > .iconButton',
            reverse: true
          }, {
            time: 400,
            step: 'step3',
            selector: '.receber > .script1'
          }, {
            time: 400,
            step: 'step1',
            selector: '.receber > .image-background'
          }, {
            time: 1000,
            step: 'step4',
            selector: '.receber > .script1'
          }, {
            time: 1000,
            step: 'show',
            selector: '.receber > .script2'
          }, {
            time: 4000,
            step: 'show',
            selector: '.receber > .script2'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(function () {
          this.addListenerSvg(5, this.startSceneNine)
        }.bind(this))
      },
      
      /**
       | ----------------------------------------------
       * scene 8
       | ----------------------------------------------
       **/
      startSceneNine () {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.usar'
          }, {
            time: 300,
            step: 'step1',
            selector: '.usar > .effects'
          }, {
            time: 300,
            step: 'show',
            selector: '.usar > .script1'
          }, {
            time: 3000,
            step: 'show',
            selector: '.usar > .script1',
            reverse: true
          }, {
            time: 300,
            step: 'step2',
            selector: '.usar > .effects'
          }, {
            time: 500,
            step: 'step3',
            selector: '.usar > .effects'
          }, {
            time: 500,
            step: 'show',
            selector: '.usar > .script2'
          }, {
            time: 4000,
            step: 'show',
            selector: '.usar > .script2',
            reverse: true
          }, {
            time: 500,
            step: 'step4',
            selector: '.usar > .effects'
          }, {
            time: 500,
            step: 'show',
            selector: '.usar > .iconButton'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline()
      },
      startSceneNineTwo () {
        var animations = [
          {
            time: 500,
            step: 'show',
            selector: '.usar > .iconButton',
            reverse: true
          }, {
            time: 500,
            step: 'step5',
            selector: '.usar > .effects'
          }, {
            time: 50,
            step: 'show',
            selector: '.usar > .video'
          }, {
            time: 300,
            step: 'step1',
            selector: '.usar > .video'
          }, {
            time: 1000,
            step: 'step2',
            selector: '.usar > .video'
          }, {
            time: 1000,
            step: 'step3',
            selector: '.usar > .video'
          }, {
            time: 4000,
            step: 'step3',
            selector: '.usar > .video'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(function () {
          this.addListenerSvg(6, this.startSceneTen)
        }.bind(this))
      },
      
      /**
       | ----------------------------------------------
       * SCENE 9
       | ----------------------------------------------
       **/
      startSceneTen () {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.manter'
          }, {
            time: 400,
            step: 'step1',
            selector: '.manter > .effects'
          }, {
            time: 400,
            step: 'step1',
            selector: '.manter > .script1'
          }, {
            time: 4000,
            step: 'step1',
            selector: '.manter > .script1',
            reverse: true
          }, {
            time: 500,
            step: 'step2',
            selector: '.manter > .effects'
          }, {
            time: 100,
            step: 'step2',
            selector: '.manter > .image-background'
          }, {
            time: 1000,
            step: 'step3',
            selector: '.manter > .effects'
          }, {
            time: 500,
            step: 'show',
            selector: '.manter > .script2'
          }, {
            time: 4000,
            step: 'show',
            selector: '.manter > .script2',
            reverse: true
          }, {
            time: 500,
            step: 'step4',
            selector: '.manter > .effects'
          }, {
            time: 500,
            step: 'step3',
            selector: '.manter > .image-background'
          }, {
            time: 1000,
            step: 'step5',
            selector: '.manter > .effects'
          }, {
            time: 1000,
            step: 'show',
            selector: '.manter > .script3 > h1:nth-of-type(1)'
          }, {
            time: 1500,
            step: 'show',
            selector: '.manter > .script3 > h1:nth-of-type(2)'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(function () {
          this.addListenerSvg(7, this.startSceneEleven)
        }.bind(this))
      },
      
      /**
       | ----------------------------------------------
       * SCENE 10
       | ----------------------------------------------
       **/
      startSceneEleven () {
        this.smallMenu = true
        var animations = [
          {
            time: 50,
            step: 'show',
            selector: '.recomendar'
          }, {
            time: 500,
            step: 'step1',
            selector: '.recomendar > .effects'
          }, {
            time: 500,
            step: 'step1',
            selector: '.recomendar > .script1'
          }, {
            time: 4000,
            step: 'step1',
            selector: '.recomendar > .script1',
            reverse: true
          }, {
            time: 500,
            step: 'step2',
            selector: '.recomendar > .effects'
          }, {
            time: 500,
            step: 'step3',
            selector: '.recomendar > .effects'
          }, {
            time: 0,
            step: 'hide',
            selector: '.recomendar > .image-background'
          }, {
            time: 1000,
            step: 'step1',
            selector: '.recomendar > .homem'
          }, {
            time: 500,
            step: 'show',
            selector: '.recomendar > .script2'
          }
        ]
        Animation.setAnimations(animations)
        Animation.animationTimeline(function () {
          this.$store.commit('setCanAdvance', true)
        }.bind(this))
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .outer-page {
    @extend %gradient;
  }
  
  section.page {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  //
  // GRAPH CONTAINER
  .svg-container {
    position: absolute;
    z-index: 3;
    width: 73%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all $animationTime;
    
    .shadow {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }
    svg {
      position: relative;
      z-index: 3;
    }
    
    h1 {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      text-transform: uppercase;
      transform: translate(-50%, -100%);
      background: darken($brand-details, 20%);
      color: #fff;
      @include font-size(1.5);
      border: 1px solid #fff;
      padding: 0 5px;
      border-radius: 7px;
      z-index: 6;
    }
    span {
      display: none;
      width: 200px;
      color: #fff;
      @include font-size(1.5);
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-54%);
      padding: 5px 15px;
      text-align: center;
      text-transform: uppercase;
      background: $brand-details;
      font-weight: bold;
      border-radius: 10px;
    }
    
    &.small {
      width: 150px;
      left: 90%;
      top: 90%;
      .client-image {
        display: none;
      }
      h1 {
        display: block;
      }
      .shadow {
        bottom: 0;
        max-width: 50%;
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
      z-index: 5;
      img {
        width: 100%;
      }
    }
    
    &.animate {
      cursor: pointer;
      h1 {
        animation: animateH1 1s infinite ease-in-out alternate;
      }
    }
  }
  
  //
  // entrar
  .intro {
    background: transparent !important;
    z-index: 5;
    .script1,
    .script2 {
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
    .script2 {
      transform: translateY(-100%);
      opacity: 0;
      &.show {
        transform: translateY(-50%);
        opacity: 1;
      }
    }
    .buttons {
      left: 50%;
      bottom: 50px;
      transform: translateX(-50%);
      width: 250px;
      background: transparent;
      border: 2px solid #fff;
      text-transform: uppercase;
      span {
        color: #fff !important;
      }
      &:hover {
        background: $brand-details;
      }
      &.hide {
        display: none;
      }
    }
  }
  
  .iconButton {
    width: 270px;
    height: 270px;
    text-align: center;
    background: $brand-details;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
    color: #fff;
    border-radius: 50%;
    box-shadow: 2px 4px 4px rgba(#666, 0.4);
    opacity: 0;
    cursor: pointer;
    border: 4px solid #fff;
    animation: buttonAnimation 0.250s infinite ease-in-out alternate;
    &.show {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    > div {
      width: 270px;
      height: 270px;
      display: table-cell;
      vertical-align: middle;
      padding: 20px;
    }
    span {
      display: block;
      @include font-size(1.8);
      border-bottom: 1px solid rgba(#fff, 0.3);
      padding: 5px 0;
      &.click {
        @include font-size(1.2);
      }
      &:nth-of-type(2) {
        font-weight: bold;
      }
    }
    i {
      @include font-size(4);
    }
  }
  
  //
  // scenes defaults
  .precisar,
  .pesquisar,
  .escolher,
  .comprar,
  .receber,
  .usar,
  .manter,
  .recomendar {
    opacity: 0;
    z-index: -1;
    &.show {
      z-index: 2;
      opacity: 1;
    }
  }
  
  //
  //scene precisar
  .precisar {
    .image-background {
      &.step1 {
        background: url("../assets/backgrounds/page20/ref-526149550.jpg") no-repeat;
        background-size: cover;
      }
      &.step2 {
        background: url("../assets/backgrounds/page20/ref-393506530.jpg") no-repeat;
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
        background: rgba(#fff, 0.4);
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
      right: 12%;
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
      background: $brand-details;
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
      left: 0;
      width: 500px;
      background: #fff;
      color: #666;
      transform: translateY(-50%);
      opacity: 0;
      padding-left: 50px;
      &.show {
        opacity: 1;
      }
      h1 {
        padding: 10px 30px;
        @include font-size(2.5);
      }
    }
  }
  
  //
  // pesquisar
  .pesquisar {
    .image-background {
      background: url("../assets/backgrounds/page20/03.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url("../assets/backgrounds/page20/ref-565003417.jpg") no-repeat;
        background-size: cover;
      }
    }
    .effects {
      background: rgba(#fff, 0.8);
      width: 40%;
      height: 0;
      top: 0;
      right: 10%;
      &.step1 {
        height: 100%;
      }
      &.step2 {
        width: 100%;
        height: 40%;
        right: 0;
        background: rgba(#fff, 0.4);
        top: 50%;
        transform: translateY(-50%);
      }
      &.step3 {
        height: 40%;
        top: 50%;
      }
      &.step4 {
        top: 0;
        height: 100%;
        transform: translateY(0);
        background: #fff;
      }
      &.step5 {
        opacity: 0;
      }
    }
    .script1 {
      max-width: 400px;
      top: 50%;
      right: 13%;
      color: #666;
      @include font-size(2);
      opacity: 0;
      &.step1 {
        opacity: 1;
      }
      &.step2 {
        opacity: 0;
      }
    }
    .script2 {
      max-width: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @include font-size(2);
      color: #fff;
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
      opacity: 0;
      visibility: hidden;
      h1 {
        padding: 0 40px;
      }
      &.step1 {
        visibility: visible;
      }
      &.step2 {
        opacity: 1;
      }
      &.step3 {
        opacity: 0;
      }
      &.step4 {
        visibility: hidden;
      }
    }
    .script3 {
      max-width: 550px;
      top: 50%;
      left: -100%;
      background: #fff;
      transform: translateY(-50%);
      @include font-size(2);
      padding: 0 10px 0 70px;
      color: #666;
      &.step1 {
        left: 0;
      }
    }
  }
  
  //
  // ESCOHER
  .escolher {
    .image-background {
      background: url("../assets/backgrounds/page20/05.jpg") no-repeat;
      background-size: cover;
    }
    .script1 {
      top: 50%;
      left: -100%;
      background: #fff;
      max-width: 500px;
      padding: 0 20px 0 50px;
      @include font-size(1.6);
      transform: translateY(-50%);
      color: #666;
      &.show {
        left: 0;
      }
    }
  }
  
  //
  // COMPRAR
  .comprar {
    .image-background {
      background: url("../assets/backgrounds/page20/ref-359139920.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url('../assets/backgrounds/page20/07.jpg') no-repeat;
        background-size: cover;
      }
    }
    .effects {
      width: 35%;
      height: 0;
      background: rgba(#fff, 0.9);
      left: 10%;
      &.step1 {
        height: 100%;
      }
      &.step2 {
        width: 100%;
        left: 0;
        background: #fff;
      }
      &.step3 {
        opacity: 0.4;
        height: 40%;
        top: 50%;
        transform: translateY(-50%);
      }
      &.step4 {
        height: 100%;
        opacity: 1;
        transform: translateY(0);
        top: 0;
      }
      &.step5 {
        opacity: 0;
      }
    }
    .script1 {
      max-width: 30%;
      @include font-size(2);
      color: #666;
      left: 12%;
      top: 40%;
      opacity: 0;
      > div {
        border: 1px solid $brand-details;
        padding: 5px;
        animation: buttonAnimation 0.250s infinite ease-in-out alternate;
        cursor: pointer;
      }
      &.step1 {
        opacity: 1;
      }
    }
    .script2 {
      background: #fff;
      max-width: 500px;
      @include font-size(2);
      color: #666;
      padding: 0 50px 0 20px;
      top: 50%;
      right: -100%;
      transform: translateY(-50%);
      &.show {
        right: 0;
      }
    }
  }
  
  //
  // RECEBER
  .receber {
    .image-background {
      background: url("../assets/backgrounds/page20/08.jpg") no-repeat;
      background-size: cover;
      &.step1 {
        background: url("../assets/backgrounds/page20/ref-513792328.jpg") no-repeat;
        background-size: cover;
      }
    }
    .script1 {
      top: 50%;
      max-width: 600px;
      background: #fff;
      color: #666;
      @include font-size(2);
      padding: 0 20px 0 50px;
      transform: translate(-100%, -50%);
      &.show {
        transform: translate(0%, -50%);
      }
      &.step2 {
        background: #fff;
        opacity: 0.4;
        height: 40%;
        max-width: 100%;
        width: 100%;
        h1 {
          display: none;
        }
      }
      &.step3 {
        height: 100%;
        top: 0;
        transform: translate(0, 0);
        opacity: 1;
      }
      &.step4 {
        opacity: 0;
      }
    }
    .script2 {
      top: 50%;
      right: -100%;
      max-width: 450px;
      h1 {
        @include font-size(2.5);
        background: #fff;
        color: #666;
        padding: 10px 40px;
      }
      &.show {
        right: 0;
      }
    }
  }
  
  //
  // USAR
  .usar {
    .image-background {
      background: url("../assets/backgrounds/page20/09.jpg") no-repeat;
      background-size: cover;
    }
    .effects {
      width: 35%;
      background: rgba(#fff, 0.8);
      height: 0;
      left: 5%;
      &.step1 {
        height: 100%;
      }
      &.step2 {
        width: 100%;
        left: 0;
      }
      &.step3 {
        background: darken($brand-details, 20%);
        opacity: 1;
      }
      &.step4 {
        height: 40%;
        top: 50%;
        background: #fff;
        opacity: 0.4;
        transform: translateY(-50%);
      }
      &.step5 {
        opacity: 0;
      }
    }
    .script1 {
      color: #666;
      @include font-size(2);
      max-width: 30%;
      top: 40%;
      left: 8%;
      opacity: 0;
      &.show {
        opacity: 1;
      }
      div.buttons {
        width: 100%;
        max-width: 100%;
      }
    }
    .video {
      width: 100%;
      height: 100%;
      opacity: 0;
      display: none;
      * {
        transition: all $animationTime;
      }
      video {
        position: absolute;
        width: 100%;
        height: 110%;
        margin-top: -20px;
        z-index: 1;
      }
      h1 {
        position: absolute;
        z-index: 2;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
        max-width: 600px;
        @include font-size(2);
        color: #fff;
        background: rgba(#000, 0.6);
        padding: 5px 40px;
        opacity: 0;
        &:after,
        &:before {
          position: absolute;
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          left: 0;
          transform: scaleX(0);
          transition: all $animationTime;
        }
        &:after {
          bottom: -5px;
          transform-origin: 100% 0;
        }
        &:before {
          top: -5px;
          transform-origin: 0 0;
        }
      }
      &.show {
        display: block;
      }
      &.step1 {
        opacity: 1;
      }
      &.step2 {
        h1 {
          opacity: 1;
        }
      }
      &.step3 {
        h1:after,
        h1:before {
          transform: scaleX(1);
        }
      }
    }
    .script2 {
      top: 50%;
      left: 50%;
      max-width: 70%;
      transform: translate(-50%, -50%);
      color: #fff;
      @include font-size(2);
      text-align: center;
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
  }
  
  //
  // MANTER
  .manter {
    .image-background {
      background: url("../assets/backgrounds/page20/10.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url("../assets/backgrounds/page20/11.jpg") no-repeat;
        background-size: cover;
      }
      &.step3 {
        background: url("../assets/backgrounds/page20/ref-580048861.jpg") no-repeat;
        background-size: cover;
      }
    }
    .effects {
      width: 0;
      height: 30%;
      top: 50%;
      background: #fff;
      &.step1 {
        width: 100%;
      }
      &.step2 {
        height: 100%;
        top: 0;
      }
      &.step3 {
        opacity: 0;
      }
      &.step4 {
        opacity: 1;
      }
      &.step5 {
        opacity: 0;
      }
    }
    .script1 {
      max-width: 500px;
      top: 55%;
      left: 50%;
      transform: translateX(-50%);
      @include font-size(1.5);
      color: #666;
      opacity: 0;
      &.step1 {
        opacity: 1;
      }
    }
    .script2 {
      max-width: 500px;
      @include font-size(1.8);
      top: 30%;
      transform: translateY(-150%);
      left: 20%;
      color: #666;
      opacity: 0;
      &.show {
        transform: translateY(-50%);
        opacity: 1;
      }
    }
    .script3 {
      top: 20%;
      left: 7%;
      @include font-size(1.5);
      padding: 20px;
      max-width: 500px;
      h1 {
        color: $brand-details;
        border-left: 10px double $brand-details;
        padding-left: 10px;
        opacity: 0;
        transition: all $animationTime;
        
        &.show {
          opacity: 1;
        }
      }
    }
  }
  
  //
  // RECOMENDAR
  .recomendar {
    .image-background {
      background: url("../assets/backgrounds/page20/12.jpg") no-repeat;
      background-size: cover;
      &.hide {
        display: none;
      }
    }
    .homem {
      width: 538px;
      height: 709px;
      background: url("../assets/backgrounds/page20/13.png") no-repeat;
      bottom: -100px;
      right: -100%;
      opacity: 0;
      
      &.step1 {
        right: 10%;
        opacity: 1;
      }
    }
    .script1 {
      max-width: 35%;
      @include font-size(2);
      top: 50%;
      left: 7%;
      transform: translateY(-50%);
      color: #666;
      opacity: 0;
      &.step1 {
        opacity: 1;
      }
      > div {
        border: 1px solid $brand-details;
        padding: 5px;
        animation: buttonAnimation 0.250s infinite ease-in-out alternate;
        cursor: pointer;
      }
    }
    .script2 {
      max-width: 500px;
      color: #fff;
      @include font-size(2);
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      opacity: 0;
      &.show {
        opacity: 1;
      }
      small {
        display: block;
        margin-top: 15px;
        color: $brand-details;
      }
    }
    .effects {
      width: 40%;
      height: 0;
      left: 5%;
      background: rgba(#fff, 0.8);
      &.step1 {
        height: 100%;
      }
      &.step2 {
        width: 100%;
        left: 0;
        background: #fff;
      }
      &.step3 {
        opacity: 0;
      }
    }
  }
  
  @keyframes buttonAnimation {
    to {
      background: darken($brand-details, 15%);
      color: #fff;
    }
  }
  
  @keyframes animateH1 {
    to {
      background: $brand-secondary;
    }
  }
</style>
