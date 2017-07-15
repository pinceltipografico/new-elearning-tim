<template>
  <section class="page">
    <div class="script1">
      <div class="drop" data-key="need" style="top: 65%; left: 20%;"></div>
      <div class="drop" data-key="search" style="top: 80%; left: 15%;"></div>
      <div class="drop" data-key="choise" style="top: 40%; left: 10%;"></div>
      <div class="drop" data-key="buy" style="top: 15%; left: 20%;"></div>
      <div class="drop" data-key="receive" style="top: 65%; left: 40%;"></div>
      <div class="drop" data-key="use" style="top: 80%; left: 50%;"></div>
      <div class="drop" data-key="keep" style="top: 40%; left: 55%;"></div>
      <div class="drop" data-key="share" style="top: 15%; left: 45%;"></div>
      <aside>
        <div class="drag" data-key="need" >    Precisar</div>
        <div class="drag" data-key="search" >  Pesquisar</div>
        <div class="drag" data-key="choise" >  Escolher</div>
        <div class="drag" data-key="buy" >     Comprar</div>
        <div class="drag" data-key="receive" > Receber</div>
        <div class="drag" data-key="use" >     Usar</div>
        <div class="drag" data-key="keep" >    Manter</div>
        <div class="drag" data-key="share" >   Recomendar</div>
      </aside>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-trailing-spaces */
  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  import interact from 'interact.js'
  export default {
    name: 'page6',
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
            draggableElement.innerHTML = dropzoneElement.innerHTML
            self.addClass(dropzoneElement, 'dropped')
            self.removeClass(draggableElement, 'drag')

            if (!--self.count) {
              if (self.callback) {
                self.callback()
              }
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
      interact
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";

  section.page {
    background: url("../assets/backgrounds/page-6-1.png") no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  .script1{
    z-index: 4;
    position: absolute;
  }

  .script1 {
    width: 100%;
    height:75%;
    color: #fff;
    background-color: #1E3144;
    padding: 20px 40px 20px 100px;
    transform-origin: 0 50%;
    top: 15%;
    left: 0%;
    z-index: 3;
    position: relative;
    h1 {
      @include font-size(2.5);
    }
    .drag, .drop{
      width: 150px;
      height: 25px;
      text-align: center;
      line-height: normal;
      background-color: #172f57;
      font-size: 16px;
      margin: 5px;
    }
    .drag.dropped{
      display: none;
    }
    .drop{
      position: absolute;
      width: 200px;
      height:50px;
      border: 3px dotted red;
      padding-top: 10px;
    }
    aside{
      top:20%;
      width:20%;
      left:80%;
      height:60%;
      position: absolute;
    }

  }
</style>
