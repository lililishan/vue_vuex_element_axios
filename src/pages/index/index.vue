<template>
   <div id="leave-wrap">
       <!-- 消息通知  值班人员 -->
       <div class="news_box">
          <div class="news_boxleft">
             <div class="same_title">
               <div class="xian"></div>
               <div class="same_titleleft">消息通知</div>
               <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
             </div>
             <ul class="news_list">
               <li>
                 <div><span></span>王东明调研铁路和民航会工作</div>
                 <div>2018-08-22</div>
               </li>
               <li>
                 <div><span></span>王东明调研铁路和民航会工作</div>
                 <div>2018-08-22</div>
               </li>
               <li>
                 <div><span></span>王东明调研铁路和民航会工作</div>
                 <div>2018-08-22</div>
               </li>
               <li>
                 <div><span></span>王东明调研铁路和民航会工作</div>
                 <div>2018-08-22</div>
               </li>
               <li>
                 <div><span></span>王东明调研铁路和民航会工作</div>
                 <div>2018-08-22</div>
               </li>
               <li>
                 <div><span></span>王东明调研铁路和民航会工作</div>
                 <div>2018-08-22</div>
               </li>
             </ul>
          </div>
          <div class="news_boxright">
            <div class="same_title">
              <div class="xian"></div>
              <div class="same_titleleft">值班人员</div>
              <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
            </div>
            <div class="day_box">
              <div class="day_person">
                 <div class="day_persontu">
                   <img src="../../assets/images/today-zb.png">
                 </div>
                 <div>今日值班人员</div>
              </div>
              <table class="table_one">
                  <tr>
                    <td>上午人员</td>
                    <td>下午人员</td>
                    <td>晚上人员</td>
                    <td>带班领导</td>
                  </tr>
                  <tr>
                    <td>王一</td>
                    <td>王一</td>
                    <td>王一</td>
                    <td>王一</td>
                  </tr>
              </table>
              <div class="day_person">
                 <div class="day_persontu">
                   <img src="../../assets/images/tomorrow-zb.png">
                 </div>
                 <div>明日值班人员</div>
              </div>
              <table class="table_one">
                  <tr>
                    <td>上午人员</td>
                    <td>下午人员</td>
                    <td>晚上人员</td>
                    <td>带班领导</td>
                  </tr>
                  <tr>
                    <td>王一</td>
                    <td>王一</td>
                    <td>王一</td>
                    <td>王一</td>
                  </tr>
              </table>
            </div>
          </div>
       </div>
       <!-- 工会数据统计 -->
       <div class="data_box">
         <div class="same_title">
            <div class="xian"></div>
            <div class="same_titleleft">工会数据统计</div>
            <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
          </div>
          <div class="wq_boxfoot">
                 <ul>
                     <li class="quxian">
                        <i><b></b></i>
                         <p>10</p>
                         <div>地市工会</div>
                         <div>（个）</div>
                     </li>
                     <li>
                         <i><b></b></i>
                         <p>110</p>
                         <div>产业工会</div>
                         <div>（个）</div>
                     </li>
                     <li>
                         <i><b></b></i>
                         <p>4000</p>
                         <div>全国工会组织</div>
                         <div>（个）</div>
                     </li>
                     <li>
                         <i><b></b></i>
                         <p>50.2 <span>万</span></p>
                         <div>工会会员</div>
                         <div>（个）</div>
                     </li>
                     <li>
                         <i><b></b></i>
                         <p>50<span>万</span></p>
                         <div>职工人数</div>
                         <div>（个）</div>
                     </li>
                 </ul>
          </div>
          <div class="same_box">
            <div>
                 <div style="width: 500px;height: 300px;" ref="chart"></div>
            </div>
            <div>
                <ul class="shuju_list">
                    <li>
                        <div class="biao" style="background: #36D7B6;"></div>
                        <div>镇街帮扶站 335 个，占比 <em>16.25% </em></div>
                    </li>
                    <li>
                        <div class="biao" style="background: #8E44AD"></div>
                        <div>区县职工服务中心 40 个，占比 <em>1.6%</em></div>
                        
                    </li>
                    <li>
                        <div class="biao" style="background: #F3C301"></div>
                        <div>乡镇街道工会 1025 个，占比 <em>40.9%</em></div>
                    </li>
                    <li>
                        <div class="biao" style="background: #FF7132"></div>
                        <div>区县总工会 40 个，占比 <em>1.6%</em></div>
                    </li>
                    <li>
                        <div class="biao" style="background: #2F353B"></div>
                        <div>市级机关联合会 1 个，占比 <em>0.04%</em></div>
                    </li>
                    <li>
                        <div class="biao" style="background: #E74F5B"></div>
                        <div>非农民工会员 330 万人，占比 <em>43.42%</em></div>
                    </li>
                    <li>
                        <div class="biao" style="background: #C8D046"></div>
                        <div>非会员职工 40 万人 ，占比 <em>5.26%</em></div>
                    </li>
                    <li>
                        <div class="biao" style="background: #3598DC;"></div>
                        <div>农民工会员 390万人，占比 <em>51.32%</em></div>
                    </li>
                </ul>
            </div>
        </div>
       </div>
       <!-- 任务中心 -->
       <div class="job_box">
          <div class="same_title">
            <div class="xian"></div>
            <div class="same_titleleft">任务中心</div>
            <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
          </div>
          <ul class="job_tab">
            <li class="active">代办事项</li>
            <li>已办事项</li>
            <li>我的请求</li>
          </ul>
          <ul class="table">
            <li>
              <div>标题</div>
              <div>申请人</div>
              <div>申请人部门</div>
              <div>事件类型</div>
              <div>发起时间</div>
              <div>接受时间</div>
            </li>
            <li>
              <div>王东明调研铁路和民航工会工作</div>
              <div>王一</div>
              <div>办公室</div>
              <div>请假</div>
              <div>2019-08-22 10:02-56</div>
              <div>2019-08-22 10:02-56</div>
            </li>
            <li>
              <div>关于做好2019年度阳泉市《特困职工证》申报核发工作的通知</div>
              <div>王一</div>
              <div>财务部</div>
              <div>出差</div>
              <div>2019-08-22 10:02-56</div>
              <div>2019-08-22 10:02-56</div>
            </li>
            <li>
              <div>关于做好2019年度阳泉市《特困职工证》申报核发工作的通知</div>
              <div>王一</div>
              <div>财务部</div>
              <div>出差</div>
              <div>2019-08-22 10:02-56</div>
              <div>2019-08-22 10:02-56</div>
            </li>
            <li>
              <div>关于做好2019年度阳泉市《特困职工证》申报核发工作的通知</div>
              <div>王一</div>
              <div>财务部</div>
              <div>出差</div>
              <div>2019-08-22 10:02-56</div>
              <div>2019-08-22 10:02-56</div>
            </li>
            <li>
              <div>关于做好2019年度阳泉市《特困职工证》申报核发工作的通知</div>
              <div>王一</div>
              <div>财务部</div>
              <div>出差</div>
              <div>2019-08-22 10:02-56</div>
              <div>2019-08-22 10:02-56</div>
            </li>
            <li>
              <div>关于做好2019年度阳泉市《特困职工证》申报核发工作的通知</div>
              <div>王一</div>
              <div>财务部</div>
              <div>出差</div>
              <div>2019-08-22 10:02-56</div>
              <div>2019-08-22 10:02-56</div>
            </li>
          </ul>
       </div>
       <!-- 流程状态   日历 -->
       <div class="process_box">
          <div class="process_left">
           <div class="same_title">
             <div class="xian"></div>
             <div class="same_titleleft">流程状态</div>
             <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
           </div>
            <el-radio-group v-model="radio">
              <el-radio :label="3">单日</el-radio>
              <el-radio :label="6">单周</el-radio>
              <el-radio :label="9">单月</el-radio>
               <el-radio :label="12">单年</el-radio>
            </el-radio-group>
            <ul class="chart_list">
               <li>
                 <div ref="chart_one"></div>
               </li>
               <li>
                 <div  ref="chart_two"></div>
               </li>
               <li>
                 <div  ref="chart_three"></div>
               </li>
               <li>
                 <div  ref="chart_four"></div>
               </li>
               <li>
                 <div  ref="chart_five"></div>
               </li>
               <li>
                 <div  ref="chart_six"></div>
               </li>
               <li>
                 <div  ref="chart_seven"></div>
               </li>
               <li>
                 <div  ref="chart_eight"></div>
               </li>
            </ul>
         </div>
         <div class="date_box">
            <div class="same_title">
              <div class="xian"></div>
              <div class="same_titleleft">日历日程</div>
              <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
           </div>
           <div class="date_date">
             <el-calendar v-model="value"></el-calendar>
           </div>
         </div>
       </div>
       <!-- 财务 -->
       <div class="money_box">
         <div class="baoxiao_box">
            <div class="same_title">
              <div class="xian"></div>
              <div class="same_titleleft">财务报销</div>
              <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
           </div>
           <div class="same_caibox">
               <div class="same_boxtop">
                  <el-select v-model="regionyu" placeholder="月度预算金额统计">
                    <el-option label="部门分类型预算金额统计" value="1"></el-option>
                    <el-option label="部门预算金额统计" value="2"></el-option>
                    <el-option label="分类预算金额统计" value="3"></el-option>
                  </el-select>
                  <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  <el-button type="success">查询</el-button>
               </div>
           </div>
           <div ref="chart_baoxiao" style="width: 500px;height: 300px;margin-top: 30px;"></div>
         </div>
         <div class="yusuan_box">
            <div class="same_title">
              <div class="xian"></div>
              <div class="same_titleleft">财务预算</div>
              <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
            </div>

            <div class="same_boxtop">
                <el-select v-model="region" placeholder="月度报销金额统计">
                    <el-option label="部门分类型报销金额统计" value="1"></el-option>
                    <el-option label="部门报销金额统计" value="2"></el-option>
                    <el-option label="分类报销金额统计" value="3"></el-option>
                  </el-select>
                  <el-date-picker v-model="value2" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                  <el-button type="success">查询</el-button>
            </div>
            <div ref="chart_yusuan" style="width: 500px;height: 300px;margin-top: 30px;"></div>
         </div>
       </div>
      <!-- 人员在岗情况 -->
      <div class="duty_box">
        <div class="same_title">
             <div class="xian"></div>
             <div class="same_titleleft">人员在岗情况</div>
             <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
        </div>
        <div class="echarts_duty">
          <div ref="chart_Onduty" style="margin-top: 40px;"></div>
          <div>
            <table class="duty_table">
              <tr>
                <td>类型</td>
                <td>姓名</td>
                <td>说明</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- 大病帮扶统计 -->
      <div class="duty_box">
         <div class="same_title">
             <div class="xian"></div>
             <div class="same_titleleft">大病帮扶统计</div>
             <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
          </div>
          <div class="echarts_duty">
            <div ref="chart_helpnum"></div>
            <div ref="chart_helpage"></div>
          </div>
      </div>
      <!-- 四季帮扶 -->
      <div class="duty_box">
         <div class="same_title">
             <div class="xian"></div>
             <div class="same_titleleft">四季帮扶</div>
             <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
         </div>
         <div class="echarts_duty">
            <div ref="chart_siji"></div>
            <div ref="chart_sijiage"></div>
         </div>
      </div>
      <!-- 婚恋服务统计 -->
      <div class="duty_box">
         <div class="same_title">
             <div class="xian"></div>
             <div class="same_titleleft">婚恋服务统计</div>
             <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
         </div>
         <div class="echarts_box">
            <div  ref="chart_Marriage"></div>
            <div  ref="chart_bili"></div>
            <div style="width: 400px;"  ref="chart_Age"></div>
         </div>
      </div>
      <!-- 社工舆情 -->
      <div class="duty_box">
         <div class="same_title">
             <div class="xian"></div>
             <div class="same_titleleft">社工舆情</div>
             <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
        </div>
        <div class="same_box">
            <div>
                <div style="width: 500px;height: 300px;" ref="chart_she"></div>
            </div>
            <div>
                <ul class="shuju_list" style="margin-top: 43px;">
                    <li>
                        <div class="biao" style="background: #36d7b6"></div>
                        <div>爱心药房 350 家，占比 <em>41.18%</em></div>
                    </li>
                    <li>
                        <div class="biao" style="background: #F2CD3C"></div>
                        <div>爱心医院 130 家，占比 <em>15.29%</em></div>
                    </li>
                    <li>
                        <div class="biao"  style="background:#E7505A "></div>
                        <div>职工服务中心 40 个，占比 <em>4.71%</em></div>
                    </li>
                    <li>
                        <div class="biao"  style="background: #3598DC"></div>
                        <div>爱心超市 200 家，占比 <em>23.53%</em></div>
                    </li>
                    <li>
                        <div class="biao"  style="background: #FF7132"></div>
                        <div>爱心学校 130 所，占比 <em>15.29%</em></div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <!-- 职工活动 -->
      <div class="duty_box">
         <div class="same_title">
             <div class="xian"></div>
             <div class="same_titleleft">职工活动</div>
             <div class="same_titleright"><i class="el-icon-menu"></i>更多</div>
         </div>
         <div style="width:80%;height: 300px;margin: 10px auto;" ref="chart_Workers"></div>
      </div>
   </div>
 </template>
<script>
  // import https from '../../utils/https.js'
  export default{
    data(){
      return{
       value: new Date(),
       region:'',
      value1: '',
      regionyu:'',
      value2:'',
      radio: 3,
      // lea
      }
    },
    methods:{
      in(){
          var this_ = this
                let params = {"categoryId":297,'num':"1","pageSize":"10"}
                // https.fetchPost('/zgfww/api/content/list',params)
                // .then((data) => {
                //     console.log(data)
                // })
                // .catch((err)=>{
                //     console.log(err)

                // })
          
      },
      // 工会数据统计
      initCharts(){
        let myChart1 = this.$echarts.init(this.$refs.chart);
        myChart1.setOption({
          title : {
          // text: '山西省总工会',
            x:'center',
            y:'10'
          },
          tooltip: {
          trigger: '山西省总工会',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
             orient: 'vertical',
             left: 'left',
             top:'center',
             data:['区县总工会','市级机关联合会','乡镇街道工会','区县职工服务中心','镇街帮扶站']
          },
          series: [
            {
            name:'会员情况',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center : ['50%', "52%"],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:350000, name:'非会员职工'},
                {value:4300000, name:'农民工会员'},
                {value:3400000, name:'非农民工会员'}
            ]
            },
            {
            name:'组织情况',
            type:'pie',
            radius: ['50%', '70%'],
            center : ['50%', "52%"],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[

                {value:40, name:'区县总工会', selected:true},
                {value:1, name:'市级机关联合会'},
                {value:1017, name:'乡镇街道工会'},
                {value:40, name:'区县职工服务中心'},
                {value:1400, name:'镇街帮扶站'}
            ]
            }
          ],
         color:['#058DC7', '#50B432', '#ED561B', '#24CBE5', '#058DC7', '#50B432', '#ED561B', '#24CBE5']
        })
        // 社论舆情
        let myChart2 = this.$echarts.init(this.$refs.chart_she);
         myChart2.setOption({
            title : {
              x:'center',
              y:'10'
            },
            tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
               orient: 'vertical',
               left: 'left',
               top:'center',
               data:['职工服务中心','爱心超市','爱心学校','爱心药房','爱心医院'],
            },
            calculable : true,
            series : [
            {
              name:'困难帮扶措施',
              type:'pie',
              radius : [80, 160],
              center : ['55%', 130],
              roseType : 'area',
              label: {
                normal: {
                    show: false,
                    position: 'center'
                }
              },
              labelLine: {
                normal: {
                    show: false
                }
              },
              data:[
                {value:40, name:'职工服务中心'},
                {value:200, name:'爱心超市'},
                {value:130, name:'爱心学校'},
                {value:350, name:'爱心药房'},
                {value:130, name:'爱心医院'}
              ]
            }
            ],
            color:['#058DC7', '#50B432', '#ED561B', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4','#DDDF00']
         })
        // 职工活动
        let myChart3 = this.$echarts.init(this.$refs.chart_Workers);
         myChart3.setOption({
           tooltip: {
              trigger: 'axis'
           },
           legend: {
              data:['"五小"活动','安康杯竞赛活动','中国好网民']
           },
           grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
           },
           xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2011','2012','2013','2014','2015','2016','2017','2018']
           },
           yAxis: {
              type: 'value'
           },
           series: [
             {
                name:'"五小"活动',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210,360]
             },
             {
                name:'安康杯竞赛活动',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310,400]
              },
              {
                name:'中国好网民',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410,500]
              },
            ]
        })
        // 婚恋服务统计
          // 职工婚恋注册人数与访问量
        var myChart4 = this.$echarts.init(this.$refs.chart_Marriage);
        myChart4.setOption({
             title:{
              left: 'center',
              top:'0',
                  text: '职工婚恋注册人数与访问量',
                  textStyle: {
                        color: '#121212',
                        fontWeight:'normal',
                      },
             },
             grid: {
                y2: 40
              },
              xAxis: {
                  type: 'category',
                  splitLine: {show: false},
                  boundaryGap: false,
                  name : '年/月',
                  data: ['2019-01', '2019-02', '2019-03'],
              },
              yAxis: {
                  type: 'value',
                  name : '（次）',
              },
              series: [
                  {
                    name:'访问量',
                    data: [1000,2000, 5000],
                    type: 'line',
                    smooth:true,
                    symbolSize:8,//拐点圆的大小
                    itemStyle:{
                            normal:{
                                lineStyle:{
                                    width:3,
                                    type:'solid'  //'dotted'虚线 'solid'实线
                                },
                                areaStyle: {color:'rgba(114,195,127,0.3)'},
                                color: '#60cdf1',
                            }
                        }
                },
                  {
                    name:'注册人数',
                    data: [2000,3500, 4000],
                    type: 'line',
                    smooth: true,
                    symbolSize:8,//拐点圆的大小
                    itemStyle:{
                            normal:{
                                lineStyle:{
                                    width:3,
                                    type:'solid'  //'dotted'虚线 'solid'实线
                                },
                                areaStyle: {color:'rgba(246,248,107,0.2)'},
                                color: '#3fe6b5',
                            }
                       }
                },
              ]
        })
        // 职工婚恋参与男女比例
        var myChart5 = this.$echarts.init(this.$refs.chart_bili);
        myChart5.setOption({
           title:{
                left: 'center',
                top:'0',
                    text: '职工婚恋参与男女比例',
                    textStyle: {
                          color: '#121212',
                          fontWeight:'normal',
                        },
              },
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              series : [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius : '65%',
                      center: ['50%', '55%'],
                      data:[
                          {value:335, 
                            name:'女',
                                itemStyle:{
                                     normal:{
                                         color:'#f5d71c',  
                                     }
                                }
                          },
                          {value:610, 
                            name:'男',
                            itemStyle:{
                                     normal:{
                                         color:'#5b94f3',  
                                     }
                                }
                          }
                      ],
                  }
              ]
        })
        var myChart = this.$echarts.init(this.$refs.chart_Age);
        myChart.setOption({
            title:{
                left: 'center',
                top:'0',
                    text: '职工婚恋参与年龄段',
                    textStyle: {
                          color: '#121212',
                          fontWeight:'normal',
                        },
              },
             tooltip : {
                
              },
              xAxis: {
                  type: 'category',
                  name:'(岁)',
                  data: ['0-20', '20-30', '30-40', '40-50', '50-60', '60以上']
              },
              yAxis: {
                  type: 'value',
                  name:'(人)',
              },
              grid: { 
                left: '8%', 
                right: '15%', 
                bottom: '5%', 
                containLabel: true
              },
              series: [{
                  data: [1860, 203503, 322718, 177952, 177952, 296086],
                  type: 'bar',
                  stack: '总量',
                  barWidth : 40,
                  itemStyle:{
                        normal:{
                            color:"#6294f4"
                        }
                    },
                    label: {
                        normal: {
                          color:'#6294f4',
                            show: true,
                            position: 'top'
                        }
                    }
              }],
        })
        // 四季帮扶 chart_siji
        var myChart6 = this.$echarts.init(this.$refs.chart_siji);
        myChart6.setOption({
           tooltip : {
                  
                },
              title:{
                left: 'center',
                bottom:'0',
                    text: '近五年帮扶资金趋势图',
                    textStyle: {
                          color: '#121212',
                          fontWeight:'normal',
                        },
              },
               legend: {
                 x:'left',
                   data:['春送岗位','夏送清凉','夏送清凉','金秋助学','冬送温暖'],
                   icon: 'rect',
                 itemGap: 60
               },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2013年','2014年', '2015年', '2016年', '2017年']
                },
                yAxis: {
                    type: 'value',
                    name : '帮扶资金（万元）',
                },
                series: [
                    {
                    name:'春送岗位',
                      data: [30000,35000, 38000, 42000, 47000],
                      type: 'line',
                      smooth:false,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:5,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  color: '#97cc00',
                              }
                          }
                  },
                    {
                    name:'夏送清凉',
                      data: [20000,26000, 32000, 40000, 45000],
                      type: 'line',
                      smooth: false,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:5,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  color: '#5bc2f3',
                              }
                         }
                  },
                  {
                         name:'金秋助学',
                      data: [5000,15000, 35000,40000,50000],
                      type: 'line',
                      smooth: false,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:5,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  color: '#fbb700',
                              }
                         }
                  },
                  {
                          name:'冬送温暖',
                      data: [30000,40000, 45000, 50000, 55000],
                      type: 'line',
                      smooth: false,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:5,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  color: '#da533a',
                              }
                         }
                  },
                ]
        })
        // 年龄分布
        var myChart7 = this.$echarts.init(this.$refs.chart_sijiage);
        myChart7.setOption({
            tooltip : {
                  
                },
              title:{
                left: 'center',
                bottom:'0',
                    text: '近五年帮扶人数趋势图',
                    textStyle: {
                          color: '#121212',
                          fontWeight:'normal',
                        },
              },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2015年', '2016年', '2017年']
                },
                yAxis: {
                    type: 'value',
                    name : '帮扶（人次）',
                },
                series: [
                    {
                      data: [20,210, 280,],
                      type: 'line',
                      smooth:false,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:5,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  color: '#97cc00',
                              }
                          }
                  },
                    {
                      data: [120,340, 360],
                      type: 'line',
                      smooth: false,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:5,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  color: '#5bc2f3',
                              }
                         }
                  },
                  {
                      data: [180,340,420],
                      type: 'line',
                      smooth: false,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:5,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  color: '#da533a',
                              }
                         }
                  },
                ]
        })
        // 大兵帮扶统计 chart_helpnum chart_helpage
        var myChart8 = this.$echarts.init(this.$refs.chart_helpnum);
        myChart8.setOption({
              "title":{
                        "text": '大病服务参与人数',
                        "subtext": "",
                        "x": "center",
                        textStyle: {
                          color: '#121212',
                          fontWeight:'normal',
                        },
                    },
                tooltip : {
                  
                },  
                grid: {
                  y2: 40
                },
                xAxis: {
                    type: 'category',
                    splitLine: {show: false},
                    boundaryGap: false,
                    name : '（期）',
                    data: ['13期', '14期',],
                },
                yAxis: {
                    type: 'value',
                    name : '（人次）',
                },
                series: [
                    {
                      name:'参与人数',
                      data: [50000,120000],
                      type: 'line',
                      smooth:true,
                      symbolSize:8,//拐点圆的大小
                      itemStyle:{
                              normal:{
                                  lineStyle:{
                                      width:3,
                                      type:'solid'  //'dotted'虚线 'solid'实线
                                  },
                                  areaStyle: {color:'rgba(114,195,127,0.3)'},
                                  color: '#60cdf1',
                              }
                          }
                  },
                  
                ]
        })
        var myChart9 = this.$echarts.init(this.$refs.chart_helpage);
        myChart9.setOption({
             tooltip : {
                  
                },
              "title": {
                         "text": '大病服务参与人数年龄段',
                        "subtext": "",
                        "x": "center",
                        textStyle: {
                          color: '#121212',
                          fontWeight:'normal',
                        },
                    },
                xAxis: {
                    type: 'category',
                    name:'(岁)',
                    data: ['0-20', '20-30', '30-40', '40-50', '50-60', '60以上']
                },
                yAxis: {
                    type: 'value',
                    name:'(人)',
                },
                grid: { 
                  left: '8%', 
                  right: '15%', 
                  bottom: '5%', 
                  containLabel: true
                },
                series: [{
                    data: [100, 1500, 3000, 4500, 7000, 9000],
                    type: 'bar',
                    stack: '总量',
                    barWidth : 40,
                    itemStyle:{
                          normal:{
                              //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
          
                              color:"#6294f4"
          
                          }
                      },
                      label: {
                          normal: {
                            color:'#6294f4',
                              show: true,
                              position: 'top'
                          }
                      }
                },]
        })
        // 人员在岗情况 chart_Onduty
        var myChart10 = this.$echarts.init(this.$refs.chart_Onduty);
        myChart10.setOption({
              // legend: {},
              "title":{
                        "text": '人员在岗情况',
                        "subtext": "",
                        "x": "center",
                        textStyle: {
                          color: '#121212',
                          fontWeight:'normal',
                        },
                    },
              tooltip: {},
              dataset: {
              source: [
                    ['在岗', 41.1],
                 ]
               },
               series: [{
                 type: 'pie',
                 radius: 70,
                 center: ['48%', '40%']
               }]
        })
        // 财务报销 chart_baoxiao
        var myChart11 = this.$echarts.init(this.$refs.chart_baoxiao);
        myChart11.setOption({
              "title": {
                "text": "月度报销金额统计",
                "subtext": "",
                "x": "center",
                textStyle: {
                  color: '#121212'
                },
             },

             "tooltip": {
                "trigger": "item",
                "formatter": "{a} <br/>{b} : {c}"
             },
             "legend": {
                bottom: 0,
                left: 'center',
                data:['金额']
              },
              xAxis: {
                  type: 'category',
                  data: ['2019-01', '2019-02', '2019-03']
              },
              yAxis: {
                  type: 'value'
              },
              "series": [
                {
                  name: '金额',
                    type: 'bar',
                    radius: '70%',
                    center: ['45%', '45%'],
                    selectedMode: 'single',
                     barWidth:60,
                    "itemStyle": {
                        "emphasis": {
                            "shadowBlur": 10,
                            "shadowOffsetX": 0,
                            "shadowColor": "rgba(0, 0, 0, 0.5)"
                        }
                    },
                   data: [120, 200, 150],
                }
              ]
        })
        // 财务预算  chart_yusuan
        var myChart12 = this.$echarts.init(this.$refs.chart_yusuan);
        myChart12.setOption({
                "title": {
                "text": "月度预算金额统计",
                "subtext": "",
                "x": "center",
                textStyle: {
                  color: '#121212'
                 },
               },

               "tooltip": {
                "trigger": "item",
                "formatter": "{a} <br/>{b} : {c}"
               },
               "legend": {
                bottom: 0,
                left: 'center',
                data:['金额']
                },
                xAxis: {
                  type: 'category',
                  data: ['2019-01', '2019-02', '2019-03']
                },
                yAxis: {
                  type: 'value'
                },
                "series": [
                {
                  name: '金额',
                    type: 'bar',
                    radius: '70%',
                    center: ['45%', '45%'],
                    selectedMode: 'single',
                     barWidth:60,
                    "itemStyle": {
                        "emphasis": {
                            "shadowBlur": 10,
                            "shadowOffsetX": 0,
                            "shadowColor": "rgba(0, 0, 0, 0.5)"
                        }
                    },
                   data: [120, 200, 150],
                }
                ]
        })
        // chart列表 chart_one chart_two
        var myChart13 = this.$echarts.init(this.$refs.chart_one);
        myChart13.setOption({
            "title": {
                 "text": "报销",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
        var myChart14 = this.$echarts.init(this.$refs.chart_two);
        myChart14.setOption({
            "title": {
                 "text": "出差",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
        var myChart15 = this.$echarts.init(this.$refs.chart_three);
        myChart15.setOption({
            "title": {
                 "text": "用车",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
        var myChart16 = this.$echarts.init(this.$refs.chart_four);
        myChart16.setOption({
            "title": {
                 "text": "请假",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
        var myChart17 = this.$echarts.init(this.$refs.chart_five);
        myChart17.setOption({
            "title": {
                 "text": "公务接待",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
        var myChart18 = this.$echarts.init(this.$refs.chart_six);
        myChart18.setOption({
            "title": {
                 "text": "阳工发",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
        var myChart19 = this.$echarts.init(this.$refs.chart_seven);
        myChart19.setOption({
            "title": {
                 "text": "阳工办发",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
        var myChart20 = this.$echarts.init(this.$refs.chart_eight);
        myChart20.setOption({
            "title": {
                 "text": "预算",
                 "subtext": "",
                 "x": "center",
                 textStyle: {
                 color: '#121212',
                 fontWeight:'normal',
                 },
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
           {
            name:'数量',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '60%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:0, name:'未办'},
                {value:0, name:'已办'}
            ]
            },
            {
            name:'数量',
            type:'pie',
            radius: ['30%', '35%'],
           }
           ]
        })
      }

    },
    mounted(){
      const that=this;
      that.initCharts()
      that.in();

      
     
    }
  }
</script>
<style type="text/css" scoped>
.chart_list{
   width: 90%;
   margin: 0 auto;
}
.chart_list li{
    width: 20%;
    height: 160px;
    /*background: red;*/
    float: left;
    margin-right: 6%;
    margin-bottom: 2%;
    /*overflow: hidden;*/
}
.chart_list li:nth-child(4n){
  margin-right: 0;
}
.chart_list li>div:first-child{
  width: 100%;
  height: 100%;
}
.el-radio-group{
  margin: 20px;
}
.same_boxtop{
   margin: 20px;
   height: 30px;
}
.el-button{
    padding: 0;
    width: 54px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #ce4b4b;
    border: 1px solid #ce4b4b;
}
.el-button:hover{
  background: #ce4b4b;
  border: transparent;
}
.el-select{
  float: left;
  width: 25%;
  margin-right: 15px;
}
.el-range-editor.el-input__inner{
  padding: 0px  10px;
}
.el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
  width: 236px;
}
.el-input__inner{
  height: 34px;
  line-height: 34px;
}
.duty_table{
  width: 480px;
  height: 246px;
  display: block;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 40px;
}
.duty_table tr{
  width: 100%;
  height: 28px;
  display: block;
}
.duty_table tr td{
   border:1px solid #cccccc;
   display: block;
   float: left;
   height: 28px;
   line-height: 28px;
   text-align: center;
}
.duty_table tr td:nth-child(1){
  width: 20%;
}
.duty_table tr td:nth-child(2){
  width: 20%;
}
.duty_table tr td:nth-child(3){
  width: 58%;
}
.echarts_duty{
  width: 98%;
  margin: 0 auto;
  overflow: hidden;
}
.echarts_duty>div{
  width: 50%;
  float: left;
  height: 300px;
  /*background: red;*/
  margin-top: 1%;
}
.echarts_box{
  width: 97%;
  margin: 0 auto;
  overflow: hidden;
}
.echarts_box>div{
  float: left;
  width: 450px;
  height: 250px;
 margin-top: 50px;
}
.echarts_box>div:nth-child(2){
  width: 200px;
}
 .duty_box{
   width: 100%;
   height: 352px;
   background: #fff;
   border-top: 3px solid #ce4b4b;
   margin-top: 10px;
 }
 .money_box{
  width: 100%;
  height: 516px;
  overflow: hidden;
  margin-top: 10px;
 }
 .money_box>div{
  width: 49.7%;
  float: left;
  height: 100%;
  border-top: 3px solid #ce4b4b;
  background: #fff;
 }
  .money_box>div:nth-child(2){
    float: right;
  }
 .process_box{
  width: 100%;
  height: 468px;
  margin-top: 10px;
 }
 .process_left{
  width:68% ;
  height: 468px;
  background: #fff;
  border-top: 3px solid #ce4b4b;
  float: left;
 }
 .date_box{
  width: 31.5%;
  float: right;
  height: 468px;
  background: #fff;
  border-top: 3px solid #ce4b4b;
  overflow: hidden;
 }
 .date_date{
  width: 100%;
 }
.el-calendar-table .el-calendar-day{
  height: 40px;
  line-height: 30px;
  text-align: center;
 }
  .news_box{
    width: 100%;
    height: 317px;
  }
  .news_boxleft{
    width: 68%;
    height: 317px;
    background: #fff;
    float: left;
    border-top: 3px solid #ce4b4b;
  }
  .same_title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dddddd;
  }
  .xian{
    width: 3px;
    height: 16px;
    background: #ce4b4b;
    float: left;
    margin-top: 11px;
  }
  .same_titleleft{
    float: left;
    color: #ce4b4b;
    margin-left: 15px;
  }
  .same_titleright{
    float: right;
    margin-right: 10px;
    color: #999999;
  }
  .same_titleright i{
    color: #999999;
    margin-right: 3px;
  }
  .news_list{
    width: 100%;
  }
  .news_list li{
     width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
  }
  .news_list li div:nth-child(1){
    float: left;
    margin-left: 10px;
    color: #222;
  }
  .news_list li div:nth-child(1) span{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #787878;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
 .news_list li div:nth-child(2){
    float: right;
    margin-right: 10px;
    color: #a5a5a5;
  }
  .news_boxright{
    width: 31.5%;
    float: right;
    background: #fff;
    height: 317px;
    border-top: 3px solid #ce4b4b;
  }
  .day_box{
    width: 90%;
    margin: 0 auto;
  }
  .day_person{
    height: 31px;
    line-height: 31px;
     margin-top: 10px;
  }
  .day_persontu{
    width: 31px;
    height: 3px;
    float: left;
    margin-right: 10px;
  }
  .table_one{
    text-align: center;
    margin-top: 17px;
    width: 100%;
    border-collapse:collapse;
  }
  .table_one tr{
    width: 100%;
    height:35px;
    line-height: 35px;
  }
  .table_one tr td:nth-child(1){
    border-left: none;
  }
   .table_one tr td:nth-child(4){
    border-right: none;
  }
  .table_one tr td{
    border: 1px solid #e6e6e6;
    width: 25%;
    font-size: 14px;
  }
  .data_box{
    width: 100%;
    height: 616px;
    background: #fff;
    border-top: 3px solid #ce4b4b;
    margin-top: 10px;
  }
  .wq_boxfoot{
    width: 94%;
    margin: 0 auto;
    height: 116px;
    margin-top: 28px;
}
.wq_boxfoot ul {
    overflow: hidden;
}
.wq_boxfoot ul li{
    width: 116px;
    height: 116px;
    float: left;
    text-align: center;
    border-radius: 50%;
    position: relative;
    margin-right: 11%;
}
.wq_boxfoot ul li:last-child{
  margin-right: 0;
}
.wq_boxfoot ul li i{
    display: block;
    box-sizing: border-box;
    position: absolute;
   /* top: 0;
    left: 0;*/
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.wq_boxfoot ul li i b{
    display: block;
    box-sizing: border-box;
    width: 116px;
    height: 116px;
    border-radius: 50%;
    border: 3px solid #ce4b4b;
}
/* CSS Document */
 /*展开*/
@keyframes Open {
0% {
     width: 0;
     height: 0;
}
 100% {
     width: 100%;
     height: 100%;
}
}
@-webkit-keyframes Open {
0% {
     width: 0;
     height: 0;
}
 100% {
      width: 100%;
     height: 100%;
}
}
@-moz-keyframes Open {
0% {
     width: 0;
     height: 0;
}
 100% {
     width: 100%;
     height: 100%;
}
}
@-ms-keyframes Open {
0% {
     width: 0;
     height: 0;
}
 100% {
     width: 100%;
     height: 100%;
}
}

 /*收缩*/
@keyframes Close {

 100% {
     width: 0;
     height: 0;
}
}
@-webkit-keyframes Close {

 100% {
     width: 0;
     height: 0;
}
}
@-moz-keyframes Close {

 100% {
     width: 0;
     height: 0;
}
}
@-ms-keyframes Close {

 100% {
     width: 0;
     height: 0;
}
}
.wq_boxfoot ul li i{
    -webkit-animation: Close .5s ease-in-out both;
    -moz-animation: Close .5s ease-in-out both;
    -ms-animation: Close .5s ease-in-out both;
    animation: Close .5s ease-in-out both;
}
.wq_boxfoot ul li:hover i {
    -webkit-animation: Open .5s ease-in-out both;
    -moz-animation: Open .5s ease-in-out both; -ms-animation: Open .5s ease-in-out both;
    animation: Open .5s ease-in-out both;
}
.wq_boxfoot ul li p{
    margin: 0!important;
    font-size: 26px;
    color: #e56c59;
    height: 60px;
    line-height: 75px;
}
.same_box{
  width: 80%;
  margin: 0 auto;
  margin-top: 11px;
  overflow: hidden;
}
.same_box>div{
   width: 49.8%;
   float: left;
   border-right: 1px solid #d3d3d3;
}
.same_box>div:nth-child(2){
  border: none;
}
.shuju_list{
    width: 100%;
    height: 20px;
    margin-top:0px;
}
.shuju_list li{
  width: 100%;
  margin-bottom: 20px;
  margin-left: 76px;
}
.biao{
  width: 40px;
  height: 20px;
  background: red;
  float: left;
  margin: 0 30px;
  border-radius: 20px;
}
.job_box{
  width: 100%;
  height:388px;
  background: #fff; 
  border-top: 3px solid #ce4b4b;
  margin-top: 10px;
}
.job_tab{
  height: 30px;
  width: 96%;
  line-height: 30px;
  margin: 0 auto;
  margin-top: 10px;
}
.job_tab li{
  float: left;
  font-size: 16px;
  color: #1a1a1a;
  margin-right: 10px
}
.job_tab li.active{
   color: #e34949;
   border-bottom:2px solid #ce4b4b;
}
.table{
  width: 96%;
  margin: 0 auto;
  margin-top: 10px;
}
.table li{
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    text-align: center;
    margin-top: 8px;
}
.table li:nth-child(1){
  background: #e6e6e6;
  font-weight: bold;
}
.table li div{
  float: left;
}
.table li div:nth-child(1){
  width: 46%;
}
.table li div:nth-child(2){
  width: 8%;
}
.table li div:nth-child(3){
  width: 8%;
}
.table li div:nth-child(4){
  width: 8%;
}
.table li div:nth-child(5){
  width: 15%;
}
.table li div:nth-child(6){
  width: 15%;
}
</style>
