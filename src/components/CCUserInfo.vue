<template>
  <div class="layout">
    <Layout>
      <Header class="tag_head_c"><CCHeader></CCHeader></Header>
      <Layout class="tag_layout_c1">
        <Content class="tag_content_c">
          <div class="d_3">
            <div class="title_s"><span>个人信息</span></div>
            <div class="d_4">
              <span style="display: inline-block">手机号：{{strMobile}}</span>
            </div>
            <div class="d_4">
              <span style="display: inline-block">邮箱：{{strEmail}}</span>
            </div>
            <div class="d_1">
              <a href="#/publish" class="a2">发布文章</a>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import CCHeader from './CCHeader'
  import { getUserById } from '../net/HttpApi'
  import { getCookie } from '../net/CookieUtil'

  export default {
    name: 'CCUserInfo',
    data () {
      return {
        msg: '',
        strUserName: '',
        strMobile: '',
        strEmail: ''
      }
    },
    components: {
      CCHeader
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
        var strUserId = getCookie('strUserId').replace(/\s+/g, '')
        console.log('strUserId==>', strUserId)
        if (strUserId !== '') {
          let resp = getUserById(encodeURI(strUserId))
          resp.then(function (data) {
            if (data.code === 0) {
              _self.strUserName = data.user.strUserName
              _self.strMobile = data.user.strMobile
              _self.strEmail = data.user.strEmail
            } else {
              alert(data.msg)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .tag_head_c{
    background-color: #fff;
    border-bottom: 1px solid #DDD;
  }
  .tag_layout_c1{
    height: 1080px;
  }
  .tag_content_c{
    background-color: #fff;
  }
  .title_s{
    width: 100px;
    border-bottom: 1px solid #3ee2ea;
    text-align: center;
    color: coral;
  }
  .d_3{
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }
  .d_4{
    width: 100px;
    color: #aad44c;
    margin-top: 15px;
  }
</style>
