<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基础用法</Divider>
        <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>{{htmlCode[0]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-js"/></h3>
            <pre class="codeBox" id='part1-js'>{{jsCode[0]}}</pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">多选用法</Divider>
        <Select v-model="model2" multiple style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>{{htmlCode[1]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-js"/></h3>
            <pre class="codeBox" id='part2-js'>{{jsCode[1]}}</pre>
        </div>
        <!-- example 3 -->
        <Divider orientation="left">清除用法</Divider>
        <Select v-model="model3" clearable style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'>{{htmlCode[2]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-js"/></h3>
            <pre class="codeBox" id='part3-js'>{{jsCode[2]}}</pre>
        </div>
            

    <!--  -->
    </div>
</template>

<script>
import {select} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:select.html,jsCode:select.js};
export default {
  name: 'form-select',
  data () {
    return {
      value: 'this is form-select.vue 。',
      htmlCode,
      jsCode,
      cityList: [
            {
                value: '北京',
                label: '北京'
            },
            {
                value: '上海',
                label: '上海'
            },
            {
                value: '哈尔滨',
                label: '哈尔滨'
            },
            {
                value: '成都',
                label: '成都'
            },
            {
                value: '广东',
                label: '广东'
            },
            {
                value: '香港',
                label: '香港'
            }
        ],
        model1: '',
        model2: [],
        model3: []
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
