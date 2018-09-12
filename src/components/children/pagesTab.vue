<template>
  <div class="">
    <Button class="scrollLeftBtn"><Icon type="md-arrow-dropleft-circle" size="20"/></Button>
    <div class='pagesTabs'>
        <Scroll height='40px' width=200>
            <template v-for="event in this.pageTabsList">
                <Tag type='dot'closable :setid="event.id" @on-close='closeFn(event.id)'><router-link :to="setTo(event)">{{event.text+'.vue'}}</router-link></Tag>
            </template>
        </Scroll>
    </div>
    <Button class="scrollRightBtn"><Icon type="md-arrow-dropright-circle" size="20"/></Button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  name: 'pagesTab',
  data () {
    return {
      msg: 'this is pagesTab!'
    }
  },
  computed:{
    ...mapState(['pageTabsList']),
    setTo:(event) =>(item)=>{
        var params = "";
        for(var key in item.props){
            params += '/'+item.props[key];
        }
        return item['props']?'/layoutView/'+item.text+params:{name:item.text.indexOf('/')?item.text.substr(item.text.lastIndexOf('/')+1):item.text};
    }
  },
  methods:{
    ...mapMutations(['removePageTabsList']),
    closeFn(id){
        this.$store.commit('removePageTabsList',id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
