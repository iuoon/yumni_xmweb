<template>
  <div class="background">
    <div class="login_c">
      <h2 class="head-u">用户{{registrMethodName1}}注册</h2>
      <component :is="componentName"></component>
      <br>
      <a href="javascript:void (0);" @click="switchRegisterMethod" ref="streg">{{registrMethodName2}}注册</a>
    </div>
    <CCAlert ref="ccalert"></CCAlert>
  </div>
</template>
<script>
  import { doRegisterEmail, doRegisterMobile, doSendMobileCode, doSendMailCode } from '../net/HttpApi'
  import CCAlert from './CCAlert.vue'

  var self  // --定义父组件对象，便于子组件调用父组件

  // --定义邮箱注册模板
  var componentEmail = {
    template: `<div>
                 <Input v-model="strEmail" placeholder="邮箱" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strPwd" type="password" placeholder="密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMailCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doRegister()">注册</Button>
               </div>`,
    data () {
      return {
        strEmail: '',
        strPwd: '',
        strCheckCode: ''
      }
    },
    methods: {
      doRegister () {   // --邮箱注册
        let resp = doRegisterEmail(this.strEmail, this.strPwd, 123456)
        resp.then(function (data) {
          console.log(data)
          if (data.code === 0) {
            // TODO--doSome
          } else {
            self.showMsg(1, data.msg)
          }
        })
      },
      doSendMailCode () { // --发送邮箱验证码
        let resp = doSendMailCode(this.strEmail)
        resp.then(function (data) {
          if (data.code !== 0) {
            self.showMsg(1, data.msg)
          } else {
            self.showMsg(1, '验证码已发送至邮箱中，请查收')
          }
        })
      }
    }
  }
  // --定义手机注册模板
  var componentMobile = {
    template: `<div>
                 <Input v-model="strMobile" placeholder="手机号" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strPwd" type="password" placeholder="密码" style="width: 250px" class="input-d"></Input>
                 <Input v-model="strCheckCode"  placeholder="验证码" style="width: auto;margin-right: 3%;" class="input-d"></Input>
                 <Button class="input-d" @click="doSendMobileCode()">发送验证码</Button>
                 <Button type="info" style="width: 250px" class="input-d" @click="doRegister()">注册</Button>
               </div>`,
    data () {
      return {
        strMobile: '',
        strPwd: '',
        strCheckCode: ''
      }
    },
    methods: {
      doRegister () { // --手机号注册
        let resp = doRegisterMobile(this.strMobile, this.strPwd, 123456)
        resp.then(function (data) {
          if (data.code === 0) {
            // TODO --doSome
          }
        })
      },
      doSendMobileCode () { // --发送手机验证码
        let resp = doSendMobileCode(this.strMobile)
        resp.then(function (data) {
          if (data.code !== 0) {
            self.showMsg(2, data.msg)
          } else {
            self.showMsg(1, '发送短信成功')
          }
        })
      }
    }
  }

  export default {
    name: 'CCRegister',
    data () {
      return {
        componentName: 'componentMobile',
        registrMethodName1: '手机',
        registrMethodName2: '邮箱'
      }
    },
    components: {
      // 注册所有组件
      componentEmail,
      componentMobile,
      CCAlert
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        self = this
      },
      switchRegisterMethod () { // --切换注册方式
        if (this.componentName === 'componentEmail') {
          this.registrMethodName2 = '邮箱'
          this.registrMethodName1 = '手机'
          this.componentName = 'componentMobile'
        } else if (this.componentName === 'componentMobile') {
          this.registrMethodName2 = '手机'
          this.registrMethodName1 = '邮箱'
          this.componentName = 'componentEmail'
        } else {
          // --普通注册模式暂不开放
        }
      },
      showMsg (type, msg) {
        this.$refs.ccalert.showMsg(1, msg)
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
