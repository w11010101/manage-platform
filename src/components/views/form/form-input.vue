<template>
  <div class="child">
    <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
      <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
    </Alert>
    <!-- example 1 -->
    <Divider orientation="left">默认大小</Divider>
    <Input v-model="value" placeholder="Enter something..."/>
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1-html"/></h3>
      <pre class="codeBox" id='part1-html'>{{htmlCode[0]}}</pre>
    </div>
    <!-- example 2 -->
    <Divider orientation="left">默认大小 width: 300px</Divider>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2-html"/></h3>
      <pre class="codeBox" id='part2-html'>{{htmlCode[1]}}</pre>
    </div>
    <!-- example 3 -->
    <Divider orientation="left">尺寸 ：大、中（默认）、小</Divider>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px" size="large"/>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px"/>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px" size="small"/>
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3-html"/></h3>
      <pre class="codeBox" id='part3-html'>{{htmlCode[2]}}</pre>
    </div>
    <!-- example 4 -->
    <Divider orientation="left">带清除按钮</Divider>
    <Input v-model="value" placeholder="Enter something..." clearable style="width: 200px" />
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part4-html"/></h3>
      <pre class="codeBox" id='part4-html'>{{htmlCode[3]}}</pre>
    </div>
    <!-- example 5 -->
    <Divider orientation="left">带Icon的输入框</Divider>
    <Input v-model="value" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" />
    <Input v-model="value" icon="ios-add-circle" placeholder="Enter something..." style="width: 200px" />
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part5-html"/></h3>
      <pre class="codeBox" id='part5-html'>{{htmlCode[4]}}</pre>
    </div>
    <!-- example 6 -->
    <Divider orientation="left">带Icon的输入框</Divider>
    Props：
    <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
    <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
    <br>
    Slots： 
    <Input placeholder="Enter name" style="width: auto">
        <Icon type="ios-contact" slot="prefix" />
    </Input>
    <Input placeholder="Enter text" style="width: auto">
        <Icon type="ios-search" slot="suffix" />
    </Input>
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part6-html"/></h3>
      <pre class="codeBox" id='part6-html'>{{htmlCode[5]}}</pre>
    </div>
    <!-- example 7 -->
    <Divider orientation="left">文本域</Divider>
    <Row type="flex" justify="start" align="top" class="code-row-bg">
      <Col span="2"><p>固定行高</p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" placeholder="Enter something..." style="width: 200px"/></p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" :rows="4" placeholder="Enter something..." style="width: 200px"/></p></Col>
    </Row>
    <!-- code -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part7-html"/></h3>
      <pre class="codeBox" id='part7-html'>{{htmlCode[6]}}</pre>
    </div>
    <!-- example 8 -->
    <Divider orientation="left">自适应行高</Divider>
    <Row type="flex" justify="start" align="top" class="code-row-bg">
      <Col span="3"><p>自适应行高</p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" :autosize="true" placeholder="Enter something..." style="width: 200px"/></p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." style="width: 200px"/></p></Col>
    </Row>
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part8-html"/></h3>
      <pre class="codeBox" id='part8-html'>{{htmlCode[7]}}</pre>
    </div>
    <!--  -->
  </div>
</template>

<script>
import {input} from '@/js/tool/part.js';
const {htmlCode} = {htmlCode:input.html}
export default {
  name: 'form-input',
  data () {
    return {
      value: 'this is form-input.vue 。',
      htmlCode,
    }
  },
  props:{
    name:{
      type:String,
      default:"name"
    }
  },
  computed:{
  
  },
  methods:{
    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
