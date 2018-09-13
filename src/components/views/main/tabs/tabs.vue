<template>
  <div class="">
    <ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
      <li v-for="(item, key) of menuList" @click="handleTagsOption(key)" :key="key">{{item}}</li>
    </ul>
    <Button class="scrollLeftBtn" @click="handleScroll(200)"><Icon type="md-arrow-dropleft-circle" size="20"/></Button>
    <Button class="scrollRightBtn" @click="handleScroll(-200)"><Icon type="md-arrow-dropright-circle" size="20"/></Button>
    <div class='pagesTabs' ref='scrollOuter' @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
        <div class="tabsContainer" ref='scrollBody' :style="{left: tagBodyLeft + 'px'}" >
            <transition-group name='list'>
                <Tag 
                    type='dot'
                    v-for="(event,index) in this.pageTabsList"

                    :key="`tag-nav-${index}`"
                    :name="event.name"
                    @on-close='closeFn(event.id)'

                    :closable="event.name !== 'home'"
                    :color="isCurrentTag(event) ? 'primary' : 'default'"
                    @contextmenu.prevent.native="contextMenu(event, $event)"
                    @click="clickTag(event,$event)"
                    >
                    <router-link :to="setTo(event)">{{event.name+'.vue'}}</router-link>
                </Tag>
            </transition-group>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
// import {Fn1,Fn2} from '../../js/tool/tool'
// console.log(Fn1(1,2))

export default {
  name: 'pagesTab',
  props: {
    value: Object,
    list: {
      type: Array,
      default () {
        return [1,2,3]
      }
    }
  },
  data () {
    return {
      msg: 'this is pagesTab!',
      tagBodyLeft: 0,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      visible: false,
      menuList: {
        others: '关闭其他',
        all: '关闭所有'
      }
    }
  },
  computed:{
    ...mapState(['pageTabsList']),
    setTo:(event) =>(item)=>{
        var params = "";
        for(var key in item.props){
            params += '/'+item.props[key];
        }
        return item['props']?'/layoutView/'+item.name+params:{name:item.name.indexOf('/')?item.name.substr(item.name.lastIndexOf('/')+1):item.name};
    },
    currentRouteObj () {
        console.log(this.value)
      const { name, params, query } = this.value
      return { name, params, query }
    }
  },
  methods:{
    ...mapMutations(['removePageTabsList','removeALLPageTabsList']),
    closeFn(id){
        this.$store.commit('removePageTabsList',id)
    },
    clickTag(){
        console.log(this.value)
    },
    handlescroll (e) {
      var type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta);
    },
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    handleTagsOption (type) {
      if (type === 'all') {
        this.$store.commit('removeALLPageTabsList')
        // this.$store.commit('removeALLPageTabsList');
        // 关闭所有，除了home
        // let res = this.list.filter(item => item.name === 'home')
        // console.log(res)
        // this.$emit('on-close')
        // this.$emit('on-close', res, 'all')
      } else if (type === 'others') {
        console.log(this.currentRouteObj)
        // 关闭除当前页和home页的其他页
        // let res = this.list.filter(item => routeEqual(this.currentRouteObj, item) || item.name === 'home')
        // this.$emit('on-close', 'others', this.currentRouteObj)
        // setTimeout(() => {
        //   this.getTagElementByName(this.currentRouteObj.name)
        // }, 100)
      }
      this.visible = false;
    },
    contextMenu (item, e) {
      if (item.name === 'home') {
        return
      }
      this.visible = true
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
    isCurrentTag (item) {
      // return routeEqual(this.currentRouteObj, item)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pagesTab{
      height: 40px;
      position: relative;
    }
    .pagesTabs{
      position: absolute;
      left:35px;
      right: 35px;
      height: 40px;
      padding:2px 0 0 0 ;
      overflow: hidden;
    }
    .tabsContainer{
      position: absolute;
      left:0;
      overflow: visible;
      white-space: nowrap;
      transition: left .3s ease;
    }
    .scrollLeftBtn,.scrollRightBtn{
      padding:0;
      width: 30px;
      height: 40px;
      position: absolute;

    }
    .scrollLeftBtn{
      left:0;
    }
    .scrollRightBtn{
      right:0;
    }
    .contextmenu {
        position: absolute;
        margin: 0;
        padding: 5px 0;
        background: #fff;
        z-index: 100;
        list-style-type: none;
        border-radius: 4px;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    }
    .contextmenu li {
      margin: 0;
      padding: 5px 15px;
      cursor: pointer;
      
    }
    .contextmenu li:hover {
      background: #eee;
    }
</style>
