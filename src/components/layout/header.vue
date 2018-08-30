<template>
  <header >
    {{msg}}
  </header>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(../../css/header.css);
</style>
