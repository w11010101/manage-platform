<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Layout>
                <Sider :style='{height:"calc(100vh - 60px)",background:"#fff"}' width="230px">
                    <myNav ref="navVm"></myNav>
                </Sider>
                <Layout>
                    <Content :style="{background: '#fff',padding:'10px 15px'}" class="viewContent">
                        <router-view class="child"/>
                        <keep-alive>
                            <router-view class='view-content child' name="viewsContent"/>
                        </keep-alive>
                        <div class="child">
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
                                <!-- $store.state.count:{{$store.state.count}} -->
                            </h2>
                            <Button @click=stortFn size='large'>$store.state.count++</Button>
                            <!-- <Button @click='incrementPayload(2)' size='large'>$store.state.count+2</Button> -->
                            <Button @click=getListFn size='large'>$store.getters.ajax 请求</Button>
                        </div>
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
var breadC = require('../../plugin/breadcrumb/breadcrumb').breadcrumb;
var breadcrumb = new breadC({
    paramName:'href'
});
export default {
    name: 'layout',
    data() {
        return {
            msg: 'this is layout!'
        }
    },
    computed:{
        private:()=>"this is private !",
        ...mapState(['obj','arr','count']) // mapState用来映射，比如将$store.state.obj 映射成obj,少敲几个单词
    }, 
    // store,
    components: {
        myHeader:resolve =>require(['./header'],resolve),
        myNav:resolve =>require(['./nav'],resolve),
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
        console.log(nodesArr)
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
            'incrementPayload'
        ]),
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
