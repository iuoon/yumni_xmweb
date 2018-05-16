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
      <a href="#/login" class="a1">{{strUserName}}</a>
      <a class="a2 a3" @click="logout">退出登录</a>
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
              _self.showLogin = false
              _self.hideLogin = true
              _self.showUserInfo = true
              _self.hideUserInfo = false
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
      },
      logout () {
        console.log(1)
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
