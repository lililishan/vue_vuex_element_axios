<template>
  <el-container class="box">
     <router-view/>
  </el-container>
</template>
<style>
  .box{
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: fixed
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
  color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-header div:nth-child(1){
    float: left;
    width:20%;
  }
  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 200px;
    width:15%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
