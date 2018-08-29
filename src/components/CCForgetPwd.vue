<template>
  <div class="background">
    <div :class="loginClass">
      <component :is="componentName"></component>
      <br>
    </div>
    <CCAlert ref="ccalert"></CCAlert>
  </div>
</template>
<script>
  import CCAlert from './CCAlert.vue'

  var self   // --定义父组件对象，便于子组件调用父组件

  var componentPreResetPwd = {
    template: `<div>
                 <Input v-model="strUserName" placeholder="请输入手机号/邮箱" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="请输入验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMobileCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doNext()">下一步</Button>
               </div>`,
    data () {
      return {
        strUserName: '',
        strCheckCode: ''
      }
    },
    methods: {
      doNext () {
        if (this.strUserName === '') {
          self.showMsg(1, '请输入手机号/邮箱')
          return
        }
        if (this.strCheckCode === '') {
          self.showMsg(1, '请输入验证码')
          return
        }
        // TODO --验证用户是否存在
        self.strUserName = this.strUserName
        self.loginClass = 'login_d'
        self.changeComponent()
      }
    }
  }

  var componentResetPwd = {
    template: `<div>
                 <Input v-model="strUserName" type="hidden" placeholder="请输入手机号/邮箱" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strNewPwd" type="password" placeholder="新密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strNewPwd1" type="password" placeholder="再次输入新密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMobileCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doResetPwd()">修改密码</Button>
               </div>`,
    data () {
      return {
        strUserName: self.strUserName,
        strNewPwd: '',
        strNewPwd1: '',
        strCheckCode: ''
      }
    },
    methods: {
      doResetPwd () {
      }
    }
  }

  export default {
    name: 'CCForgetPwd',
    data () {
      return {
        componentName: 'componentPreResetPwd',
        strUserName: '',
        loginClass: 'login_c'
      }
    },
    components: {
      componentPreResetPwd,
      componentResetPwd,
      CCAlert
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        self = this
      },
      changeComponent () {
        this.componentName = 'componentResetPwd'
      },
      showMsg (type, msg) {
        this.$refs.ccalert.showMsg(type, msg)
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
    height: 200px;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 4px;
    z-index: 10;
    box-shadow:0px 0px 5px #ccc;
    text-align:center;
  }
  .login_d{
    position: absolute;
    left: 50%;
    top: 40%;
    width:300px;
    height: 250px;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 4px;
    z-index: 10;
    box-shadow:0px 0px 5px #ccc;
    text-align:center;
  }
  .input-d{
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
</style>
