<template>
    <div id="app">
        111
        <div class="layout">
            222
            <Layout>
                333
                <router-view class='view-header' name="header"></router-view>
                444
                <Layout>
                    <Sider :style='{height:"calc(100vh - 50px)"}' width="230px">
                        <router-view class='view-side-nav' name="side-nav"></router-view>
                    </Sider>
                    <Layout>
                        <Content>
                            <router-view ></router-view>
                            <div id="viewsApp">
                                <router-link to="/h1">h1</router-link>
                                <router-view class='view-content' name="viewsContent"></router-view>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <!-- <Layout>
                <Header>
                    <Menu mode="horizontal" theme="dark" active-name="1">
                        <div class="layout-logo"></div>
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="ios-paper"></Icon>
                                Item 4
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
                <Layout>
                    <Sider hide-trigger :style="{background: '#fff'}">
                        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-navigate"></Icon>
                                    Item 1
                                </template>
                                <MenuItem name="1-1">Option 1</MenuItem>
                                <MenuItem name="1-2">Option 2</MenuItem>
                                <MenuItem name="1-3">Option 3</MenuItem>
                            </Submenu>
                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    Item 2
                                </template>
                                <MenuItem name="2-1">Option 1</MenuItem>
                                <MenuItem name="2-2">Option 2</MenuItem>
                            </Submenu>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="ios-analytics"></Icon>
                                    Item 3
                                </template>
                                <MenuItem name="3-1">Option 1</MenuItem>
                                <MenuItem name="3-2">Option 2</MenuItem>
                            </Submenu>
                        </Menu>
                    </Sider>
                    <Layout :style="{padding: '0 24px 24px'}">
                        <Breadcrumb :style="{margin: '24px 0'}">
                            <BreadcrumbItem>Home</BreadcrumbItem>
                            <BreadcrumbItem>Components</BreadcrumbItem>
                            <BreadcrumbItem>Layout</BreadcrumbItem>
                        </Breadcrumb>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout> -->
        </div>
    </div>
</template>

<script>
    export default {
      name: 'App'
    }
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
