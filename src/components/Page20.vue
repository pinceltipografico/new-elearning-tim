<template>
  <div class="outer-page page15">
    <div class="svg-container" :class="{'small':smallMenu}">
      <div class="shadow"></div>
      <div class="client-image">
        <img src="../assets/backgrounds/smilie-page20.jpg" alt="Client">
      </div>
      <h1>Precisar</h1>
      <svg-item id="graph"></svg-item>
      <span v-if="!smallMenu"></span>
    </div>
    <!-- ANIMAÇÕES DE PRECISAR -->
    <section class="page precisar" v-show="scene === 0">
      <div class="image-background step2"></div>
      <div class="image-background step1 image1"></div>
      <div class="white"></div>
      <div class="script1">
        <h1>É quando surge a necessidade de <span>comprar</span></h1>
      </div>
      <div class="iconButton" @click="startSceneTwo">
        <div>
          <span>Quais as reais necessidades de compra dos nossos clientes?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
      <div class="script3">
        <h1>Preciso de um <span>bom celular</span>, pois utilizo vários aplicativos e um plano que tenha mais internet , para pagar contas, pedir taxi, pedir comida em casa.
        </h1>
      </div>
    </section>
    <!-- ANIMAÇÕES DE PRECISAR -->
    <!-- ANIMAÇÕES DE PESQUISAR -->
    <section class="page pesquisar" v-show="scene === 1">
      <div class="image-background step2"></div>
      <div class="image-background image1"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>É o momento em que o cliente vai perguntar para os amigos, <span>pesquisar na internet, visitar lojas</span>
        </h1>
      </div>
      <div class="script3">
        <h1>Comparar as principais características dos produtos como, <span>cores, tamanho, funcionalidade,</span>
          atribuição de serviços e valores, utilizando site de pesquisas e ou aplicativos, simuladores de consumo.</h1>
      </div>
      <div class="iconButton" @click="startSceneFour">
        <div>
          <span>Como promover uma experiência de pesquisa que seduza o cliente?</span>
          <span>Clique aqui e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE PESQUISAR -->
    <!-- ANIMAÇÕES DE ESCOLHER -->
    <section class="page escolher" v-show="scene === 2">
      <div class="image-background step2"></div>
      <div class="image-background image1"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>
          Quais são os critérios de escolha? O que será que o fez decidir? O que pode ser oferecido para que ele sinta que o produto ou serviço seja adequado às necessidades <span>exclusivas dele?</span>
        </h1>
      </div>
      <div class="script2">
        <h1>Proporcionar que o cliente experimente o <span>serviço ou produto</span>
          é uma alternativa para ajudá-lo na tomada de decisão e uma oportunidade de avaliar previamente se as necessidades serão atendidas.
        </h1>
      </div>
      <div class="iconButton" @click="startSceneFiveTwo">
        <div>
          <span>O que será que o fez decidir?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE ESCOLHER -->
    <!-- ANIMAÇÕES DE COMPRAR -->
    <section class="page comprar" v-show="scene === 3">
      <div class="image-background step2"></div>
      <div class="image-background image1"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>Fazer com que o cliente sinta que acertou na escolha</span>
        </h1>
      </div>
      <div class="script2">
        <h1>Cadastros ágeis e inteligentes podem fazer a diferença. Facilitar a aquisição, <span>torná-la envolvente e prática.</span>
        </h1>
      </div>
      <div class="iconButton" @click="startSceneSeven">
        <div>
          <span>Como podemos facilitar e melhorar a experiência de compra?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE COMPRAR -->
    <!-- ANIMAÇÕES DE RECEBER -->
    <section class="page receber" v-show="scene === 4">
      <div class="image-background step1"></div>
      <div class="image-background image1"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>Como tornar a entrega do produto ou serviço uma <span>experiência única?</span></h1>
      </div>
      <div class="script2">
        <h1>O cliente pode preferir receber seu produto em <span>qualquer lugar</span>, em casa, trabalho ou na própria loja.
        </h1>
      </div>
      <div class="iconButton" @click="startSceneEight2">
        <div>
          <span>Como tornar a entrega do produto ou serviço uma experiência única?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE RECEBER -->
    <!-- ANIMAÇÕES DE USAR -->
    <section class="page usar" v-show="scene === 5">
      <div class="image-background step2"></div>
      <div class="image-background image1"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>É onde o cliente estará em contato com o que <span>imaginou receber</span></h1>
      </div>
      <div class="video">
        <video src="static/video/vdeo3.m4v" autoplay loop></video>
        <h1>
          Imagine você organizando a tão esperada viagem, utilizando um app que te ajuda a identificar os melhores roteiros e passeios</h1>
      </div>
      <div class="script2">
        Aproveitar cada minuto e tornar os <span>momentos marcantes!</span>
      </div>
      <div class="iconButton" @click="startSceneNineTwo">
        <div>
          <span>O que a empresa e você podem fazer para melhorar cada vez mais a experiência do usuário?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE USAR -->
    <!-- ANIMAÇÕES DE MANTER -->
    <section class="page manter" v-show="scene === 6">
      <div class="image-background step3"></div>
      <div class="image-background step2 image2"></div>
      <div class="image-background image1"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1>Manter o cliente encantado com a marca, mesmo quando ele se depara com contratempos ou quando <span>ele precisa de algum suporte</span>
        </h1>
      </div>
      <div class="script2">
        <h1><span>Agilidade e Eficiência</span> são as palavras importantes para esse momento</h1>
      </div>
      <div class="script3">
        <h1>
          Todos buscamos uma solução prática e rápida para esclarecer dúvidas, que pode acontecer em chat online, por exemplo. Sentir-se acolhido, independentemente do canal, <span>sua necessidade será atendida.</span>
        </h1>
      </div>
      <div class="iconButton" @click="startSceneTenTwo">
        <div>
          <span>Qual é a melhor forma de atendê-lo quando ele já usa o produto ou serviço?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE MANTER -->
    <!-- ANIMAÇÕES DE RECOMENDAR -->
    <section class="page recomendar" v-show="scene === 7">
      <div class="image-background"></div>
      <div class="effects"></div>
      <div class="script1">
        <h1> Recomendar é o resultado de toda experiência que o cliente teve ao <span>longo da jornada de contato com o produto ou serviço</span>
        </h1>
      </div>
      <div class="homem"></div>
      <div class="script2">
        <h1>
          <small>Precisamos tornar o cliente um defensor da marca!</small>
        </h1>
      </div>
      <div class="iconButton" @click="startSceneElevenTwo">
        <div>
          <span>O que mais podemos fazer para nos diferenciar?</span>
          <span>Clique e veja um exemplo</span>
        </div>
      </div>
    </section>
    <!-- ANIMAÇÕES DE RECOMENDAR -->
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  /* eslint-disable no-unused-vars */
  import anime from 'animejs'
  import { EventBus } from '../events/index'
  
  var svgItem = require('../assets/svgs/infinity.svg')
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
        titles: ['precisar', 'pesquisar', 'escolher', 'comprar', 'receber', 'usar', 'manter', 'recomendar'],
        TimeLineCtrl: null
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
      this.$store.commit('setCanAdvance', false)
      var gs = document.querySelectorAll('#graph > g')
      for (var i = 0; i < gs.length; i++) {
        var item = gs[i]
        item.style.opacity = 0
      }
      
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
      
      this.start()
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
      this.stopAudio()
      EventBus.$off('pause')
      EventBus.$off('rewind')
    },
    methods: {
      start () {
        this.started = true
        var vm = this
        this.playAudio('scene15_1', 'static/subtitles/page15.json', null, null)
        setTimeout(function () {
          vm.showSvgEls(0, vm.startSceneOne)
        }, 10000)
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
        if (keepIndex < 0) {
          return
        }
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
      startSceneOne () {
        this.smallMenu = true
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        
        this.TimelineCtrl
          .add({
            targets: '.precisar',
            opacity: 1,
            duration: 300
          })
          .add({
            targets: '.precisar > .white',
            opacity: 0,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.precisar > .white',
            opacity: [{value: 1, delay: 1000}],
            width: [{value: '400px', delay: 1000}],
            right: [{value: '10%', delay: 1000}],
            height: [{value: 0}, {value: '100%', delay: 1500}],
            duration: 300,
            easing: 'linear',
            offset: '+=300'
          })
          .add({
            targets: '.precisar > .script1',
            opacity: [{value: 1}, {value: 0, delay: 14000}],
            duration: 300,
            easing: 'linear',
            offset: '+=1500'
          })
          .add({
            targets: '.precisar > .white',
            right: 0,
            width: '1280',
            height: [{value: '50%', delay: 1000}],
            top: '50%',
            translateY: [0, '-50%'],
            opacity: 0.4,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.precisar > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
        
        this.playAudio('precisar1', 'static/subtitles/page15_precisar1.json', null, null)
      },
      startSceneTwo () {
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        
        this.TimelineCtrl
          .add({
            targets: '.precisar > .iconButton',
            opacity: 0,
            duration: 300,
            easing: 'linear',
            begin: function () {
              var el = document.querySelector('.precisar > .iconButton')
              el.style.display = 'block'
            },
            complete: function () {
              var el = document.querySelector('.precisar > .iconButton')
              el.style.display = 'none'
            }
          })
          .add({
            targets: '.precisar > .white',
            height: '100%',
            opacity: [{value: 1}, {value: 0, delay: 1000}],
            top: 0,
            translateY: ['-50%', '0%'],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.precisar > .image1',
            opacity: 0,
            duration: 10,
            offset: '-=500'
          })
          .add({
            targets: '.precisar > .script3',
            opacity: 1,
            duration: 300,
            offset: '+=13000'
          })
        this.playAudio('precisar2', 'static/subtitles/page15_precisar2.json', null, function () {
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
        
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        this.TimelineCtrl
          .add({
            targets: '.pesquisar',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.pesquisar > .effects',
            height: ['0%', '100%'],
            duration: 300,
            easing: 'linear',
            offset: '+=1000'
          })
          .add({
            targets: '.pesquisar > .script1',
            opacity: [{value: 1}, {value: 0, delay: 14000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.pesquisar > .effects',
            width: ['40$', '100%'],
            height: [{value: '40%', delay: 1000}],
            right: 0,
            top: [{value: '50%', delay: 1000}],
            translateY: [{value: '0%'}, {value: '-50%', delay: 1000}],
            opacity: [{value: 1}, {value: 0.4, delay: 1000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.pesquisar > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
        this.playAudio('pesquisar1', 'static/subtitles/page15_pesquisar1.json', null, null)
      },
      startSceneFour () {
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        this.TimelineCtrl
          .add({
            targets: '.pesquisar > .iconButton',
            begin: function () {
              var el = document.querySelector('.pesquisar > .iconButton')
              el.style.display = 'block'
            },
            complete: function () {
              var el = document.querySelector('.pesquisar > .iconButton')
              el.style.display = 'none'
            },
            opacity: 0,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.pesquisar > .effects',
            height: '100%',
            opacity: [{value: 1}, {value: 0, delay: 1000}],
            backgroundColor: '#ffffff',
            translateY: 0,
            top: 0,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.pesquisar > .image1',
            opacity: 0,
            duration: 100,
            offset: '-=500'
          })
          .add({
            targets: '.pesquisar > .script3',
            left: ['-100%', '0%'],
            duration: 400,
            offset: '+=3000',
            easing: 'linear'
          })
        
        this.playAudio('pesquisar2', 'static/subtitles/page15_pesquisar2.json', null, function () {
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
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        this.TimelineCtrl
          .add({
            targets: '.escolher',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.escolher > .script1',
            left: ['-100%', '0%'],
            width: [{value: '550px'}, {value: '1280px', delay: 13000}],
            height: [{value: '230px'}, {value: '300px', delay: 13000}],
            opacity: [{value: 1}, {value: 0.4, delay: 13000}],
            backgroundColor: '#fff',
            duration: 300,
            easing: 'linear',
            offset: '+=5000'
          })
          .add({
            targets: '.escolher > .script1 h1',
            opacity: 0,
            duration: 300,
            offset: '-=500'
          })
          .add({
            targets: '.escolher > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            duration: 300,
            easing: 'linear',
            offset: '+=500'
          })
        this.playAudio('escolher1', 'static/subtitles/page15_escolher1.json', null, null)
      },
      startSceneFiveTwo () {
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        this.TimelineCtrl
          .add({
            targets: '.escolher > .iconButton',
            opacity: 0,
            duration: 300,
            easing: 'linear',
            begin: function () {
              var el = document.querySelector('.escolher > .iconButton')
              el.style.display = 'block'
            },
            complete: function () {
              var el = document.querySelector('.escolher > .iconButton')
              el.style.display = 'none'
            }
          })
          .add({
            targets: '.escolher > .script1',
            height: '100%',
            opacity: [{value: 1}, {value: 0, delay: 1500}],
            translateY: 0,
            top: 0,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.escolher > .image1',
            opacity: 0,
            duration: 10,
            offset: '-=400'
          })
          .add({
            targets: '.escolher > .script2',
            top: ['170%', '70%'],
            opacity: 1,
            duration: 300,
            easing: 'linear',
            offset: '+=1000'
          })
        
        this.playAudio('escolher2', 'static/subtitles/page15_escolher2.json', null, function () {
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
        this.TimelineCtrl = anime.timeline({
          loop: false
        })
        this.TimelineCtrl
          .add({
            targets: '.comprar',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.comprar > .effects',
            height: ['0%', '100%'],
            duration: 300,
            easing: 'linear',
            offset: '+=300'
          })
          .add({
            targets: '.comprar > .script1',
            opacity: [{value: 1}, {value: 0, delay: 7000}],
            duration: 300,
            easing: 'linear',
            offset: '+=300'
          })
          .add({
            targets: '.comprar > .effects',
            left: '0%',
            width: ['35%', '100%'],
            opacity: [{value: 0.4, delay: 1000}],
            height: [{value: '40%', delay: 1000}],
            top: [{value: '0%'}, {value: '50%', delay: 1000}],
            translateY: [{value: '0%'}, {value: '-50%', delay: 1000}],
            duration: 300,
            easing: 'linear',
            offset: '+=300'
          })
          .add({
            targets: '.comprar > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
        
        this.playAudio('comprar1', 'static/subtitles/page15_comprar1.json', null, null)
      },
      startSceneSeven () {
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.comprar > .iconButton',
            opacity: 0,
            duration: 300,
            easing: 'linear',
            begin: function () {
              var el = document.querySelector('.comprar > .iconButton')
              el.style.display = 'block'
            },
            complete: function () {
              var el = document.querySelector('.comprar > .iconButton')
              el.style.display = 'none'
            }
          })
          .add({
            targets: '.comprar > .effects',
            background: '#fff',
            height: '100%',
            top: ['50%', '0%'],
            translateY: ['-50%', '0%'],
            opacity: [{value: 1}, {value: 0, delay: 1000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.comprar > .image1',
            opacity: 0,
            duration: 100,
            offset: '-=500'
          })
          .add({
            targets: '.comprar > .script2',
            right: ['-100%', '0%'],
            duration: 300,
            easing: 'linear'
          })
        
        this.playAudio('comprar2', 'static/subtitles/page15_comprar2.json', null, function () {
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
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.receber',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.receber > .script1',
            translateX: ['-100%', '0%'],
            translateY: ['-50%', '-50%'],
            background: [{value: '#fff'}],
            opacity: [{value: 1}, {value: 0.4, delay: 14000}],
            height: [{value: '28%'}, {value: '30%', delay: 14000}],
            width: [{value: '50%'}, {value: '100%', delay: 14000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.receber > .script1 h1',
            opacity: 0,
            duration: 100,
            easing: 'linear',
            offset: '-=500'
          })
          .add({
            targets: '.receber > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
        this.playAudio('receber1', 'static/subtitles/page15_receber1.json', null, null)
      },
      startSceneEight2 () {
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.receber > .iconButton',
            opacity: 0,
            duration: 300,
            easing: 'linear',
            begin: function () {
              var el = document.querySelector('.receber > .iconButton')
              el.style.display = 'block'
            },
            complete: function () {
              var el = document.querySelector('.receber > .iconButton')
              el.style.display = 'none'
            }
          })
          .add({
            targets: '.receber > .script1',
            height: '100%',
            opacity: [{value: 1}, {value: 0, delay: 1000}],
            translateY: ['-50%', '0%'],
            top: 0,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.receber > .image1',
            opacity: 0,
            duration: 10,
            offset: '-=500'
          })
          .add({
            targets: '.receber > .script2',
            opacity: 1,
            right: ['-100%', '0%'],
            duration: 400,
            easing: 'linear'
          })
        this.playAudio('receber2', 'static/subtitles/page15_receber2.json', null, function () {
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
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.usar',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.usar > .effects',
            height: ['0%', '100%'],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.usar > .script1',
            opacity: [{value: 1}, {value: 0, delay: 18000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.usar > .effects',
            left: ['5%', '0%'],
            width: ['35%', '100%'],
            opacity: [{value: 1}, {value: 0.4, delay: 1000}],
            height: [{value: '100%'}, {value: '40%', delay: 1000}],
            top: [{value: '0%'}, {value: '50%', delay: 1000}],
            translateY: [{value: '0%'}, {value: '-50%', delay: 1000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.usar > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
        this.playAudio('usar1', 'static/subtitles/page15_usar1.json', null, null)
      },
      startSceneNineTwo () {
        var vm = this
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.usar > .iconButton',
            opacity: 0,
            duration: 300,
            easing: 'linear',
            begin: function () {
              var el = document.querySelector('.usar > .iconButton')
              el.style.display = 'block'
            },
            complete: function () {
              var el = document.querySelector('.usar > .iconButton')
              el.style.display = 'none'
            }
          })
          .add({
            targets: '.usar > .effects',
            opacity: 1,
            height: '100%',
            top: '0%',
            translateY: '0%',
            background: '#ffffff',
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.usar > .video',
            opacity: [{value: 1}, {value: 0, delay: 8000}],
            duration: 300,
            easing: 'linear',
            begin: function () {
              var el = document.querySelector('.usar > .video')
              el.style.display = 'block'
            },
            complete: function () {
              var el = document.querySelector('.usar > .video')
              el.style.display = 'none'
            },
            offset: '+=500'
          })
          .add({
            targets: '.usar > .video h1',
            opacity: 1,
            duration: 300,
            easing: 'linear',
            begin: function () {
              var el = document.querySelector('.usar > .video')
              vm.removeClass(el, 'step3')
            },
            complete: function () {
              setTimeout(function () {
                var el = document.querySelector('.usar > .video')
                vm.addClass(el, 'step3')
              }, 1000)
            },
            offset: '-=8000'
          })
          .add({
            targets: '.usar > .image1',
            opacity: 0,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.usar > .effects',
            opacity: 0,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.usar > .script2',
            opacity: [0, 1],
            duration: 300,
            easing: 'linear'
          })
        this.playAudio('usar2', 'static/subtitles/page15_usar2.json', null, function () {
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
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.manter',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.manter > .effects',
            width: ['0%', '100%'],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.manter > .script1',
            opacity: [{value: 1}, {value: 0, delay: 10000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.manter > .effects',
            top: ['50%', '0%'],
            opacity: [{value: 1}, {value: 0, delay: 1000}],
            height: ['30%', '100%'],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.manter > .image1',
            opacity: 0,
            duration: 100,
            offset: '-=500'
          })
          .add({
            targets: '.manter > .script2',
            opacity: [{value: 1}, {value: 0, delay: 15000}],
            translateY: '-50%',
            duration: 300,
            easing: 'linear',
            offset: '+=6000'
          })
          .add({
            targets: '.manter > .effects',
            top: ['0%', '50%'],
            opacity: 0.4,
            height: '40%',
            translateY: '-50%',
            easing: 'linear',
            duration: 300
          })
          .add({
            targets: '.manter > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            easing: 'linear',
            duration: 300
          })
        this.playAudio('manter1', 'static/subtitles/page15_manter1.json', null, null)
      },
      startSceneTenTwo () {
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.manter > .iconButton',
            opacity: 0,
            zIndex: -2,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.manter > .effects',
            height: '100%',
            top: '0%',
            translateY: '0%',
            opacity: [{value: 1}, {value: 0, delay: 2000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.manter > .image2',
            opacity: 0,
            duration: 100,
            offset: '-=500'
          })
          .add({
            targets: [
              '.manter > .script3 > h1:nth-of-type(1)',
              '.manter > .script3 > h1:nth-of-type(1)'
            ],
            opacity: 1,
            duration: 300,
            easing: 'linear',
            delay: function (el, i) {
              return 1000 * i
            }
          })
        this.playAudio('manter2', 'static/subtitles/page15_manter2.json', null, function () {
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
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.recomendar',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.recomendar > .effects',
            height: '100%',
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.recomendar > .script1',
            opacity: [{value: 1}, {value: 0, delay: 15000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.recomendar > .effects',
            width: ['40%', '100%'],
            height: ['100%', '40%'],
            left: ['5%', '0%'],
            top: ['0%', '50%'],
            translateY: ['-50%'],
            backgroundColor: '#fff',
            opacity: 0.4,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.recomendar > .iconButton',
            translateY: ['0%', '-50%'],
            translateX: ['-50%', '-50%'],
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
        this.playAudio('recomendar1', 'static/subtitles/page15_recomendar1.json', null, null)
      },
      startSceneElevenTwo () {
        this.TimelineCtrl = anime.timeline()
        this.TimelineCtrl
          .add({
            targets: '.recomendar > .iconButton',
            opacity: 0,
            zIndex: -2,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.recomendar > .effects',
            top: ['50%', '0%'],
            height: '100%',
            translateY: ['-50%', '0'],
            opacity: [{value: 1}, {value: 0, delay: 1000}],
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.recomendar > .image-background',
            opacity: 0,
            duration: 100,
            offset: '-=500'
          })
          .add({
            targets: '.recomendar > .homem',
            right: ['-100%', '10%'],
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
          .add({
            targets: '.recomendar > .script2',
            opacity: 1,
            duration: 300,
            easing: 'linear'
          })
        this.playAudio('recomendar2', 'static/subtitles/page15_recomendar2.json', function (pos) {
          if (pos === 11) {
            this.$store.commit('setCanAdvance', true)
            var currentId = this.getCurrentAudioId()
            this.$store.state.audio.pause(currentId)
          }
        }.bind(this), null)
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
      /*bottom: 20px;*/
      top:80%;
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
      top:70%;
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
      top: 85%;
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
  }
  
  //
  //scene precisar
  .precisar {
    .image-background {
      &.step1 {
        background: url("../assets/backgrounds/page15/shutterstock_526149550.jpg") no-repeat;
        background-size: cover;
      }
      &.step2 {
        background: url("../assets/backgrounds/page15/shutterstock_393506530.jpg") no-repeat;
        background-size: cover;
      }
    }
    .white {
      width: 100%;
      height: 100%;
      background: #fff;
    }
    .script1 {
      top: 50%;
      max-width: 35%;
      right: 8%;
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
      transition: opacity $animationTime;
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
      background: url("../assets/backgrounds/page15/shutterstock_392372638.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url("../assets/backgrounds/page15/shutterstock_505539793.jpg") no-repeat;
        background-size: cover;
      }
    }
    .effects {
      background: rgba(#fff, 0.8);
      width: 40%;
      height: 0;
      top: 0;
      right: 10%;
    }
    .script1 {
      max-width: 400px;
      top: 50%;
      right: 13%;
      color: #666;
      @include font-size(2);
      opacity: 0;
    }
    .script3 {
      max-width: 550px;
      top: 50%;
      left: -100%;
      background: #fff;
      transform: translateY(-50%);
      @include font-size(1.5);
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
      background: url("../assets/backgrounds/page15/shutterstock_567726835.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url("../assets/backgrounds/page15/shutterstock_326967050.jpg") no-repeat;
        background-size: cover;
      }
    }
    .script1 {
      top: 50%;
      left: -100%;
      background: #fff;
      padding: 0 20px 0 50px;
      @include font-size(1.5);
      transform: translateY(-50%);
      color: #666;
      &.show {
        left: 0;
      }
    }
    .script2 {
      top: 150%;
      transform: translateY(-50%);
      h1 {
        background: #fff;
        @include font-size(2);
        max-width: 50%;
        color: #666;
        padding: 5px 50px;
      }
    }
  }
  
  //
  // COMPRAR
  .comprar {
    .image-background {
      background: url("../assets/backgrounds/page15/shutterstock_359139920.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url('../assets/backgrounds/page15/shutterstock_163505738.jpg') no-repeat;
        background-size: cover;
      }
    }
    .effects {
      width: 35%;
      height: 0;
      background: rgba(#fff, 0.9);
      left: 10%;
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
      background: url("../assets/backgrounds/page15/shutterstock_361009364.jpg") no-repeat;
      background-size: cover;
      &.step1 {
        background: url("../assets/backgrounds/page15/shutterstock_513792328.jpg") no-repeat;
        background-size: cover;
      }
    }
    .script1 {
      top: 50%;
      background: #fff;
      color: #666;
      @include font-size(2);
      padding: 0 20px 0 50px;
      transform: translate(-100%, -50%);
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
    }
  }
  
  //
  // USAR
  .usar {
    .image-background {
      background: url("../assets/backgrounds/page15/shutterstock_599683739.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url("../assets/backgrounds/page15/shutterstock_656349286.jpg") no-repeat;
        background-size: cover;
      }
    }
    .effects {
      width: 35%;
      background: rgba(#fff, 0.8);
      height: 0;
      left: 5%;
    }
    .script1 {
      color: #666;
      @include font-size(2);
      max-width: 30%;
      top: 40%;
      left: 8%;
      opacity: 0;
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
      max-width: 500px;
      transform: translate(0, -50%);
      color: #fff;
      @include font-size(3);
      text-align: center;
      opacity: 0;
      background: $brand-details;
      padding: 10px;
      border-radius: 5px;
    }
  }
  
  //
  // MANTER
  .manter {
    .image-background {
      background: url("../assets/backgrounds/page15/shutterstock_505576180.jpg") no-repeat;
      background-size: cover;
      &.step2 {
        background: url("../assets/backgrounds/page15/shutterstock_393304039.jpg") no-repeat;
        background-size: cover;
      }
      &.step3 {
        background: url("../assets/backgrounds/page15/shutterstock_580048861.jpg") no-repeat;
        background-size: cover;
      }
    }
    .effects {
      width: 0;
      height: 30%;
      top: 50%;
      background: #fff;
      &.step4 {
        height: 100%;
        top: 0;
        transform: translateY(0);
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
      h1 {
        margin: 0;
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
    }
    .script3 {
      top: 20%;
      left: 0;
      @include font-size(1.5);
      max-width: 50%;
      h1 {
        color: #666;
        padding: 10px 60px;
        opacity: 0;
        transition: all $animationTime;
        background: #fff;
        
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
      background: url("../assets/backgrounds/page15/shutterstock_521627071.jpg") no-repeat;
      background-size: cover;
      &.hide {
        display: none;
      }
    }
    .homem {
      width: 538px;
      height: 709px;
      background: url("../assets/backgrounds/page15/13.png") no-repeat;
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
      max-width: 300px;
      color: #fff;
      @include font-size(2.5);
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
      transition: all $animationTime;
      &.step1 {
        height: 100%;
      }
      &.step2 {
        width: 100%;
        height: 40%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        opacity: 0.4;
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
