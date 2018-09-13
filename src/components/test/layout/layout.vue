<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Layout >
                <Sider :style='{height:"calc(100vh - 60px)",background:"#fff"}' width="230">
                    <myNav ref="navVm"></myNav>
                </Sider>
                <Layout>
                    <Content :style="{background: '#fff',padding:'10px 15px'}" class="viewContent">
                        <!-- <router-view class="child pagesTab" name="pagesTab"></router-view> -->
                        <Layout >
                            <!-- <keep-alive> -->
                                <pagesTab class="pagesTab" :value="$route"></pagesTab>
                            <!-- </keep-alive> -->
                        </Layout>
                        <Layout >
                        <keep-alive>
                            <router-view class='view-content child' name="viewsContent"/>
                        </keep-alive>
                        <!-- <h1>layout.vue</h1> -->
                        </Layout>
                        <!-- <div class="child">
                            <h2>
                                Vuex $store.state.obj：{{obj}}
                                <br>
                                Vuex $store.state.arr：{{arr}}
                                <br>
                                Vuex $store.state.count：{{count}}
                                <br>
                                this.private：{{private}}
                                <br>
                                $store.getters：{{$store.getters.doneTodos}}
                            </h2>
                            <Button @click=stortFn size='large'>$store.state.count++</Button>
                            <Button @click=getListFn size='large'>$store.getters.ajax 请求</Button>
                            <Button @click=axiosFn size='large'>axios 请求</Button>
                            <Button @click=GeneratorFn size='large'>ES6-Generator函数语法</Button>
                            <Button @click=GeneratorNextFn size='large'>ES6-Generator-next()</Button>
                        </div> -->
                        <!-- <Footer>
                            <myContentFooter></myContentFooter>
                        </Footer> -->
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import axios from 'axios'
var breadC = require('../../plugin/breadcrumb/breadcrumb').breadcrumb;
var breadcrumb = new breadC({
    paramName:'href'
});
// function getParams(arr){
//     var obj = {};
//     for(var i in arr){
//         // var obj = {};
//         // obj[arr[i]] = {
//         //     abc:function(){}
//         // }
//         obj[arr[i]] =function(){
//             console.log(arr[i])
//             return arr[i]
//         }
//     }
//     return new Object(obj);
// }

// var objs = {
//     ...getParams(['name','id','age'])
// }
// console.log(objs.name());
export default {
    name: 'layout',
    data() {
        return {
            msg: 'this is layout!',
            generators:{}
        }
    },
    computed:{
        private:()=>"this is private !",
        ...mapState(['obj','arr','count','pageTabsList']), // mapState用来映射，比如将$store.state.obj 映射成obj,少敲几个单词
        // getTabsList(){
        //     // console.log(this)
        //     // console.log(this.pageTabsList)
        //     return this.pageTabsList;
        // }
    }, 
    // store,
    components: {
        myHeader:resolve =>require(['./header'],resolve),
        myNav:resolve =>require(['./nav'],resolve),
        pagesTab:resolve =>require(['../children/pagesTab'],resolve),
        // myContentFooter
    },
    '$route' (to, from) {
        console.log(to)
      // 对路由变化作出响应...
    },
    beforeRouteEnter (to,from,next){
        next();
    },
    beforeRouteUpdate (to,from,next){
        if(to.path === '/layoutView') return false;
        var navData = this.$refs.navVm.navData;
        var breadcrumbObj = breadcrumb.init(navData,to.meta.href);
        var nodesArr = breadcrumbObj.nodesArr;
        var ids = nodesArr.map(e=>e.id);
        this.$refs.navVm.active = to.meta.href;
        this.$refs.navVm.open = ids;
        next();
       
    },
    methods:{
        stortFn:function(){
            this.increment()
            // this.add();
            // this.$store.commit('increment');
        },
        getListFn:function(){
            var second = 2000;
            this.$Spin.show();
            var self = this;
            var ajaxPromise = new Promise(this.$store.getters.myAjax({a:1,second:second}));
            ajaxPromise.then(function(){
                console.log('success');
                console.log(arguments);
                self.$Spin.hide();
            }).catch(function(){
                console.log('error');
            })
        },
        // ...mapMutations({
        //     add:'increment'
        // }),
        ...mapMutations([
            'increment',
            'incrementPayload',
            // 'removeALLPageTabsList'
        ]),
        axiosFn(){
            // axios.default.baseURL = 'https://wisdom.xzxpay.com/card/anonymous/childInfo';
            axios.default.post['Content-Type'] = 'application/json';

            axios.post('https://wisdom.xzxpay.com/card/anonymous/childInfo',{
                no:344,
                type:0
            }).then(function(){
                console.log(arguments);
            }).catch(function(){
                console.log(arguments);
            })
        },
        GeneratorFn(){
            function* helloWorldGenerator() {
              yield 'hello';
              console.log('hello wangchi ')
              yield 'world';
              yield 'wangchi';
              return 'ending';
            }
            var hw = helloWorldGenerator();
            this.$set(this.generators,'hw',hw);
        },
        GeneratorNextFn(){
            console.log(this.generators.hw.next())
        },
        abcFn(val){
            console.log('abc')
            console.log(val);
        },
        // handleCloseTag(){
        //     this.$store.commit('removeALLPageTabsList')
        //     // console.log(this.pageTabsList)
        //     // this.pageTabsList = [];
        //     // console.log('handleCloseTag')
        // }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
