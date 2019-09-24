// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import echarts from "echarts"
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/style.less'
import '@/styles/list.less'
import "@/styles/element-ui.less"
// import axios from 'axios'
import Cookies from 'js-cookie'

// import Qs from 'qs'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
// Vue.prototype.$axios = axios;
// Vue.prototype.$qs = Qs;
// import util from './utils/usertoken.js'

// import https from './utils/https'
// import './utils/request.js'
//  import { getLogin } from "@/api/api"

const vue =new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  data() {
    return {
      parms: {
        "userName": "houquansheng", 
        "password": 123456, 
        "systemCode": "S1003"
      }
    }
  },
  created() {
    console.log(this.$store);
    this.getLogin()
  },
  methods: {
    getLogin() {
      this.$store.dispatch('login', this.parms).then((res) => {
        console.log('=====',res);
      }).catch(() => {
        this.loading = false
      })
    }
  },
  mounted() {
    
  }

})
window.addEventListener('load', function () {
   if (vue.$route.path !== '/index') { // / 表示不是index路由
       vue.$router.replace('/index') // 返回index路由
   }
})  

