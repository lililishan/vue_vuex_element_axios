<template>
    <div class="leave-addWrap">

      <div class="add-header">
        <!--申请头部-->
        <div class="date-icon" style="margin-right: 10px;">
          <i class="icon iconfont iconfawendengji"></i>
        </div>
        <p class="header-dskr">流程: 处理-支出预算-创建</p>
        <div class="commit-butt" v-show="buttShow">
          <button>提交</button>
          <button>保存</button>
        </div>
        <!--内容区-->
        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">

          <el-tab-pane label="流程表单" name="流程表单">
            <div class="apply-cont">
              <div class="bgcolor-wrap">

              <!--申请标题-->
              <div class="add-title">
                <h1 style="color: #ce4b4b;">市总工会发文卡</h1>
              </div>

              <div class="budget-table clearfix">
                <div class="budget-table-title">
                  <p>市总工会发文卡条例</p>

                </div>
                  <!-- 经费支出表格 -->
        <div class="funds_box">
          <table class="funds_table">
            <tr>
              <td rowspan="2" style="border-left: none;">签发：</td>
              <td style="border-right: none;">审签：</td>
            </tr>
            <tr>
              <td style="border-right: none;">审核：</td>
            </tr>
            <tr>
              <td rowspan="2" style="border-left: none;">会签：</td>
              <td style="border-right: none;">核稿：</td>
            </tr>
            <tr>
              <td style="border-right: none;">
                <p>主办单位和拟稿人：</p>
              </td>
            </tr>
          </table>
          <!-- <div class="funds_foot">
             <div>领导审批：</div>
             <div>部门(单位)负责人：</div>
             <div>采取主管：</div>
             <div>经手人：</div>
          </div> -->
        </div>
        <el-form label-width="80px" lable-color="red">
          <el-form-item label="活动名称*">
               <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="报送">
               <el-input v-model="bao"></el-input>
          </el-form-item>
          <el-form-item label="主送">
               <el-input v-model="zhu"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
                <el-input type="textarea" v-model="desc" style="width: 97%;"></el-input>
           </el-form-item>
           <el-form-item label="上传附件">
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                     <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
           </el-form-item>
           <div class="el-selectbox">
              <el-form-item label="密级">
                 <el-select v-model="miji" placeholder="密级">
                    <el-option label="高级" value="1"></el-option>
                    <el-option label="中级" value="2"></el-option>
                    <el-option label="低级" value="3"></el-option>
                 </el-select>
              </el-form-item>
              <el-form-item label="保密期限">
                 <el-select v-model="qixian" placeholder="活动区域">
                    <el-option label="一月" value="1"></el-option>
                    <el-option label="三年" value="2"></el-option>
                    <el-option label="半年" value="3"></el-option>
                    <el-option label="一年" value="3"></el-option>
                 </el-select>
              </el-form-item>
           </div>
           <div class="el-selectbox">
              <el-form-item label="紧急程度">
                 <el-select v-model="chengdu" placeholder="紧急程度">
                    <el-option label="高级" value="1"></el-option>
                    <el-option label="中级" value="2"></el-option>
                    <el-option label="低级" value="3"></el-option>
                 </el-select>
              </el-form-item>
             <el-form-item label="校对">
               <el-input v-model="jiaodui" style="width: 53%;"></el-input>
             </el-form-item>
           </div>
           <div class="el-selectbox">
              <el-form-item label="复核">
               <el-input v-model="fuhe" style="width: 53%;"></el-input>
             </el-form-item>
             <el-form-item label="发文字号">
               <el-input v-model="zihao" style="width: 53%;"></el-input>
             </el-form-item>
           </div>
           <div class="el-selectbox">
             <el-form-item label="活动时间">
    <!-- <el-col :span="12"> -->
      <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 53%;"></el-date-picker>
    <!-- </el-col> -->
  </el-form-item>
             <el-form-item label="印刷份数">
               <el-input v-model="num" style="width: 53%;"></el-input>
             </el-form-item>
           </div>
       </el-form>
        <div class=" inp-textarea opinion-box yijian clearfix">
            <i class="iconfont iconpinglun"></i>
            <textarea placeholder="签字意见" ></textarea>
        </div>


              </div>
              </div>
            </div>

          </el-tab-pane>

          <el-tab-pane label="流程图" name="流程图">
           <div class="leave-process">
             <div class="process-center">
               <img src="../../assets/leave/liuchengtu.png" alt="">

             </div>
           </div>
          </el-tab-pane>

          <el-tab-pane label="流程状态" name="流程状态">
            <div>
              <!--头部-->
              <div class="process-status">
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
                  <span style="margin-left: 10px">按操作者过滤:</span>
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
  export default {

    data() {
      return {
        activeName: '流程表单',
        name:'',
        bao:'',
        zhu:'',
        desc:'',
        miji:'',
        qixian:'',
        chengdu:'',
        date1:'',
        num:'',
        jiaodui:'',
        fuhe:'',
        zihao:'',
        options: [
          {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],

        leaveType: '', //请假类型
        applyDate:'',  //申请时间
        startTime:'',  //开始时间
        inpTitle:'请输入标题', //标题
        applyName:'请输入姓名', //姓名
        dayNum:5 ,     //请假天数
        tableData3: [
          {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518'
        }],
        multipleSelection: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

      handleSizeChange2(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange2(val) {
        console.log(`当前页: ${val}`);
      },



    }
  }
</script>

<style scoped lang="less" scoped>
.budget-table-title p{
  line-height: 40px;
  height: 40px;
}
.el-upload-list{
  width: 50%;
}
.el-selectbox{
  width: 97%;
  .el-form-item{
    float: left;
    width: 50%;
  }
}

.el-selectbox{

}
.el-form{
  margin-top:15px;
  overflow: hidden;
}
.el-input{
  width: 97%;
}
.yijian{
    width: 95%;
    margin-left:2%;
    position: relative;
    margin-top: 10px;
}
.yijian textarea{
 width: 98%;
 padding-left: 35px;
 height:45px;
 line-height: 45px;
 resize: none;
}
.yijian i{
  font-size: 16px;
  color: #bebebe;
  position: absolute;
  top:15px;
  left:10px;
}
.bgcolor-wrap{
  padding-bottom:100px;
}
  // 表格样式
.funds_box{
  width: 96%;
  // height: 100px;
  margin: 0 auto;
  margin-top: 20px;
  .funds_title{
    font-size: 14px;
    color: #1a1a1a;
    height: 20px;
    line-height: 20px;
    div{
      float: left;
      span{
        margin-right: 5px;
      }
    }
    div:last-child{
      float: right;
      margin-right: 5px;
    }
  }
  .funds_table{
    width: 100%;
    margin-top:5px; 
    font-size: 14px;
    border-collapse:collapse;
    color: #ce4b4b;
    tr{
      width: 100%;
      height: 90px;
      line-height: 50px;
      td{
          border:1px solid #ce4b4b;
          position: relative;
          padding-left: 2%;
      }
      td:nth-child(1){
        width: 50%;
      }
      td:nth-child(2){
        width: 50%;
      }
    }
  }
}
.funds_foot{
   margin-top: 10px;
   height: 30px;
   line-height: 30px;
   div{
    float: left;
    width: 25%;
   }
}
//表格样式结束
  .leave-addWrap{
    width: 100%;
    height: 100%;
    position: relative;

    .add-header{
      width: 100%;
      height: 60px;
      margin-bottom: 20px;
      background-color: white;
      padding-top: 10px;
      .header-dskr{
        margin-left: 50px;
      }
      .commit-butt{
        position: absolute;
        top:  30px;
        right: 30px;
        height: 30px;
        z-index: 10;
        button{
          cursor: pointer;
          width: 80px;
          height: 30px;
          background-color: rgb(206, 75, 75);
          border: none;
          color: white;
          margin-right: 5px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .date-icon {
        margin-left: 15px;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        display: inline-block;
        border-radius: 50%;
        background: #427ae1;
        float: left;
        .iconfont {
          font-size: 30px;
          color: #fff;
        }
      }
      .apply-cont{
        .bgcolor-wrap{
          background-color: white;
          padding-top: 20px;
          .budget-table{
            width: 90%;
            margin: 0 auto;
            .budget-table-title{
              width: 100%;
              border-bottom: 1px solid #cccccc;
              margin-bottom: 30px;


            }
            .budget-table-futitle{
              width: 96%;
              margin:  0 auto;
              p{
                float: left;
              }
              ul{
               float: right;
                li{
                  float: left;
                  input{
                    width: 30px;
                  }
                }
              }
            }
            .budget-table-content{
              width: 96%;
              margin:  0 auto;
              height: 300px;

              .budget-table-footer{
                width: 100%;
                ul{
                  width: 100%;
                  li{
                    width: 20%;
                    float: left;
                  }
                }
              }
            }

          }

        }

      }
    }
  }


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
</style>
