<template>
    <nav >
        <!-- {{msg}} -->
        <sider ref="side" hide-trigger collapsible :collapsed-width="60" v-model="isCollapsed" width="230px" class="navMenu" :style="{position: 'fixed', height: '100vh',top: '50px', left: 0, overflow: 'auto'}" >
            <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon> -->
            <Icon type="ios-apps" :style="{margin: '20px 20px 0',color:'#fff'}" size="24"/>
            <Menu ref="side1" theme='dark' :open-names="open" :active-name="active" width="auto" :class="menuitemClasses" accordion @on-select="jumpPage" @on-open-change="collapsedMenuShow">
                <menu-parts v-for="data in navData" :data='data' :key="data.id" ></menu-parts>
            </Menu>
        </sider>
    </nav>
</template>
<script>
    import Vue from 'vue';
    import Main from '../js/nav.js';
    import iview from 'iview';
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
        mounted(){
            console.log(this)
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
                // var currentSubMenu = breadcrumb.init(this.navData,name);
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
<style>
    /*@import url(../plugin/iview/iview.css)*/
    @import url("//unpkg.com/iview/dist/styles/iview.css");
</style>
