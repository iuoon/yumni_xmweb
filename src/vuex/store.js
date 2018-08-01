import Vue from 'vue'
import Vuex from 'Vuex'

import UserStore from '../store/UserStore.js' // 引入userstore对象
import OtherStore from '../store/OtherStore.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserStore,
    other: OtherStore
  }
})
