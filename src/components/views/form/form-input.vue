<template>
  <div class="child">
    <Alert show-icon style='font-size:16px;'>依赖 iview ，若想查看相关方法、属性和事件，请点击 Docs 跳转查看；
      <template slot="desc">注意：非 template/render 模式下，把<code>&lt;{{name.replace(/^\S/,s=>s.toUpperCase())}}&gt;</code>改成 <code>&lt;i-{{name}}&gt;</code>。</template>
    </Alert>
    <!--  -->
    <Divider orientation="left">默认大小</Divider>
    <Input v-model="value" placeholder="Enter something..."/>
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part1"/></h3>
      <code class="codeBox" id='part1'>
        &lt;Input v-model="value" placeholder="Enter something..."/&gt;
      </code>
    </div>
    <!--  -->
    <Divider orientation="left">默认大小 width: 300px</Divider>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part2"/></h3>
      <code class="codeBox" id='part2'>
        &lt;Input v-model="value" placeholder="Enter something..." style="width: 300px" /&gt;
      </code>
    </div>
    <!--  -->
    <Divider orientation="left">尺寸 ：大、中（默认）、小</Divider>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px" size="large"/>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px"/>
    <Input v-model="value" placeholder="Enter something..." style="width: 150px" size="small"/>
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part3"/></h3>
      <code class="codeBox" id='part3'>
        &lt;!-- 大 --&gt;
        <br>
        &lt;Input v-model="value" placeholder="Enter something..." style="width: 150px" size="large"/&gt;
        <br>
        &lt;!-- 中 --&gt;
        <br>
        &lt;Input v-model="value" placeholder="Enter something..." style="width: 150px"/&gt;
        <br>
        &lt;!-- 小 --&gt;
        <br>
        &lt;Input v-model="value" placeholder="Enter something..." style="width: 150px" size="small"/&gt;
      </code>
    </div>
    <!--  -->
    <Divider orientation="left">带清除按钮</Divider>
    <Input v-model="value" placeholder="Enter something..." clearable style="width: 200px" />
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part4"/></h3>
      <code class="codeBox" id='part4'>
        &lt;!-- icon="ios-clock-outline" --&gt;
        <br>
        &lt;Input v-model="value" placeholder="Enter something..." clearable style="width: 200px" /&gt;
      </code>
    </div>
    <!--  -->
    <!--  -->
    <Divider orientation="left">带Icon的输入框</Divider>
    <Input v-model="value" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" />
    <Input v-model="value" icon="ios-add-circle" placeholder="Enter something..." style="width: 200px" />
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part4"/></h3>
      <code class="codeBox" id='part4'>
        &lt;!-- icon="ios-clock-outline" --&gt;
        <br>
        &lt;Input v-model="value" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" /&gt;
        <br>
        &lt;!-- icon="ios-add-circle" --&gt;
        <br>
        &lt;Input v-model="value" icon="ios-add-circle" placeholder="Enter something..." style="width: 200px" /&gt;
      </code>
    </div>
    <!--  -->
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
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part5"/></h3>
      <code class="codeBox" id='part5'>
        &lt;!-- Props： --&gt;
        <br>
        &lt;Input prefix="ios-contact" placeholder="Enter name" style="width: auto" /&gt;
        <br>
        &lt;Input suffix="ios-search" placeholder="Enter text" style="width: auto" /&gt;
        <br>
        &lt;!-- Slots： --&gt;
        <br>
        &lt;Input placeholder="Enter name" style="width: auto"&gt;
          <br>
          &nbsp;&nbsp;&lt;Icon type="ios-contact" slot="prefix" /&gt;
          <br>
        &lt;/Input&gt;
        <br>
        &lt;Input placeholder="Enter text" style="width: auto"&gt;
          <br>
          &nbsp;&nbsp;&lt;Icon type="ios-search" slot="suffix" /&gt;
          <br>
        &lt;/Input&gt;
      </code>
    </div>
    <!--  -->
    <Divider orientation="left">文本域</Divider>
    <Row type="flex" justify="start" align="top" class="code-row-bg">
      <Col span="2"><p>固定行高</p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" placeholder="Enter something..." style="width: 200px"/></p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" :rows="4" placeholder="Enter something..." style="width: 200px"/></p></Col>
    </Row>
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part6"/></h3>
      <code class="codeBox" id='part6'>
        &lt;Input v-model="value" type="textarea" placeholder="Enter something..." style="width: 200px" /&gt;
        <br>
        &lt;Input v-model="value" type="textarea" :rows="4" placeholder="Enter something..." style="width: 200px" /&gt;
      </code>
    </div>
    <Row type="flex" justify="start" align="top" class="code-row-bg">
      <Col span="3"><p>自适应行高</p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" :autosize="true" placeholder="Enter something..." style="width: 200px"/></p></Col>
      <Col span="6"><p><Input v-model="value" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." style="width: 200px"/></p></Col>
    </Row>
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#part7"/></h3>
      <code class="codeBox" id='part7'>
        &lt;Input v-model="value" type="textarea" :autosize="true" placeholder="Enter something..." style="width: 200px"/&gt;
        <br>
        &lt;Input v-model="value" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." style="width: 200px" /&gt;
      </code>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'form-input',
  data () {
    return {
      value: 'this is form-input.vue 。',
      
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
