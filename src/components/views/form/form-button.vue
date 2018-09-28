<template>
  <div class="child">
    <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
      <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
    </Alert>
    <!--  -->
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
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1"/></h3>
      <code class="codeBox" id='part1'>
        &lt;Button&gt;Default&lt;/Button&gt;
        <br>
        &lt;Button type="primary"&gt;Primary&lt;/Button&gt;
        <br>
        &lt;Button type="dashed"&gt;Dashed&lt;/Button&gt;
        <br>
        &lt;Button type="text"&gt;Text&lt;/Button&gt;
        <br>
        &lt;Button type="info"&gt;Info&lt;/Button&gt;
        <br>
        &lt;Button type="success"&gt;Success&lt;/Button&gt;
        <br>
        &lt;Button type="warning"&gt;Warning&lt;/Button&gt;
        <br>
        &lt;Button type="error"&gt;Error&lt;/Button&gt;
      </code>
    </div>


    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'form-input',
  data () {
    return {
      value: 'this is form-input.vue 。',
      
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
