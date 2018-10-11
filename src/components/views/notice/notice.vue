<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基础用法</Divider>
        <Button type="primary" @click="open(false)">打开通知</Button>
        <Button @click="open(true)">打开通知(只有标题)</Button>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>{{htmlCode[0]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-js"/></h3>
            <pre class="codeBox" id='part1-js'>{{jsCode[0]}} </pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">提醒类型</Divider>
        <p>带描述信息</p>
        <Button @click="info(false)">消息</Button>
        <Button @click="success(false)">成功</Button>
        <Button @click="warning(false)">警告</Button>
        <Button @click="error(false)">错误</Button>
        <p>只有标题</p>
        <Button @click="info(true)">消息</Button>
        <Button @click="success(true)">成功</Button>
        <Button @click="warning(true)">警告</Button>
        <Button @click="error(true)">错误</Button>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>{{htmlCode[1]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-js"/></h3>
            <pre class="codeBox" id='part2-js'>{{jsCode[1]}} </pre>
        </div>
        <!-- example 3 -->
        <Divider orientation="left">手动关闭</Divider>
        <Button type="primary" @click="time">打开通知</Button>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'>{{htmlCode[2]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-js"/></h3>
            <pre class="codeBox" id='part3-js'>{{jsCode[2]}} </pre>
        </div>

    </div>
</template>

<script>
import {notice} from '@/js/tool/part.js';
let {htmlCode,jsCode} = {htmlCode:notice.html,jsCode:notice.js};

function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'example-notice',
    data () {
        return {
            loading:false,
            value: 'this is notice.vue 。',
            htmlCode,
            jsCode
            
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
        open (nodesc) {
            this.$Notice.open({
                title: '通知标题',
                desc: nodesc ? '' : '这里是通知的描述'
            });
        },
        info (nodesc) {
            this.$Notice.info({
                title: '通知标题',
                desc: nodesc ? '' : '这里是通知的描述'
            });
        },
        success (nodesc) {
            this.$Notice.success({
                title: '通知标题',
                desc: nodesc ? '' : '这里是通知的描述'
            });
        },
        warning (nodesc) {
            this.$Notice.warning({
                title: '通知标题',
                desc: nodesc ? '' : '这里是通知的描述'
            });
        },
        error (nodesc) {
            this.$Notice.error({
                title: '通知标题',
                desc: nodesc ? '' : '这里是通知的描述'
            });
        },
        time () {
            this.$Notice.open({
                title: '通知标题',
                desc: '这条通知不会自动关闭, 需要你点击关闭按钮去关闭.',
                duration: 0
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
