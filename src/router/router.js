
function dynamicPropsFn(route){
    return {
        from:"fn",
        id:"111",
        name:"dynamicPropsFn"
    }
}
var router_config = [
    // {
    //     path:'/',
    //     redirect:'/layoutView'
    // },
    {
        path:'/',
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
                path:'form',
                name:'form',
                component:resolve =>require(['@/components/views/form/form'],resolve),
                meta:{
                    href:"/layoutView/form"
                },
                props:{
                    name:"form"
                }
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
                path:'form-cascader',
                name:'form-cascader',
                component:resolve =>require(['@/components/views/form/form-cascader'],resolve),
                meta:{
                    href:"/layoutView/form-cascader"
                },
                props:{
                    name:"cascader"
                }
            },{
                path:'form-transfer',
                name:'form-transfer',
                component:resolve =>require(['@/components/views/form/form-transfer'],resolve),
                meta:{
                    href:"/layoutView/form-transfer"
                },
                props:{
                    name:"transfer"
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
                path:'form-upload',
                name:'form-upload',
                component:resolve =>require(['@/components/views/form/form-upload'],resolve),
                meta:{
                    href:"/layoutView/form-upload"
                },
                props:{
                    name:"upload"
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
            },{
                path:'message',
                name:'message',
                component:resolve =>require(['@/components/views/message/message'],resolve),
                meta:{
                    href:"/layoutView/message"
                },
                props:{
                    name:"message"
                }
            },{
                path:'notice',
                name:'notice',
                component:resolve =>require(['@/components/views/notice/notice'],resolve),
                meta:{
                    href:"/layoutView/notice"
                },
                props:{
                    name:"notice"
                }
            },
            {
                path:'modal',
                name:'modal',
                component:resolve =>require(['@/components/views/modal/modal'],resolve),
                meta:{
                    href:"/layoutView/modal"
                },
                props:{
                    name:"modal"
                }
            },
            {
                path:'tooltip',
                name:'tooltip',
                component:resolve =>require(['@/components/views/tooltip/tooltip'],resolve),
                meta:{
                    href:"/layoutView/tooltip"
                },
                props:{
                    name:"tooltip"
                }
            },
            {
                path:'badge',
                name:'badge',
                component:resolve =>require(['@/components/views/badge/badge'],resolve),
                meta:{
                    href:"/layoutView/badge"
                },
                props:{
                    name:"badge"
                }
            },
            {
                path:'echarts',
                name:'echarts',
                component:resolve =>require(['@/components/views/echarts/echarts'],resolve),
                meta:{
                    href:"/layoutView/echarts"
                },
                props:{
                    name:"echarts"
                }
            },
            {
                path:'transfer',
                name:'transfer',
                component:resolve =>require(['@/components/views/transfer/transfer'],resolve),
                meta:{
                    href:"/layoutView/transfer"
                },
                props:{
                    name:"transfer"
                }
            },

        ]
    }
]
module.exports = router_config;