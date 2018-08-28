import Vue from 'vue';
// import iview from 'iview';
import data from '../js/data.js';
console.log(data);
// Vue.use(iview)
Vue.component("menu-parts",{
    props:["data"],
    template:`<submenu :name="data.href || data.id" v-if="data.nodes && data.nodes.length" :title='data.text' >
                <template slot="title" >
                    <Icon :type="data.icon" v-if="data.icon"></Icon>
                    <span>{{data.text}}</span>
                </template>
                <MenuItem  v-for="item in data.nodes" 
                    :key="item.id"  
                    :name="item.href || item.id"
                    v-if="!item.nodes || !item.nodes.length" >
                    <span>{{item.text}}</span>
                </MenuItem >
                <menu-parts v-if="data.nodes && data.nodes.length"  v-for="item in data.nodes" :key="'sub-'+item.id" :data='item'></menu-parts>
            </submenu>
            `,
});

var Main = {
    data () {
        return {
            isCollapsed: false,
            navData:null,
        }
    },
    // 生命周期
    mounted:function(){
        this.navData = data;
    },
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
    methods: {
        collapsedSider: function() {
            this.$refs.side.toggleCollapse();
            $("#navApp").toggleClass('collapse-in');
            // if(this.isCollapsed){
            //     this.$refs.side1.$el.style.width = "60px";
            // }else{
            //     this.$refs.side1.$el.style.width = "230px";
            // }

        }
    }
}
export default Main;