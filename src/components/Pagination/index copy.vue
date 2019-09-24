<template>
  <div>
    <div class="pagination-container">
      <el-pagination
        :background="background"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :layout="layout"
        :page-sizes="pageSizes"
        :total="total"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
  
</template>

<script>
  export default {
    props: {
      total: { //总页数
        type: Number,
        default: 0
      },
      page: { //当前页
        type: Number,
        default: 1
      },
      limit: { //默认每页条数
        type: Number,
        default: 20
      },
      pageSizes: { //每页显示个数选择器的选项设置
        type: Array,
        default() {
          return [10, 20, 30, 50]
        }
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
      background: { //是否为分页按钮添加背景色
        type: Boolean,
        default: true
      }
    },
    computed: {
      currentPage: { //当前页数
        get() {
          return this.page
        },
        set(val) {
          this.$emit('update:page', val)
        }
      },
      pageSize: { //每页条数
        get() {
          return this.limit
        },
        set(val) {
          this.$emit('update:limit', val)
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        this.$emit('pagination', { page: this.currentPage, limit: val })
      },
      handleCurrentChange(val) {
        console.log(val);
        
        this.$emit('pagination', { page: val, limit: this.pageSize })
      }
    }
  }
</script>

<style lang="less" scoped>
.pagination-container {
  padding: 20px 16px 40px;
  background: #fff;
  .el-pagination {
    float: right;
  }
}

</style>