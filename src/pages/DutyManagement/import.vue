<template>
  <div class='addWrap import-wrap'>
    <div class="add-header">
      <div class='icon-circle'>
        <i class='iconfont iconpiliangdaoru'></i>
      </div>
      <p class="header-dskr">批量导入</p>
    </div>
    <!--导入填写信息-->
    <div class="apply-cont import-apply-cont">
      <div class='add-bg'>
        <!--标题-->
        <div class="add-title">
          <div class='apply-tit'>
            <h1>批量导入</h1>
          </div>
        </div>
        <!--内容-->
        <div class="inp-container first-inp-container clearfix">
          <div class='form-wrap'>

            <el-form ref="form" :model="form" label-width="150px" size='small'>
              <el-form-item label="下载模板">
                <span class='down_col' @click="downTemplate">工会机关值班</span>
                <el-button type="primary" @click="downTemplate" round>下载模板</el-button>
              </el-form-item>
              <el-form-item label="上传Excel">
                <!-- <el-input type="file" /> -->
                <div class='btns'>选择Excel文件</div>
              </el-form-item>
              <el-form-item label="重复验证字段">
                <el-select v-model="form.region" placeholder="时间">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="导入类型">
                <el-select v-model="form.region" placeholder="追加">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Excel数据导入顺序">
                <el-select v-model="form.region" placeholder="顺序导入">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="打印导入日志">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
            </el-form>
            <div class='btns marginTop'>开始导入</div>
          </div>
        </div>

        <!--操作步骤-->
        <div class='options-warp'>
          <div class='title'>操作步骤</div>
          <div class='step-cont'>
            <el-steps :align-center='true'>
              <el-step description="下载模板"></el-step>
              <el-step  description="填写Excel"></el-step>
              <el-step  description="选择导入选项"></el-step>
              <el-step  description="导入"></el-step>
            </el-steps>
          </div>
        </div>
        <!--操作注意事项-->
        <div class='options-warp'>
          <div class='title'>操作注意事项</div>
          <ul class='op-list'>
            <li>
              <span>1）模板中第一行为表单字段名称，从第二行开始填写需要导入的数据。</span>
            </li>
            <li>
              <span>2）数据之间不能有空行。</span>
              <span class='war-col'>(存在空行时仅会导入空行以上的数据，空行以下的数据不会导入)</span>
            </li>
            <li>
              <span class='war-col'>14）导入类型为“追加”，就是把模版中的数据新增到该模块中；导入类型为“覆盖”会把该模块中所有的数据全部删除，然后再导入模版中的数据，请慎用！</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    downTemplate() {
      alert(1)
    }
  }
}
</script>
<style lang="less">
.addWrap.import-wrap {
  .header-dskr {
    line-height: 50px;
  }
}
.apply-cont.import-apply-cont {
  .form-wrap {
    margin: 0 auto;
    width: 600px;
    .down_col {
      color: #427ae1;
      cursor: pointer;
    }
  }
  
  .btns {
    width: 120px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #ce4b4b;
    border-radius: 3px;
    color: #fff;
    &.marginTop {
      margin: 20px auto 0;
    }
  }
  .step-cont {
    padding: 40px 15px 50px;
    .el-step__icon {
      height: 50px;
      width: 50px;
      border-color: #ce4b4b;
      .el-step__icon-inner {
        font-size: 24px;
        color: #ce4b4b;
      }
    }
    .el-step__line {
      background-color: #fff;
    }
    .el-step__description {
      margin-top: 18px;
      color: #1a1a1a;
    }
  }

  .options-warp {
    padding: 0 15px;
    .title {
      padding-left: 15px;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #e6e6e6;
    }
    ul.op-list {
      padding: 10px 0 0 60px;
      list-style-type: none;
      li {
        width: 100%;
        font-size: 12px;
        line-height: 2;
        .war-col {
          color: #ce4b4b;
        }

      }
    }
  }
}
</style>