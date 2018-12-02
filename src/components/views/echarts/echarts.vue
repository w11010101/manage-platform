<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基础用法</Divider>
        <Tooltip content="Here is the prompt text（这里是提示信息）">
            如果引入echarts.js是静态文件，勿忘配置webpack.base.conf.js; 
        </Tooltip>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>{{htmlCode[0]}}</pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">基础用法</Divider>
        
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>{{}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">CSS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-css"/></h3>
            <pre class="codeBox" id='part2-css'>{{}}</pre>
        </div>
        

    </div>
</template>

<script>
import {tooltip} from '@/js/tool/part.js';
let {htmlCode,cssCode} = {htmlCode:tooltip.html,cssCode:tooltip.css};

function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'example-tooltip',
    data () {
        return {
            value: 'this is tooltip.vue 。',
            htmlCode,
            cssCode,
            
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
            console.log(this.$route);
        })
    },
    methods:{

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
