import layout from '@/components/layout/layout'
console.log(layout)
Vue.use(VueRouter);
function dynamicPropsFn(route){
    // console.log(route);
    // console.log(arguments);
    return {
        from:"fn",
        id:"111",
        name:"dynamicPropsFn"
    }
}
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/layoutView'
        },
        {
            path:'/layoutView',
            name:'layoutView',
            components:{
                layoutView:resolve =>require(['@/components/layout/layout'],resolve)
            },
            meta:{
                href:"/layoutView"
            },
            children:[
                // {
                //     path:'pagesTab',
                //     name:'pagesTab',
                //     components:{
                //         pagesTab:resolve =>require(['@/components/children/pagesTab'],resolve)
                //     },
                //     meta:{
                //         href:"/layoutView/pagesTab"
                //     },
                // },
                {
                    path:'Vue-cli',
                    name:'Vue-cli',
                    components:{
                        viewsContent:resolve =>require(['@/components/layout/Vue-cli'],resolve)
                    },
                    meta:{
                        href:"/layoutView/Vue-cli"
                    },
                },
                {
                    path:'h1/:from/:id/:name',
                    name:'h1',
                    components:{
                        viewsContent:resolve =>require(['@/components/children/h1'],resolve)
                    },
                    props:{
                        viewsContent:dynamicPropsFn
                    },
                    children:[
                        {
                            path:'children',
                            name:'children',
                            components:{
                                "h1-content":resolve =>require(['@/components/children/children'],resolve)
                            },
                            meta:{
                                href:"/layoutView/h1/children"
                            },
                        }
                    ],
                    meta:{
                        href:"/layoutView/h1"
                    },
                    
                },{
                    path:'h2/:from/:id/:name',
                    name:'h2',
                    components:{
                        viewsContent:resolve =>require(['@/components/children/h2'],resolve)
                    },
                    meta:{
                        href:"/layoutView/h2"
                    },
                },
            ]
        }
    ]
});