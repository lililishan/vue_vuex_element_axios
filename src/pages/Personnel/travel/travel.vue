<template>
	<div id='travel-wrap'>
		<div class="leave-content">
      <div class="leave-title">
        <h1 class="leave-tit"><i class='iconfont iconchucha icon_list'></i>出差	</h1>
        <button class="leave-addL" @click="gotoPath('/add-travel')">新建出差流程</button>
      </div>

      <div class="leave-table big_box">
				<el-table
					ref="multipleTable"
					:data="list"
					tooltip-effect="dark"
					style="width: 100%"
					@selection-change="handleSelectionChange">
					<el-table-column type="selection"	width="30">	</el-table-column>
					<el-table-column prop="name" label="申请人"	width="80">	</el-table-column>
					<el-table-column prop="dayNum" label="出差天数"	width="80">	</el-table-column>
					<el-table-column prop="cause" label="出差事由"	style="width: 10%">	</el-table-column>
					<el-table-column prop="type" label="类型"	style="width: 10%">	</el-table-column>
					<el-table-column prop="applyName" label="申请人姓名"	style="width: 10%">	</el-table-column>
					<el-table-column prop="accompanyingName" label="随行人员"	style="width: 10%">	</el-table-column>
					<el-table-column type="optains" label="操作"	style="width: 22%">查看</el-table-column>
				</el-table>
				<pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>
  		</div>
		</div>
	</div>
</template>
<script>
import https from "./../../../utils/https"
import pagination from "./../../../components/Pagination/index.vue"
// import service from './../../../utils/request';
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
	mounted() {
		https.fetchPost('localhost:5001/passLaborweb/api/laborun/a10ApplyInfo/query', {
			id: 1144492929537126400
		}).then((res) => {
			console.log('测试');
			
		})
	},
	created() {
		this.getList()
	},
	methods: {
		getList() {
			this.list = [
				{
					name: '李珊',
					dayNum: '2',
					cause: '有事出差了',
					type: '市内',
					applyName: '李珊',
					accompanyingName: '吴红兵，王琪'
				},
				{
					name: '王琪',
					dayNum: '3',
					cause: '有事出差了',
					type: '市内',
					applyName: '王琪',
					accompanyingName: '吴红兵，李珊'
				},
				{
					name: '吴红兵',
					dayNum: '1',
					cause: '有事出差了',
					type: '市内=外',
					applyName: '吴红兵',
					accompanyingName: '李珊，王琪'
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

i.iconfont.iconchucha {
	display: inline-block;
}
</style>
