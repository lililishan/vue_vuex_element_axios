<template>
  <div id="leave-wrap">
  	<div class="leave-content">
  		 <div class="leave-title">
        <h1 class="leave-tit"> <i class="icon iconfont iconxinjian xj"></i>新建流程</h1>
      </div>
      <ul class="process_list">
         <li>
           <div class="process_top">
             <i class="icon iconfont iconfawendengji"></i>发文流程(3)
           </div>
           <div class="process_main">
             <div  @click="gotoPath('/Dispatch')">阳工办函</div>
             <div >阳工办发</div>
             <div>阳工发</div>
           </div>
         </li>
         <li>
            <div class="process_top">
              <i class="icon iconfont iconshenpi"></i>行政审批(3)
           </div>
           <div class="process_main">
             <div>值班申请流程</div>
             <div>公务接待申请流程</div>
             <div>用车申请</div>
             <div>请示流程        </div>
           </div> 
         </li>
         <li>
           <div class="process_top">
              <i class="icon iconfont iconrenshiguanli"></i>人事管理 (3)
           </div>
           <div class="process_main">
             <div>临时离岗流程</div>
             <div>出差申请流程</div>
             <div>请假流程</div>
           </div>
         </li>
         <li>
           <div class="process_top">
              <i class="icon iconfont iconcaiwuguanli"></i>财务管理 (3)
           </div>
           <div class="process_main">
             <div>报销流程</div>
             <div>预算审核流程</div>
             <div>领用申请流程</div>
           </div>
         </li>
      </ul>
  	</div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{

      }
    },
    methods:{
       /**
     * 跳转路由
     */
      gotoPath(path){
        this.$router.replace(path)
      },
    },
    mounted(){
      
    },
  }
</script>
<style lang="less" scoped>
    #leave-wrap{
    	padding: 10px;

      .leave-content{
      background: #fff;
      min-height: 560px;
      .leave-title{
        width: 100%;
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding-top: 10px;
        .leave-tit{
           margin-left: 20px;
           float: left;
           width: 20%;
          .xj{
              font-size: 20px;
              background: #427ae1;
              color: #fff;
              border-radius: 50%;
              padding: 3px;
              text-align: center;
              margin-right: 8px;
          }
        }
       }
      }
    }
    .process_list{
      width: 98%;
      margin: 0 auto;
      overflow: hidden;
      margin-top: 39px;

      li{
        height: 165px;
        float: left;
        width: 23%;
        margin-right: 2.4%;
        border:1px solid #e5e5e5;
        .process_top{
            width: 100%;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            color: #1a1a1a;
            text-align: center;
            .iconfawendengji{
              color: #55d2d4;
              font-size: 20px;
            }
            .iconshenpi{
              color: #b37bfa;
              font-size: 20px;
              margin-right: 6px;
            }
            .iconrenshiguanli{
              color: #ffc62e;
              font-size: 20px;
              margin-right: 6px;
            }
            .iconcaiwuguanli{
              color: #8dce36;
              font-size: 20px;
              margin-right: 6px;
            }

        }
        .process_main{
          width: 90%;
          margin: 0 auto;
          div{
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #807d7d;
            cursor: pointer;
          }
        }
      }
      li:nth-child(4n){
        margin-right: 0;
      }
      li:nth-child(1){
        border-top:5px solid #55d2d4;
      }
      li:nth-child(2){
        border-top:5px solid #b37bfa;
      }
      li:nth-child(3 ){
        border-top:5px solid #ffc62e;
      }
      li:nth-child(4){
        border-top:5px solid #8dce36;
      }
    }
</style>    