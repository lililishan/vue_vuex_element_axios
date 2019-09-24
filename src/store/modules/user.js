import { getLogin, logout} from "./../../api/api"
import { getToken, setToken, removeToken } from './../../utils/auth'

const state = {
  token: getToken(),
  // name: '',
  // avatar: ''
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // }
}

const actions = {
  //登录
  login({ commit }, userInfo) {
    const { username, password, systemCode } = userInfo
    return new Promise((resolve, reject) => {
      getLogin({ username: username, password: password, systemCode: systemCode  }).then(response => {
        debugger
        const { data } = response.data
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 退出
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        // resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}