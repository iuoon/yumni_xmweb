// 存储组件之间通信状态信息

export default ({
  state: {
    // --------用户信息----------
    user: {
      lUserId: 0,
      strUserName: '',
      strEmail: '',
      strMobile: '',
      strRandom: Math.random()
    }
    // --------其他状态信息--------
  },
  getters: {
    // 获取用户信息
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    // 更新用户信息
    updateUserStore (state, user) {
      state.user.lUserId = user.lId
      state.user.strUserName = user.strUserName
      state.user.strEmail = user.strEmail
      state.user.strMobile = user.strMobile
    }
  },
  actions: {
    updateUser (context, user) {
      context.commit('updateUserStore', user)
    }
  }
})
