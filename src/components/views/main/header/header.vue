<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <img src="@/assets/logo.png" alt="" class="logo">
            <span class="header-title">WEB 前端管理平台模板345ui65432tryjh</span>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Dropdown trigger="click"   >
                        <a href="javascript:void(0)" class='a-link'>
                            Docs
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <template v-for='item in navList'>
                                <DropdownItem>
                                    <a :href="item.href" :title="item.name" v-if='item.href' target="_blank" class='a-link'>{{item.name}}</a>
                                    <router-link class='a-link' :to='item.to' :title="item.name" v-else>{{item.name}}</router-link>
                                </DropdownItem>
                            </template>
                        </DropdownMenu>
                    </Dropdown>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    export default {
        name: 'myheader',
        data () {
            return {
                msg: 'Header',
                navList:[
                    {
                        name:'VueJs',
                        href:'https://cn.vuejs.org/'
                    },
                    {
                        name:'Vue-cli',
                        to:'/layoutView/Vue-cli'
                    },
                    {
                        name:'Vue-router',
                        href:'https://router.vuejs.org/zh/'
                    },
                    {
                        name:'Vuex',
                        href:'https://vuex.vuejs.org/zh/'
                    },
                    {
                        name:'Wepback',
                        href:'https://www.webpackjs.com/'
                    },
                    {
                        name:'Git',
                        href:'https://git-scm.com/'
                    },
                    {
                        name:'iview',
                        href:'https://www.iviewui.com/'
                    },
                    {
                        name:'bootstrap',
                        href:'https://v3.bootcss.com/'
                    }
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(./header.css);
</style>
