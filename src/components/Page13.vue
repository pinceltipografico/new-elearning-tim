<template>
  <div class="outer-page">
    <section class="page step1" v-if="!showTodo">
      <div class="script2">
        <h1>criamos uma estrutura o <span>Customer Experience</span></h1>
      </div>
      <div class="blue"></div>
      <div class="text-animation">
        <span v-for="date in dates" v-bind:key="date" class="list-item">{{ date }}</span>
      </div>
      <div class="buttons" @click="startTodo">
        <span>Clique aqui e veja o que já existe desde então:</span>
      </div>
    </section>
    <section class="page todo" v-if="showTodo">
      <div class="todo-container">
        <header>
          <h1>o que já existe desde então</h1>
        </header>
        <transition-group name="list" class="list" tag="ul">
          <li v-for="(item, index) in activeTotoList" :key="item" :data-index="index">
            <input type="checkbox"/>
            <label>{{item}}</label>
          </li>
        </transition-group>
        <footer>
          <span><h3>Melhore a experiência do cliente.</h3></span>
        </footer>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable no-trailing-spaces */
  import { EventBus } from '../events/index'
  var Animations = require('../lib/ChainAnimation')
  export default {
    data () {
      return {
        dates: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        showTodo: false,
        todoList: [
          'Novo processo de lançamento de produtos, serviços e ofertas garantindo o foco na melhor experiência para o cliente',
          'Realização de Focus Group para realizar a escuta ativa das necessidades e desejos dos clientes;',
          'Acompanhamento do NPS ( Net Promoter Score) que indica a intenção do cliente em recomendar a nossa marca;',
          'Guidelines de CX, um guia que indica pilares que todos os colaboradores da TIM devem colocar em pratica no dia a dia para garantir a disseminação do “jeito de pensar” focado na experiência do cliente;',
          'Transformação Digital com a simplificação da experiência de uso dos clientes nos canais digitais;',
          'Loja do Futuro com integração de sistemas melhorando a experiência do colaborador no atendimento ao cliente;',
          'Real Time Decision plataforma que vai permitir abordar o cliente com ofertas e ações de incentivo aderentes as suas necessidades durante seu ciclo de vida com a TIM.'
        ],
        activeTotoList: []
      }
    },
    mounted () {
      this.$store.commit('setPageProgress', 0)
      this.$store.commit('setTotalProgress', 3000)
      setTimeout(function () {
        EventBus.$emit('start-progress')
      }, 500)
//      this.startSceneOne()
      this.showTodo = true
      this.startTodo()
    },
    methods: {
      startTodo () {
        this.showTodo = true
        var vm = this
        var count = 0
        var timer = 2000
        
        function addItemToCheck () {
          if (vm.todoList.length) {
            vm.activeTotoList.push(vm.todoList.shift())
            setTimeout(function () {
              var c = document.querySelector('li[data-index="' + count + '"]')
              vm.addClass(c, 'checked')
              count++
              addItemToCheck()
            }, timer)
          }
        }
        
        setTimeout(addItemToCheck, timer)
      },
      startSceneOne () {
        var vm = this
        var animations = [
          {
            time: 500,
            step: 'show',
            selector: '.blue'
          }, {
            time: 500,
            step: 'show',
            selector: '.text-animation'
          }
        ]
        Animations.setAnimations(animations)
        Animations.animationTimeline(function () {
          removeItem()
        })
        
        function removeItem () {
          if (vm.dates.length - 2) {
            vm.dates.shift()
            setTimeout(removeItem, 50)
          } else {
            animations = [
              {
                time: 500,
                step: 'show',
                selector: '.script2'
              }
            ]
            Animations.setAnimations(animations)
            Animations.animationTimeline(() => {
              setTimeout(() => { showEnd() }, 2000)
            })
          }
        }
        
        function showEnd () {
          animations = [
            {
              time: 500,
              step: 'hide',
              selector: '.script2'
            }, {
              time: 500,
              step: 'step2',
              selector: '.blue'
            }, {
              time: 500,
              step: 'step3',
              selector: '.blue'
            }, {
              time: 500,
              step: 'step1',
              selector: '.text-animation'
            }, {
              time: 500,
              step: 'show',
              selector: '.buttons'
            }
          ]
          Animations.setAnimations(animations)
          Animations.animationTimeline(() => {
            vm.dates.shift()
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  @import "~susy/sass/susy";
  
  section.page {
    &.step1 {
      background: url("../assets/backgrounds/page13-1.jpg") no-repeat;
      background-size: cover;
    }
    &.todo {
      @extend %gradient;
    }
    
    .blue {
      width: 40%;
      height: 0;
      top: 0;
      background: $brand-details;
      left: 180px;
      &.show {
        height: 100%;
      }
      &.step2 {
        left: 0;
      }
      &.step3 {
        width: 100%;
        background: darken($brand-details, 30%);
      }
    }
    
    .text-animation {
      top: 50%;
      left: 100px;
      width: 240px;
      height: 100px;
      overflow: hidden;
      transform: translate(0, -50%);
      zoom: 2;
      opacity: 0;
      span {
        display: block;
        width: 240px;
        height: 100px;
        @include font-size(10);
        line-height: 100px;
        text-align: center;
        transform: translateY(0);
        font-weight: bold;
        color: #fff;
      }
      &.show {
        opacity: 1;
      }
      &.step1 {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
      }
    }
    .script2 {
      color: #fff;
      width: 100%;
      @include font-size(2);
      text-transform: uppercase;
      top: 50%;
      left: 0;
      transform: translate(-100%, -50%);
      background: rgba(#000, 0.6);
      h1 {
        margin-left: 60%;
        max-width: 450px;
      }
      &.show {
        transform: translate(0, -50%);
      }
      &.hide {
        opacity: 0;
      }
    }
    .buttons {
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
    
    .todo-container {
      width: span(8 of 12);
      background: #fff;
      height: auto;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
      header,
      footer {
        text-transform: uppercase;
        text-align: center;
        padding: 10px;
        color: $brand-details;
        border-bottom: 1px solid darken(#fff, 15%);
      }
      ul.list {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          border-bottom: 1px solid darken(#fff, 15%);
          min-height: 40px;
          display: block;
          position: relative;
          input {
            text-align: center;
            width: 60px;
            height: 40px;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            border: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            &:after {
              content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="5"/></svg>')
            }
          }
          label {
            color: #666;
            @include font-size(1.5);
            white-space: pre-line;
            word-break: break-all;
            padding: 15px 60px 15px 15px;
            margin-left: 45px;
            display: block;
            line-height: 1.2;
            transition: color 0.4s;
          }
          &.checked {
            input:after {
              content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="5"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')
            }
            label {
              color: $brand-details;
            }
          }
        }
      }
      footer:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>
