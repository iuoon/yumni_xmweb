<template>
  <div>
    <div class="d_logo">
      <a class="a_head_title" href="/">奇点</a>
    </div>
    <div class="d_1" :class="{'hide':hideLogin,'show':showLogin}">
      <a href="#/login" class="a_login">登录</a>
      <a href="#/register" class="a_register">注册</a>
    </div>
    <div class="d_1" :class="{'hide':hideUserInfo,'show':showUserInfo}">
      <a href="#/login" class="a_login">{{strUserName}}</a>
      <a href="#/logout" class="a_register">退出登录</a>
    </div>
  </div>
</template>

<script>
  import { getUserById } from '../net/HttpApi'

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
        var strUserId = this.getCookie('strUserId')
        console.log('strUserId==>', strUserId)
        if (strUserId !== '' || strUserId !== null) {
          let resp = getUserById(encodeURI(strUserId))
          resp.then(function (data) {
            if (data.code === 0) {
              _self.strUserName = data.user.strUserName
              this.showLogin = false
              this.hideLogin = true
              this.showUserInfo = true
              this.hideUserInfo = false
            } else {
              alert(data.msg)
            }
          })
        } else {
          this.showLogin = true
          this.hideLogin = false
          this.showUserInfo = false
          this.hideUserInfo = true
        }
      },
      getCookie (name) {
        if (document.cookie.length > 0) {
          var begin = document.cookie.indexOf(name + '=')
          if (begin !== -1) {
            begin += name.length + 1
            var end = document.cookie.indexOf(';', begin)
            if (end === -1) {
              end = document.cookie.length
            }
            return unescape(document.cookie.substring(begin, end))
          }
        }
        return ''
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
  .a_login{
    padding-right: 24px;
    font-size: 14px;
    color: #565656;
  }
  .a_register{
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
</style>
