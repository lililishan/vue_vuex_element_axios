<template>
  <div id="leave-wrap">
    <div class="leave-content">
      <div class="leave-title">
        <h1 class="leave-tit"><i class='iconfont iconyongche icon_list'></i>用车</h1>
        <button class="leave-addL" @click="gotoPath('/getcartadd')">新建用车流程</button>
      </div>
      <div class="leave-table big_box">
        <el-table ref="multipleTable" :data="list" tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column prop="name"  label="出发地"  style="width: 5%"></el-table-column>
          <el-table-column prop="dayNum"  label="目的地" style="width: 5%"></el-table-column>
          <el-table-column prop="address" label="申请理由" style="width: 30%"></el-table-column>
          <el-table-column prop="yongche" label="用车人" style="width: 8%"></el-table-column>
          <el-table-column prop="date" label="出行时间" style="width: 10%"></el-table-column>
          <el-table-column prop="haidate" label="还车时间" style="width: 10%"></el-table-column>
          <el-table-column prop="person_num" label="用车人数" style="width: 6%"></el-table-column>
          <el-table-column prop="siji" label="司机" style="width: 10%"></el-table-column>
          <el-table-column prop="caozuo" label="操作" style="width: 10%"></el-table-column>
        </el-table>
				<pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>
      </div>
    </div>
  </div>
</template>
<script>
import pagination from "./../../../components/Pagination/index.vue"
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
    methods: {
      getList() {
        this.list = [
        {
          type:'病假',
          name:'太原',
          dayNum: "大同",
          address: '家里有事',
          yongche: '王志文',
          date:'2019-08-29',
          haidate:"201-08-30",
          person_num:'60',
          siji:'王志文',
          caozuo:'查看'
        }, {
          type:'病假',
          name:'太原',
          dayNum: "大同",
          address: '家里有事',
          yongche: '王志文',
          date:'2019-08-29',
          haidate:"201-08-30",
          person_num:'60',
          siji:'王志文',
          caozuo:'查看'
        },{
          type:'病假',
          name:'太原',
          dayNum: "大同",
          address: '家里有事',
          yongche: '王志文',
          date:'2019-08-29',
          haidate:"201-08-30",
          person_num:'60',
          siji:'王志文',
          caozuo:'查看'
        },{
          type:'病假',
          name:'太原',
          dayNum: "大同",
          address: '家里有事',
          yongche: '王志文',
          date:'2019-08-29',
          haidate:"201-08-30",
          person_num:'60',
          siji:'王志文',
          caozuo:'查看'
        },{
          type:'病假',
          name:'太原',
          dayNum: "大同",
          address: '家里有事',
          yongche: '王志文',
          date:'2019-08-29',
          haidate:"201-08-30",
          person_num:'60',
          siji:'王志文',
          caozuo:'查看'
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
  .fenPage{
    margin-top: 30px;
    margin-right:50px;
  }
</style>
