import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ExplainMenu from '@/components/ExplainMenu'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
