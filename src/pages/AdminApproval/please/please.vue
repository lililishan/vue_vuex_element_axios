<template>
  <div id="leave-wrap">

    <div class="leave-content">


      <div class="leave-title">
        <h1 class="leave-tit"><i class='iconfont icongongzuoqingshi icon_list'></i>请示</h1>

        <button class="leave-addL" @click="gotoPath('/pleaseadd')">新建请示流程</button>

      </div>

      <div class="leave-table big_box">
        <el-table ref="multipleTable" :data="list" tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="30"></el-table-column>


          <el-table-column prop="name"  label="创建人" width="80"></el-table-column>

          <el-table-column prop="dayNum"  label="创建日期" width="80"></el-table-column>
          <el-table-column prop="address" label="请示内容" style="width: 10%"></el-table-column>
          <el-table-column prop="date" label="请示标题" style="width: 10%"></el-table-column>
          <el-table-column prop="type" label="操作" style="width: 22%"></el-table-column>


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
          date: '2016-05-03',
          dayNum: 5,
          address: '上海市普陀区金沙江路 1518 弄',
          type:'病假',
          name:'吴红斌'
        }, {
          date: '2016-05-02',
          dayNum: 5,
          address: '上海市普陀区金沙江路 1518 弄',
          type:'病假',
          name:'吴红斌'
        }, {
          date: '2016-05-04',
          dayNum: 5,
          address: '上海市普陀区金沙江路 1518 弄',
            type:'病假',
            name:'吴红斌'
        }, {
          date: '2016-05-01',
          dayNum: 5,
          address: '上海市普陀区金沙江路 1518 弄',
            type:'病假',
            name:'吴红斌'
        }, {
          date: '2016-05-08',
          dayNum: 5,
          address: '上海市普陀区金沙江路 1518 弄',
            type:'病假',
            name:'吴红斌'
        }, {
          date: '2016-05-06',
          dayNum: 5,
          address: '上海市普陀区金沙江路 1518 弄',
            type:'病假',
            name:'吴红斌'
        }, {
          date: '2016-05-07',
          dayNum:5,
          address: '上海市普陀区金沙江路 1518 弄',
            type:'病假',
            name:'吴红斌'
        }]
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

      gotoPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style>
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
  .fenPage{
    margin-top: 30px;
    margin-right:50px;
  }
</style>
