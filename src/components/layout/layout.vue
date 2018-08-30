<template>
    <div>
        <myHeader></myHeader>
        <Layout>
            <Sider :style='{height:"calc(100vh - 50px)",background:"#fff"}' width="230px">
                <myNav></myNav>
            </Sider>
            <Layout>
                <Content :style="{background: '#fff'}">
                    <router-view class='' />
                    <router-view class='view-content' name="viewsContent"/>
                    <Footer>
                        <myContentFooter></myContentFooter>
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import myHeader from './header'
import myNav from './nav';
import myContentFooter from './contentFooter';
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
        myContentFooter
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
