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
        <Transfer
            :data="data1"
            :target-keys="targetKeys1"
            :render-format="render1"
            @on-change="handleChange1">
            
        </Transfer>
        

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
            data1: this.getMockData(),
            targetKeys1: this.getTargetKeys(),
            // data1: this.getTargetKeys(),
            // targetKeys1: this.getMockData()
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
        getMockData () {
            let mockData = [];
            for (let i = 1; i <= 20; i++) {
                mockData.push({
                    key: i.toString(),
                    label: 'Content ' + i,
                    description: 'The desc of content  ' + i,
                    // disabled: Math.random() * 3 < 1
                });
            }
            return mockData;
        },
        getTargetKeys () {
            
            return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);

        },
        render1 (item) {

            return item.label;
        },
        handleChange1 (newTargetKeys, direction, moveKeys) {
            console.log(newTargetKeys);
            console.log(direction);
            console.log(moveKeys);
            this.targetKeys1 = newTargetKeys;
        }
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
