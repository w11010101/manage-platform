<template>
  <div class="child">
    <!-- express -->
    <div class="demo-express">
      <h3 class="demo-express-title">结果展示</h3>
      <div class="demo-express-bg">
          <div class="content-h1">
              <label>标题展示</label>
              <ol class="breadcrumb">
                  <li><a href="#">首页</a></li>
                  <li><a href="#">第一层</a></li>
                  <li class="active">第二层</li>
              </ol>
              <span class="head-tools pull-right">
                  <button class="refresh"></button>
              </span>
          </div>
      </div>
    </div>
    <!-- code html -->
    <div class="demo-express">
      <h3 class="demo-express-title">HTML<Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#html"/></h3>
      <pre id='html'> {{htmlcode}} </pre>
    </div>
    <!-- code css -->
    <div class="demo-express">
      <h3 class="demo-express-title">CSS<Icon type="ios-copy" size='20' class="copyBtn" data-clipboard-target="#css" /></h3>
      <pre id='css'> {{csscode}} </pre>
    </div>
  </div>
</template>

<script>
import {h1} from '@/js/tool/part.js';
let {htmlcode,csscode} = {htmlcode:h1.html,csscode:h1.css}
export default {
  name: 'myh1',
  data () {
    return {
      msg: 'this is h1.vue !!!!',
      htmlcode,
      csscode
    }
  },
  components:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
