<template>
    <div class="addWrap">
      <!--申请头部-->
      <div class="add-header">
       <div class='icon-circle'>
          <i class='iconfont iconqingjia'></i>
        </div>
        <p class="header-dskr">流程: 处理-请假流程-部门负责人 至 分管领导</p>
        <div class="commit-butt" v-show="buttShow">
          <button @click="commit">提交</button>
          <button>保存</button>


        </div>


        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">

          <el-tab-pane label="流程表单" name="流程表单">

            <div class="apply-cont">
              <div class='add-bg' style="background-color: white">
                <!--申请标题-->
                <div class="add-title">
                  <div class='apply-tit'>
                    <h1>请假申请</h1>
                  </div>
                </div>
                <!--填写内容-->
                <div class="inp-container first-inp-container clearfix">
                  <div class="container-left">
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
                    <span class="left-name">请假类型</span>
                    <el-select v-model="leaveType" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="container-right">
                    <span class="left-name">申请日期</span>

                      <el-date-picker v-model="applyDate" type="date" placeholder="选择日期"></el-date-picker>
                  </div>

                </div>
                <div class="inp-container clearfix">
                  <div class="container-left">
                    <span class="left-name">年度统计</span>
                    <input class="yuans-inp"  placeholder="本年度该类型已请0.0天"/>

                  </div>

                  <div class="container-right">
                    <span class="left-name">申请部门</span>
                    <input class="yuans-inp"  placeholder="网络部"/>
                  </div>

                </div>
                <div class="inp-container clearfix">
                  <div class="container-left">
                    <span class="left-name">开始时间</span>
                    <div >
                      <el-date-picker
                        v-model="startTime"
                        type="datetime"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </div>


                  </div>

                  <div class="container-right">
                    <span class="left-name">申请日期</span>
                    <div class="block">
                      <el-date-picker v-model="applyDate" type="date" placeholder="选择日期"></el-date-picker>

                    </div>

                  </div>

                </div>
                <div class="inp-container clearfix">
                  <div class="container-left">
                    <span class="left-name">请假天数</span>
                    <input v-model="dayNum" class="yuans-inp"/>
                  </div>

                </div>
                <div class=" inp-textarea clearfix" style="width: 100%">
                  <div class="container-left" style="width: 100%">
                    <span class="left-name" style="width: 9.5%">相关制度</span>
                    <textarea placeholder="工作人员有病" style="float: left;width: 76.5%"></textarea>

                  </div>


                </div>
                <el-form class="new_from">
                    <el-form-item label="上传附件">
                      <!---上传-->
                      <upload></upload>
                    </el-form-item>
                 </el-form>
                <div class=" inp-textarea clearfix" style="width: 100%">
                  <div class="container-left " style="width: 100%">
                    <span class="left-name" style="width: 9.5%">请假事由</span>
                    <textarea placeholder="工作人员有病" style="float: left;width: 76.5%"></textarea>

                  </div>


                </div>
                <div class="add-table">
                  <h1>
                    <i class="icon iconfont iconpingtai"></i>
                    请假统计
                  </h1>
                  <div>
                    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                      <el-table-column type="selection" width="55"></el-table-column>
                      <el-table-column label="日期" width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                      </el-table-column>
                      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
                    </el-table>
                  </div>

                  <div class="block fenPage clearfix">
                    <el-pagination style="float: right"
                                   @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   :current-page.sync="currentPage3"
                                   :page-size="100"
                                   layout="prev, pager, next, jumper"
                                   :total="1000">
                    </el-pagination>
                  </div>
                </div>
                <div class="add-table">
                  <h1>
                    <i class="icon iconfont iconpingtai"></i>
                    请假统计
                  </h1>
                  <div>
                    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                      <el-table-column type="selection" width="55"></el-table-column>
                      <el-table-column label="日期" width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                      </el-table-column>
                      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
                    </el-table>
                  </div>

                  <div class="block fenPage clearfix">
                    <el-pagination style="float: right"
                                   @size-change="handleSizeChange2"
                                   @current-change="handleCurrentChange2"
                                   :current-page.sync="currentPage3"
                                   :page-size="100"
                                   layout="prev, pager, next, jumper"
                                   :total="1000">
                    </el-pagination>
                  </div>
                </div>
                <div class=" inp-textarea yijian clearfix">
                  <div  style="width: 100%;height: 300px">
                    <textarea placeholder="签字意见" style="float: left;
                    width: 100%;height: 110px"></textarea>

                  </div>


                </div>
              </div>

            </div>

          </el-tab-pane>

          <el-tab-pane label="流程图" name="流程图">
           <div class="apply-cont leave-process">
             <div class="process-center" style="margin: 0 auto;">
               <img :src="pic" alt="" style="width: 100%;">
             <!--   <iframe src="../../../../../static/webapp/activiti-editor/modeler.html" width="100%" height="100%" style="border: 1px solid #e6e6e6;"></iframe> -->

             </div>
           </div>
          </el-tab-pane>

          <el-tab-pane label="流程状态" name="流程状态">
            <div class='status-cont'>
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
   import https from '../../../utils/https.js'
   import  upload from "../../../components/upload/index.vue"
  export default {
    components:{
      upload
    },
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
        inpTitle:'', //标题
        applyName:'', //姓名
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
        fileList:[],
        pic:''



      };
    },
    methods: {
      // 流程图图片
      leavePic(){
          var this_ = this
                let params = {"categoryId":297,'num':"1","processInstanceId":385178}
                https.fetchGet('/leaveAct/activitiImage',params)
                .then((data) => {
                    console.log(data.request.responseURL)
                    this.pic=data.request.responseURL
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
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

      commit () {
        window.location.href='http://wuxiao.pro.puluodike.cn/studiofile/JNPXfjtmHftZ8XlcNcwHV.docx'
      }

    },
    mounted(){
       const that=this;
       that.leavePic();
    }
  }
</script>

<style lang="less">
.apply-cont.leave-proces{
  padding-bottom: 30px;
  overflow: hidden;

}
  /*新建流程*/


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

  /*新建流程结束*/


  
</style>
