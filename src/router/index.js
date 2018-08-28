import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'header',
      components: {
        header: header,
        content: HelloWorld,
        'side-nav': nav
      }
    }
  ]
})
