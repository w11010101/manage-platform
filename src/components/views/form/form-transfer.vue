<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基本用法</Divider>
        <Transfer
            :data="data1"
            :target-keys="targetKeys1"
            :render-format="render1"
            @on-change="handleChange1"
            :list-style="listStyle"></Transfer>
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
        <Divider orientation="left">基本用法</Divider>
        <Transfer
            :data="data1"
            :target-keys="targetKeys1"
            filterable
            :filter-method="filterMethod"
            @on-change="handleChange1"
            :list-style="listStyle"></Transfer>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>{{htmlCode[1]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-js"/></h3>
            <pre class="codeBox" id='part2-js'>{{jsCode[1]}}</pre>
        </div>

    <!--  -->
    </div>
</template>

<script>
import {transfer} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:transfer.html,jsCode:transfer.js};
function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'form-transfer',
    data() {
        return {
            value: 'this is form-transfer.vue 。',
            htmlCode,
            jsCode,
            listStyle:{
                width: '300px',
                height: '300px'
            },
            data1:this.getData(),
            targetKeys1:this.getTargetKeys()
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
        getData(){
            let data = [];
            for(let i = 0;i<20;i++){
                data.push({
                    key: i.toString(),
                    label: 'Content ' + i,
                    description: 'The desc of content  ' + i,
                    disabled: Math.random() * 3 < 1
                });
            }
            return data;
        },
        getTargetKeys(){
            return this.getData().filter(()=>Math.random()*2>1).map(item=>item.key)
        },
        render1 (item) {
            return item.label;
        },
        handleChange1 (newTargetKeys, direction, moveKeys) {
            console.log(newTargetKeys);
            console.log(direction);
            console.log(moveKeys);
            this.targetKeys1 = newTargetKeys;
        },
        filterMethod (data, query) {
            return data.label.indexOf(query) > -1;
        }
    },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
