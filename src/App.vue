<template>
    <div id="app">
        <div class="layout">
            <Layout>
                <router-view class='view-header' name="header"></router-view>
                <Layout>
                    <Sider :style='{height:"calc(100vh - 50px)"}' width="230px">
                        <router-view class='view-side-nav' name="side-nav"></router-view>
                    </Sider>
                    <Layout>
                        <Content>
                            <router-view ></router-view>
                            <div id="viewsApp">
                                <router-view class='view-content' name="viewsContent">
                                    
                                </router-view>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
    // export default {
    //   name: 'App'
    // }
</script>

<style>
    * {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    } 
    .view-side-nav {
      text-align: left;
    }
    .nav-icon{
      padding:12px 24px;
      color:#fff;
    }
    .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
