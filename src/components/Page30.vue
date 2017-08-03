<template>
  <section class="page gradient">
    <h1 class="title">Arraste os textos para sua fase apropriada</h1>
    <div class="script1">
      <div class="svg-container">
        <div class="client-image">
          <img src="../assets/backgrounds/smilie-page20.jpg" alt="Client">
        </div>
        <graph id="graph"></graph>
        <div class="shadow"></div>
      </div>
      <div class="drop" data-name="Precisar" data-key="need" style="bottom:15px; left: 110px;">
        <div style="margin-left: 160px;"></div>
      </div>
      <div class="drop" data-name="Pesquisar" data-key="search" style="bottom:90px; left: 0">
        <div style="margin: -50px 0 0 0;"></div>
      </div>
      <div class="drop" data-name="Escolher" data-key="choise" style="top: 134px; left: -5px;">
        <div style="margin:-50px 0 0 0;"></div>
      </div>
      <div class="drop" data-name="Comprar" data-key="buy" style="top: -2px; left: 120px;">
        <div style="margin: -10px 0 0 160px;"></div>
      </div>
      <div class="drop" data-name="Receber" data-key="receive" style="bottom:15px; left: 515px;">
        <div style="margin: 0 0 0 -100px;"></div>
      </div>
      <div class="drop" data-name="Usar" data-key="use" style="bottom: 118px; right: -153px;">
        <div style="margin: -60px 0px 0px 40px; width:250px;"></div>
      </div>
      <div class="drop" data-name="Manter" data-key="keep" style="top: 137px; right:-150px;">
        <div style="margin: -70px 0px 0px 0px;width:200px"></div>
      </div>
      <div class="drop" data-name="Recomendar" data-key="share" style="top: -2px; right: -12px;">
        <div style="margin: -5px 0 0 -100px;"></div>
      </div>
    </div>
    <div class="dragElements">
      <div class="drag" data-key="need"> Preciso trocar meu aparelho</div>
      <div class="drag" data-key="need"> Quero ver mais filmes a caminho do trabalho, preciso de mais internet</div>
      <div class="drag" data-key="search"> Qual o mais novo aparelho?</div>
      <div class="drag" data-key="search"> Onde encontro o aparelho com mais internet?</div>
      <div class="drag" data-key="choise"> Porque a TIM?</div>
      <div class="drag" data-key="buy"> Já decidi, como posso pagar?</div>
      <div class="drag" data-key="buy"> Quero fazer um cadastro rápido</div>
      <div class="drag" data-key="receive"> Quando o meu aparelho vai chegar?</div>
      <div class="drag" data-key="use"> Oba! Estou vendo o meu filme no caminho do trabalho</div>
      <div class="drag" data-key="keep"> Nossa, estou usando bem mais do que imaginava</div>
      <div class="drag" data-key="keep"> opa, acabei de receber uma mensagem com promoção para aumentar meu plano</div>
      <div class="drag" data-key="share">
        Vá pra TIM, eu consigo ver meus filmes favoritos no caminho do trabalho e a conexão é boa e ainda tem um monte de promoções
      </div>
    </div>
    <div class="result-container">
      <div v-for="(result, key) in results" v-bind:key="key" v-if="result.items.length">
        <h2>{{result.name}}</h2>
        <span v-for="item in result.items">{{item}}</span>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var Animations = require('../lib/ChainAnimation')
  var graph = require('../assets/svgs/infinity.svg')
  import { EventBus } from '../events/index'
  import interact from 'interact.js'
  
  export default {
    name: 'page6',
    data () {
      return {
        count: 13,
        results: [
          {
            name: 'Precisar',
            items: []
          }, {
            name: 'Pesquisar',
            items: []
          }, {
            name: 'Escolher',
            items: []
          }, {
            name: 'Comprar',
            items: []
          }, {
            name: 'Receber',
            items: []
          }, {
            name: 'Usar',
            items: []
          }, {
            name: 'Manter',
            items: []
          }, {
            name: 'Recomendar',
            items: []
          }
        ]
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setCanAdvance', false)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
      
      /*
      var divC = this.$el.querySelector('.dragElements')
      var divs = this.$el.querySelectorAll('.dragElements > div')
      divC.innerHTML = ''
      divs.forEach(function (div) {
        console.log(div)
      })
      */
      
      this.startInteract()
    },
    /**
     | ----------------------------------------------
     * COMPONENTS USE IN THIS COMPONENT
     | ----------------------------------------------
     **/
    components: {
      interact,
      graph
    },
    
    methods: {
      getByName (name) {
        var result = null
        for (var i = 0; i < this.results.length; i++) {
          var _name = this.results[i].name
          if (_name === name) {
            result = this.results[i]
            break
          }
        }
        return result
      },
      startInteract () {
        var self = this
        
        // ativa o drag nos elementos
        interact('.drag', {})
          .draggable({
            inertia: true,
            autoScroll: true,
            onmove: dragMoveListener,
            onend: onEnd
          })
        
        // quando parar de arrastar
        function onEnd (event) {
          event.target.style.transform = ''
          event.target.removeAttribute('data-x')
          event.target.removeAttribute('data-y')
          event.target.classList.remove('no-animation')
        }
        
        // on move
        function dragMoveListener (event) {
          event.target.classList.add('no-animation')
          var target, x, y
          target = event.target
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
          
          // translate the element
          target.style.webkitTransform =
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
          
          // update the posiion attributes
          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
        }
        
        // DROP ITEMS
        interact('.drop').dropzone({
          ondrop: function (event) {
            var dropzoneElement, draggableElement
            dropzoneElement = event.relatedTarget
            draggableElement = event.target
            
            var attr1 = dropzoneElement.getAttribute('data-key')
            var attr2 = draggableElement.getAttribute('data-key')
            
            if (attr1 === attr2) {
              var div = draggableElement.querySelector('div')
              div.innerHTML += '<span style="display: block;">' + dropzoneElement.innerHTML + '</span>'
              self.addClass(dropzoneElement, 'dropped')
              
              /*
              var name = draggableElement.getAttribute('data-name')
              var item = self.getByName(name)
              if (item) {
                item.items.push(dropzoneElement.innerHTML)
              }
              */
              
              if (!--self.count) {
                setTimeout(function () {
                  self.$store.commit('setCanAdvance', true)
                }, 1500)
              }
            } else {
              self.removeClass(dropzoneElement, 'can-drop')
            }
          },
          ondragenter: onDragEnter,
          ondragleave: ondragleave,
          ondropactivate: function (event) {
            event.target.classList.add('drop-active')
          },
          ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active')
            event.target.classList.remove('drop-target')
          }
        })
        
        //
        // começar o drag
        function onDragEnter (event) {
          var draggableElement, dropzoneElement
          draggableElement = event.relatedTarget
          dropzoneElement = event.target
          
          // feedback the possibility of a drop
          dropzoneElement.classList.add('drop-target')
          draggableElement.classList.add('can-drop')
        }
        
        //
        //
        function ondragleave (event) {
          // remove the drop feedback style
          event.target.classList.remove('drop-target')
          event.relatedTarget.classList.remove('can-drop')
        }
      }
    },
    /**
     | ----------------------------------------------
     * DESTROYED
     | ----------------------------------------------
     **/
    destroyed () {
      Animations.destroyAnimations()
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  .title {
    color: #fff;
    bottom: 20px;
    left: 50%;
    max-width: 250px;
    text-align: center;
    transform: translateX(-50%);
    @include font-size(1.5);
    text-transform: uppercase;
  }
  
  .script1,
  .message {
    z-index: 4;
    position: absolute;
  }
  
  .result-container {
    display: none;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    h2 {
      color: $brand-details;
      margin-bottom: 5px;
      border-bottom: 1px solid $brand-details;
    }
    span {
      color: #fff;
      display: block;
    }
  }
  
  .script1 {
    width: 650px;
    height: 450px;
    color: #fff;
    transform-origin: 0 50%;
    top: 50%;
    right: 5%;
    z-index: 3;
    transform: translateY(-50%) scale(0.8);
    h1 {
      @include font-size(2.5);
    }
    .svg-container {
      width: 800px;
      position: absolute;
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
    .drop {
      position: absolute;
      width: 150px;
      height: 50px;
      padding-top: 10px;
    }
  }
  
  .dragElements {
    width: 400px;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    position: absolute;
  }
  
  .drag, .drop {
    width: 150px;
    font-size: 16px;
    margin: 0 0 5px 0;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
  }
  
  .drag {
    max-width: 350px;
    @include font-size(1.3);
    float: left;
    width: auto;
    background: #fff;
    color: #666;
    font-weight: 700 !important;
    border: 2px solid $brand-details;
    transition: all $animationTime;
    animation: none;
    &.no-animation {
      background: $brand-details;
      color: #fff;
      transition: none;
      box-shadow: 0 0 10px rgba(#000, 0.8);
    }
    &.can-drop {
      animation: backgroundDrop 0.3s infinite ease-in-out alternate;
    }
  }
  
  .drop {
    background: transparent;
    div {
      display: none;
      span {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: $brand-details;
        text-indent: -99em;
        overflow: hidden;
      }
    }
    &.drop-active {
      border: 2px dotted $brand-details;
      background: rgba($brand-details, 0.3);
    }
    &.drop-target {
      border: 2px dotted $brand-secondary;
    }
  }
  
  .drag.dropped {
    display: none;
  }
  
  @keyframes backgroundDrop {
    to {
      background: $brand-secondary;
    }
  }
</style>
