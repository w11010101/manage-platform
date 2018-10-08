<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!--  -->
        <Divider orientation="left">基本尺寸</Divider>
        <!-- example -->
        <i-switch v-model="switch1" @on-change="change" />
        <i-switch size="large" />
        <i-switch />
        <i-switch size="small" />
        <i-switch>
            <Icon type="md-checkmark" slot="open"></Icon>
            <Icon type="md-close" slot="close"></Icon>
        </i-switch>
        <i-switch size="large">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
        </i-switch>
        <i-switch disabled="disabled" size="large">
            <span slot="close">禁止</span>
        </i-switch>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>   {{htmlCode[0]}}</pre>
        </div>


    <!--  -->
    </div>
</template>

<script>
import {iSwitch} from '@/js/tool/part.js';
const {htmlCode} = {htmlCode:iSwitch.html};
export default {
  name: 'form-switch',
  data () {
    return {
      value: 'this is form-switch.vue 。',
      htmlCode,
      switch1:[]
    }
  },
  props: {
    name: {
      type: String,
      default: 'name!'
    }
  },
  computed:{
  
  },
  mounted(){
    this.$nextTick(function(){
      console.log(this.$route)
    })
  },
  methods:{
    change(status){
        this.$Message.info('开关状态：' + status);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
