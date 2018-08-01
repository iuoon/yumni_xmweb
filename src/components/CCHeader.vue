<template>
  <div>
    <div class="d_logo">
      <a class="a_head_title" href="/">奇点</a>
    </div>
    <div class="d_1" :class="{'hide':hideLogin,'show':showLogin}">
      <a href="#/login" class="a1">登录</a>
      <a href="#/register" class="a2">注册</a>
    </div>
    <div class="d_1" :class="{'hide':hideUserInfo,'show':showUserInfo}">
      <a href="javascript:void(0)" class="a1" @click="toUserCenter">{{strUserName}}</a>
      <a href="javascript:void(0)" class="a2 a3" @click="logout">退出登录</a>
    </div>
  </div>
</template>

<script>
  import { getUserById } from '../net/HttpApi'
  import { getCookie, delCookie } from '../net/CookieUtil'

  export default {
    name: 'CCHeader',
    data () {
      return {
        strUserName: '',
        showLogin: true,
        hideLogin: false,
        showUserInfo: false,
        hideUserInfo: true
      }
    },
    created () {
      this.init()
    },
    methods: {
      getQuestPath (lId) {
        return '/question/' + lId
      },
      init () {
        var _self = this
        var strUserId = getCookie('strUserId').replace(/\s+/g, '')
        console.log('strUserId==>', strUserId)
        if (strUserId !== '') {
          let resp = getUserById(encodeURI(strUserId))
          resp.then(function (data) {
            if (data.code === 0) {
              _self.strUserName = data.user.strUserName
              _self.showLogin = false
              _self.hideLogin = true
              _self.showUserInfo = true
              _self.hideUserInfo = false
              _self.$store.dispatch('updateUser', data.user)
              console.log(_self.$store.state.user.user.strUserName)
            } else {
              alert(data.msg)
            }
          })
        } else {
          _self.showLogin = true
          _self.hideLogin = false
          _self.showUserInfo = false
          _self.hideUserInfo = true
        }
      },
      toUserCenter () {
        this.$router.push('/userInfo')
      },
      logout () {
        delCookie('strUserId')
        delCookie('token')
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
  .d_logo{
    float:left;
  }
  .d_1{
    float:right;
  }
  .a1{
    padding-right: 24px;
    font-size: 14px;
    color: #565656;
  }
  .a2{
    font-size: 14px;
    color: #565656;
    width:78px;
    height:38px
  }
  .a_head_title{
    font-size: large;
    color: #bcfe65;
  }
  .hide{
    display: none;
  }
  .show{
    display: block;
  }
  .a2 a3:hover{
    cursor:pointer
  }
</style>
