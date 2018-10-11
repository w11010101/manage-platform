<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基础用法</Divider>
        <Tooltip content="Here is the prompt text（这里是提示信息）">
            A balloon appears when the mouse passes over this text（当鼠标经过这段文字时，会出现气泡）
        </Tooltip>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>{{htmlCode[0]}}</pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">基础用法</Divider>
        <div class="top">
            <Tooltip content="Top Left text" placement="top-start">
                <Button>上左</Button>
            </Tooltip>
            <Tooltip content="Top Center text" placement="top">
                <Button>上中</Button>
            </Tooltip>
            <Tooltip content="Top Right text" placement="top-end">
                <Button>上右</Button>
            </Tooltip>
        </div>
        <div class="center">
            <div class="center-left">
                <Tooltip content="Left Top text" placement="left-start">
                    <Button>左上</Button>
                </Tooltip><br><br>
                <Tooltip content="Left Center text" placement="left">
                    <Button>左中</Button>
                </Tooltip><br><br>
                <Tooltip content="Left Bottom text" placement="left-end">
                    <Button>左下</Button>
                </Tooltip>
            </div>
            <div class="center-right">
                <Tooltip content="Right Top text" placement="right-start">
                    <Button>右上</Button>
                </Tooltip><br><br>
                <Tooltip content="Right Center text" placement="right">
                    <Button>右中</Button>
                </Tooltip><br><br>
                <Tooltip content="Right Bottom text" placement="right-end">
                    <Button>右下</Button>
                </Tooltip>
            </div>
        </div>
        <div class="bottom">
            <Tooltip content="Bottom Left text" placement="bottom-start">
                <Button>下左</Button>
            </Tooltip>
            <Tooltip content="Bottom Center text" placement="bottom">
                <Button>下中</Button>
            </Tooltip>
            <Tooltip content="Bottom Right text" placement="bottom-end">
                <Button>下右</Button>
            </Tooltip>
        </div>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>{{htmlCode[1]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">CSS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-css"/></h3>
            <pre class="codeBox" id='part2-css'>{{cssCode[0]}}</pre>
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
