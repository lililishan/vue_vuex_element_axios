<template>
  <el-container class="box">
  </el-container>
</template>
<script>
  export default{
    data(){
      return{
        activeIndex: '1',
        activeIndex2:'1',
        isCollapse: false
      }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      gotoPath(path){
         this.$router.push(path)
      }


    },
    mounted(){
      const that=this;

    }
  }
</script>
<style>
</style>
