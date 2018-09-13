<template>
  <div class="child">
    <h1>{{msg}}</h1>
    <router-link class="link" to='/layoutView/h2/h1.vue/12/h1.vue'>to h2.vue</router-link>
    <router-link class="link" to='/layoutView/h1/h2.vue/123/wangchi'>to h1.vue</router-link>
    <router-view name="container"></router-view> 
  </div>
  

</template>

<script>
export default {
  name: 'children',
  data () {
    return {
      msg: 'this is children!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
