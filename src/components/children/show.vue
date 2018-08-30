<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link to='foo'>foo</router-link>
    <router-link to='h1'>h1</router-link>
    <router-view name="container"></router-view> 
  </div>
  

</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      msg: 'this is content!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  font-size: 20px
}
</style>
