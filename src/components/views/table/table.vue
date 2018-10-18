<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基础用法</Divider>
        <Table :columns="codeList1" width="602" border :data="codeLine1"></Table>
        <!-- code -->
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
            const codeList1 = {{textList1}}
            // codeLine1
            const codeLine1 = {{textLine1}}
            </pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">固定列、固定宽高</Divider>
        <Table :columns="codeList2" width="700" height='300' border :data="codeLine2"></Table>
        <!-- code -->
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
            const codeList2 = {{textList2}}
            // codeLine2
            const codeLine2 = {{textLine2}}
            </pre>
        </div>
        <!-- example 3 -->
        <Divider orientation="left">排序</Divider>
        <Table :columns="codeList3"  height='300' border :data="codeLine3"></Table>
        <!-- code -->
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
            const codeList3 = {{textList3}}
            // codeLine3
            const codeLine3 = {{textLine3}}
            </pre>
        </div>
        <!-- example 4 -->
        <Divider orientation="left">表头分组</Divider>
        <Table :columns="codeList4"  border :data="codeLine4"></Table>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <code class="codeBox" id='part3-html'>
            &lt;Table :columns="codeList4" :data="codeLine4"&gt;&lt;/Table&gt;
            </code>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part4-js"/></h3>
            <pre class="codeBox" id='part4-js'>
        // data 
            // codeList4
            const codeList4 = {{textList4}}
            // codeLine4
            const codeLine4 = {{textLine4}}
            </pre>
        </div>
        <!-- example 5 -->
        <Divider orientation="left">加载中</Divider>
        <Table :columns="codeList5" :loading='loading' border :data="codeLine5"></Table>
        <br>
        切换 Loading 状态 <Switch v-model="loading" size="large"></Switch>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <code class="codeBox" id='part3-html'>
            &lt;Table :columns="codeList5" :loading='loading' :data="codeLine5"&gt;&lt;/Table&gt;
            </code>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part5-js"/></h3>
            <pre class="codeBox" id='part5-js'>
        // data 
            // codeList5
            const codeList5 = {{textList4}}
            // codeLine5
            const codeLine5 = {{textLine4}}
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
            loading:false,
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
            // 表头分组
            codeList4: jsCode.example4[0],
            textList4: toStringify(jsCode.example4[0]),
            codeLine4: jsCode.example4[1],
            textLine4: toStringify(jsCode.example4[1]),
            // 加载中
            codeList5: jsCode.example5[0],
            textList5: toStringify(jsCode.example5[0]),
            codeLine5: jsCode.example5[1],
            textLine5: toStringify(jsCode.example5[1]),
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
