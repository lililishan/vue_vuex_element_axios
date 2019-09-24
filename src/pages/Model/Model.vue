<template>
	<div id="leave-wrap">
		<div class="leave-content">


      <div class="leave-title">
        <h1 class="leave-tit"> <i class="iconfont iconzhongkong_ligangjilu icon_list" ></i>模型管理</h1>
        <button class="leave-addL" style="cursor: pointer;">删除</button>
         <button class="leave-addL" style="cursor: pointer;" @click="dialogFormVisible = true">新增</button>
        <el-dialog title="新增模型" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
           <el-form :model="form">
              <el-form-item label="模型名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请在这里输入模型名称"></el-input>
              </el-form-item>
              <el-form-item label="模型分类" :label-width="formLabelWidth"  >
                   <el-select v-model="form.region" placeholder="请选择分类" @change="xuan()">
                        <el-option v-for="(item,index) in fenl" :key="index" :label="item.title" :value="item.remark">
                        </el-option>
                   </el-select>
              </el-form-item>
               <el-form-item label="模型描述" :label-width="formLabelWidth">
                  <el-input v-model="form.miaoshu" autocomplete="off" placeholder="请在这里输入模型描述"></el-input>
              </el-form-item>
               <el-form-item label="流程名称" :label-width="formLabelWidth">
                  <el-input v-model="form.liuName" autocomplete="off" placeholder="请在这里输入流程名称"></el-input>
              </el-form-item>
               <el-form-item label="流程标识" :label-width="formLabelWidth">
                  <el-input disabled v-model="form.biaoshi" autocomplete="off" placeholder="请在这里输入流程标识"></el-input>
              </el-form-item>
                <el-form-item label="流程作者" :label-width="formLabelWidth">
                  <el-input v-model="form.author" autocomplete="off" ></el-input>
              </el-form-item>
           </el-form>
           <div slot="footer" class="dialog-footer">
                 <el-button @click="dialogFormVisible = false">取 消</el-button>
                 <el-button type="primary" @click="classificationAdd()">确 定</el-button>
           </div>
        </el-dialog>

      </div>

      <div class="leave-table big_box">
        <div style="margin: 20px 0;">
           <el-input style="width: 20%;" class='searchInput' size="small" placeholder="请输入关键字" v-model="search_value"></el-input>
           <el-select size="small" v-model="value" placeholder="请选择" @change="bian()">
              <el-option  v-for="item in options" :key="item.remark" :label="item.title" :value="item.remark"></el-option>
           </el-select>
           <el-button size="small" type="primary" icon="el-icon-search" @click="btn()"></el-button>
        </div>
        <el-table :data="list"
    style="width: 100%"
    height="600">
    <el-table-column label="No" prop="number" width="80" ></el-table-column>
    <el-table-column label="模型名称" prop="NAME_" width="100"></el-table-column>
     <el-table-column label="分类" prop="CATEGORY_" width="100"></el-table-column>
    <el-table-column label="创建时间" prop="CREATE_TIME_" width="180"></el-table-column>
    <el-table-column label="最后更新时间" prop="LAST_UPDATE_TIME_" width="180"></el-table-column>
    <el-table-column label="版本" prop="VERSION_" width="50"></el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="400">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">流程设计器</el-button>
        <el-button size="mini" @click="bushu(scope.$index, scope.row)">部署</el-button>
        <el-button size="mini" @click="yulan(scope.$index, scope.row)">预览</el-button>
        <el-button size="mini" @click="daochu(scope.$index, scope.row)">导出</el-button>
         <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
          limit: 10,
        },
        multipleSelection: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          miaoshu:'',
          liuName:'',
          biaoshi:'',
          author:''
        },
        formLabelWidth: '120px',
        list:[],
        options:[],
        value:'',
        search_value:'',
        bussyKey:'',
        fenl:[],
        zenglei:''
      }
    },
    mounted() {
      this.getList()
      this.liucheng()
      this.liu()
    },
    methods: {
      // 查询流程
      liucheng(){
         var this_ = this
                https.fetchGet('/passLaborweb/api/activiti/dictionary/queryFlowKey')
                .then((data) => {
                 
                 this.options=data.data.data;
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
      bian(){
           this.bussyKey=this.value;
           console.log(this.bussyKey)
      },
      liu(){
         var this_ = this
                https.fetchGet('/passLaborweb/api/activiti/dictionary/queryFlowKey')
                .then((data) => {
                 this.fenl=data.data.data;
                 console.log(this.fenl)
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
      // 新增选择分类
      xuan(){
        var  that = this
        //this.region= this.value
         console.log(that.form.region)
         that.form.biaoshi=that.form.region
      },
      // 搜索 
      btn(){
          console.log(this.bussyKey)
          console.log(this.search_value)
          var this_ = this
                let params = {"startPage":1,'PageSize':10,"param":this.search_value,"bussyKey":this.bussyKey}
                https.fetchGet('/passLaborweb/api/activiti/oaModel/list',params)
                .then((data) => {
                 console.log(data)
                 this.list=data.data.data.data
                  this.total=data.data.data.count;
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
      // 模型列表
      getList() {
        var this_ = this
                let params = {"startPage":1,'PageSize':10}
                https.fetchGet('/passLaborweb/api/activiti/oaModel/list',params)
                .then((data) => {
                    this.list=data.data.data.data;
                    this.total=data.data.data.count;
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
       // 模型新增
       classificationAdd(){
        // console.log(this.form.name)  //模型名称
        // console.log(this.form.miaoshu);  //模型描述
        // console.log(this.form.liuName)  //流程名称
        // console.log(this.form.biaoshi)  //流程标识
        // console.log(this.form.author)   //流程作者
        var this_ = this
                let params = {"modelName":this.form.name,"description":this.form.miaoshu,"flowKey":this.form.biaoshi,'author':this.form.author,}
                https.fetchGet('/passLaborweb/api/activiti/oaModel/addModel',params)
                .then((data) => {
                    console.log(data.data.data.modelId)
                     const Designer = data.data.data.modelId;
                     console.log(Designer);
                     window.open("http://10.0.10.208/passLaborweb/api/activiti/activiti-editor/modeler.html"+'?'+"modelId"+'='+Designer);
                    this.dialogFormVisible=false;
                    
                })
                .catch((err)=>{
                    console.log(err)
                    this.dialogFormVisible=false;
                })
       },
        // 点击流程设计器
       handleEdit(index, row) {
         const Designer = row.ID_;
         console.log(Designer);
         window.open("http://10.0.10.208/passLaborweb/api/activiti/activiti-editor/modeler.html"+'?'+"modelId"+'='+Designer);
      },
      // 部署模型
      bushu(index,row){
         const id = row.ID_;
         console.log(id);
         var this_ = this
                let params = {"id":id}
                https.fetchGet('/passLaborweb/api/activiti/oaModel/deploymentModel',params)
                .then((data) => {
                    console.log(data)
                    this.$alert(data.data.msg, '提示', {
                        confirmButtonText: '确定',
                    });  
                })
                .catch((err)=>{
                    console.log(err)
                    this.dialogFormVisible=false;
                })
      },
      // 模型导出
      daochu(index,row){
         const id = row.ID_;
         console.log(id);
         var this_ = this
                let params = {"modelId":id}
                https.fetchGet('/passLaborweb/api/activiti/oaModel/exportXml',params)
                .then((data) => {
                    console.log(data)
                     
                })
                .catch((err)=>{
                    console.log(err)
                    this.dialogFormVisible=false;
                })
      },
      // 预览
      yulan(index, row){
        const id = row.ID_;
         console.log(id);
         var this_ = this
                let params = {"modelId":id}
                https.fetchGet('/passLaborweb/api/activiti/oaModel/getXml',params)
                .then((data) => {
                    console.log(data.data)
                    this.$alert(data.data.data, '提示', {
                        confirmButtonText: '确定',
                    });
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
      // 模型删除
        handleDelete(index, row) {
        const id = row.ID_;
         console.log(id);
         var this_ = this
                let params = {"id":id}
                https.fetchGet('/passLaborweb/api/activiti/oaModel/deleteModelById',params)
                .then((data) => {
                    console.log(data)
                     this.getList();
                })
                .catch((err)=>{
                    console.log(err)
                })
      },
       deleteRow(index, rows) {
        rows.splice(index, 1);
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

    
      gotoPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="less" scoped>
.el-table .cell{
  text-align: center;
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