<template>
  <div class="background">
    <div class="login_c">
      <h2 class="head-u">用户注册</h2>
      <Input v-model="strEmail" placeholder="邮箱" style="width: 250px" class="input-d"></Input>
      <Input v-model="strPwd" type="password" placeholder="密码" style="width: 250px" class="input-d"></Input>
      <Button type="info" style="width: 250px" class="input-d" @click="doRegister()">注册</Button>
      <br>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CCRegister',
    data () {
      return {
        strUserName: '',
        strPwd: '',
        strEmail: '',
        strMobile: ''
      }
    },
    methods: {
      doRegister () {
      }
    }
  }
</script>
<style>
  .background{
    width: 100%;
    height: 100%;
    position:absolute;
    background-image: url(../assets/xbg01.png);
    background-size:100%;
  }
  .login_c{
    position: absolute;
    left: 50%;
    top: 40%;
    width:300px;
    height: 300px;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 4px;
    z-index: 10;
    box-shadow:0px 0px 5px #ccc;
    text-align:center;
  }
  .head-u{
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
  .input-d{
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
</style>
