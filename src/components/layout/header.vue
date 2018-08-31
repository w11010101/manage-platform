<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">Logo</div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Dropdown trigger="click"   >
                        <a href="javascript:void(0)">
                            Docs
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <template v-for='item in navList'>
                                <DropdownItem>
                                    <a :href="item.href" :title="item.name" v-if='item.href' target="_blank" >{{item.name}}</a>
                                    <router-link :to='item.to' :title="item.name" v-else>{{item.name}}</router-link>
                                </DropdownItem>
                            </template>
                        </DropdownMenu>
                    </Dropdown>
                </MenuItem>
                <!-- <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem> -->
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
                    name:'Vue',
                    href:'https://cn.vuejs.org/'
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
                    name:'Vue-cli',
                    to:'/layoutView/Vue-cli'
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(../../css/header.css);
</style>
