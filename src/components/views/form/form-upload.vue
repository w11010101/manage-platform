<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基本用法</Divider>
        <Upload action="//jsonplaceholder.ty.com/posts/picode">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>   {{htmlCode[0]}}</pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">拖拽上传</Divider>
        <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
            </div>
        </Upload>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>   {{htmlCode[1]}}</pre>
        </div>
        

    <!--  -->
    </div>
</template>

<script>
import {upload} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:upload.html,jsCode:upload.js};
function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'form-upload',
    data() {
        return {
            value: 'this is form-upload.vue 。',
            htmlCode,
            jsCode,
        }
    },
    props: {
        name: {
            type: String,
            default: 'name!'
        }
    },
    computed: {
 
    },
    mounted() {
        this.$nextTick(function () {
            console.log(this.$route)
        })
 
    },
    methods: {
        
    },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
