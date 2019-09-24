<template>
	<div id="leave-wrap">
		<div class="leave-content">


      <div class="leave-title">
        <h1 class="leave-tit"> <i class="iconfont  icon_list" ></i>流程管理</h1>
      </div>

      <div class="leave-table big_box">
        <el-input
          class='searchInput'
          size="small"
          placeholder="请输入关键字"
          v-model="search_value">
        </el-input>
         <el-button size="small" type="primary" icon="el-icon-search" @click="btn()"></el-button>
        <el-table ref="multipleTable" :data="list" tooltip-effect="dark"
          style="width: 100%">
          <el-table-column prop="number"  label="NO"  width="60"></el-table-column>
          <el-table-column prop="NAME_"  label="名称" width="120"></el-table-column>
          <el-table-column prop="KEY_"  label="流程定义KEY " width="120"></el-table-column>
          <el-table-column prop="VERSION_" label="版本"width="60"></el-table-column>
          <el-table-column prop="DEPLOY_TIME_" label="部署时间" width="150"></el-table-column>
          <el-table-column prop="RESOURCE_NAME_" label="流程bpmn文件名称" swidth="250"></el-table-column>
          <el-table-column prop="DGRM_RESOURCE_NAME_" label="流程图片名称" width="200"></el-table-column>
          <el-table-column prop="SUSPENSION_STATE_" label="状态" width="60"></el-table-column>
          <el-table-column prop="type" label="操作" width="250" fixed="right">
            <template slot-scope="scope">
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" >映射模板</el-button> -->
               <el-button   v-show="show1" size="mini" @click="activation(scope.$index, scope.row)" >激活</el-button>
               <el-button  v-show="show2" size="mini" @click="activation(scope.$index, scope.row)" >挂起</el-button>
              <el-button size="mini" @click="deleat(scope.$index, scope.row)" >删除</el-button>
            </template>
          </el-table-column>


        </el-table>

        <pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>

      </div>

    </div>

	</div>
</template>
<script>
import pagination from "./../../components/Pagination/index.vue"
import https from '../../utils/https.js'
  export default {
	  components: {pagination},

    data() {
      return {
        total: 100,
        pageParams: {
          page: 1,
          limit: 30,
        },
        list: [],
        search_value: '',
        btnText:'挂起',
        SUSPENSION_STATE_:'',
        show1:false,
        show2:true,
      }
    },
    created() {
      this.getList()
    },
    methods: {
      // 流程挂你列表
      getList() {
          var this_ = this
                let params = {"startPage":1,'PageSize':10}
                https.fetchGet('/passLaborweb/api/activiti/oaProcdef/queryPro',params)
                .then((data) => {
                  console.log(data)
                    this.list=data.data.data.data;
                    this.total=data.data.data.count;
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
      btn(){
          console.log(this.search_value)
          var this_ = this
                let params = {"startPage":1,'PageSize':10,"param":this.search_value}
                https.fetchGet('/passLaborweb/api/activiti/oaProcdef/queryPro',params)
                .then((data) => {
                 console.log(data)
                  this.list=data.data.data.data
                  this.total=data.data.data.count;
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
      // 激活挂起
      activation(index,row){
        // console.log(index,row)
        const that=this;
        const active=row.SUSPENSION_STATE_;
        const id = row.ID_;
         console.log(id);
        console.log(active)
        if (active==1) {
           that.show1=true;
           that.show2=false
           let params = {"id":"id",'status':2}
                https.fetchGet('/passLaborweb/api/activiti/oaProcdef/onoffPro',params)
                .then((data) => {
                 console.log(data)
                 this.getList()
                })
                .catch((err)=>{
                    console.log(err)
                })
        }else{
            that.show1=false;
            that.show2=true
            let params = {"id":id,'status':1}
                https.fetchGet('/passLaborweb/api/activiti/oaProcdef/onoffPro',params)
                .then((data) => {
                 console.log(data)
                 this.getList()
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
      },
       // 删除
       deleat(index,row){
         const id = row.DEPLOYMENT_ID_;
         console.log(id);
         var this_ = this
                let params = {"DEPLOYMENT_ID_":id}
                https.fetchGet('/passLaborweb/api/activiti/oaProcdef/deletePro',params)
                .then((data) => {
                    console.log(data)
                     this.getList();
                })
                .catch((err)=>{
                    console.log(err)
                    this.dialogFormVisible=false;
                })
       },
      gotoPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="less">
.leave-table {
  .searchInput {
    width: 200px;
    margin: 20px;
  }
}
.el-table {
  .cell{
    text-align: center;
  }
  .s_activation {
    color: #92c77c;
  }
  .s_hangUp {
    color: #999;
  }
}
.leave-list{
  width: 500px;
  height: 200px;
  background-color: gold;
}
.leave-list li{
  float: left;
  width: 20%;
  background-color: grey;
  cursor: pointer;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.act{
  background-color: green !important;
  color: white;
}
.leave-content{
  background-color: white;
}
#leave-wrap{
  padding: 10px;
}

  .el-table th.is-leaf{
  border-bottom: 2px solid #909399 !important;
}
  
</style>