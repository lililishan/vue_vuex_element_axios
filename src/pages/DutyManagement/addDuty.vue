<template>
  <div class='addWrap addDuty-wrap'>
    <div class="add-header">
      <div class='icon-circle'>
        <i class='iconfont iconzhibanpaiban-'></i>
      </div>
      <p class="header-dskr">工会机关值班</p>
      <div class="commit-butt" >
        <button>保存并新建</button>
        <button>保存</button>
      </div>
      <!--基础信息-->
      <el-tabs v-model="activeName">
        <el-tab-pane label="基础信息" name="基础信息">
          <div class="apply-cont add-travel-apply-cont">
            <div class='add-bg'>
              <!--标题-->
              <div class="add-title">
                <div class='apply-tit'>
                  <h1>工会机关值班-新建模板</h1>
                </div>
              </div>
              <!--内容-->
              <div class="inp-container first-inp-container clearfix">
                <div class='newModel clearfix'>

                  <div class='mo_cont '>
                    <div class='mo_cont_left'>
                      <div class='in_cont '>
                        <div class='in_cont_left'>时间</div>
                        <div class='in_cont_right'>
                          <div class="block">
                            <el-date-picker 
                              v-model="times" 
                              type="date" 
                              placeholder="选择日期"
                            >
                            </el-date-picker>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='mo_cont_right'>
                      <div class='in_cont '>
                        <div class='in_cont_left'>星期</div>
                        <div class='in_cont_right'>
                          <div class="block">
                            <el-date-picker 
                              v-model="times" 
                              type="date" 
                              placeholder="选择星期"
                            >
                            </el-date-picker>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='mo_cont '>
                    <div class='mo_cont_left'>
                      <div class='in_cont '>
                        <div class='in_cont_left'>上午人员</div>
                        <div class='in_cont_right relative'>
                          <hrpop></hrpop>
                          
                          <el-input v-model='amperson'></el-input>
                        </div>
                      </div>
                    </div>
                    <div class='mo_cont_right'>
                      <div class='in_cont '>
                        <div class='in_cont_left'>下午人员</div>
                        <div class='in_cont_right relative'>
                          <i class='iconfont iconicon-test'></i>
                          <el-input v-model='pmperson'></el-input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='mo_cont '>
                    <div class='mo_cont_left'>
                      <div class='in_cont '>
                        <div class='in_cont_left'>晚上人员</div>
                        <div class='in_cont_right relative'>
                          <i class='iconfont iconicon-test'></i>
                          <el-input v-model='evperson'></el-input>
                        </div>
                      </div>
                    </div>
                    <div class='mo_cont_right'>
                      <div class='in_cont '>
                        <div class='in_cont_left'>带班领导</div>
                        <div class='in_cont_right relative'>
                          <i class='iconfont iconicon-test'></i>
                          <el-input v-model='leaderperson'></el-input>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import hrpop from "./../../components/HResourcesPop.vue"
export default {
  components:{
    hrpop
  },
  data() {
    return {
      activeName: '基础信息',
      times: '',
      amperson: '',
      pmperson: '',
      evperson: '',
      leaderperson: '',
    }
  },
  methods: {
    
  }
}
</script>
<style lang="less">
@import "./style/addDuty.less";
</style>