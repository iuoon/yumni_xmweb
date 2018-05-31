<template>
  <div class="background">
    <Header class="tag_head_c"><CCHeaderLogin></CCHeaderLogin></Header>
    <div class="login_c">
      <h2 class="head-u">用户登录</h2>
      <Input v-model="strUserName" placeholder="手机／邮箱" style="width: 250px" class="input-d"></Input>
      <Input v-model="strPwd" type="password" placeholder="密码" style="width: 250px" class="input-d"></Input>
      <Button type="info" style="width: 250px" class="input-d" @click="doLogin()">登录</Button>
      <br>
      <div class="login_c_1">
        <Checkbox v-model="nIsRememberLogin" class="check_loginState">保持登录</Checkbox>
        <a href="javascript:void(0)" @click="forgetPwd()" class="c01">忘记密码</a>
      </div>
    </div>
  </div>
</template>
<script>
  import CCHeaderLogin from './CCHeaderLogin'
  import bg from '@/assets/xbg01.png'
  import { doLogin } from '../net/HttpApi'

  export default {
    name: 'CCLogin',
    data () {
      return {
        bgImg: bg,
        strUserName: '',
        strPwd: '',
        nIsRememberLogin: false
      }
    },
    components: {
      CCHeaderLogin
    },
    created () {
      this.setBankGround()
    },
    methods: {
      setBankGround () {

      },
      doLogin () {
        var _self = this
        console.log('userName:' + this.strUserName + ' pwd:' + this.strPwd)
        var nIsRemember = 0
        if (this.nIsRememberLogin) {
          nIsRemember = 1
        }
        let resp = doLogin(this.strUserName, this.strPwd, nIsRemember)
        resp.then(function (data) {
          if (data.code === 0) {
            _self.$router.go(-1)
          } else {
            alert(data.msg)
          }
        })
      },
      forgetPwd () {
        this.$router.push('/login')
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
  .tag_head_c{
    background-color: #fff;
    border-bottom: 1px solid #DDD;
  }
  .login_c_1{

  }
  .check_loginState{
    color: #82dede;
    margin-right: 120px;
    padding-top: 10px;
  }
  .c01{
    color: #82dede;
  }
</style>
