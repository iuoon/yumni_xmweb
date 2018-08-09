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
                 <Input v-model="strMobile" placeholder="请输入手机号/邮箱" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMobileCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doRegister()">下一步</Button>
               </div>`,
    data () {
      return {
        msg: ''
      }
    },
    methods: {
    }
  }

  var componentResetPwd = {
    template: `<div>
                 <Input v-model="strMobile" placeholder="请输入手机号/邮箱" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strPwd" type="password" placeholder="新密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strPwd" type="password" placeholder="再次输入新密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMobileCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doRegister()">修改密码</Button>
               </div>`,
    data () {
      return {
        msg: ''
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
