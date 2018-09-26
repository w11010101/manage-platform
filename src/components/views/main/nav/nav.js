import {mapState} from 'vuex'

Vue.component("menu-parts",{
    props:["data"],
    template:`
            <Submenu :name="data.id" v-if="data.nodes && data.nodes.length" :title='data.text' >
                <template slot="title" >
                    <Icon :type="data.icon" v-if="data.icon" size="20"></Icon>
                    <span>{{data.text}}</span>
                </template>
                <menu-parts v-for="item in data.nodes" :key="'sub-'+item.id" :data='item'></menu-parts>
            </Submenu>
            <MenuItem v-else :name="data.href || data.id" :to="data.disabled?'':setTo(data)" >
                <Icon :type="data.icon" size="20"></Icon>
                <span>{{data.text}}</span>
            </MenuItem >
            `,
    computed: {
        setTo:(event) =>(item)=>{
            var params = "";
            for(var key in item.props){
                params += '/'+item.props[key];
            }
            console.log(item)
            console.log('params = ' , params)

            return item['props']?'/layoutView/'+item.text+params:{name:item.text.indexOf('/')?item.text.substr(item.text.lastIndexOf('/')+1):item.text};
        }
    },
    methods:{
        clickFn(id){
            console.log(id)
        }
    }
});

var Main = {
    data () {
        return {
            isCollapsed: false,
            // navData:null,
        }
    },
    computed:{
        ...mapState(['navData'])
    },
    // 生命周期
    mounted:function(){
        // this.navData = this.navData;
    },
    methods: {
        // collapsedSider: function() {
        //     this.$refs.side.toggleCollapse();
        // }
    }
}
export default Main;