<template>
    <div class="child">
        <!-- example 1 -->
        <div class="demo-express">
            <h3 class="demo-express-title">结果展示</h3>
            <div class="demo-express-bg">
                <div class="content-h2">
                    <label>h2标题展示</label>
                </div>
            </div>
        </div>
        <!-- code -->
        <div class="demo-express">
            <h3 class="demo-express-title">HTML
              <Icon type="ios-copy" size='20' class="copyBtn"  data-clipboard-target="#html"/></h3>
            <pre id='html'>{{htmlcode}} </pre>
        </div>
        <div class="demo-express">
            <h3 class="demo-express-title">CSS
              <Icon type="ios-copy" size='20' class="copyBtn" data-clipboard-target="#css" /></h3>
            <pre id='css'>{{csscode}} </pre>
        </div>
    </div>
</template>

<script>
import {h2} from '@/js/tool/part.js';
let {htmlcode,csscode} = {htmlcode:h2.html,csscode:h2.css}
console.log(h2)
export default {
  name: 'myh2',
  data () {
    return {
      msg: 'this is h2.vue !!!!',
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
