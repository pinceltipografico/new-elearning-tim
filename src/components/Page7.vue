<template>
  <section class="page">
    <div class="overlay"></div>
    <div class="script1">
      <h1>
        Pense em uma marca que você <span>admira</span>.
      </h1>
    </div>
    <div class="script2">
      <h1>
        Agora <span>imagine</span> porque você admira essa marca?
      </h1>
    </div>
    <div class="script3">
      <h1>
        Quais as <span>sensações</span> que esta marca lhe propicia?
      </h1>
    </div>
    <div class="script4">
      <h1>
        O que <span>influencia</span> na sua decisão de compra?
      </h1>
    </div>
    <div class="script5">
      <h1>
        Ordene as palavras em ordem de sua prioridade.
      </h1>
    </div>

    <div class="script6" >
      <div class="drag">
        <draggable :list="list.upvotes">
          <transition-group>
            <div v-for="element in list" :key="element.name">
              <div>{{element.name}}</div>
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  /* eslint-disable semi */

  var Animations = require('../lib/ChainAnimation')
  import { EventBus } from '../events/index'
  import draggable from 'vuedraggable'
  export default {
    created () {
      this.$store.commit('toggleIterface', true)
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 15000)
      var animations = [
        {
          time: 500,
          step: 'show',
          selector: '.script1'
        }, {
          time: 3000,
          step: 'show',
          selector: '.script2'
        }, {
          time: 3000,
          step: 'show',
          selector: '.script3'
        }, {
          time: 3000,
          step: 'show',
          selector: '.script4'
        }, {
          time: 2000,
          step: 'hide',
          selector: '.script1'
        }, {
          time: 500,
          step: 'hide',
          selector: '.script2'
        }, {
          time: 500,
          step: 'hide',
          selector: '.script3'
        }, {
          time: 500,
          step: 'hide',
          selector: '.script4'
        }, {
          time: 100,
          step: 'show',
          selector: '.script5'
        }, {
          time: 300,
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
    data () {
      return {
        list: [
          { name: 'Segurança', order: 1 },
          { name: 'Design', order: 2 },
          { name: 'Status', order: 3 },
          { name: 'Preço', order: 4 },
          { name: 'Funcionalidade', order: 5 },
          { name: 'Qualidade', order: 6 }
        ]
      }
    },
    components: {
      draggable
    }
  }
</script>
<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";
  
  section.page {
    background: url("../assets/backgrounds/page-1.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    
    * {
      transition: all $animationTime;
    }
  }
  
  .script1,
  .script2,
  .script3,
  .script4,
  .script5,
  .script6,
  .script7{
    z-index: 4;
    position: absolute;
  }

  .script1,
  .script2,
  .script3,
  .script4,
  .script5,
  .script6 {
    top: 15%;
    left: 100px;
    max-width: 700px;
    @include font-size(2.5);
    color: #fff;
    text-transform: uppercase;
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
      transform: translate(0, -50%) scale(0) rotate(180deg);
    }
  }
  
  .script2 {
    top: 30%;
  }
  
  .script3,
  .script6 {
    top: 45%;

  }
  .script4 {
    top: 60%;
  }
  .script7 {
    top: 80%;
  }

  .script6{
    left: 65%;
    max-width:100%;
  }

  .script6  div{
    width: 250px;
    height: 50px;
    padding: 5px;
    margin: 5px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }

  .script7 {
    &.show {
      width: 80%;
      height: 80px;
      left: 10%;
      background-color: lightblue;
      transform: translate(0%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    to {
      padding: 100px 40px;
    }
  }
</style>
