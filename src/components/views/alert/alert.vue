<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!--  -->
        <Divider orientation="left">基础用法</Divider>
        <!-- example -->
        <Alert>An info prompt</Alert>
        <Alert type="success">A success prompt</Alert>
        <Alert type="warning">A warning prompt</Alert>
        <Alert type="error">An error prompt</Alert>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>{{htmlCode[0]}}</pre>
        </div>
        <!--  -->
        <Divider orientation="left">含描述信息</Divider>
        <!-- example -->
        <Alert>
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="success">
            A success prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="warning">
            A warning prompt
            <template slot="desc">
            Content of prompt. Content of prompt. Content of prompt.
        </template>
        </Alert>
        <Alert type="error">
            An error prompt
            <span slot="desc">
                Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
            </span>
        </Alert>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>{{htmlCode[1]}}</pre>
        </div>
        <!--  -->
        <Divider orientation="left">带图标、自定义图标</Divider>
        <!-- example -->
        <Alert show-icon>
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert show-icon>
            Custom icon
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
        </Alert>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'>{{htmlCode[2]}}</pre>
        </div>
        <!--  -->
        <Divider orientation="left">关闭按钮</Divider>
        <!-- example -->
        <Alert banner closable type="warning">Notice: notification contents...</Alert>
        <Alert show-icon closable>
            Custom icon
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
        </Alert>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part4-html"/></h3>
            <pre class="codeBox" id='part4-html'>{{htmlCode[3]}}</pre>
        </div>    

    </div>
</template>

<script>
import {alert} from '@/js/tool/part.js';
// const alertCode = alert.html;

// const {htmlCode} = {htmlCode:tab.html};
export default {
    name: 'example-alert',
    data () {
        return {
            value: 'this is alert.vue 。',
            htmlCode:alert.html
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
