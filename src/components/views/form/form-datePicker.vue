<template>
    <div class="child">
        <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
            <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
        </Alert>
        <!-- example 1 -->
        <Divider orientation="left">基本尺寸</Divider>
        <!-- example -->
        <Row>
            <Col span="6">
                <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
            <Col span="6">
                <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
        </Row>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
            <pre class="codeBox" id='part1-html'>   {{htmlCode[0]}}</pre>
        </div>
        <!-- example 2 -->
        <Divider orientation="left">年和月</Divider>
        <!-- example -->
        <Row>
            <Col span="6">
                <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
            </Col>
            <Col span="6">
                <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
            </Col>
        </Row>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
            <pre class="codeBox" id='part2-html'>   {{htmlCode[1]}}</pre>
        </div>
        <!-- example 3 -->
        <Divider orientation="left">日期格式</Divider>
        <!-- example -->
        <Row>
            <Col span="6">
                <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
            <Col span="6">
                <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
        </Row>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'>   {{htmlCode[2]}}</pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">JS<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
            <pre class="codeBox" id='part3-html'>   {{jsCode[0]}}</pre>
        </div>
    <!--  -->
    </div>
</template>

<script>
import {datePicker} from '@/js/tool/part.js';
const {htmlCode,jsCode} = {htmlCode:datePicker.html,jsCode:datePicker.js};

export default {
  name: 'form-datePicker',
  data () {
    return {
      value: 'this is form-datePicker.vue 。',
      htmlCode,
      jsCode,
      switch1:[],
      value1: '2018-10-01',
      value2: ['2017-9-01', '2018-10-8']
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
      console.log(this.$route)
    })
  },
  methods:{
    change(status){
        this.$Message.info('开关状态：' + status);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
