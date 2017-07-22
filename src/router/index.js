import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ExplainMenu from '@/components/ExplainMenu'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Page6 from '@/components/Page6'
import Page7 from '@/components/Page7'
import Page8 from '@/components/Page8'
import Page9 from '@/components/Page9'
import Page10 from '@/components/Page10'
import Page11 from '@/components/Page11'
import Page12 from '@/components/Page12'
import Page13 from '@/components/Page13'
import Page15 from '@/components/Page15'
import Page16 from '@/components/Page16'
import Page17 from '@/components/Page17'
import Page18 from '@/components/Page18'
import Page20 from '@/components/Page20'
import Page30 from '@/components/Page30'
import Page31 from '@/components/Page31'
import Page33 from '@/components/Page33'
import Page34 from '@/components/Page34'
import Page35 from '@/components/Page35'

Vue.use(Router)

/* eslint-disable no-trailing-spaces */
const router = new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      meta: {pageTitle: 'Olá'},
      component: Hello
    }, {
      path: '/explain',
      name: 'explain',
      meta: {pageTitle: 'Veja<span>como navegar</span>'},
      component: ExplainMenu
    }, {
      path: '/page1',
      name: 'page1',
      meta: {pageTitle: ''},
      component: Page1
    }, {
      path: '/page2',
      name: 'page2',
      meta: {pageTitle: ''},
      component: Page2
    }, {
      path: '/page4',
      name: 'Menu',
      meta: {pageTitle: 'Menu'},
      component: Page4
    }, {
      path: '/page5',
      name: 'Page5',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page5
    }, {
      path: '/page6',
      name: 'Page6',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page6
    }, {
      path: '/page7',
      name: 'page7',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page7
    }, {
      path: '/page8',
      name: 'page8',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page8
    }, {
      path: '/page9',
      name: 'page9',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page9
    }, {
      path: '/page10',
      name: 'page10',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page10
    }, {
      path: '/page11',
      name: 'page11',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page11
    }, {
      path: '/page12',
      name: 'page12',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page12
    }, {
      path: '/page13',
      name: 'page13',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page13
    }, {
      path: '/page15',
      name: 'page15',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page15
    }, {
      path: '/page16',
      name: 'page16',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page16
    }, {
      path: '/page17',
      name: 'page17',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page17
    }, {
      path: '/page18',
      name: 'page18',
      meta: {pageTitle: 'Modulo: <span>O Porquê das mudanças e conceito de CX (Customer Experience)</span>'},
      component: Page18
    }, {
      path: '/page20',
      name: 'page20',
      meta: {pageTitle: 'Módulo:<span>Ciclo de vida do Cliente</span>'},
      component: Page20
    }, {
      path: '/page30',
      name: 'page30',
      meta: {pageTitle: 'Módulo:<span>Ciclo de vida do Cliente</span>'},
      component: Page30
    }, {
      path: '/page31',
      name: 'page31',
      meta: {pageTitle: 'Módulo:<span>Ciclo de vida do Cliente</span>'},
      component: Page31
    }, {
      path: '/page33',
      name: 'page33',
      meta: {pageTitle: 'Módulo:<span>Diretrizes da Geração do Customer Experience</span>'},
      component: Page33
    }, {
      path: '/page34',
      name: 'page34',
      meta: {pageTitle: 'Módulo:<span>Diretrizes da Geração do Customer Experience</span>'},
      component: Page34
    }, {
      path: '/page35',
      name: 'page35',
      meta: {pageTitle: 'Módulo:<span>Diretrizes da Geração do Customer Experience</span>'},
      component: Page35
    }
  ]
})
router.beforeEach((to, from, next) => {
  'use strict'
  var title = document.querySelector('#pageTitle')
  
  function changeName () {
    if (to.meta && to.meta.pageTitle) {
      if (title) {
        title.style.display = 'block'
        title.innerHTML = to.meta.pageTitle
        title.parentNode.style.paddingTop = '0'
      } else {
        setTimeout(changeName, 500)
      }
    } else {
      if (title) {
        title.style.display = 'none'
        title.parentNode.style.paddingTop = '7px'
      }
    }
  }
  
  changeName()
  next()
})
export default router
