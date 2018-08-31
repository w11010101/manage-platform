import Vue from 'vue'
import Router from 'vue-router'
import layoutView from '@/components/layout/layout'

// children template

import h1 from '@/components/children/h1'
import h2 from '@/components/children/h2'
import children from '@/components/children/children'
import VueCli from '@/components/layout/Vue-cli'

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
                    path:'Vue-cli',
                    components:{
                        viewsContent:VueCli
                    }
                },
                {
                    path:'h1',
                    components:{
                        viewsContent:h1
                    },
                    children:[
                        {
                            path:"children",
                            components:{
                                "h1-content":children
                            }
                        }
                    ]
                },{
                    path:'h2',
                    components:{
                        viewsContent:h2
                    }
                },
            ]
        }
    ]
});