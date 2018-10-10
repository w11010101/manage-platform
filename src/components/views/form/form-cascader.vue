<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基本用法</Divider>        
        <Cascader :data="data1" v-model="value1" style='width: 200px;'></Cascader>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>   {{htmlCode[0]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-js"/></h3>
            <pre class="codeBox" id='part1-js'>   {{jsCode.example1}}</pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">默认值</Divider>        
        <Cascader :data="data1" v-model="value2" style='width: 200px;'></Cascader>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>   {{htmlCode[1]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-js"/></h3>
            <pre class="codeBox" id='part2-js'>   {{jsCode.example1}}</pre>
        </div>
        <!-- example 3 -->
        <Divider orientation="left">动态数据</Divider>        
        <Cascader :data="data3" v-model="value3" :load-data=loadData style='width: 200px;'></Cascader>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'>   {{htmlCode[2]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-js"/></h3>
            <pre class="codeBox" id='part3-js'>   {{jsCode.example2}}</pre>
        </div>

    <!--  -->
    </div>
</template>

<script>
import {cascader} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:cascader.html,jsCode:cascader.js};
function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'form-cascader',
    data() {
        return {
            value: 'this is form-cascader.vue 。',
            htmlCode,
            value1: [],
            value2: ['heilongjiang', 'haerbin', 'zhongyangdajie'],
            data3: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [],
                    loading: false
                },
                {
                    value: 'heilongjiang',
                    label: '黑龙江',
                    children: [],
                    loading: false
                },
                {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [],
                    loading: false
                }
            ],
            value3: [],
            data1: jsCode.example1,
            jsCode: {
                example1: toStringify(jsCode.example1),
                example2: jsCode.example2[0]
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
        loadData(item,callback) {
            console.log(item);
            item.loading = true;
            setTimeout(function(){
                item.loading = false;
                switch (item.value){
                    case 'beijing':
                        item.children = [
                            {
                                value: 'gugong',
                                label: '故宫'
                            },
                            {
                                value: 'tiantan',
                                label: '天坛'
                            },
                            {
                                value: 'wangfujing',
                                label: '王府井'
                            }
                        ];
                    break;
                    case 'heilongjiang':
                        item.children = [
                            {
                                value: 'haerbin',
                                label: '哈尔滨',
                                children: [
                                    {
                                        value: 'zhongyangdajie',
                                        label: '中央大街',
                                    }
                                ]
                            },
                            {
                                value: 'daxinganling',
                                label: '大兴安岭',
                                children: [
                                    {
                                        value: 'yuying',
                                        label: '育英',
                                    },
                                    {
                                        value: 'mohe',
                                        label: '漠河',
                                    }
                                ]
                            }
                        ];
                    break;
                    case 'jiangsu':
                        item.children = [
                            {
                                value: 'nanjing',
                                label: '南京',
                                children: [
                                    {
                                        value: 'fuzimiao',
                                        label: '夫子庙',
                                    }
                                ]
                            },
                            {
                                value: 'suzhou',
                                label: '苏州',
                                children: [
                                    {
                                        value: 'zhuozhengyuan',
                                        label: '拙政园',
                                    },
                                    {
                                        value: 'shizilin',
                                        label: '狮子林',
                                    }
                                ]
                            }
                        ];
                    break;

                }
                callback();
            },2000)
        }
    },
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
