<template>
    <div class="leave-addWrap">
      <!--申请头部-->
      <div class="add-header">
        <div class="date-icon">
          <i class="icon iconfont icontubiao"></i>
        </div>
        <div class="header-dskr">
        	<!-- <input type="" v-model="title" name=""> -->
        	总工会公务接待办法
        </div>
        <div class="commit-butt" v-show="buttShow">
          <button>提交</button>
          <button>草稿</button>
        </div>
        <div class="title">
          <div class="act">正文内容</div>
          <div>文档附件</div>
        </div>
      </div>
      <!--头部结束-->
     <!--内容区-->
     <div class="apply-cont">
          <p class="tit">总工会公务接待办法</p>
          <p class="tit_small">（修订）</p>
          <div class="xq_count">
          	 <p class="xq_same">为认真贯彻落实中央八项规定，建立厉行节约、反对铺张浪费长效机制，形成勤俭办会的良好风气，根据中办、国办《党政机关国内公务接待管理规定》和市委《关于厉行节约反对铺张浪费的实施办法》及市总工会《关于贯彻落实中央八项规定精神的实施细则》等有关规定精神，结合我会实际，制定本办法。</p>
          	 <p class="same_title">一、接待原则</p>
          	 <div class="same_countent">
          	 	<p>1、公务接待要体现 “热情、周到、大方、节俭”的原则。</p>
                <p> 2、公务接待必须有派出单位公函（文件），与公务活动无关事宜不予接待。</p>
                <p>3、公务接待严禁组织高消费娱乐、健身活动；严禁以任何形式和名义赠送纪念品、礼品、现金、代金券和购物卡。</p>
          	 </div>
          	  <p class="same_title">二、接待要求</p>
          	 <div class="same_countent">
               <p> 4、接待工作由办公室统筹安排，业务相关部门配合实施。</p>
                <p>5、上级工会、其它省市工会等副厅级（含副厅级）以上来宾由办公室按程序报市委，由市接待办负责，市总办公室做好对接工作；处级（含处级）以下来宾由业务对口部门（业务对口部门不明确的由办公室负责）凭派出单位公函报分管领导、常务副主席、主席审批后，抄送办公室、财务资产管理部，由办公室负责组织实施。接待任务结束后，业务对口部门凭派出单位公函和有关票据，经办公室负责人签字，报分管领导、常务副主席、主席审批、财务部审核后，方可报销。</p>
                <p>6、接待对象在10人以内的，陪餐人数不得超过3人，超过10人的，陪餐人数不得超过接待对象人数的三分之一。</p>
                <p>7、来宾一律在定点饭店食宿，食宿标准按上级有关规定执行。"</p>
          	 </div>
          </div>
     </div>



    </div>

</template>

<script>
  export default {
  name: 'tinymce',
    data() {
      return {
         buttShow:true,
 
      };
    },
    methods: {
      
    },
    mounted () {
     
     },
  }
</script>

<style lang="less">
.apply-cont{
	// width: 100%;
	overflow: hidden;
	padding-bottom:60px;
	.tit{
		text-align:center;
		margin-top: 30px;
		font-size: 32px;
	}
	.tit_small{
		text-align:center;
		margin-top: 15px;
		font-size: 20px;
	}
	.xq_count{
		width: 90%;
		margin: 0 auto;
		font-size: 18px;
	    margin-top: 10px;
		.xq_same{
            text-indent: 30px;
		}
		.same_title{
			margin-top: 30px;
			font-weight: bold;
		}
		.same_countent{
			p{
				margin-top: 18px;
			    line-height: 30px;
			}
		}
	}
}
 .title{
    width: 100%;
    margin-top: 10px;
    height: 28px;
    line-height: 28px;
    div{
      float: left;
      margin-right: 40px;
      font-size: 14px;
      color: #666666;
    }
    div.act{
      color: #ce4b4b;
      border-bottom:3px solid #ce4b4b;
    }
 }
  .date-icon{
    margin-left: 15px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    border-radius: 50%;
    background: #427ae1;
    float: left;
    margin-right: 15px;

    i{
      font-size: 30px;
      color: #fff;
    }
  }
  .add-header{
    width: 100%;
    height: 70px;
    margin-bottom: 20px;
    background-color: white;
    padding-top: 10px;

  }
  .header-dskr{
    margin-left: 50px;
    width: 280px;
    height: 32px;
    position:relative;
    input{
    	width: 100%;
    	height: 100%;
    	position:absolute;
    	top: 0;
    	border:1px solid #e5e5e5;
    }
  }
  .el-tabs__header{
    margin-left: 50px;

  }
  .leave-addWrap{
    width: 100%;
    height: 100%;
    position: relative;
  }
  /*新建流程*/
  .apply-cont{
    background-color: white;
    margin: 0 15px;
  }
  .add-title{
    width: 100%;
    text-align: center;
    font-size: 28px;
    border-bottom: 1px solid #DCDFE6;
    height: 50px;
    background-color: white;
  }
  .inp-container{
    width: 100%;
    margin: 15px 0;
    background-color: white;
  }
  .container-left{
    width: 48%;
    float: left;
    margin-left: 2%;
    margin-top: 30px;
  }
  .container-left .left-name,.container-right .left-name{
    float: left;
    width: 20%;
    display: block;
    text-align: center;
  }
  .container-left .yuans-inp,.container-right .yuans-inp{
    float: left;
    width: 58%;
    margin-top: -5px;
    border: 1px solid #DCDFE6;
    border-radius: 6px;
    height: 38px;
    padding-left: 10px;
    color: grey;
  }
  .container-left .el-input, .container-right .el-input{
    width: 60%;
  }
  .container-left .el-input--suffix{
    width: 80%;
  }
  .container-right{
    width: 48%;
    float: right;
    margin-top: 30px;
    margin-right: 2%;

  }
  .container-left .el-select{
    width: 50%;
  }
  .container-left textarea{
    width: 80%;
    height: 100px;
    float: left;
  }
  .add-table{
    margin-left: 5%;
    margin-top: 30px;
    width: 83.5%;
  }
  .yijian{
    width: 83%;
    margin-left:5%;
    margin-top: 30px
  }
  .fenPage{
    margin-top: 20px;
  }
  .commit-butt{
    position: absolute;
    right: 0;
    width: 300px;
    height: 30px;
    top:20px;
  }
  .commit-butt button{
    width: 80px;
    height: 30px;
    background-color: rgb(206, 75, 75);
    border: none;
    color: white;
    margin-right: 5px;
  }
  /*新建流程结束*/

  /*流程图*/
  .leave-process{
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .process-center{
    margin: 0 auto 500px;
    width: 60%;
  }
  .process-center img{
    width: 100%;
    margin-top: 50px;
  }
  /*流程图结束*/

  /*流程状态*/
  .process-status{
    width: 100%;
  }
  .status-list{
    width: 100%;
    height: 90px;
  }
  .status-item{
    width: 16%;
    height: 100%;
    margin: 0 2%;
    float: left;
    background-color: white;
  }
  .item-tab{
    width: 100%;
    height: 100%;
  }
  .item-number{
    margin-top: 20px;
    float: left;
  }
  .item-number .number-sum{
    margin-right: 25px;
    font-size: 24px;
  }
  .icon-left{
    margin: 23px 10px 0 10px;
    width: 40px;
    height: 40px;
    border: 1px solid red;
    border-radius: 50%;
    float: left;
  }
  .item-one{
    color: #3ac8d2;
    border-color: #3ac8d2;
  }
  .item-two{
    color: #92c77c ;
    border-color: #92c77c;
  }
  .item-three{
    color: #c67bf8 ;
    border-color: #c67bf8;
  }
  .item-four{
    color: #009bff;
    border-color: #009bff;
  }
  .item-five{
    color: #ff1924;
    border-color: #ff1924;
  }
  .status-content{
    width: 96%;
    background-color: white;
    margin: 20px  2%;
    padding: 10px;
  }
  .icon-left i{
    font-size: 30px;
    display: block;
    text-align: center;
    line-height: 40px;
  }
  .status-content span{
    font-size: 14px;
  }
  .status-tablebox{
    width: 100%;
  }
  .status-table{
    float: left;
    width: 16.6%;

  }
  .status-table ul li{
    border-bottom: 1px solid #cccccc;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .status-table ul li:first-child{
    font-weight: bold;
  }

  /*流程状态结束*/
</style>
