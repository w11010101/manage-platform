<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link class="link" to="/layoutView/h2">to h2.vue</router-link>
    <router-link class="link" to="/layoutView/h1/show">show</router-link>
    <router-view name='h1-content'></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'myh1',
  data () {
    return {
      msg: 'this is h1 !!!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
