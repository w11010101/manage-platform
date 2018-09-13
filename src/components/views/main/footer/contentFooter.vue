<template>
  <div class="footer">
    {{msg}}
    <button @click=goback>go back</button>
  </div>
</template>

<script>
import router from '../../router';
export default {
  name: 'contentFooter',
  data () {
    return {
      msg: 'this is contentFooter !'
    }
  },
  methods:{
    goback:function(){
      console.log(1);
      router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ivu-layout-footer{
  position: absolute;
  bottom: 0
}
</style>
