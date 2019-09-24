
<template>
    <div class="addWrap travel-addWrap">
      <!--申请头部-->
      <div class="add-header">
        <div class='icon-circle'>
          <i class='iconfont iconlingyong'></i>
        </div>
        <p class="header-dskr">流程:创建 - 出差申请流程 - 创建</p>
        <div class="commit-butt" v-show="buttShow">
          <button>提交</button>
          <button>保存</button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">

          <el-tab-pane label="流程表单" name="流程表单">
            <div class="apply-cont add-travel-apply-cont">
              <div class='add-bg'>
                <!--申请标题-->
                <div class="add-title">
                  <div class='apply-tit' style="border: none;">
                    <h1>物品领用</h1>
                  </div>
                </div>
                <div class="budget-table">
                	 <div class="budget-table-title">
                  <p>市总工会发文卡条例</p>

                </div>
                </div>
                
                <!--填写内容-->
                <div class="inp-container first-inp-container clearfix">
                  <div class="container-left">
                    <div class="left-name">
                      <span>标题 </span>
                      <span class='required'>*</span>
                    </div>
                    <input class="yuans-inp"   v-model="inpTitle"/>
                  </div>
                  <div class="container-right">
                    <span class="left-name">申请人</span>
                    <input  class="yuans-inp" v-model="applyName"/>
                  </div>
                </div>

                <div class="inp-container clearfix">
                  <div class="container-left">
                    <div class="left-name">
                    	<span>物品类型</span>
                    	 <span class='required'>*</span>
                    </div>
                    <el-input type="textarea"   :rows="2" placeholder="请输入内容" v-model="leaveType"></el-input>
                    
                  </div>
                  <div class="container-right">
                    <div class="left-name">
                      <span>领用详情 </span>
                      <span class='required'>*</span>
                    </div>
                    <el-input type="textarea" :rows="2"   placeholder="请输入内容" v-model="dayNum"></el-input>
                  </div>
                </div>



                <el-form class="new_from">
                    <el-form-item label="上传附件">
                       <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                         <el-button size="small" type="primary">点击上传</el-button>
                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                       </el-upload>
                     </el-form-item>
                 </el-form>

                <div class="add-table">
                  <div class='travel-list-title clearfix'>
                    <div class='tralist-left'>领用明细</div>
                    <div class='tralist-right'>
                      <i class='iconfont iconjia' @click='addTravelItem'></i>
                      <i class='iconfont iconjian' @click='reduceTravelItem'></i>
                    </div>
                  </div>
                  <div>
                     <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                         <el-table-column type="selection" width="30"></el-table-column>
                         <el-table-column prop="name"  label="物品名称" width="100"></el-table-column>
                         <el-table-column prop="num"  label="数量"  style="width: 20%"></el-table-column>
                         <el-table-column prop="guige" label="规格" style="width: 30%"></el-table-column>
                         <el-table-column prop="xz" label="性质" style="width: 30%"></el-table-column>
                     </el-table>
                  </div>


                </div>

                <div class=" inp-textarea opinion-box yijian clearfix">
                  <i class="iconfont iconpinglun"></i>
                  <textarea placeholder="签字意见" ></textarea>
                </div>
              </div>

            </div>
          </el-tab-pane>

          <el-tab-pane label="流程图" name="流程图">
           <div class="apply-cont leave-process">
             <div class="process-center">
               <img src="../../../assets/leave/liuchengtu.png" alt="">

             </div>
           </div>
          </el-tab-pane>

          <el-tab-pane label="流程状态" name="流程状态">
            <div class='apply-cont process-margin'>

              <div class="process-status">
                <!-- <ul class='test-status' style=''>
                  <li class='col'>aa</li>
                  <li class='col'>bb</li>
                  <li class='col'>cc</li>
                  <li class='col'>dd</li>
                  <li class='col'>ee</li>
                </ul> -->
                <ul class="status-list">

                  <li class="status-item">
                    <div class="item-tab">
                      <div class="icon-left item-one">
                        <i class="icon iconfont iconrenshu"></i>
                      </div>
                      <div class="item-number">
                        <p class="number-sum item-one">5</p>
                        <p class="per-sum">总人次</p>
                      </div>
                    </div>
                  </li>
                  <li class="status-item">

                    <div class="item-tab">
                      <div class="icon-left item-two">
                        <i class="icon iconfont iconduihao"></i>
                      </div>
                      <div class="item-number">
                        <p class="number-sum item-two">3</p>
                        <p class="per-sum">已提交</p>
                      </div>
                    </div>
                  </li>
                  <li class="status-item">

                    <div class="item-tab">
                      <div class="icon-left item-three">
                        <i class="icon iconfont icontanhao"></i>
                      </div>
                      <div class="item-number">
                        <p class="number-sum item-three">5</p>
                        <p class="per-sum">未提交</p>
                      </div>
                    </div>
                  </li>
                  <li class="status-item">
                    <div class="icon-left item-four">
                      <i class="icon iconfont iconchakan"></i>
                    </div>
                    <div class="item-tab">
                      <div class="item-number">
                        <p class="number-sum item-four">1</p>
                        <p class="per-sum">已查看</p>
                      </div>
                    </div>
                  </li>
                  <li class="status-item">
                    <div class="icon-left item-five">
                      <i class="icon iconfont iconwenti"></i>
                    </div>
                    <div class="item-tab">
                      <div class="item-number">
                        <p class="number-sum item-five">1</p>
                        <p class="per-sum">未查看</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>


              <!--内容区-->
              <div class="status-content clearfix">
                <div>
                  <span>按节点过滤:</span>
                  <el-select v-model="nodeFilter" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <span style="margin-left: 20px">按操作者过滤:</span>
                  <input type="text" class="inp" v-model="caozuoPeop">
                </div>
                <div class="status-tablebox">
                  <div class="status-table">
                    <ul>
                      <li>序号</li>
                      <li>1</li>
                      <li></li>
                      <li></li>
                      <li>2</li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div class="status-table">
                    <ul>
                      <li>节点</li>
                      <li>请假申请</li>
                      <li>操作人</li>
                      <li>王三岁</li>
                      <li>请假申请</li>
                      <li>部门负责人</li>
                      <li>王五</li>
                    </ul>
                  </div>
                  <div class="status-table">
                    <ul>
                      <li>操作情况统计</li>
                      <li>操作者总计:1</li>
                      <li>操作状态</li>
                      <li>已提交</li>
                      <li>操作者总计:1</li>
                      <li>操作状态</li>
                      <li>已提交</li>
                    </ul>
                  </div>
                  <div class="status-table">
                    <ul>
                      <li></li>
                      <li>已提交:1</li>
                      <li>接收时间</li>
                      <li>2019-9-3 16:40</li>
                      <li>已提交:1</li>
                      <li>接收时间</li>
                      <li>2019-9-3 16:40</li>
                    </ul>
                  </div>
                  <div class="status-table">
                    <ul>
                      <li></li>
                      <li>已查看:0</li>
                      <li>操作时间</li>
                      <li>2019-9-3 16:40</li>
                      <li>已查看:0</li>
                      <li>操作时间</li>
                      <li>2019-9-3 16:40</li>
                    </ul>
                  </div>
                  <div class="status-table">
                    <ul>
                      <li></li>
                      <li>未查看:0</li>
                      <li>操作耗时</li>
                      <li>0秒</li>
                      <li>未查看:0</li>
                      <li>操作耗时</li>
                      <li>0秒</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>

          </el-tab-pane>
        </el-tabs>
      </div>



      <!--头部结束-->
     <!--内容区-->




    </div>

</template>

<script>
  const nowTime = new Date()
  export default {

    data() {
      return {
        activeName: '流程表单',
        options: [
          {
          value: '选项1',
          label: '市内'
        }, {
          value: '选项2',
          label: '市外'
        }],
        isCarOptions: [ //是否用车类型
          {
            value: '选项1',
            label: '是'
          },
          {
            value: '选项2',
            label: '否'
          }
        ],

        leaveType: '', //出差类型
        isCarTyppe: '', //是否用车
        inpTitle:'市委学习', //标题
        applyName:'王一', //姓名
        dayNum:5 ,     //请假天数t
        tableData: [
        {
            name:'吴红斌',
            num:'10',
            guige:'场地费：1000；等等',
            xz:'场地费：1000；等等'
        }],
        startValue: nowTime,
        endValue: nowTime,
        buttShow:true,
        nodeFilter:'',
        caozuoPeop:'',
        fileList:[]

      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      //出差明细列表 +
      addTravelItem () {
        console.log(1);
        
      }, 
      //出差明细列表 -
      reduceTravelItem () {
        console.log(2);
        
      },
      handleClick(text,tab, event) {
        console.log(text)
        if(text == '流程图'){
          this.buttShow = false
        }else if(text == '流程状态'){
          this.buttShow = false
        }else{
          this.buttShow = true
        }
      },
      change(e){
        this.$forceUpdate()
        console.log(e)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },





    }
  }
</script>
<style lang="less">
.travel-list-title{
	height: 40px;
	line-height: 40px;
	border-bottom:1px solid #e6e6e6;
}
.el-table .cell,.el-table th>.cell{
	text-align: center;
}
.apply-cont .container-left textarea{
	width: 100%;
	float: left;
}
.el-textarea{
	width: 60%;
}
.el-textarea__inner{
	width: 100%;
	resize: none;
	float: left;
}
.budget-table{
	width: 90%;
	margin: 0 auto;
	.budget-table-title{
		width: 100%;
        border-bottom: 1px solid #cccccc;
        margin-bottom: 30px;
        p{
        	height: 40px;
        	line-height: 40px;
        }
	}
}
/*
 测试 flex  5列布局
*/
.test-status {
  height: 120px;
  display: flex;
  flex-flow: row;
  align-items: stretch;
  justify-content: space-between;
  .col {
    width: 18%;
    margin-right: 15px;
    flex: 1;
    border: 1px solid #ccc;
    background: #fff;
    box-sizing: border-box;
    &:last-child {
      margin-right: 0;
    }
  }
}

/*新建流程*/
.apply-cont.add-travel-apply-cont {
  .inp-textarea.opinion-box {
    position: relative;
    height: 45px;
  }
  .inp-textarea textarea {
    padding-left: 40px;
    width: 100%;
    height: 45px;
    line-height: 43px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  .inp-textarea {
    .iconfont {
      position: absolute;
      top: 15px;
      left: 20px;
      color: #bebebe;
    }
  }
  /*table*/
  .add-table{
    margin-left: 5%;
    margin-top: 30px;
    width: 83.5%;
    .travel-list-title {
      .tralist-left {
        float: left;
      }
      .tralist-right {
        float: right;
        .iconfont {
          cursor: pointer;
        }
        .iconjia {
          color: rgb(206, 75, 75);
        }
        .iconjian {
          color: #999;
        }
      }
    }
    .el-date-editor {
      .el-input__inner{
        border: 0;
        background: none;
      }
      .el-input__icon.el-icon-date {
        text-align: left;
        color: #ce4b4b;
      }
      .el-input__prefix {
        left: -1px;
      }
      .el-input__inner {
        padding-left: 20px;
      }


    }
    tr.el-table__row:hover {
      .el-input__inner{
        background: transparent;
      }
    }

  }
  .yijian{
    width: 83%;
    margin-left:5%;
    margin-top: 30px
  }

}

/*新建流程结束*/



</style>
