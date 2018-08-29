import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import nav from '@/components/nav'
import h1 from '@/components/h1'
import content from '@/components/content'
Vue.use(Router);
const Foo = {template:'<div>this is foo !</div>'};
const Footer = {template:'<div>this is footer !</div>'};
export default new Router({
    routes: [
        {
            path: '/',
            components: {
                header: header,
                viewsContent: content,
                'side-nav': nav
            },
            children:[
                {
                    path: 'foo',
                    components: {
                        container: Foo,
                    }
                },
                {
                    path: "h1",
                    components: {
                        container: h1
                    }
                },
            ]
        }, 
        {
            path: "/h1",
            components: {
                viewsContent: h1
            }
        }, 
        {
            path: "/nav",
            components: {
                default: header,
            }
        }, 
        {
            path: "/footer",
            components: {
                default: Footer,
            }
        }
    ]
})
