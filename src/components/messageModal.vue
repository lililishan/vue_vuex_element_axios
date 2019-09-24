<template>
  <div class='addWrap modalWrap messageWrap' >
    <i  class="icon iconfont iconxiaoxi" @click="isDialogVisible = true">
      <span>12</span>
    </i>
    <el-dialog 
      :visible.sync="isDialogVisible"
      width='70%'
      :modal-append-to-body="false"
      >
      <div slot="title" class="add-header dialog-title">
        <div class='icon-circle'>
          <i class='iconfont iconxiaoxi'></i>
        </div>
        <p class="header-dskr">消息中心</p>
      </div>
      <!---->
      <div class='inner-content'>
        
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick(activeName, activeChildName)"
          :tab-position="tabPosition" 
        >
          <!--人事管理-->
          <el-tab-pane name='four'>
            <div slot="label">
              <div class='icons'>
                <i class="iconfont iconrenshiguanli"></i> 
              </div>
              <span class='icon-txt'>人事管理</span>
            </div>
            <div class='main-content'>
              <el-tabs v-model="activeChildName" @tab-click="handleChildClick(activeName, activeChildName)">
                <!--待处理-->
                <el-tab-pane label="待处理" name="待处理">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <!--全部-->
                <el-tab-pane label="全部" name="全部">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                      <img class='statusImg' v-if='item.info.status === "delete"' src="./../assets/images/status-delete.png" alt="">
                      <img class='statusImg' v-if='item.info.status === "complete"' src="./../assets/images/complete.png" alt="">
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <!--行政审批-->
          <el-tab-pane label="行政审批" name="first">
            <div slot="label">
              <div class='icons'>
                <i class="iconfont iconshenpi"></i> 
              </div>
              <span class='icon-txt'>行政审批</span>
            </div>
            <div class='main-content'>
              <el-tabs v-model="activeChildName" @tab-click="handleChildClick(activeName, activeChildName)">
                <!--待处理-->
                <el-tab-pane label="待处理" name="待处理">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <!--全部-->
                <el-tab-pane label="全部" name="全部">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                      <img class='statusImg' v-if='item.info.status === "delete"' src="./../assets/images/status-delete.png" alt="">
                      <img class='statusImg' v-if='item.info.status === "complete"' src="./../assets/images/complete.png" alt="">
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>

          </el-tab-pane>
           <!--发文流程-->
          <el-tab-pane label="发文流程" name="second">
            <div slot="label">
              <div class='icons'>
                <i class="iconfont iconfawendengji"></i> 
              </div>
              <span class='icon-txt'>发文流程</span>
            </div>
            <div class='main-content'>
              <el-tabs v-model="activeChildName" @tab-click="handleChildClick(activeName, activeChildName)">
                <!--待处理-->
                <el-tab-pane label="待处理" name="待处理">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <!--全部-->
                <el-tab-pane label="全部" name="全部">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                      <img class='statusImg' v-if='item.info.status === "delete"' src="./../assets/images/status-delete.png" alt="">
                      <img class='statusImg' v-if='item.info.status === "complete"' src="./../assets/images/complete.png" alt="">
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <!--财务管理-->
          <el-tab-pane label="财务管理" name="third">
            <div slot="label">
              <div class='icons'>
                <i class="iconfont iconcaiwuguanli"></i> 
              </div>
              <span class='icon-txt'>财务管理</span>
            </div>

            <div class='main-content'>
              <el-tabs v-model="activeChildName" @tab-click="handleChildClick(activeName, activeChildName)">
                <!--待处理-->
                <el-tab-pane label="待处理" name="待处理">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <!--全部-->
                <el-tab-pane label="全部" name="全部">
                  <div class='list'>
                    <div class='list-item' v-for="(item, index) in listDatas" :key='index'>
                      <p class='title'>{{ item.times }}</p>
                      <div class='item-info'>
                        <p>{{ item.info.title }}</p>
                        <p>{{ item.info.txt }}</p>
                        <div class='item-create'>
                          <span>创建人</span>
                          <span>{{ item.info.createName }}</span>
                        </div>
                        <div>
                          <span>创建时间</span>
                          <span>{{ item.info.createTime }}</span>
                        </div>
                        <div class='item-bottom clearfix'>
                          <span>阅读详情</span>
                          <i>>></i>
                        </div>
                      </div>
                      <img class='statusImg' v-if='item.info.status === "delete"' src="./../assets/images/status-delete.png" alt="">
                      <img class='statusImg' v-if='item.info.status === "complete"' src="./../assets/images/complete.png" alt="">
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDialogVisible: false,
      activeName: 'four',
      tabPosition: 'left',
      activeChildName: '待处理',
      listDatas: [
        {
          times: '2019-09-05 10:00:56',
          info: {
            title: '有流程到达',
            txt: '请假流程 - 王一 - 2019-09-05 10:00:56',
            createName: '王一',
            createTime: '2019-09-05 10:00:56',
            status: 'delete'
          }
        },
        {
          times: '2019-09-05 10:00:56',
          info: {
            title: '有流程到达',
            txt: '请假流程 - 王一 - 2019-09-05 10:00:56',
            createName: '王一',
            createTime: '2019-09-05 10:00:56',
            status: 'complete'
          }
        },
        {
          times: '2019-09-05 10:00:56',
          info: {
            title: '有流程到达',
            txt: '请假流程 - 王一 - 2019-09-05 10:00:56',
            createName: '王一',
            createTime: '2019-09-05 10:00:56',
            status: 'complete'
          }
        },
        {
          times: '2019-09-05 10:00:56',
          info: {
            title: '有流程到达',
            txt: '请假流程 - 王一 - 2019-09-05 10:00:56',
            createName: '王一',
            createTime: '2019-09-05 10:00:56',
            status: 'complete'
          }
        },
        {
          times: '2019-09-05 10:00:56',
          info: {
            title: '有流程到达',
            txt: '请假流程 - 王一 - 2019-09-05 10:00:56',
            createName: '王一',
            createTime: '2019-09-05 10:00:56',
            status: 'complete'
          }
        },
      ]
    }
  },
  methods: {
    handleClick(tab, childTab, event) {
      console.log(tab, childTab, event);
    }, 
    handleChildClick(tab, childTab,  event) {
      console.log(tab, childTab, event);
    }, 
  }
}
</script>
<style lang="less" scoped>
.addWrap.messageWrap {
  margin-right: 32px;
  width: 30px;
  display: inline-block;
  vertical-align: top;
  float: left;
  .iconxiaoxi {
    margin-right: 0;
    cursor: pointer;
  }
  .inner-content {
    .main-content {
      border-left: 1px solid #e6e6e6;
      height: 460px;
      width: 100%;
      .el-tabs__header {
        height: 40px;
        line-height: 40px;
      }
      .el-tabs.el-tabs--top .el-tabs__item.is-top {
         padding: 0 20px !important;
      }
      .el-tabs.el-tabs--top {
        top: 0;
      }
      .el-tabs--top .el-tabs__item.is-top {
          padding-left: 20px!important;
      }
      .el-tabs.el-tabs--top .el-tabs__item.is-top {
        padding: 0 20px !important;
      }

      //列表
      .list {
        margin: 0 25px;
        padding-bottom: 20px;
        height: auto;
        .list-item {
          position: relative;
          .statusImg {
            position: absolute;
            right: 6px;
            bottom: 47px;
          }
          p.title {
            height: 46px;
            line-height: 46px;
            text-align: center;
            
          }
          .item-info {
            padding: 15px;
            padding-bottom: 0;
            border: 1px solid #ccc;
            p, div {
              line-height: 1.8;
            }
            p:first-child {
              font-size: 16px;
            }
            .item-create {
              padding-top: 20px;
            }
            .item-bottom {
              margin-top: 15px;
              line-height: 40px;
              border-top: 1px solid #e6e6e6;
              span {
                float: left;
              }
              i {
                float: right;
              }
            }
          }
        }
      }
    }
    
  }
  
}
</style>