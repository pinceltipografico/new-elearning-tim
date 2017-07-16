<template>
  <section class="page gradient">
    <div class="script1">
      <div class="svg-container">
        <div class="client-image">
          <img src="../assets/backgrounds/smilie-page20.jpg" alt="Client">
        </div>
        <graph id="graph"></graph>
        <div class="shadow"></div>
      </div>
      <div class="drop" data-key="need" style="bottom:15px; left: 110px;">
        <div style="margin-left: 160px;"></div>
      </div>
      <div class="drop" data-key="search" style="bottom:90px; left: 0">
        <div style="margin: -50px 0 0 0;"></div>
      </div>
      <div class="drop" data-key="choise" style="top: 134px; left: -5px;">
        <div style="margin:-50px 0 0 0;"></div>
      </div>
      <div class="drop" data-key="buy" style="top: -5px; left: 105px;">
        <div style="margin: -10px 0 0 160px;"></div>
      </div>
      <div class="drop" data-key="receive" style="bottom:15px; left: 515px;">
        <div style="margin: 0 0 0 -100px;"></div>
      </div>
      <div class="drop" data-key="use" style="bottom: 115px; right: -10px;">
        <div style="margin: -60px 0px 0px 40px; width:250px;"></div>
      </div>
      <div class="drop" data-key="keep" style="top: 135px; right:-10px;">
        <div style="margin: -70px 0px 0px 0px;width:200px"></div>
      </div>
      <div class="drop" data-key="share" style="top: -7px; right: 125px;">
        <div style="margin: -5px 0 0 -100px;"></div>
      </div>
    </div>
    <div class="dragElements">
      <div class="drag" data-key="need"> Interação humana e experiências sociais</div>
      <div class="drag" data-key="search"> Comparar Alternativa</div>
      <div class="drag" data-key="choise"> Customizar e Escolher plano</div>
      <div class="drag" data-key="buy"> Cadastro</div>
      <div class="drag" data-key="buy"> Compra e ativação do chip</div>
      <div class="drag" data-key="receive"> Comodidade</div>
      <div class="drag" data-key="use"> Contratação de Serviços (VAS)</div>
      <div class="drag" data-key="use"> Ativação/Desativação de Ofertas e Plugins</div>
      <div class="drag" data-key="use"> Recargas</div>
      <div class="drag" data-key="keep"> Suporte sobre Aparelhos</div>
      <div class="drag" data-key="keep"> Migração de Planos</div>
      <div class="drag" data-key="keep"> Atendimento Ominichannel</div>
      <div class="drag" data-key="share"> Monte sua comunidade TIM</div>
    </div>
    <transition name="fade">
      <div class="message" v-if="showMessage">
        <div class="inner">
          <span>Parabéns você completou o exercício!</span>
        </div>
      </div>
    </transition>
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
        showMessage: false
      }
    },
    /**
     | ----------------------------------------------
     * WHEN COMPONENT WAS READY
     | ----------------------------------------------
     **/
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1'
        }
      ]
      Animations.setAnimations(animations)
      Animations.animationTimeline(function () {})
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
      
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
      }
      
      // on move
      function dragMoveListener (event) {
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
//            self.removeClass(draggableElement, 'drag')
            
            if (!--self.count) {
              self.showMessage = true
            }
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
    },
    /**
     | ----------------------------------------------
     * COMPONENTS USE IN THIS COMPONENT
     | ----------------------------------------------
     **/
    components: {
      interact,
      graph
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
  }
  
  .script1,
  .message {
    z-index: 4;
    position: absolute;
  }
  
  .script1 {
    width: 800px;
    height: 450px;
    color: #fff;
    transform-origin: 0 50%;
    top: 45%;
    left: 50%;
    z-index: 3;
    position: relative;
    transform: translate(-50%, -50%);
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
    bottom: 50px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
  
  .drag, .drop {
    width: 150px;
    text-align: center;
    background: $brand-details;
    font-size: 16px;
    margin: 5px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
  }
  
  .drag {
    @include font-size(1.2);
    float: left;
    width: auto;
  }
  
  .drop {
    background: rgba(#000, 0);
    div {
      font-size: 75%;
      color: $brand-secondary;
      text-transform: none;
      width: auto;
      min-width: 150px;
      text-align: left;
    }
  }
  
  .drag.dropped {
    display: none;
  }
</style>
