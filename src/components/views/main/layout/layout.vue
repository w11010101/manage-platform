<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Layout >
                <Sider ref='side' 
                    hide-trigger 
                    collapsible 
                    :collapsed-width="78" 
                    v-model="isCollapsed"
                    width='240' 
                    :style='{height:"calc(100vh - 60px)",background:"#fff",overflowY:"auto"}'>
                    <!--菜单收起按钮 -->
                    <div class="nav-icon">
                        <Icon @click.native="collapsedSider" :style='{color: "#515a6e"}' :class="rotateIcon" type="md-menu" size="24"></Icon>
                    </div>
                    <myNav ref="navVm" ></myNav>
                </Sider>
                <!-- content -->
                <Content :style="{background: '#fff',padding:'10px 15px'}" class="viewContent">
                    <!-- <pagesTab></pagesTab> -->
                    <img id='xiu' src="http://www.daqianduan.com/wp-content/uploads/2014/11/hs-xiu.jpg">
                    <Layout>
                        <keep-alive>
                            <router-view class='view-content child' id="viewsContent"/>
                        </keep-alive>
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    // var echarts = reuqire('echarts')
import {mapState,mapMutations,mapGetters} from 'vuex';
import axios from 'axios';
// import myHeader from '@/components/main/header.vue'
console.log(echarts)
// 过滤器
// Vue.filter('myFilter',function(value){
//     // console.trace();
//     // console.log(arguments);
//     return value+'(myFilter)';
// });
var filters = {
    'myFilter1':function(value){
        // console.trace();
        // console.log(arguments);
        return value+' + ( myFilter1 )';
    },
    'myFilter2':function(value){
        // console.trace();
        // console.log(arguments);
        return value+' + ( myFilter2 )';
    }
}
// 
var breadC = new breadcrumb({
    paramName:'href'
});
// console.log(clipboard)
export default {
    name: 'layout',
    data() {
        return {
            msg: 'this is layout!',
            isCollapsed: false,
            generators:{},
            filter:'filterData'
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
        ...mapGetters(['doneTodos']),
        rotateIcon: function () {   // menu icon rotate
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
    }, 
    // store,
    components: {
        // myHeader,
        myHeader:resolve =>require(['../header/header'],resolve),
        myNav:resolve =>require(['../nav/nav.vue'],resolve),
        pagesTab:resolve =>require(['../tabs/tabs'],resolve),
        // myContentFooter
        
    },
    '$route' (to, from) {
        console.log(to)
      // 对路由变化作出响应...
    },
    mounted(){
        // 复制
        var clipboard= new ClipboardJS('.copyBtn');
        clipboard.on('success', function(e) {
            console.log(e.text)
            if(e.value){

            }
            e.clearSelection();
        });
        var xiu = document.getElementById('xiu')
        xiu.onload = xiu.onreadystatechange = function(){
           if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){
               // 加载完成 
               console.log(this)
           }
        };
    },
    beforeRouteEnter (to,from,next){
        next();
    },
    beforeRouteUpdate (to,from,next){
        if(to.path === '/layoutView') return false;
        var navData = this.$refs.navVm.navData;
        var breadcrumbObj = breadC.init(navData,to.meta.href);
        var nodesArr = breadcrumbObj.nodesArr;
        var ids = nodesArr.map(e=>e.id);
        this.$refs.navVm.active = to.meta.href;
        this.$refs.navVm.open = ids;
        next();
       
    },
    methods:{
        collapsedSider: function() {
            this.$refs.side.toggleCollapse();
        },
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

        ...mapMutations([
            'increment',
            'incrementPayload',
            // 'removeALLPageTabsList'
        ]),
        axiosFn(){
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
        }
        // handleCloseTag(){
        //     this.$store.commit('removeALLPageTabsList')
        //     // console.log(this.pageTabsList)
        //     // this.pageTabsList = [];
        //     // console.log('handleCloseTag')
        // }
    },
    filters,
}
// var obj = {
//     a:1
// };
// Object.defineProperty(obj,'a',{
//     get(){
//         console.log(this)
//         // return obj.a
//     },
//     set(newVal){
//         console.log('这个是新值'+newVal);
//     }
// })

// var  p1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject(new Error('fail'));
//     },3000);
// });
// var p2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(p1,1000,'p2');
//     },1000);
// });
// p2.then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
