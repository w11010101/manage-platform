<template>
  <div class="child">
    <h1>{{msg}}</h1>
    <router-link class="link" to="/layoutView/h2/h1.vue/12/h1.vue">to h2.vue</router-link>
    <router-link class="link" :to="{name:'children'}">children 无参数</router-link>
    <router-link class="link" to="/layoutView/h1/h1.vue/321/children/children">children 有参数，参数为空</router-link>
    <h2>
      接受来自{{$route.params.from}}的传参，id：{{$route.params.id}}，name：{{$route.params.name}}
      <br>
      mounted中赋值 from：{{from}}，id：{{id}}，name：{{name}}
      <br>
      $store.state.count:{{$store.state.count}}
    </h2>
    <router-view name='h1-content'></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'myh1',
  data () {
    return {
      msg: 'this is h1 !!!!',
      from:"",
      id:"",
      name:""
    }
  },
  // props:['id','name'],
  mounted:function(){
    for(var key in this.$route.params){
      this[key] = this.$route.params[key];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
