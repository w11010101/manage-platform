// import Vue from 'vue'
// import Router from 'vue-router'
// import layoutView from '@/components/layout/layout'

// children template

// import h1 from '@/components/children/h1'
// import h2 from '@/components/children/h2'
// import children from '@/components/children/children'
// import VueCli from '@/components/layout/Vue-cli'

Vue.use(VueRouter);
function dynamicPropsFn(route){
    console.log(route);
    console.log(arguments);
    return {
        from:"fn",
        id:"111",
        name:"dynamicPropsFn"
    }
}
export default new VueRouter({
    routes:[
        {
            path:"/layoutView",
            name:"layoutView",
            components:{
                layoutView:resolve =>require(['@/components/layout/layout'],resolve)
            },
            children:[
                {
                    path:'Vue-cli',
                    name:'Vue-cli',
                    components:{
                        viewsContent:resolve =>require(['@/components/layout/Vue-cli'],resolve)
                    }
                },
                {
                    // path:'h1',
                    path:'h1/:from/:id/:name',
                    name:"h1",
                    components:{
                        viewsContent:resolve =>require(['@/components/children/h1'],resolve)
                    },
                    props:{
                        viewsContent:dynamicPropsFn
                    },
                    children:[
                        {
                            path:"children",
                            name:"children",
                            components:{
                                "h1-content":resolve =>require(['@/components/children/children'],resolve)
                            }
                        }
                    ],
                    
                },{
                    path:'h2/:from/:id/:name',
                    name:"h2",
                    components:{
                        viewsContent:resolve =>require(['@/components/children/h2'],resolve)
                    }
                },
            ]
        }
    ]
});