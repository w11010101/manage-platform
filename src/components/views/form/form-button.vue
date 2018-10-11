<template>
  <div class="child">
    <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
      <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
    </Alert>
    <!-- example 1 -->
    <Divider orientation="left">按钮类型</Divider>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
      <pre class="codeBox" id='part1-html'>{{htmlCode[0]}}</pre>
    </div>


    <!--  -->
  </div>
</template>

<script>
import {button} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:button.html,jsCode:button.js};
export default {
  name: 'form-button',
  data () {
    return {
      value: 'this is form-button.vue 。',
      htmlCode,
      jsCode
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
    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
