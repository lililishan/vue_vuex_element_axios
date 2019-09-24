
<template>
    <div class="addWrap travel-addWrap">
      <!--申请头部-->
      <div class="add-header">
        <div class='icon-circle'>
          <i class='iconfont iconchucha'></i>
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
                  <div class='apply-tit'>
                    <h1>出差申请</h1>
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
                    <span class="left-name">出差类型</span>
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
                    <div class="left-name">
                      <span>出差天数 </span>
                      <span class='required'>*</span>
                    </div>
                    <input v-model="dayNum" class="yuans-inp"/>
                  </div>
                </div>

                <div class="inp-container clearfix">
                  <div class="container-left ">
                    <span class="left-name">随行人员</span>
                    <div class='accompanying_person'>
                      <hrpop></hrpop>
                      <el-input  class='people_inp' placeholder="赵四，张三" ></el-input>
                      <!-- <i class='iconfont iconrenyuan'></i> -->
                    </div>
                  </div>
                  <div class="container-right">
                    <span class="left-name">是否发起用车流程</span>
                    <el-select v-model="isCarTyppe" placeholder="请选择">
                      <el-option
                        v-for="item in isCarOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <el-form class="new_from">
                    <el-form-item label="上传附件">
                      <!---上传-->
                      <upload></upload>
                    </el-form-item>
                 </el-form>

                <div class=" inp-textarea clearfix" style="width: 100%">
                  <div class="container-left container-left" style="width: 100%">
                    <div class="left-name" style="width: 9.5%">
                      <span>出差事由 </span>
                      <span class='required'>*</span>
                    </div>
                    <textarea placeholder="工作人员有病" style="float: left;width: 76.5%; height: 80px;"></textarea>
                  </div>
                </div>

                <div class="add-table">
                  <div class='travel-list-title clearfix'>
                    <div class='tralist-left'>出差明细</div>
                    <div class='tralist-right'>
                      <i class='iconfont iconjia' @click='addTravelItem'></i>
                      <i :class='this.multipleSelection.length > 0 ? "iconfont iconjian icon-available" : "iconfont iconjian"'  @click='reduceTravelItem()'></i>
                    </div>
                  </div>
                  <div>
                    <el-table 
                      ref="multipleTable" 
                      :data="tableData" 
                      tooltip-effect="dark" 
                      style="width: 100%" 
                      @selection-change="handleSelectionChange"
                    >
                      <el-table-column type="selection" width="55"></el-table-column>
                      <el-table-column prop="serialNum" label="序号" width="120"></el-table-column>
                      <el-table-column prop="address" label="地址" show-overflow-tooltip>
                        <el-input slot-scope="scope" v-model="scope.row.address" class="address-inp"/>
                      </el-table-column>
                      <el-table-column label="开始时间" width="300">
                        <div class="block"  slot-scope="scope" >
                          <el-date-picker
                            v-model="scope.row.startValue"
                            type="date"
                            placeholder="开始时间"
                            format="yyyy-MM-dd"
                            clear-icon=''
                          >
                          </el-date-picker>
                          <!-- <template slot-scope="scope">{{ scope.row.startDate }}</template> -->
                        </div>
                      </el-table-column>
                      <el-table-column label="结束时间" width="200">
                        <div class="block" slot-scope="scope" >
                          <el-date-picker
                            v-model="scope.row.endValue "
                            type="date"
                            placeholder="结束时间"
                            format="yyyy-MM-dd"
                            clear-icon=''
                          >
                          </el-date-picker>
                          <!-- <template slot-scope="scope">{{ scope.row.endDate }}</template> -->
                        </div>
                      </el-table-column>
                    </el-table>
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
            <div class='apply-cont process-margin'>

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
      <!--内容区结束-->
      
    </div>

</template>

<script>
  import opinions from "./../../../components/opinionBox.vue"
  import upload from "./../../../components/upload/index.vue"
  import hrpop from "./../../../components/HResourcesPop.vue"
  import { MessageBox } from 'element-ui';
  const nowTime = 'new Date()'
  export default {
    components: {
      opinions, upload, hrpop
    },
    data() {
      return {
        serialNumber: 1,
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
        inpTitle:'请输入标题', //标题
        applyName:'请输入申请人姓名', //姓名
        dayNum:5 ,     //请假天数
        tableData: [  ],
        multipleSelection: [],
        startValue: nowTime,
        endValue: nowTime,
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
      //出差明细列表 +
      addTravelItem () {
        const item  = {
          serialNum: this.serialNumber ++,
          address: '',
          startDate: '',
          endDate: '',
        }
        this.tableData.push(item)
        console.log('tableData',this.tableData);
        
      }, 
      //出差明细列表 -
      reduceTravelItem () {
        let rows = this.multipleSelection
        //  MessageBox.confirm()
        //如果选中的值存在
        if (rows) {
          rows.forEach((row, index) => {
            this.tableData.map((item, i) => {
              console.log('row--item===',  index, i);
              if(row.serialNum === item.serialNum) {
                this.tableData.splice(i,1)
              }

            })
            // this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
        
      },


      //切换 流程表单、流程图， 流程状态
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

      //取消选中数据状态
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //获取选中的数据
      handleSelectionChange(val) {
        console.log('vale--',...val);
        
        this.multipleSelection = val;
        console.log(this.multipleSelection, this.multipleSelection.length );
        
      }
    }
  }
</script>
<style lang="less">
/*新建流程*/
.apply-cont.add-travel-apply-cont {
  .inp-textarea.opinion-box {
    position: relative;
    height: 45px;
    textarea {
      padding-left: 45px;
    }
  }
  .inp-textarea textarea {
    padding-left: 10px;
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
  .container-right .left-name {
    width: 28%;
  }
  .accompanying_person {
    position: relative;
    float: left;
    width: 60%;
    .el-input.people_inp {
      width: 100%;
    }
    i.iconfont.iconicon-test {
      position: absolute;
      top: 6px;
      right: 5px;
      z-index: 1;
      font-size: 20px;
      color: #999;
      cursor: pointer;
    }
    .dialog-search {
      top: 10px;
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
        .iconjia, .icon-available {
          color: rgb(206, 75, 75);
        }
        .iconjian {
          color: #999;
        }
      }
    }
    td {
      padding: 0
    }
    .address-inp {
      input.el-input__inner {
        padding: 0;
        border: none;
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
