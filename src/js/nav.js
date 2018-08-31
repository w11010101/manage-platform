import Vue from 'vue';
import data from '../js/data.js';
Vue.component("menu-parts",{
    props:["data"],
    template:`<Submenu :name="data.id" v-if="data.nodes && data.nodes.length" :title='data.text' >
                <template slot="title" >
                    <Icon :type="data.icon" v-if="data.icon" size="20"></Icon>
                    <span>{{data.text}}</span>
                </template>
                <MenuItem  v-for="item in data.nodes" 
                    :key="item.id"  
                    :name="item.href || item.id"
                    :to="'/layoutView/'+item.text"
                    v-if="!item.nodes || !item.nodes.length" >
                    <Icon :type="item.icon" size="20"></Icon>
                    <span>{{item.text}}</span>
                </MenuItem >
                <menu-parts v-if="data.nodes && data.nodes.length"  v-for="item in data.nodes" :key="'sub-'+item.id" :data='item'></menu-parts>
            </Submenu>
            `,
            // :to="'/'+item.text"
    computed: {
        rotateIcon: function () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
    },
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
    methods: {
        collapsedSider: function() {
            this.$refs.side.toggleCollapse();
        }
    }
}
export default Main;