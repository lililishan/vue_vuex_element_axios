import request from './../utils/request'

export function getLogin(data) {
  debugger
  return request({
    url: '/sso/ssoUser/login/name',
    method: 'post',
    data
  })
}


export function logout() { //登出
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getDispatchManage(data) {  //发文
  return request({
    url: 'passLaborweb/api/oa/oaDispatch/querylist',
    method: 'post',
    data
  })
}

