import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import Index from '@/components/Index'
import CCLogin from '@/components/CCLogin'
import CCRegister from '@/components/CCRegister'
import CCUserInfo from '@/components/CCUserInfo'
import CCPublish from '@/components/CCPublish'
import CCForgetPwd from '@/components/CCForgetPwd'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'CCLogin',
      component: CCLogin
    },
    {
      path: '/register',
      name: 'CCRegister',
      component: CCRegister
    },
    {
      path: '/userInfo',
      name: 'CCUserInfo',
      component: CCUserInfo
    },
    {
      path: '/publish',
      name: 'CCPublish',
      component: CCPublish
    },
    {
      path: '/forgetpwd',
      name: 'CCForgetPwd',
      component: CCForgetPwd
    }
  ]
})
