<style>
@import url(./nav.css);
</style>
<template>
    <Sider ref='side' hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" width="auto" :style='{background:"#fff"}'>
        <div class="nav-icon">
            <Icon @click.native="collapsedSider" :style='{color: "#515a6e"}' :class="rotateIcon" type="md-menu" size="24"></Icon>
        </div>
        <Menu ref='side1' theme='light' :open-names="open" :active-name="active" width="auto" :class="menuitemClasses" accordion @on-select="jumpPage" @on-open-change="collapsedMenuShow">
            <menu-parts v-for="data in navData" :data='data' :key="data.id" ></menu-parts>
        </Menu>
    </Sider>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'
    import Main from './nav.js';

    var breadcrumb = require('@/plugin/breadcrumb/breadcrumb');
    breadcrumb = new breadcrumb.breadcrumb({
        paramName:"href"
    });
    
    export default {
        name:"myNav",
        data(){
            return {
                msg:'message',
                activeNav:'',
                collapsedMenuTitle:'',
                open:[],
                name:'',
                active:'',
                openSubMenuID:[],
                breadcrumbArr:[]
            }
        },
        mixins:[Main],
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            rotateIcon: function () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            ...mapState(['pageTabsList'])
        },
        watch:{
            // 手动更新展开的子目录
            open:function(){
                this.$nextTick(function() {
                    this.$refs.side1.updateOpened();   
                    this.$refs.side1.updateActiveName();
                });
            },
            // 手动更新当前选择项
            active:function(){
                var _this = this;
            }
        },
        methods:{
            ...mapMutations(['setPageTabsList']),
            // 点击页面跳转
            jumpPage:function(name){
                var currentNode = breadcrumb.init(this.navData,name).currentNode;
                this.$store.commit('setPageTabsList',{
                    name:currentNode.text,
                    id:currentNode.id,
                    router:currentNode.href,
                    props:currentNode.props||null
                })
            },
            // 
            collapsedMenuShow:function(name){
                // console.log('collapsedMenuShow')
                // pageTabsList
            },
            // set 面包屑
            setBreadcrumb:function(breadcrumbArr){
            }
        }
    }
</script>
