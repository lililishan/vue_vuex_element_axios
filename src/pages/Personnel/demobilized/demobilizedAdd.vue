<template>
    <div class="addWrap demobikized-addWrap">
      <!--申请头部-->
      <div class="add-header">
        <div class="icon-circle">
          <i class="icon iconfont iconzhongkong_ligangjilu"></i>
        </div>
        <p class="header-dskr">流程: 处理-临时离岗-临时离岗申请 至 分管领导</p>
        <div class="commit-butt" v-show="buttShow">
          <button>提交</button>
          <button>保存</button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">

          <el-tab-pane label="流程表单" name="流程表单">
            <div class="apply-cont">
              <div class='add-bg'>
                <!--申请标题-->
                <div class="add-title">
                  <div class='apply-tit'>
                    <h1>临时离岗</h1>
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
                    <span class="left-name">离岗日期</span>
                    <div style="width: 75%;float: left">
                      <el-date-picker
                        v-model="startTime"
                        type="datetime"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </div>


                  </div>

                  <div class="container-right">
                    <span class="left-name">预计回岗日期</span>
                    <div class="block">
                      <el-date-picker v-model="applyDate" type="date" placeholder="选择日期"></el-date-picker>

                    </div>

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

                <div class=" inp-textarea clearfix" style="width: 100%">
                  <div class="container-left container-left" style="width: 100%">
                    <span class="left-name" style="width: 9.5%">离岗事由</span>
                    <textarea placeholder="工作人员有病" style="float: left;width: 76.5%"></textarea>

                  </div>


                </div>
                <div class=" inp-textarea opinion-box yijian clearfix">
                  <i class="iconfont iconpinglun"></i>
                  <textarea placeholder="签字意见" ></textarea>
                </div>
                <!-- 流转意见 -->
                <opinions :pinionList = 'pinionList'></opinions>
                
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
            <div >
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
                  <span>按操作者过滤:</span>
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
import opinions from "./../../../components/opinionBox.vue"
  export default {
    components: {
      opinions
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
        fileList:[],
        pinionList: [ //流转意见
          {
            name: '王一',
            character: '办公室',
            receiver: '王五',
            times: '2019-08-30 09:58:17',
            text: '[请假申请/批准]'
          },
          {
            name: '赵四',
            character: '办公室',
            receiver: '王五',
            times: '2019-08-30 09:58:17',
            text: '[部门负责人/批准]'
          },
          {
            name: '王五',
            character: '办公室',
            receiver: '王五',
            times: '2019-08-30 09:58:17',
            text: '[分管领导/批准]'
          },
        ]


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

<style lang="less">

  .el-tabs__header{
    margin-left: 50px;

  }
  .leave-addWrap{
    width: 100%;
    height: 100%;
    position: relative;
  }
  /*新建流程*/
  
  .yijian{
    width: 83%;
    margin-left:4%;
    margin-top: 30px;
    position: relative;
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
  
.yijian textarea{
 width: 98%;
 padding-left: 35px;
 height:45px;
 line-height: 45px;
}
.yijian i{
  font-size: 16px;
  color: #bebebe;
  position: absolute;
  top:15px;
  left:10px;
}
</style>
