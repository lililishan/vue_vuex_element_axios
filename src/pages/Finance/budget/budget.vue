<template>
  <div id="leave-wrap">

    <div class="leave-content">


      <div class="leave-title">
        <h1 class="leave-tit">报销</h1>

        <button class="leave-addL" @click="gotoPath('/budgetAdd')">新建报销流程</button>

      </div>

      <div class="leave-table big_box">
        <el-table ref="multipleTable" :data="list" tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column prop="name"  label="报销人" width="120"></el-table-column>
          <el-table-column prop="moneyNum"  label="支出金额" width="120"></el-table-column>
          <el-table-column prop="dayNum" label="单据数量" style="width: 10%"></el-table-column>
          <el-table-column prop="content" label="消费原因" style="width: 10%"></el-table-column>
          <el-table-column prop="date" label="日期" style="width: 10%"></el-table-column>
          <el-table-column prop="type" label="操作"  style="width: 12%"></el-table-column>
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
          content: '买衣服化妆品and包包and鞋子',
          dayNum: 5,
          moneyNum: 200,
          address: '北京市昌平区西环南路煤市口胡同',
          type:'查看',
          name:'吴红斌'
        }, {
          date: '2016-05-02',
          content: '买衣服化妆品and包包and鞋子',
          dayNum: 5,
          moneyNum: 200,
          address: '北京市昌平区西环南路煤市口胡同',
          type:'查看',
          name:'吴红斌'
        }, {
          date: '2016-05-04',
          content: '买衣服化妆品and包包and鞋子',
          dayNum: 5,
            moneyNum: 200,
          address: '北京市昌平区西环南路煤市口胡同',
            type:'查看',
            name:'吴红斌'
        }, {
          date: '2016-05-01',
          content: '买衣服化妆品and包包and鞋子',
          dayNum: 5,
            moneyNum: 200,
          address: '北京市昌平区西环南路煤市口胡同',
            type:'查看',
            name:'吴红斌'
        }, {
          date: '2016-05-08',
            content: '买衣服化妆品and包包and鞋子',
          dayNum: 5,
            moneyNum: 200,
          address: '北京市昌平区西环南路煤市口胡同',
            type:'查看',
            name:'吴红斌'
        }, {
          date: '2016-05-06',
            content: '买衣服化妆品and包包and鞋子',
          dayNum: 5,
            moneyNum: 200,
          address: '北京市昌平区西环南路煤市口胡同',
            type:'删除',
            name:'吴红斌'
        }, {
          date: '2016-05-07',
            content: '买衣服化妆品and包包and鞋子',
          dayNum:5,
            moneyNum: 200,
          address: '北京市昌平区西环南路煤市口胡同',
            type:'添加',
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

     
      gotoPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style scoped>
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
