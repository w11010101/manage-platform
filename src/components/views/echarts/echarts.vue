<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>如果引入echarts.js是静态文件，勿忘配置webpack.base.conf.js;
            <template slot="desc">注意：echarts.js 为本地静态文件，第三方插件，如果该插件是按照模块化开发（commonjs、amd、cmd、es6）；可以通过相应的模块调用方法，来使用；
            </template>
        </Alert>
        <Divider orientation="left">基础用法</Divider>
        <div id="echarts"></div>
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>{{htmlCode}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-js"/></h3>
            <pre class="codeBox" id='part1-js'>{{jsCode}}</pre>
        </div>

    </div>
</template>

<script>
    import echarts from 'echarts'
    // import
import {myEcharts} from '@/js/tool/part.js';
let {htmlCode,jsCode} = {htmlCode:myEcharts.html,jsCode:myEcharts.js};

function toStringify(obj){
    return typeof obj === 'object'?JSON.stringify(obj):obj;
}
export default {
    name: 'example-echarts',
    data () {
        return {
            value: 'this is echarts.vue 。',
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
    computed:{
  
    },
    mounted(){
        this.$nextTick(function(){
            console.log(echarts);
            var myChart = echarts.init(document.getElementById('echarts'));
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        })
    },
    methods:{

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #echarts{
        width: 500px;
        height: 500px;
        padding: 10px;
        border:1px solid #bbb;
        border-radius:5px;
    }
</style>
