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

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/explain',
      name: 'explain',
      component: ExplainMenu
    }, {
      path: '/page1',
      name: 'page1',
      component: Page1
    }, {
      path: '/page2',
      name: 'page2',
      component: Page2
    }, {
      path: '/page4',
      name: 'Menu',
      component: Page4
    }, {
      path: '/page5',
      name: 'Page5',
      component: Page5
    }, {
      path: '/page6',
      name: 'Page6',
      component: Page6
    }, {
      path: '/page7',
      name: 'page7',
      component: Page7
    }, {
      path: '/page8',
      name: 'page8',
      component: Page8
    }, {
      path: '/page9',
      name: 'page9',
      component: Page9
    }, {
      path: '/page10',
      name: 'page10',
      component: Page10
    }, {
      path: '/page11',
      name: 'page11',
      component: Page11
    }, {
      path: '/page12',
      name: 'page12',
      component: Page12
    }, {
      path: '/page13',
      name: 'page13',
      component: Page13
    }, {
      path: '/page15',
      name: 'page15',
      component: Page15
    }, {
      path: '/page16',
      name: 'page16',
      component: Page16
    }, {
      path: '/page17',
      name: 'page17',
      component: Page17
    }, {
      path: '/page18',
      name: 'page18',
      component: Page18
    }
  ]
})
