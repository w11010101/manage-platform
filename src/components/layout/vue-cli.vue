<template>
  <div class='vueCli'>
    <h1>{{msg}}</h1>
    <div class="vueCli-content">
      <Alert class='alert' type="warning">警告：安装vue-cli前，要先安装Node.js和npm； <br>Node.js（> = 6.x，8.x首选），npm版本3+和Git</Alert>
      <h2>创建文件夹</h2>
      <Alert class="code">mkdir &lt;fileName&gt;</Alert>
      <h2>全局安装vue-cli</h2>
      <Alert class="code">npm install vue-cli -g</Alert>
      <h2>创建基于webpack的vue-cli项目</h2>
      <Alert class="code">vue init webpack &lt;projectName&gt;</Alert>
      <h2>进入项目</h2>
      <Alert class="code">cd &lt;projectName&gt;</Alert>
      <h2>安装本地依赖</h2>
      <Alert class="code">npm install</Alert>
      <h2>运行</h2>
      <Alert class="code">npm run dev</Alert>
      <a href="https://blog.csdn.net/wulala_hei/article/details/80488674" title="">参考资料</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'VueCli',
  data () {
    return {
      msg: 'Vue-cli 安装教程'
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ivu-layout-footer{
  position: absolute;
  bottom: 0
}
.vueCli{
}
.vueCli h1{
  margin-top: 10px;
  text-align: center;
}
.vueCli-content{
  padding: 15px;
}
.vueCli-content h2 {
  font-size: 18px;
  margin:10px 0;
}
.alert{
  font-size: 20px;
  line-height: 30px;
}
.vueCli-content .code{
  font-size: 16px;
}
</style>
