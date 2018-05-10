<template>
  <div>
    <div class="d_logo">
      <a class="a_head_title" href="/">奇点</a>
    </div>
    <div class="d_1" ref="login">
      <a href="#/login" class="a_login">登录</a>
      <a href="#/register" class="a_register">注册</a>
    </div>
    <div class="d_1" ref="login" style="display: none;">
      <a href="#/login" class="a_login">{{strUserName}}</a>
      <a href="#/logout" class="a_register">退出登录</a>
    </div>
  </div>
</template>

<script>
  import { getCookie } from '../net/CookieUtil'

  export default {
    name: 'CCHeader',
    data () {
      return {
        strUserName: ''
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
        console.log('token==>', getCookie('token'))
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
</style>
