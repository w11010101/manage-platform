
// let modes = 'dev'; // test
// let mainAddress = modes === 'dev'?'views/main/':'test/';
// let componentsAddress = modes === 'dev'?'views/':'test/children';
// console.log(`@/components/${mainAddress}layout/layout`)
// var a = `@/components/${mainAddress}layout/layout`
import routes from './router';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes
})
// export default new VueRouter({
//     routes:[
//         {
//             path:'/',
//             redirect:'/layoutView'
//         },
//         {
//             path:'/layoutView',
//             name:'layoutView',
//             components:{
//                 layoutView:resolve =>require(['@/components/views/main/layout/layout'],resolve)
//             },
//             meta:{
//                 href:"/layoutView"
//             },
//             children:[
//                 {
//                     path:'Vue-cli',
//                     name:'Vue-cli',
//                     components:{
//                         viewsContent:resolve =>require(['@/components/views/main/vuecli/vue-cli'],resolve)
//                     },
//                     meta:{
//                         href:"/layoutView/Vue-cli"
//                     },
//                 },
//                 {
//                     path:'h1/:from/:id/:name',
//                     name:'h1',
//                     components:{
//                         viewsContent:resolve =>require(['@/components/views/h1/h1'],resolve)
//                     },
//                     props:{
//                         viewsContent:dynamicPropsFn
//                     },
//                     // children:[
//                     //     {
//                     //         path:'children',
//                     //         name:'children',
//                     //         components:{
//                     //             "h1-content":resolve =>require(['@/components/views/children'],resolve)
//                     //         },
//                     //         meta:{
//                     //             href:"/layoutView/h1/children"
//                     //         },
//                     //     }
//                     // ],
//                     meta:{
//                         href:"/layoutView/h1"
//                     },
                    
//                 },{
//                     path:'h2/:from/:id/:name',
//                     name:'h2',
//                     components:{
//                         viewsContent:resolve =>require(['@/components/views/h2/h2'],resolve)
//                     },
//                     meta:{
//                         href:"/layoutView/h2"
//                     },
//                 },{
//                     path:'form-input',
//                     name:'form-input',
//                     components:{
//                         viewsContent:resolve =>require(['@/components/views/form-input/form-input'],resolve)
//                     },
//                     meta:{
//                         href:"/layoutView/form-input"
//                     },
//                 },
//             ]
//         }
//     ]
// });