<template>
  <div id="leave-wrap">

    <div class="leave-content">


      <div class="leave-title">
        <h1 class="leave-tit"><i class='iconfont icon iconlingyong'></i>物品使用</h1>
        <button class="leave-addL" @click="gotoPath('/collarUseAdd')">新建物品使用</button>
      </div>

      <div class="leave-table big_box">
        <el-table ref="multipleTable" :data="list" tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" style="width: 10%;"></el-table-column>
          <el-table-column prop="date"  label="创建日期" style="width: 20%"></el-table-column>
          <el-table-column prop="yongtu"  label="物品用途" style="width: 40%"></el-table-column>
          <el-table-column prop="xq" label="领用详情   " style="width: 10%"></el-table-column>
          <el-table-column prop="name" label="申请人" style="width: 10%"></el-table-column>
          <el-table-column prop="caozuo" label="操作" style="width: 10%"></el-table-column>


        </el-table>

        <pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>

      </div>

    </div>

  </div>
</template>
<script>
  import axios  from 'axios'
  import pagination from "./../../../components/Pagination/index.vue"
  export default {
    components: {
      pagination
    },
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
            yongtu:'办公室',
            xq:'真的要用啊',
            name:'王志文',
            caozuo:'操作'
        },{
            date: '2016-05-03',
            yongtu:'办公室',
            xq:'真的要用啊',
            name:'王志文',
            caozuo:'操作'
        },{
            date: '2016-05-03',
            yongtu:'办公室',
            xq:'真的要用啊',
            name:'王志文',
            caozuo:'操作'
        },{
            date: '2016-05-03',
            yongtu:'办公室',
            xq:'真的要用啊',
            name:'王志文',
            caozuo:'操作'
        },{
            date: '2016-05-03',
            yongtu:'办公室',
            xq:'真的要用啊',
            name:'王志文',
            caozuo:'操作'
        },{
            date: '2016-05-03',
            yongtu:'办公室',
            xq:'真的要用啊',
            name:'王志文',
            caozuo:'操作'
        },{
            date: '2016-05-03',
            yongtu:'办公室',
            xq:'真的要用啊',
            name:'王志文',
            caozuo:'操作'
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
      },

      //获取json数据
      getJson(){
        axios({
          method: 'post',
          url: "http://kefu.pro.puluodike.cn/site/userQuestion/userSetQuestion",
          data:Qs.stringify ({
            "question":'123'
          })
        })
          .then(function (res) {

            console.log(res)
          })
      }




    },
    mounted(){
    this.getJson()
    }
  }
</script>
<style scoped>
.iconlingyong{
	height: 30px;
    width: 30px;
    line-height: 30px;
    font-size: 20px;
    background: #427ae1;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    margin-right: 8px;
    display: inline-block;
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
