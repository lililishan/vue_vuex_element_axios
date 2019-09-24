import router from "./router"
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie

//全局钩子router.beforeEach中拦截路由
router.beforeEach((next) => {
  const hasToken = getToken()
  //判断token是否存在 ，判断是否已获得token，在获得token之后我们就要去获取用户的基本信息了
  if (!hasToken) {


  } 
  
  if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
    store.dispatch('GetInfo').then(res => { // 拉取user_info
      const roles = res.data.role;
      next();//resolve 钩子
    })
  }
})