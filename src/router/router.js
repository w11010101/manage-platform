
function dynamicPropsFn(route){
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
                component:resolve =>require(['@/components/views/h2/h2'],resolve),
                meta:{
                    href:"/layoutView/h2"
                },
            },{
                path:'form-input',
                name:'form-input',
                component:resolve =>require(['@/components/views/form/form-input'],resolve),
                meta:{
                    href:"/layoutView/form-input"
                },
                props:{
                    name:"input"
                }
            },{
                path:'form-button',
                name:'form-button',
                component:resolve =>require(['@/components/views/form/form-button'],resolve),
                meta:{
                    href:"/layoutView/form-button"
                },
                props:{
                    name:"button"
                }
            },{
                path:'form-radio',
                name:'form-radio',
                component:resolve =>require(['@/components/views/form/form-radio'],resolve),
                meta:{
                    href:"/layoutView/form-radio"
                },
                props:{
                    name:"radio"
                }
            },{
                path:'form-checkbox',
                name:'form-checkbox',
                component:resolve =>require(['@/components/views/form/form-checkbox'],resolve),
                meta:{
                    href:"/layoutView/form-checkbox"
                },
                props:{
                    name:"checkbox"
                }
            },{
                path:'form-switch',
                name:'form-switch',
                component:resolve =>require(['@/components/views/form/form-switch'],resolve),
                meta:{
                    href:"/layoutView/form-switch"
                },
                props:{
                    name:"switch"
                }
            },{
                path:'form-select',
                name:'form-select',
                component:resolve =>require(['@/components/views/form/form-select'],resolve),
                meta:{
                    href:"/layoutView/form-select"
                },
                props:{
                    name:"select"
                }
            },{
                path:'form-datePicker',
                name:'form-datePicker',
                component:resolve =>require(['@/components/views/form/form-datePicker'],resolve),
                meta:{
                    href:"/layoutView/form-datePicker"
                },
                props:{
                    name:"datePicker"
                }
            },{
                path:'table',
                name:'table',
                component:resolve =>require(['@/components/views/table/table'],resolve),
                meta:{
                    href:"/layoutView/table"
                },
                props:{
                    name:"table"
                }
            },{
                path:'dropdown',
                name:'dropdown',
                component:resolve =>require(['@/components/views/dropdown/dropdown'],resolve),
                meta:{
                    href:"/layoutView/dropdown"
                },
                props:{
                    name:"dropdown"
                }
            },{
                path:'tab',
                name:'tab',
                component:resolve =>require(['@/components/views/tab/tab'],resolve),
                meta:{
                    href:"/layoutView/tab"
                },
                props:{
                    name:"tab"
                }
            },{
                path:'alert',
                name:'alert',
                component:resolve =>require(['@/components/views/alert/alert'],resolve),
                meta:{
                    href:"/layoutView/alert"
                },
                props:{
                    name:"alert"
                }
            },{
                path:'page',
                name:'page',
                component:resolve =>require(['@/components/views/page/page'],resolve),
                meta:{
                    href:"/layoutView/page"
                },
                props:{
                    name:"page"
                }
            },

        ]
    }
]
module.exports = router_config;