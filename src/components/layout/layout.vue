<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Layout>
                <Sider :style='{height:"calc(100vh - 50px)",background:"#fff"}' width="230px">
                    <myNav ref="navVm"></myNav>
                </Sider>
                <Layout>
                    <Content :style="{background: '#fff',padding:'10px 15px'}">
                        <router-view class='' />
                        <router-view class='view-content' name="viewsContent"/>
                        <h2>
                            $store.state.obj：{{obj}}
                            <br>
                            $store.state.arr：{{arr}}
                            <br>
                            $store.state.count：{{count}}
                            <br>
                            this.private：{{private}}
                            <br>
                            $store.getters：{{$store.getters.doneTodos}}
                            <!-- $store.state.count:{{$store.state.count}} -->
                        </h2>
                        <Button @click=stortFn size='large'>$store.state.count++</Button>
                        <Button @click=getListFn size='large'>$store.getters.ajax 请求</Button>
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
import myHeader from './header'
import myNav from './nav';
import myContentFooter from './contentFooter';

import {mapState} from 'vuex';

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
        myHeader,
        myNav,
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
        next();
        if(to.path === '/layoutView') return false;
        var navData = this.$refs.navVm.navData;
        var breadcrumbObj = breadcrumb.init(navData,to.path);

        var nodesArr = breadcrumbObj.nodesArr;
        var ids = nodesArr.map(e=>e.id)
        this.$refs.navVm.active = to.path;
        this.$refs.navVm.open = ids;
    },
    methods:{
        stortFn:function(){
            // this.$store.state.count++;
            this.$store.commit('increment');
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
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
