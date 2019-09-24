<template>
  <div id="app">
    <el-container  class="box">
       <hheader v-show="$route.meta.showheader"></hheader>
    </el-container >

  </div>
</template>

<script>
import  hheader from "./components/header.vue"
export default {
      name:'app',
     components:{
       hheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
