
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from './../store'
import { getToken } from './auth'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://10.0.10.208', // api的base_url    //process.env.BASE_API
  timeout: 5000 // 请求超时时间 
})

// request token
service.interceptors.request.use(
  config => {
    // console.log( 'localStorage----', localStorage.getItem('Token'), );
    //     console.log('Cookies---', Cookies.get('Token') );
    //     const token = localStorage.getItem('Token') || Cookies.get('Token') 
    console.log('store.getters.token',store.getters.token);
    
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response interceptor 拦截器
service.interceptors.response.use(
  response => {
    debugger
    return response
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       // store.dispatch('user/resetToken').then(() => {
    //       //   location.reload()
    //       // })
    //     })
    //   }
    //   return Promise.reject(new Error(response.message || 'Error'))
          //return Promise.reject('error');
    // } else {
    //   return response.data;
    // }
  },
  error => {
    debugger
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
