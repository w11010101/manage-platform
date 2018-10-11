<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基础用法</Divider>
        <Badge :count="3">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>{{htmlCode[0]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">CSS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-css"/></h3>
            <pre class="codeBox" id='part1-css'>{{cssCode[0]}}</pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">小红点</Divider>
        <Badge dot>
            <a href="#" class="demo-badge"></a>
        </Badge>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>{{htmlCode[1]}}</pre>
        </div>
        
        

    </div>
</template>

<script>
import {badge} from '@/js/tool/part.js';
let {htmlCode,cssCode} = {htmlCode:badge.html,cssCode:badge.css};

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
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
