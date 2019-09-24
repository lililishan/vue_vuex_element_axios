<template>
	<div id='travel-wrap'>
		<div class="leave-content">
      <div class="leave-title">
        <h1 class="leave-tit"><i class='iconfont iconzhibanpaiban- icon_list'></i>值班管理</h1>
        <button class="leave-addL" @click="gotoPath('/add-travel')">导出</button>
        <button class="leave-addL" @click="gotoPath('/import')">批量导入</button>
        <button class="leave-addL" @click="gotoPath('/addDuty')">新建</button>
      </div>

      <div class="leave-table big_box">
				<el-table
					ref="multipleTable"
					:data="list"
					tooltip-effect="dark"
					style="width: 100%"
					@selection-change="handleSelectionChange">
					<el-table-column type="selection"	width="30">	</el-table-column>
					<el-table-column prop="time" label="时间"	style="width: 10%">	</el-table-column>
					<el-table-column prop="amPerson" label="上午人员"	width="80">	</el-table-column>
					<el-table-column prop="pmPerson" label="下午人员"	style="width: 10%">	</el-table-column>
					<el-table-column prop="ePerson" label="晚上人员"	style="width: 10%">	</el-table-column>
					<el-table-column prop="leaderName" label="带班领导"	style="width: 10%">	</el-table-column>
					<el-table-column prop="createDate" label="创建日期"	style="width: 10%">	</el-table-column>
					<el-table-column prop="createPerson" label="创建人"	style="width: 22%"></el-table-column>
				</el-table>
				<pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>

  		</div>

		</div>
	</div>
</template>
<script>
import pagination from "./../../components/Pagination/index.vue"
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
					time: '2019-09-01',
          amPerson: 'a',
          pmPerson: 'b',
          ePerson: 'c',
          leaderName: 'D',
          createDate: '2019-09-01',
          createPerson: 'li'
				},
				{
					time: '2019-09-01',
          amPerson: 'a',
          pmPerson: 'b',
          ePerson: 'c',
          leaderName: 'D',
          createDate: '2019-09-01',
          createPerson: 'li'
				}
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
		
		/**
		 * 跳转路由
		 */
		gotoPath(path){
			this.$router.replace(path)
		}
	}
}
</script>
<style lang="less">
#travel-wrap {
	padding: 10px;
}
.leave-content {
	.leave-title  {
		.leave-tit{
			display: inline-block;
		}
	}
}

</style>
