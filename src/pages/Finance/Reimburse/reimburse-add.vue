<template>
    <div class="leave-addWrap">
      <!--申请头部-->
      <div class="add-header">
        <div class="date-icon">
          <i class="icon iconfont iconqingjia"></i>
        </div>
        <p class="header-dskr">流程: 处理-请假流程-部门负责人 至 分管领导</p>
        <div class="commit-butt" v-show="buttShow">
          <button>提交</button>
          <button>保存</button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">

          <el-tab-pane label="流程表单" name="流程表单">
            <div class="apply-cont">
              <div style="background-color: white">


              <!--申请标题-->
              <div class="add-title">
                <h1>公务接待</h1>
              </div>

              <!--填写内容-->
              <div class="inp-container first-inp-container clearfix">
                <div class="container-left clearfix">
                  <span class="left-name">标题</span>
                  <input class="yuans-inp"   v-model="inpTitle"/>
                </div>
                <div class="container-right">
                  <span class="left-name">申请人</span>
                  <input  class="yuans-inp" v-model="applyName"/>
                </div>
              </div>

              <div class="inp-container clearfix">
                <div class="container-left">
                  <span class="left-name">对接部门</span>
                  <input  class="yuans-inp" />
                </div>
                <div class="container-right">
                  <span class="left-name">来宾单位</span>
                  <input  class="yuans-inp" />
                </div>

              </div>

              <div class="inp-container clearfix">
                <div class="container-left">
                  <span class="left-name">来宾人数</span>
                  <input  class="yuans-inp" />

                </div>

                <div class="container-right">
                  <span class="left-name">来宾级别</span>
                  <input  class="yuans-inp" />
                </div>

              </div>

              <div class="inp-container clearfix">
                <div class="container-left">
                  <span class="left-name">公务活动时间</span>
                  <div >
                    <el-date-picker
                      v-model="startTime"
                      type="datetime"
                      placeholder="选择日期时间">
                    </el-date-picker>
                  </div>


                </div>

                <div class="container-right">
                  <span class="left-name">陪客人数</span>
                  <input  class="yuans-inp" />

                </div>

              </div>

              <div class="inp-container clearfix">
                <div class="container-left">
                  <span class="left-name">住宿地点</span>
                  <input  class="yuans-inp"/>
                </div>
                <div class="container-right">
                  <span class="left-name">就餐地点</span>
                  <input  class="yuans-inp" />

                </div>
              </div>



              <div class=" inp-textarea clearfix" style="width: 100%">
                <div class="container-left container-left" style="width: 100%">
                  <span class="left-name" style="width: 9.5%">公务事由</span>
                  <textarea placeholder="工作人员有病" style="float: left;width: 76.5%"></textarea>

                </div>


              </div>
              <div class="inp-container clearfix">
                <div class="container-left">
                  <span class="left-name">上传附件</span>
                  <input type="file" />
                </div>

              </div>

              <div class=" inp-textarea yijian clearfix">
                <div  style="width: 100%;">

                  <textarea placeholder="签字意见" style="float: left;
                  width: 100%;height: 100px"></textarea>

                </div>


              </div>

              <!-- 流转意见 -->
              <div class="opinion_box">
                <div class="opinion_boxtitle"><span>流转意见</span></div>
                <ul class="opinion_list">
                  <li>
                    <div class="opinion_img">
                      <img src="../../../assets/images/user.png">
                    </div>
                    <div class="opinion_name">
                      <p>王一</p>
                      <p>办公室</p>
                    </div>
                    <div class="opinion_right">
                      <p>接收人：王五</p>
                      <p>2019-08-30 09:58:17 [请假申请/提交]</p>
                    </div>
                  </li>
                  <li>
                    <div class="opinion_img">
                      <img src="../../../assets/images/user.png">
                    </div>
                    <div class="opinion_name">
                      <p>李五</p>
                      <p>办公室</p>
                    </div>
                    <div class="opinion_right">
                      <p>接收人：王五</p>
                      <p>2019-08-30 09:58:17 [部门负责人/批准]</p>
                    </div>
                  </li>
                  <li>
                    <div class="opinion_img">
                      <img src="../../../assets/images/user.png">
                    </div>
                    <div class="opinion_name">
                      <p>王三</p>
                      <p>领导班子</p>
                    </div>
                    <div class="opinion_right">
                      <p>赵四</p>
                      <p>2019-08-30 09:58:17 [分管领导/批准]</p>
                    </div>
                  </li>
                </ul>
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

<style scoped>

  .add-header{
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    background-color: white;
    padding-top: 10px;

  }
  .header-dskr{
    margin-left: 50px;
  }
  .el-tabs__header{
    margin-left: 50px;

  }
  .leave-addWrap{
    width: 100%;
    height: 100%;
    position: relative;
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
