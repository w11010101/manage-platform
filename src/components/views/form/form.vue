<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基本用法</Divider>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                <Button @click="handleReset('formInline')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>   {{htmlCode[0]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-js"/></h3>
            <pre class="codeBox" id='part1-js'>   {{jsCode[0]}}</pre>
        </div>
        

    <!--  -->
    </div>
</template>

<script>
import {form} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:form.html,jsCode:form.js};
function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'form',
    data() {
        return {
            value: 'this is form.vue 。',
            htmlCode,
            jsCode,
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写用户名.', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码.', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码不能少于6位.', trigger: 'blur' }
                ]
            }
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
        handleSubmit(name){
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
    },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
