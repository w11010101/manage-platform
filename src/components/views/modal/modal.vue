<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
          <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基础用法</Divider>
        <Button type="primary" @click="modal1 = true">显示对话框</Button>
        <Modal
            v-model="modal1"
            title="普通的Modal的对话框标题"
            @on-ok="ok"
            @on-cancel="cancel">
            <p>对话内容</p>
            <p>对话内容</p>
            <p>对话内容</p>
        </Modal>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'> {{htmlCode[0]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-js"/></h3>
            <pre class="codeBox" id='part1-js'> {{jsCode[0]}} </pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">设置宽高</Divider>
        <Button @click="modal2 = true">Set the width</Button>
        <Modal
            v-model="modal2"
            title="Custom width"
            width="300">
            <p>Customize width, unit px, default 520px.</p>
            <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
        </Modal>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'> {{htmlCode[1]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-js"/></h3>
            <pre class="codeBox" id='part2-js'> {{jsCode[1]}} </pre>
        </div>
        <!-- example 3 -->
        <Divider orientation="left">异步关闭</Divider>
        <Button type="primary" @click="modal3 = true">Display dialog box</Button>
        <Modal
            v-model="modal3"
            title="Title"
            :loading="loading"
            @on-ok="asyncOK">
            <p>After you click ok, the dialog box will close in 2 seconds.</p>
        </Modal>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'> {{htmlCode[2]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-js"/></h3>
            <pre class="codeBox" id='part3-js'> {{jsCode[2]}} </pre>
        </div>
        <!-- example 4 -->
        <Divider orientation="left">可拖拽</Divider>
        <Button @click="modal4 = true">Open the first modal</Button>
        <Button @click="modal5 = true">Open the second modal</Button>
        <Modal v-model="modal4" draggable scrollable title="Modal 1">
            <div>This is the first modal</div>
        </Modal>
        <Modal v-model="modal5" draggable scrollable title="Modal 2">
            <div>This is the second modal</div>
        </Modal>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part4-html"/></h3>
            <pre class="codeBox" id='part4-html'> {{htmlCode[3]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part4-js"/></h3>
            <pre class="codeBox" id='part4-js'> {{jsCode[3]}} </pre>
        </div>
        <!-- example 5 -->
        <Divider orientation="left">实例化用法</Divider>
        <Button @click="instance('confirm')">confirm</Button>
        <Button @click="instance('info')">Info</Button>
        <Button @click="instance('success')">Success</Button>
        <Button @click="instance('warning')">Warning</Button>
        <Button @click="instance('error')">Error</Button>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part5-html"/></h3>
            <pre class="codeBox" id='part5-html'> {{htmlCode[4]}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part5-js"/></h3>
            <pre class="codeBox" id='part5-js'> {{jsCode[4]}} </pre>
        </div>

    </div>
</template>

<script>
import {modal} from '@/js/tool/part.js';
let {htmlCode,jsCode} = {htmlCode:modal.html,jsCode:modal.js};

function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'example-modal',
    data () {
        return {
            loading:false,
            value: 'this is modal.vue 。',
            htmlCode,
            jsCode,
            modal1:false,
            modal2:false,
            modal3:false,
            loading:true,
            modal4:false,
            modal5:false,

            
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
        ok () {
            this.$Message.info('Clicked ok');
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        },
        asyncOK(){
            setTimeout(()=>{
                this.modal3 = false;
            },2000)
        },
        instance(type){
            console.log(type)
            let title = 'this is title';
            let content = '<p>content of dialog</p><p>content of dialog</p>';
            switch (type){
                case 'confirm':
                    this.$Modal.confirm({
                        title,
                        content,
                    })
                break;
                case 'info':
                    this.$Modal.info({
                        title,
                        content,
                    })
                break;
                case 'success':
                    this.$Modal.success({
                        title,
                        content,
                    })
                break;
                case 'warning':
                    this.$Modal.warning({
                        title,
                        content,
                    })
                break;
                case 'error':
                    this.$Modal.error({
                        title,
                        content,
                    })
                break;
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
