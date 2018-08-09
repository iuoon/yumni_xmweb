<template>
  <div class="background">
    <div class="login_c">
      <component :is="componentName"></component>
      <br>
    </div>
    <CCAlert ref="ccalert"></CCAlert>
  </div>
</template>
<script>
  import CCAlert from './CCAlert.vue'

  var componentPreResetPwd = {
    template: `<div>
                 <Input v-model="strUserName" placeholder="请输入手机号/邮箱" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMobileCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doRegister()">下一步</Button>
               </div>`,
    data () {
      return {
        strUserName: '',
        strCheckCode: ''
      }
    },
    methods: {
    }
  }

  var componentResetPwd = {
    template: `<div>
                 <Input v-model="strUserName" placeholder="请输入手机号/邮箱" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strNewPwd" type="password" placeholder="新密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strNewPwd1" type="password" placeholder="再次输入新密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMobileCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doRegister()">修改密码</Button>
               </div>`,
    data () {
      return {
        strUserName: '',
        strNewPwd: '',
        strNewPwd1: '',
        strCheckCode: ''
      }
    },
    methods: {
    }
  }

  export default {
    name: 'CCForgetPwd',
    data () {
      return {
        componentName: 'componentPreResetPwd',
        registrMethodName1: '手机'
      }
    },
    components: {
      componentPreResetPwd,
      componentResetPwd,
      CCAlert
    },
    created () {
    },
    methods: {
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
    height: 200px;
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
