<template>
  <div>
    <div class="d_logo">
      <a class="a_head_title" href="/">奇点</a>
    </div>
    <div class="d_1">
      <a href="#/login" class="a_login">登录</a>
      <a href="#/register" class="a_register">注册</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CCHeader',
    methods: {
      getQuestPath (lId) {
        return '/question/' + lId
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
