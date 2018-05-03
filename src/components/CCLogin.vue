<template>
  <div class="background">
    <Header class="tag_head_c"><CCHeader></CCHeader></Header>
    <div class="login_c">
      <h2 class="head-u">用户登录</h2>
      <Input v-model="strUserName" placeholder="手机／邮箱" style="width: 250px" class="input-d"></Input>
      <Input v-model="strPwd" type="password" placeholder="密码" style="width: 250px" class="input-d"></Input>
      <Button type="info" style="width: 250px" class="input-d" @click="doLogin()">登录</Button>
    </div>
  </div>
</template>
<script>
  import CCHeader from './CCHeader'
  import bg from '@/assets/xbg01.png'
  import { doLogin } from '../net/HttpApi'

  export default {
    name: 'CCLogin',
    data () {
      return {
        bgImg: bg,
        strUserName: '',
        strPwd: ''
      }
    },
    components: {
      CCHeader
    },
    created () {
      this.setBankGround()
    },
    methods: {
      setBankGround () {

      },
      doLogin () {
        console.log('userName:' + this.strUserName + ' pwd:' + this.strPwd)
        let data = doLogin(this.strUserName, this.strPwd)
        if (data.code === 0) {

        } else {
          alert(data.msg)
        }
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
</style>
