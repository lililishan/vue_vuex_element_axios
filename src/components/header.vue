<template>
  <el-container>
  <el-aside width="16.1%">
    <el-header style="background: #f65c5c">
      <img src="../assets/images/logo.png" class="logo" alt="">
    </el-header>
      <!-- 首页左侧 -->
      <el-menu v-show="isOne" default-active="1" class="el-menu-vertical-demo menu_one" @open="handleOpen"
         @close="handleClose" style="width: 100%;" >
         <div v-for="(item,index) in leftMenu " :key="index">
            <el-submenu  v-if="item.children" :index="item.index">
              <template slot="title">
                   <i class="icon iconfont " :class="item.icon"></i>
                   <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
               <el-menu-item v-for="items in item.children" :key="item.index+'-'+items.index" :index="item.index+'-'+items.index"  @click="gotoPath(items.path)">{{items.name}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.index" v-else @click="gotoPath(item.path)"> 
               <i class="icon iconfont " :class="item.icon"></i>
               <span slot="title">{{item.name}}</span>
             </el-menu-item>
          </div>
      </el-menu>
      <!-- 流程左侧 -->
    <el-menu v-show="isTwo"
      default-active="1"
      class="el-menu-vertical-demo menu_two"
      @open="handleOpen"
      @close="handleClose"  style="width: 100%;">
      <el-menu-item index="10" @click="gotoPath('/Matters')">
        <i class="icon iconfont iconmulu"></i>
        <span slot="title">代办事宜</span>
      </el-menu-item>
      <el-menu-item index="11"  @click="gotoPath('/Newprocess')">
        <i class="icon iconfont iconxinjian"></i>
        <span slot="title">新建流程</span>
      </el-menu-item>
      <el-menu-item index="12" @click="gotoPath('/Mattersyi')">
        <i class="icon iconfont iconiconfontyixuan"></i>
        <span slot="title">已办事宜</span>
      </el-menu-item>
      <el-menu-item index="13"  @click="gotoPath('/request')">
        <i class="icon iconfont iconxieduanxin"></i>
        <span slot="title">我的请求</span>
      </el-menu-item>
    </el-menu>
    <!-- 知识左侧 -->
    <el-menu v-show="isThree"
      default-active="1"
      class="el-menu-vertical-demo menu_two"
      @open="handleOpen"
      @close="handleClose"  style="width: 100%;">
      <el-menu-item index="14" @click="gotoPath('/knowledge')">
        <i class="icon iconfont icontubiao"></i>
        <span slot="title">查阅文档</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
  <el-header style="background: #ce4b4b;">
    <i class="icon iconfont iconshouye-copy" @click="index()"></i>
    <div class="work_tai">
      <i class=" icon iconfont icongongzuotai"></i>工作台
      <div class="work_taitan">
        <div class="work_tailist">
          <div @click="procress()">
             <img src="../assets/header/liucheng.png">
          </div>
          <div @click="know()">
             <img src="../assets/header/zhishi.png">
          </div>
        </div>
      </div>
    </div>
    <div class="search_box">
       <el-dropdown class="search_left">
          <span class="el-dropdown-link">
              人员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
          </el-dropdown-menu>
       </el-dropdown>
       <div class="right_xian"></div>
       <input class="search_input" type="" placeholder="请输入关键词搜索" name="">
       <i class="icon iconfont iconicon-test search"></i>
    </div>
    <div class="work_right">
      <!-- <i  class="icon iconfont iconxiaoxi">
        <span>12</span>
      </i> -->
      <message-modal></message-modal>

      <div class="right_xian" style="margin-top: 19px;"></div>
       <el-dropdown style="margin-top: 10px;">
          <span class="el-dropdown-link">
                <el-avatar icon="el-icon-user-solid" style="float: left;"></el-avatar>
                <i class="el-icon-arrow-down" style="float: left;margin: 15px 10px;"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
       </el-dropdown>
    </div>
    </el-header>
  <el-main class="main">
     <transition name="fade" mode="in-out">
      <router-view/>

    </transition>
  </el-main>
</el-container>
  </el-container>
</template>
<script>
  import https from '../utils/https.js'
  import messageModal from "./messageModal.vue"
  export default{
    components: {
      messageModal
    },
    data(){
      return{
          activeIndex: '1',
          activeIndex2:'1',
          isCollapse: false,
          isOne:true,
          isTwo:false,
          isThree:false,
          leftMenu:[
            { icon:'iconshouye', name:'首页', path:'/index', index:"1"}, //iconrenshiguanli
            { icon:'iconrenshiguanli', name:'人事管理', index:"2",
                children:[
                  {name:'请假', path:'/leave', index:"1"},
                  {name:'出差', path:'/travel', index:"2"},
                  {name:'临时调岗', path:'/demobilized', index:"3"}
                ]
            }, 
            {
              icon:'iconshenpi', name:'行政审批', index:"3",
              children:[
                {name:'公务接待', path:'/adminappovla', index:"1"},
                {name:'值班', path:'/onduty', index:"2"},
                {name:'请示', path:'/please', index:"3"},
                {name:'用车', path:'/getcart', index:"4"}
              ]
            }, 
            {
              icon:'iconcaiwuguanli', name:'财务管理',index:"4",
              children:[
                {name:'报销', path:'/budget', index:"1"},
                {name:'支出预算', path:'/expenditure', index:"2"},
                {name:'领用', path:'/collarUse', index:"3"}
              ]
            }, 
            { icon:'iconqingjia', name:'请假统计', path:'/leaveStatistics', index:"5"}, 
            { icon:'iconxinjian', name:'新建流程', path:'/Newprocess', index:"6"}, 
            { icon:'iconmoxing', name:'查看模型', index: "7",
              children:[
                {name:'模型管理', path:'/Model', index:"1"},
                {name:'流程管理', path:'/processManagement', index:"2"},
              ]
            }, 
            { icon:'iconfawen', name:'发文', path:'/dispatchManagement', index:"8"}, //发文
           
          ],
      }
    },
    methods:{
       gotoPath(path){
        this.$router.push(path)
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 点击工作台流程切换
      procress(){
        this.isOne=false;
        this.isTwo=true;
        this.isThree=false
        this.$router.push("/Matters")
      },
      index(){
        this.isOne=true;
        this.isTwo=false;
        this.isThree=false
        this.$router.push("/index")
      },
      know(){
        this.isThree=true;
        this.isOne=false;
        this.isTwo=false;
        this.$router.push("/knowledge")
      },
    },
    mounted(){
      const that=this
    }
  }
</script>

<style lang="less">
@import "./../styles/header.less";
 .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity 0.2s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.2s;

  }
</style>
