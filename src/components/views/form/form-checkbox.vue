<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
    <!-- example 1 -->
    <Divider orientation="left">按钮类型</Divider>
    <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
        <Checkbox label="disabled" disabled></Checkbox>
    </CheckboxGroup>
    <span> {{social}} </span>
    <!-- code -->
    <div class="demo-express">
        <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
        <pre class="codeBox" id='part1-html'>   {{htmlCode[0]}}</pre>
    </div>


    <!--  -->
    </div>
</template>

<script>
import {checkbox} from '@/js/tool/part.js';
const {htmlCode} = {htmlCode:checkbox.html};
export default {
  name: 'form-radio',
  data () {
    return {
      value: 'this is form-radio.vue 。',
      htmlCode,
      social:[]
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
