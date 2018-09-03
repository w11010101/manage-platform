import Vue from 'vue'
import Router from 'vue-router'
import layoutView from '@/components/layout/layout'

// children template

import h1 from '@/components/children/h1'
import h2 from '@/components/children/h2'
import children from '@/components/children/children'
import VueCli from '@/components/layout/Vue-cli'

Vue.use(Router);
function dynamicPropsFn(route){
    console.log(route);
    console.log(arguments);
    return {
        from:"fn",
        id:"111",
        name:"dynamicPropsFn"
    }
}
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
                    name:'Vue-cli',
                    components:{
                        viewsContent:VueCli
                    }
                },
                {
                    // path:'h1',
                    path:'h1/:from/:id/:name',
                    name:"h1",
                    components:{
                        viewsContent:h1
                    },
                    props:{
                        viewsContent:dynamicPropsFn
                    },
                    children:[
                        {
                            path:"children",
                            name:"children",
                            components:{
                                "h1-content":children
                            }
                        }
                    ],
                    
                },{
                    path:'h2/:from/:id/:name',
                    name:"h2",
                    components:{
                        viewsContent:h2
                    }
                },
            ]
        }
    ]
});