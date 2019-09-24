<template>
	<div id="leave-wrap">
		<div class="leave-content">


      <div class="leave-title">
        <h1 class="leave-tit"> <i class="iconfont iconzhongkong_ligangjilu icon_list"></i>临时离岗</h1>

        <button class="leave-addL" @click="gotoPath('/demobilizedAdd')" style="cursor: pointer;">新建临时离岗</button>

      </div>

      <div class="leave-table big_box">
        <el-table ref="multipleTable" :data="list" tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="30"></el-table-column>


          <el-table-column prop="liyou"  label="离岗理由" style="width: 20%;"></el-table-column>
          <el-table-column prop="name"  label="申请人" style="width: 20%;"></el-table-column>
          <el-table-column prop="leave" label="离岗日期" style="width: 20%"></el-table-column>
          <el-table-column prop="date" label="预计回岗日期" style="width: 20%"></el-table-column>
          <el-table-column prop="type" label="操作" style="width: 20%"></el-table-column>


        </el-table>

				<pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>
        
      </div>

    </div>

	</div>
</template>
<script>
import pagination from "./../../../components/Pagination/index.vue"

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
        multipleSelection: [],
        
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.list = [
        {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
         {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
         {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
         {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
         {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
         {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
         {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
         {
         liyou:'有事出去',
         leave:'2019-09-02 09:00',
         date:'2019-09-02 16:00',
         name:'吴红斌',
         type:'操作'
        },
        ]
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
<style type="text/css">
    
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
  
  #leave-wrap{
    padding: 10px;
  }
  
  
   .el-table th.is-leaf{
    border-bottom: 2px solid #909399 !important;
  }
  
</style>