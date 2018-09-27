
function dynamicPropsFn(route){
    // console.log(route);
    // console.log(arguments);
    return {
        from:"fn",
        id:"111",
        name:"dynamicPropsFn"
    }
}
var router_config = [
    {
        path:'/',
        redirect:'/layoutView'
    },
    {
        path:'/logo',
        name:'logo',
        components:{
            layoutView:resolve =>require(['@/components/views/main/logo/logo'],resolve)
        },
    },
    {
        path:'/layoutView',
        name:'layoutView',
        components:{
            layoutView:resolve =>require(['@/components/views/main/layout/layout'],resolve)
        },
        meta:{
            href:"/layoutView"
        },
        children:[
            {
                path:'Vue-cli',
                name:'Vue-cli',
                component:resolve =>require(['@/components/views/main/vuecli/vue-cli'],resolve),
                meta:{
                    href:"/layoutView/Vue-cli"
                },
            },
            {
                path:'h1',
                name:'h1',
                component:resolve =>require(['@/components/views/h1/h1'],resolve),
                props:{
                    viewsContent:dynamicPropsFn
                },
                meta:{
                    href:"/layoutView/h1"
                },
                
            },{
                path:'h2',
                name:'h2',
                components:resolve =>require(['@/components/views/h2/h2'],resolve),
                meta:{
                    href:"/layoutView/h2"
                },
            },{
                path:'form-input',
                name:'form-input',
                component:resolve =>require(['@/components/views/form-input/form-input'],resolve),
                meta:{
                    href:"/layoutView/form-input"
                },
                props:{
                    name:"input"
                }
            },{
                path:'form-button',
                name:'form-button',
                component:resolve =>require(['@/components/views/form-button/form-button'],resolve),
                meta:{
                    href:"/layoutView/form-button"
                },
                props:{
                    name:"button"
                }
            },{
                path:'example-table',
                name:'example-table',
                component:resolve =>require(['@/components/views/table/table'],resolve),
                meta:{
                    href:"/layoutView/example-table"
                },
                props:{
                    name:"table"
                }
            },
        ]
    }
]
module.exports = router_config;