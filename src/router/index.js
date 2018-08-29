import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import nav from '@/components/nav'
import h1 from '@/components/h1'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'header',
      components: {
        header: header,
        viewsContent: HelloWorld,
        'side-nav': nav
      }
    },{
      path:"/h1",
      components:{
        default:h1
      }
    },{
      path:"/nav",
      components:{
        default: header,
      }
    }
  ]
})
