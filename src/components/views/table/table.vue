<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!--  -->
        <Divider>基础用法</Divider>
        <Table :columns="codeList1" border :data="codeLine1"></Table>
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <code class="codeBox" id='part1-html'>
            &lt;Table :columns="codeList1" :data="codeLine1"&gt;&lt;/Table&gt;
            </code>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-js"/></h3>
            <pre class="codeBox" id='part1-js'>
            // data
            // codeList1
            <br>
            const codeList1 = {{textList1}}
            <br>
            // codeLine1
            const codeLine1 = {{textLine1}}
            </pre>
        </div>
        <!--  -->
        <Divider>固定列、固定宽高</Divider>
        <Table :columns="codeList2" width="700" height='300' border :data="codeLine2"></Table>
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <code class="codeBox" id='part2-html'>
            &lt;Table :columns="codeList2" :data="codeLine2"&gt;&lt;/Table&gt;
            </code>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-js"/></h3>
            <pre class="codeBox" id='part2-js'>
            // data
            // codeList2
            <br>
            const codeList2 = {{textList2}}
            <br>
            // codeLine2
            const codeLine2 = {{textLine2}}
            </pre>
        </div>
        <!--  -->
        <Divider>排序</Divider>
        <Table :columns="codeList3"  height='300' border :data="codeLine3"></Table>
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <code class="codeBox" id='part3-html'>
            &lt;Table :columns="codeList3" :data="codeLine3"&gt;&lt;/Table&gt;
            </code>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-js"/></h3>
            <pre class="codeBox" id='part3-js'>
            // data 
            // codeList3
            <br>
            const codeList3 = {{textList3}}
            <br>
            // codeLine3
            const codeLine3 = {{textLine3}}
            </pre>
        </div>
        <!--  -->
    </div>
</template>

<script>
import {table} from '@/js/tool/part.js';
let {jsCode} = {jsCode:table.js};

function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'example-table',
    data () {
        return {
            value: 'this is table.vue 。',
            // 基础用法
            codeList1: jsCode.example1[0],
            textList1: toStringify(jsCode.example1[0]),
            codeLine1: jsCode.example1[1],
            textLine1: toStringify(jsCode.example1[1]),
            // 固定列、固定宽高
            codeList2: jsCode.example2[0],
            textList2: toStringify(jsCode.example2[0]),
            codeLine2: jsCode.example2[1],
            textLine2: toStringify(jsCode.example2[1]),
            // 排序
            codeList3: jsCode.example3[0],
            textList3: toStringify(jsCode.example3[0]),
            codeLine3: jsCode.example3[1],
            textLine3: toStringify(jsCode.example3[1]),
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
    
</style>
