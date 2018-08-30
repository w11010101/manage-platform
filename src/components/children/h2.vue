<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link class="link" to="/layoutView/h1">to h1.vue</router-link>

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
