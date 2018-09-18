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
        redirect:'/logo'
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
                components:{
                    viewsContent:resolve =>require(['@/components/views/main/vuecli/vue-cli'],resolve)
                },
                meta:{
                    href:"/layoutView/Vue-cli"
                },
            },
            {
                path:'h1',
                name:'h1',
                components:{
                    viewsContent:resolve =>require(['@/components/views/h1/h1'],resolve)
                },
                props:{
                    viewsContent:dynamicPropsFn
                },
                meta:{
                    href:"/layoutView/h1"
                },
                
            },{
                path:'h2',
                name:'h2',
                components:{
                    viewsContent:resolve =>require(['@/components/views/h2/h2'],resolve)
                },
                meta:{
                    href:"/layoutView/h2"
                },
            },{
                path:'form-input',
                name:'form-input',
                components:{
                    viewsContent:resolve =>require(['@/components/views/form-input/form-input'],resolve)
                },
                meta:{
                    href:"/layoutView/form-input"
                },
            },
        ]
    }
]
module.exports = router_config;