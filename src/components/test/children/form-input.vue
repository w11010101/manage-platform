<template>
  <div class="child">
    <h1>{{msg}}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    value: Object,
  },
  data () {
    return {
      msg: 'this is form-input.vue !',
      
    }
  },
  computed:{
  
  },
  methods:{
    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
