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
var breadC = require('../../plugin/breadcrumb/breadcrumb').breadcrumb;
var breadcrumb = new breadC({
    paramName:'href'
});
// console.log(breadcrumb)
export default {
    name: 'layout',
    data() {
        return {
            msg: 'this is layout!'
        }
    },
    components: {
        myHeader,
        myNav,
        // myContentFooter
    },
    beforeRouteEnter (to,from,next){
        next();
        // console.log(to);
    },
    beforeRouteUpdate (to,from,next){
        console.log('beforeRouteUpdate 3 = ',to);
        next();
        if(to.path === '/layoutView') return false;
        var navData = this.$refs.navVm.navData;
        var breadcrumbObj = breadcrumb.init(navData,to.path);
        console.log(breadcrumbObj);

        var nodesArr = breadcrumbObj.nodesArr;
        var ids = nodesArr.map(e=>e.id)
        this.$refs.navVm.active = to.path;
        this.$refs.navVm.open = ids;
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
