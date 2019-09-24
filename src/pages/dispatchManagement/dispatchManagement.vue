<template>
  <div>
    <div class="leave-content">
      <div class="leave-title">
        <h1 class="leave-tit"> <i class="iconfont  icon_list" ></i>发文</h1>
      </div>
      <div class="leave-table big_box">
        <el-table ref="multipleTable" :data="list" tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column prop="num"  label="主键ID"  width="50"></el-table-column>
          <el-table-column prop="name"  label="流程ID" width="100"></el-table-column>
          <el-table-column prop="key"  label="业务类型 " style="width: 20%;"></el-table-column>
          <el-table-column prop="version" label="发文类型" style="width: 10%">
            <template slot-scope="scope">
              <span v-if='scope.row.status === 1' class="">同工函</span>
              <span v-if='scope.row.status === 2' class="">同工办发</span>
              <span v-if='scope.row.status === 3' class="">同工办函</span>
              <span v-if='scope.row.status === 4' class="">同工党组字</span>
            </template>
          </el-table-column>
          <el-table-column prop="deploy_date" label="数据状态" width="150">
            <template slot-scope="scope">
              <span v-if='scope.row.state === 0' class="">草稿</span>
              <span v-if='scope.row.state === 1' class="">已提交</span>
            </template>
          </el-table-column>
          <el-table-column prop="bpmn_file_name" label="标题" style="width: 30%"></el-table-column>
          <el-table-column prop="img_name" label="创建人id" width="200"></el-table-column>
          <el-table-column prop="img_name" label="创建人姓名" width="200"></el-table-column>
          <el-table-column prop="img_name" label="主送" width="200"></el-table-column>
          <el-table-column prop="img_name" label="发文字号" width="200"></el-table-column>
          <el-table-column prop="img_name" label="创建时间" width="200"></el-table-column>
          <el-table-column prop="img_name" label="主题词" width="200"></el-table-column>
          <el-table-column prop="img_name" label="操作" width="200">
            <template slot-scope="scope">
              <span size="mini" @click="handleEdit(scope.$index, scope.row)" >查看详情</span>
            </template>
          </el-table-column>
        </el-table>

        <pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>

      </div>
    </div>
  </div>
</template>

<script>
// import https from "./../../utils/https"
import pagination from "./../../components/Pagination/index.vue"
// import axios from "axios"
// import  Qs from "qs"
import {getDispatchManage} from "./../../api/api"
  export default {
    components: { pagination },
    data() {
      return {
        total: 100,
        pageParams: {
          page: 1,
          limit: 30,
        },
        list: [],
        multipleSelection: [],
      }
    },
    created() {
      this.getList()
    },
    mounted() {
        
    },
    methods: {

      getList() {
        const parms  = {
          "page":  1,
          "size": 20,
        }
        getDispatchManage(parms).then((res) => {
          console.log('fsjkhlfd---', res);
          
        })
      },

      // getList() {
        
      //   https.fetchPost('/passLaborweb/api/oa/oaDispatch/querylist', {
      //       "page":  1,
      //       "size": 20,
      //     }
        
      //   ).then((res) => {
      //     console.log(res);
          
      //   })
      // },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    }

  }
</script>

<style lang="less" scoped>

</style>