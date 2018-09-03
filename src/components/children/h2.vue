<template>
  <div class="child">
    <h1>{{msg}}</h1>
    <router-link class="link" :to="{name:'h1'}">to h1.vue 无参数</router-link>
    <router-link class="link" to="/layoutView/h1/h2.vue/123/wangchi">to h1.vue 有参数</router-link>
    <h2>
      接受来自{{$route.params.from}}的传参，id：{{$route.params.id}}，name：{{$route.params.name}}
      <br>
      <!-- mounted中赋值 from：{{from}}，id：{{id}}，name：{{name}} -->
      <br>
      $store.state.count:{{$store.state.count}}
    </h2>
  </div>
  
</template>

<script>
export default {
  name: 'myh2',
  data () {
    return {
      msg: 'this is h2 '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
