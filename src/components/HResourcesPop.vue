
<template>
  <div class='addWrap modalWrap'>
    <i @click="isDialogVisible = true" class='iconfont iconicon-test'></i>
    <el-dialog 
      :visible.sync="isDialogVisible"
      width='70%'
      :modal-append-to-body="false"
      >
      <div slot="title" class="add-header dialog-title">
        <div class='icon-circle'>
          <i class='iconfont iconzuzhi'></i>
        </div>
        <p class="header-dskr">人力资源</p>

      </div>
      <!--搜索-->
      <div class='dialog-search'>
        <el-input
          placeholder="请输入内容"
          v-model="value">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <button>搜索</button>
      </div>
      <!--内容-->
      <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">
          
          <!--最近-->
          <el-tab-pane label="最近" name="最近">
            <el-table :data="list" :show-header = false
              @selection-change="handleSelectionChange">>
              <el-table-column property="date" style='width: 100%;'>
                <template slot-scope="scope">
                  <div class='info-row'>
                    <i class="iconfont icontouxiang"></i>
                      <div class='personal_inform'>
                        <div class='info_top'>
                          <span>{{ scope.row.name }}</span>
                          <span class='col' style="margin-left: 10px">{{ scope.row.position }}</span>
                        </div>
                        <div class='info_bottom'>
                          <span class='col'>{{ scope.row.address }}</span>
                        </div>
                      </div>
                  </div>
                </template>
              </el-table-column>
            </el-table>
				    <pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="gridData"/>

            
          </el-tab-pane>
          <!--同部门-->
          <el-tab-pane label="同部门" name="同部门">
            <el-table :data="list" :show-header = false>
              <el-table-column property="date" style='width: 100%;'>
                <template slot-scope="scope">
                  <div class='info-row'>
                    <i class="iconfont icontouxiang"></i>
                      <div class='personal_inform'>
                        <div class='info_top'>
                          <span>{{ scope.row.name }}</span>
                          <span class='col' style="margin-left: 10px">{{ scope.row.position }}</span>
                        </div>
                        <div class='info_bottom'>
                          <span class='col'>{{ scope.row.address }}</span>
                        </div>
                      </div>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <!--我的下属-->
          <el-tab-pane label="我的下属" name="我的下属">
            <el-tree 
              :data="treeData" 
               node-key="id"
              :props="defaultProps" 
              @node-click="handleNodeClick"
            >
              <template slot-scope="{node, data }">
                <div class='change-bode'>
                  <i 
                    :class = "[ data.id === 'nodeID' || data.id === 'dat' ? 'iconfont iconshouye-copy':'iconfont iconwenjianjia']"
                  ></i>
                  <span>{{ data.label }}</span>
                  <span>{{ data.position }}</span>
                </div>
              </template>
            </el-tree>
          </el-tab-pane>
          <!--组织机构-->
          <el-tab-pane label="组织机构" name="组织机构">
            <el-tree 
              :data="treeData" 
               node-key="id"
              :props="defaultProps" 
              @node-click="handleNodeClick"
            >
              <template slot-scope="{node, data }">
                <div class='change-bode'>
                  <i 
                    :class = "[ data.id === 'nodeID' || data.id === 'dat' ? 'iconfont iconshouye-copy':'iconfont iconwenjianjia']"
                  ></i>
                  <span>{{ data.label }}</span>
                  <span>{{ data.position }}</span>
                </div>
              </template>
            </el-tree>
          </el-tab-pane>
      </el-tabs>


      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" :round='false'  @click="isDialogVisible = false">确 定</el-button>
        <el-button size="small" :round='false' @click="isDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import pagination from "./Pagination/index.vue"
  export default {
    components: {pagination},
    data() {
      return {
        total: 100,
        pageParams: {
          page: 1,
          limit: 30,
        },
        value: '',
        activeName: '最近',
        isDialogVisible: false,
        list: [],
        treeData: [
          {
            id: 'nodeID',
            label: '山西省总工会',
            children: [
              {
                id: 'dat',
                label: '大同市总工会',
                children: [
                  
                ]
              },
              {
                id: 'l',
                label: '领导班子',
                children: [
                  {
                    label: '张三',
                    position: '主席'
                  },
                  {
                    label: '赵武',
                    position: '科长'
                  },
                ]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        multipleSelection: [],
        
      };
    },
    created() {
      this.gridData()
    },
    methods: {
      gridData() {
        this.list = [{
          name: '王小虎',
          position: '主人科员',
          address: '办公室/大同市总工会'
        }, {
          name: '王小虎',
          position: '主人科员',
          address: '办公室/大同市总工会'
        }, {
          name: '王小虎',
          position: '主人科员',
          address: '办公室/大同市总工会'
        }, {
          name: '王小虎',
          position: '主人科员',
          address: '办公室/大同市总工会'
        }]
      },
      handleClick(text,tab, event) {
        console.log(text)
        if(text == '同部门'){
          this.buttShow = false
        }else if(text == '我的下属'){
          this.buttShow = false
        }else if(text == '组织机构'){
          this.buttShow = false
        } else {
          this.buttShow = true
        }
      },
      handleSelectionChange(val) {
			this.multipleSelection = val;
      },
      //tree
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
<style lang="less" scoped>
</style>