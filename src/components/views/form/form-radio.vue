<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
    <!--  -->
    <Divider orientation="left">按钮类型</Divider>
    <!-- example -->
    <RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="logo-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="logo-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="logo-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
    <br>
    <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
    <!-- code -->
    <div class="demo-express">
        <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
        <pre class="codeBox" id='part1-html'>   {{htmlCode[0]}}</pre>
    </div>


    <!--  -->
    </div>
</template>

<script>
import {radio} from '@/js/tool/part.js';
// console.log(radio);
const {htmlCode} = {htmlCode:radio.html};
export default {
  name: 'form-radio',
  data () {
    return {
      value: 'this is form-radio.vue 。',
      htmlCode,
      phone:'apple',
      animal:'爪哇犀牛'
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
