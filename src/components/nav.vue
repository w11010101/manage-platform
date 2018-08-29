<style>
    @import url(../plugin/iview/iview.css);
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        height:0px;
        font-size: 0;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    /**/
    .collapsed-menu .ivu-menu-submenu-title-icon{
        width: 0px;
        height:0px;
        opacity: 0;
    }
</style>
<template>
    <Sider ref='side' hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" width="230px" >
        <div class="nav-icon">
            <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
        </div>
        <Menu theme='dark' :open-names="open" :active-name="active" width="auto" :class="menuitemClasses" accordion @on-select="jumpPage" @on-open-change="collapsedMenuShow">
            <menu-parts v-for="data in navData" :data='data' :key="data.id" ></menu-parts>
        </Menu>
    </Sider>
</template>
<script>
    import Vue from 'vue';
    import Main from '../js/nav.js';
    import iview from 'iview';
    var breadcrumb = require('../plugin/breadcrumb/breadcrumb');
    breadcrumb = new breadcrumb.breadcrumb();

    console.log(breadcrumb)
    Vue.use(iview);

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
                setTimeout(function(){
                    $(_this.$el).find('.ivu-menu-item-selected').trigger('click');
                },100);
            }
        },
        methods:{
            // 点击页面跳转
            jumpPage:function(name){
                console.log(breadcrumb)
                var currentSubMenu = breadcrumb.init(this.navData,name);
                console.log(currentSubMenu);

                this.$router.push('/'+currentSubMenu.currentNode.text);
                // var currentNode = currentSubMenu.currentNode;
                // var href = currentNode.href;
                // var nid = currentNode.nid;
                // var _this = this;
                // // 判断，如果nid对应的右侧div不存在，则创建
                // var parent = $("#right-container");
                // console.log('href = ' , href);
                // // console.log(nid);
                // app.$router.push(href+`/nid : ${nid.substr(1)}/wangchi`)

                // console.log(app.$router);
                // // var page = parent.find("#" + nid);
                // // console.log("nid = ", nid)
                // // if (page.length == 0) {
                // //     parent.append("<div id='" + nid + "' action="+href+" ></div>");
                // //     page = parent.find("#" + nid);
                // // }

                // // if(!page.attr("loaded")){
                // //     console.log("loaded:",href);
                // //     page.load(href).attr("loaded",true);
                // // }
                // 
                // $("#"+nid).show(0).addClass("show").siblings().not('.content-h1').hide(0).removeClass("show");
                // // console.log('currentSubMenu = ',currentSubMenu)
                // var Breadcrumb = currentSubMenu.breadcrumbsArr;
              // 
                // _this.setBreadcrumb(Breadcrumb);
            },
            // 
            collapsedMenuShow:function(name){
                console.log('collapsedMenuShow');
                // var this_breadcrumb = menuBreadcrumb.init(this.navData,name[0]);
                // var childNodes = this_breadcrumb.currentNodesChilds;
                // this.activeNav = [];
                // this.$nextTick(function(){
                //     var openNode = $("#navApp").find(".ivu-menu-opened");
                //     var arr = [];
                    // var this_idsArr = menuBreadcrumb.init(this.navData,name[name.length-1]).idsArr;
                //     for(var i = 0;i<this_idsArr.length;i++){
                //         arr.push(this_idsArr[i]);
                //     }
                //     this.openSubMenuID = arr;
                //     this.activeNav = childNodes;
                //     if(openNode.attr("title")){
                //         this.collapsedMenuTitle = openNode.attr("title");
                //     }
                    // 
                // });
            },

            // set 面包屑
            setBreadcrumb:function(breadcrumbArr){
                // 设置面包屑
                // headerVm.breadcrumbArr = breadcrumbArr;
                // return false;
                // 
            }

        }
    }
</script>
