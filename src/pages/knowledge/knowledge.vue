<template>
	 <div id="leave-wrap">
	 	<div class="leave-content">
	 		<div class="leave-title">
                <div class="leave-tit">
					<i class='icon iconfont icontubiao'></i>
					<span>查阅文档</span>
				</div>
                <button class="leave-addL"  @click="gotoPath('/newKnowledge')">新建文档</button>
           </div>
	 	</div>
	 	<!-- 具体内容 -->
	 	<div class="matters_box">
	 		<div class="matters_boxleft">
	 			<div  class="ss_box">
	 				<div>全部类型</div>
              <el-input placeholder="请输入内容" class="input-with-select" v-model="filterText">
                  <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
          </div>
          <el-tree ref="tree2" :filter-node-method="filterNode" default-expand-all :data="data" :props="defaultProps" @node-click="handleNodeClick" :render-content="renderContent"></el-tree>
	 		</div>
      <div class="matters_boxright">
        <div class="matters_boxright_title">
            <ul>
              <li class="active">全部</li>
              <li>未归档</li>
              <li>已归档</li>
              <li>待回复</li>
              <li>未读</li>
              <li>反馈</li>
            </ul>
            <div class="matters_soubox">
               <div class="matters_souboxleft">
                 <input type="" name="">
                 <i class="icon iconfont iconicon-test"></i>
               </div>
               <button>搜索</button>
            </div>
        </div>
        <el-table
					ref="multipleTable"
					:data="list"
					tooltip-effect="dark"
					style="width: 100%"
					@selection-change="handleSelectionChange" @cell-click="xq">
					<el-table-column type="selection"	width="30">	</el-table-column>
					<el-table-column prop="name" label="文档"	width="480">	</el-table-column>
					<el-table-column prop="coname" label="所有者"	style="width: 20%;">	</el-table-column>
					<el-table-column prop="date" label="创建日期"	style="width: 20%">	</el-table-column>
				</el-table>
        <pagination v-show="total > 0" :total="total" :page.sync="pageParams.page" :limit.sync='pageParams.limit'  @pagination="getList"/>

      </div>
	 	</div>
	 </div>
</template>
<script type="text/javascript">
import pagination from "./../../components/Pagination/index.vue"

	export default{
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
	  components: {pagination},

		data(){
			return{
        total: 100,
        pageParams: {
          page: 1,
          limit: 30,
        },
        list: [],
        multipleSelection: [],
        name:'',
        filterText:'',
        data: [{
          label: '全部目录',
          children: [{
            label: '通知公告',
          },{
            label: '说明文档',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },

			}
    },
    created() {
      this.getList()
    },
		methods:{
      getList() {
        this.list = [
				{
					name: '关于做好2019年度阳泉市《特困职工证》申报核发工作的通知',
					coname: '2',
					date:'201909-04'
				},
				{
					name: '关于做好2019年度阳泉市《特困职工证》申报核发工作的通知',
					coname: '2',
					date:'201909-04'
				},
				{
					name: '关于做好2019年度阳泉市《特困职工证》申报核发工作的通知',
					coname: '2',
					date:'201909-04'
				},
				{
					name: '关于做好2019年度阳泉市《特困职工证》申报核发工作的通知',
					coname: '2',
					date:'201909-04'
				},
				{
					name: '关于做好2019年度阳泉市《特困职工证》申报核发工作的通知',
					coname: '2',
					date:'201909-04'
				},

			]
      },
      /**
      * 跳转路由
      */
      gotoPath(path){
        this.$router.replace(path)
      },
      xq(){
        console.log(111);
        this.$router.replace('/knowledgeXq')
      },
      filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
      },
        handleNodeClick(data) {
            console.log(data);
      },
      renderContent(h, { node, data, store }) {
        return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button style="font-size: 12px;" type="text">3</el-button>
            </span>
          </span>);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

    },
		mounted(){}
	}
</script>
<style lang="less">
  .iconmulu{
  	font-size: 20px;
    background: #427ae1;
    color: #fff;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    margin-right: 8px;
  }
  .matters_box{
  	width: 100%;
  	overflow: hidden;
  	background:#fff;
  	.matters_boxleft{
  		width: 25%;
  		float: left;
  		// height: 300px;
  		border-right:1px solid #e6e6e6;
  		.el-form{
  			margin-top: 20px;
  		}
  	}
  }
  .ss_box{
  	margin-top: 15px;
  	height: 32px;
  	line-height: 32px;
  }
  .ss_box>div:nth-child(1){
  	float: left;
  	margin-right: 5px;
    width: 36%;
    text-align: center;
  }
  .el-input-group{
  	float: left;
  	width: 54%;
  }
  .el-input__inner{
    height: 32px;
    line-height: 32px;
    border-right:none;
  }
  .el-input-group__append, .el-input-group__prepend{
    background:transparent;
    border-left:none;
    padding:0 10px;
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus{
    border-color:transparent;
  }
  .matters_boxright{
    width: 74.8%;
    float: left;
    .matters_boxright_title{
      height: 43px;
      line-height: 43px;
      border-bottom:1px solid #e6e6e6;
      ul{
        float: left;
        height: 43px;
        line-height: 43px;
        width: 70%;
        li{
           padding: 0 8px;
           text-align: center;
           float: left;
           font-size: 14px;
           margin-right: 1%;
           color: #666;
        }
        li.active{
             color:#ce4b4b;
             border-bottom:2px solid #ce4b4b;
             span{
               color: #666666;
             }
        }
        li:last-child{
          margin-right: 0;
        }
      }
    }
    .el-table__body-wrapper {
      tr.el-table__row td:nth-child(2) {
        cursor: pointer;
      }
    }
  }
  .matters_soubox{
    width: 183px;
    height: 28px;
    // background:red;
    float: right;
    margin-top: 8px;
    margin-right: 1%;
    button{
       width: 28%;
       display: block;
       height: 102%;
       background: #ce4b4b;
       color: #fff;
       font-size: 14px;
       border:none;
       border:1px solid #ce4b4b;
    }
    .matters_souboxleft{
      float: left;
      width: 71%;
      height: 100%;
      border:1px solid #cccccc;
      border-right:none;
      input{
        width: 80%;
        float: left;
        height: 100%;
      }
      i{
        font-size: 23px;
        float: left;
        margin-top: -6px;
      }
    }
  }
  .el-table th>.cell{
    color: #333333;
  }
</style>