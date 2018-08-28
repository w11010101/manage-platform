<template>
  <div id="app">
    <router-view class='view-header' name="header"></router-view>
    <!-- <img src="./assets/logo.png"> -->
    <router-view class='view-side-nav' name="side-nav"></router-view>
    <router-view class='view-content' name="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view-side-nav {
  height: calc(100vh - 50px);
}

</style>
