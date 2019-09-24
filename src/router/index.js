import Vue from 'vue'
import Router from 'vue-router'
import  index from  '../pages/index/index'
//行政审批
import  getCart from '../pages/AdminApproval/getcart/getCart.vue'
import  onDuty from '../pages/AdminApproval/onduty/onDuty.vue'
import  please from '../pages/AdminApproval/please/please.vue'
import  adminAppovla from '../pages/AdminApproval/adminappoval/adminAppoval.vue'
import adminAppovlaAdd from '../pages/AdminApproval/adminappoval/admin-add.vue'
import getCartAdd from '../pages/AdminApproval/getcart/getcart-add.vue'
import onDutyAdd from '../pages/AdminApproval/onduty/onduty-add.vue'
import pleaseAdd from '../pages/AdminApproval/please/please-add.vue'
//人事管理--请假、出差、离岗
import  leave from  '../pages/Personnel/personnel-management/leave.vue'
import leaveMsg from '../pages/Personnel/personnel-management/leaveMsg-add.vue'
import  travel from  '../pages/Personnel/travel/travel.vue'
import addTravel from "../pages/Personnel/travel/addTravel.vue"
import demobilized from '../pages/Personnel/demobilized/demobilized.vue'
import demobilizedAdd from '../pages/Personnel/demobilized/demobilizedAdd.vue'
import Newprocess from '../pages/Newprocess/Newprocess.vue'
//财务管理 collarUse
import budget from '../pages/Finance/budget/budget.vue'
import budgetAdd from '../pages/Finance/budget/budget-add.vue'
import expenditure from '../pages/Finance/expenditure/expenditure.vue'
import expenditureAdd from '../pages/Finance/expenditure/expenditure-add.vue'
import reimburse from '../pages/Finance/Reimburse/reimburse.vue'
import reimburseAdd from '../pages/Finance/Reimburse/reimburse-add.vue'
import collarUse from '../pages/Finance/collarUse/collarUse.vue'
import collarUseAdd from '../pages/Finance/collarUse/collarUseAdd.vue'
// 新建事宜 Dispatch
import Matters from'../pages/Newprocess/Matters.vue'
import Mattersyi from'../pages/Newprocess/Mattersyi.vue'
import request from'../pages/Newprocess/request.vue'
import Dispatch from'../pages/Newprocess/Dispatch.vue'
// 知识
import knowledge from'../pages/knowledge/knowledge.vue'
import newKnowledge from'../pages/knowledge/newKnowedge.vue'
import knowledgeXq from'../pages/knowledge/knowledgeXq.vue'
//值班管理
import duty from "./../pages/DutyManagement/dutyList.vue"
import addDuty from "./../pages/DutyManagement/addDuty.vue"
import batchImport  from "./../pages/DutyManagement/import.vue"
// 请假统计  leaveStatistics
import leaveStatistics  from "./../pages/leaveStatistics/leaveStatistics.vue"
// 产看模型  modelAdd.vue
import Model  from "./../pages/Model/Model.vue"
import processManagement  from "./../pages/Model/processManagement.vue"
//发文
import dispatchManagement from "./../pages/dispatchManagement/dispatchManagement.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //首页
    {
      path: '/index',
      component: index,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    //人事管理
    {
      path: '/leave', //请假列表
      component: leave,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/leaveMsg-add',//新建请假流程
      component: leaveMsg,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/travel', //出差
      component:travel,
       meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/add-travel', //新建出差
      component:addTravel,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/demobilized', // 临时离岗
      component:demobilized,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/demobilizedAdd', // 临时离岗 demobilizedAdd
      component:demobilizedAdd,
      meta:{
        showleft:true,
        showheader:true
      }
    },

    //行政审批
    {
      path: '/adminappovla',//公务接待新建申请
      component:adminAppovla,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/adminappovlaadd',//公务接待
      component:adminAppovlaAdd,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/getcart',//用车
      component: getCart,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/getcartadd',//用车新建申请
      component: getCartAdd,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/onduty',//值班
      component: onDuty,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/ondutyadd',//值班新建申请
      component: onDutyAdd,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/please',//请示
      component: please,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/pleaseadd',//请示新建申请
      component: pleaseAdd,

      meta:{
        showleft:true,
        showheader:true
      }
    },
    //财务管理
    {
      path: '/budget',//报销
      component: budget,

      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/budgetadd',//报销申请
      component: budgetAdd,

      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/expenditure',//支出预算
      component: expenditure,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/expenditureadd',//新建支出预算
      component: expenditureAdd,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/collarUse',//领用
      component: collarUse,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/collarUseAdd',//
      component: collarUseAdd,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/reimburseAdd',//新建领用预算
      component: reimburseAdd,
      meta:{
        showleft:true,
        showheader:true
      }
    },

    //值班管理
    {
      path: '/dutyList',//值班管理-列表
      component: duty,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/addDuty',//值班管理-新建
      component: addDuty,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path: '/import',//值班管理-批量导入
      component: batchImport,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    //Newprocess
    {
      path:'/Newprocess',  //新建流程
      component:Newprocess,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    // 新建事宜
    {
      path:'/Matters',  //新建流程
      component:Matters,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/Mattersyi',  //新建流程
      component:Mattersyi,
      meta:{
        showleft:true,
        showheader:true
      }
    },
     {
      path:'/request',  //新建流程  knowledge
      component:request,
      meta:{
        showleft:true,
        showheader:true
      }
    },
     {
      path:'/Dispatch',  //新建流程  Dispatch
      component:Dispatch,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    // 知识
    {
      path:'/knowledge',  //新建流程  newKnowledge
      component:knowledge,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/newKnowledge',  //新建流程  newKnowledge
      component:newKnowledge,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/knowledgeXq',  //新建流程  knowledgeXq
      component:knowledgeXq,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    //请假统计 leaveStatistics
    {
      path:'/leaveStatistics',  //新建流程  knowledgeXq
      component:leaveStatistics,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    // 查看模型 Model
     {
      path:'/Model',  //新建流程  modelAdd
      component:Model,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/processManagement',  //新建流程  modelAdd
      component:processManagement,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/dispatchManagement',  //新建流程  modelAdd
      component:dispatchManagement,
      meta:{
        showleft:true,
        showheader:true
      }
    },
    {
      path:'/',
      redirect:'/index'
    },
  ]
})
