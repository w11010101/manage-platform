<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Button type="primary" @click="info">默认提示信息</Button>
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
        <Divider orientation="left">其他类型</Divider>
        <Button @click="success">success提示信息</Button>
        <Button @click="warning">warning提示信息</Button>
        <Button @click="error">error提示信息</Button>
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
        <Divider orientation="left">自定义时长</Divider>
        <Button @click="time">延迟{{second}}秒关闭</Button>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'>{{htmlCode[2]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-js"/></h3>
            <pre class="codeBox" id='part3-js'>{{jsCode[2]}}</pre>
        </div>

    </div>
</template>

<script>
import {message} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:message.html,jsCode:message.js};

export default {
    name: 'example-message',
    data () {
        return {
            value: 'this is message.vue 。',
            htmlCode,
            jsCode,
            second:6,
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
        info () {
            this.$Message.info('默认提示信息');
        },
        success () {
            this.$Message.success('success提示信息');
        },
        warning () {
            this.$Message.warning('warning提示信息');
        },
        error () {
            this.$Message.error('error提示信息');
        },
        time () {
            let second = this.second;
            this.$Message.info({
                content: '延迟'+second+'秒关闭',
                duration: second,
                closable: true
            });
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
