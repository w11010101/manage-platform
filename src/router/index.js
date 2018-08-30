import Vue from 'vue'
import Router from 'vue-router'
import layoutView from '@/components/layout/layout'

// children

import HelloWorld from '@/components/children/HelloWorld'

import h1 from '@/components/children/h1'
import h2 from '@/components/children/h2'

import show from '@/components/children/show'


Vue.use(Router);

export default new Router({
    routes:[
        {
            path:"/layoutView",
            components:{
                layoutView:layoutView
            },
            children:[
                {
                    path:'h1',
                    components:{
                        viewsContent:h1
                    },
                    children:[
                        {
                            path:"show",
                            components:{
                                "h1-content":show
                            }
                        }
                    ]
                },{
                    path:'h2',
                    components:{
                        viewsContent:h2
                    }
                }
            ]
        }
    ]
});