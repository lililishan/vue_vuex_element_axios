<template>
    <div class="addWrap leave-addWrap">

      <div class="add-header">
        <!--申请头部-->
        <div class="date-icon">
          <i class="icon iconfont iconqingjia"></i>
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
                <h1>报销流程</h1>
              </div>
                <div class="budget-table-title">
                  <p>差旅报销条例</p>

                </div>
              <div class="budget-table clearfix">


                <div class="budget-table-futitle clearfix">

                  <p>报销部门(单位):<input type="text"> </p>
                  <ul>
                    <li><span>年</span>  <input type="text"></li>
                    <li><span>月</span>  <input type="text"></li>
                    <li><span>日</span>  <input type="text"></li>
                  </ul>


                </div>
                <!--表格内容-->
                <div class="budget-table-content">
                  <div class="process">
                    <table style="width: 100%">
                      <tr class="table-title">
                        <td colspan="2" class="table-date">出差人姓名</td>
                        <td colspan="7"  class="table-pic clearfix">
                          <div>
                            共<input type="text">人
                </div>
                        </td>
                        <td class="table-cause">事由</td>
                        <td colspan="3"></td>
                      </tr>
                      <tr>
                        <td rowspan="2" class="table-date">
                           <p class="tab-cont">起止<br/>日期</p>

                        </td>
                        <td rowspan="2"> <p class="tab-cont">起止<br/>地点</p></td>
                        <td rowspan="2">城市间交通费</td>
                        <td colspan="3">室内交通费</td>
                        <td colspan="3">伙食补助费</td>
                        <td rowspan="2">住宿费</td>
                        <td rowspan="2">其他费用</td>
                        <td colspan="2">结算情况</td>
                      </tr>
                      <tr>
                        <td>天数</td>
                        <td>标准</td>
                        <td>金额</td>
                        <td>天数</td>
                        <td>标准</td>
                        <td>金额</td>
                        <td>项目</td>
                        <td>金额</td>
                      </tr>
                      <tr>
                        <td class="table-date">
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                      </tr>
                      <tr>
                        <td class="table-date">
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                      </tr>
                      <tr>
                        <td class="table-date">
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                      </tr>
                      <tr>
                        <td class="table-date">
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" class="table-date">小计</td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td>
                          <input type="text" style="width: 100%;height: 100%">
                        </td>
                        <td colspan="2" class="table-tab">
                          <div>
                            附单据<input type="text">张
                </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="13" class="table-date">
                          <div class="table-total clearfix">
                            <div class="total-left clearfix">
                              <span>合计(大写)</span>
                              <input type="text" style="width: 100px;margin-top:5px;height: 25px;line-height: 25px">
                            </div>
                            <div class="total-right clearfix">
                              <span>￥</span>
                              <input type="text" style="width: 150px;height: 25px;line-height: 25px;border-bottom: 1px solid #999999;margin-bottom: 5px">
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>





                </div>
                <div class="budget-table-footer clearfix">
                  <ul class="clearfix">
                    <li>领导审批: <input type="text"> </li>
                    <li>部门(单位)负责人: <input type="text"> </li>
                    <li>财务主管: <input type="text"> </li>
                    <li>经手人: <input type="text"> </li>
                  </ul>
                </div>


                <div class=" inp-textarea  clearfix" style="width: 96%; margin: 0 auto">

                  <textarea placeholder="签字意见" style="float: left;
                  width: 100%;height: 100px"></textarea>




                </div>

              </div>





              </div>
            </div>

          </el-tab-pane>

          <el-tab-pane label="流程图" name="流程图">
           <div class="leave-process">
             <div class="process-center">
               <img src="../../../assets/leave/liuchengtu.png" alt="">

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
        caozuoPeop:''


      };
    },
    methods: {
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

<style scoped lang="less">

  .leave-addWrap{
    width: 100%;
    height: 100%;
    position: relative;
      .apply-cont{
        .bgcolor-wrap{
          background-color: white;
          padding-top: 20px;
          .budget-table{
            width: 90%;
            margin: 0 auto;

            .budget-table-futitle{
              width: 96%;
              margin:  0 auto 10px;
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
              margin:  0 auto 30px;
              .process table{

                  td{
                    width: 100px;
                    height: 35px;
                    line-height: 35px;
                    text-align: center;
                    border-bottom: 1px solid #cccccc;
                    border-right: 1px solid #cccccc;
                    font-size: 14px;
                    input{
                      border: none;
                      text-align: center;
                    }
                    .total-left{
                      float: left;
                      width: 200px;
                      text-align: center;
                      span{
                        float: left;
                        margin-left: 20px;
                        width: 80px;
                      }
                      input{
                        float: left;
                      }
                    }
                    .total-right{
                      float: right;
                      width: 300px;
                      span{
                        float: left;
                        margin-left: 20px;
                        width: 80px;
                      }
                      input{
                        float: left;

                      }
                    }

                  }
                  .table-cause{
                    letter-spacing: 10px;
                  }
                  .table-pic{
                    input{
                      width: 40px;
                      text-align: center;
                    }
                  }
                  .table-tab {
                    input{
                      width: 40px;
                      text-align: center;
                    }

                  }
                .table-title td{
                  border-top: 1px solid #cccccc;
                }
                .table-date{
                  border-left: 1px solid #cccccc;
                }
              }





            }

            .budget-table-footer{
              width: 96%;
              margin: 0 auto 30px;
              ul{
                width: 100%;
                li{
                  width: 25%;
                  float: left;
                }
              }
            }




          }

        }
        .budget-table-title{
          width: 94%;
          border-bottom: 1px solid #cccccc;
          margin: 0 auto 30px;
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

  .tab-cont{
    line-height: 25px;
    margin-top: 5px;
  }
</style>
