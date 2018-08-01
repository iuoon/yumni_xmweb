<template>
  <div class="layout">
    <Layout>
      <Header class="tag_head_c"><CCHeader></CCHeader></Header>
      <Layout class="tag_layout_c1">
        <Content class="tag_content_c">
          <div class="d_3">
            <div class="title_s"><span>个人信息</span></div>
          </div>
          <div class="d_4">
            <span style="display: inline-block">手机号：{{getUser.strMobile}}</span>
          </div>
          <div class="d_4">
            <span style="display: inline-block">邮&nbsp;&nbsp;&nbsp;  箱：{{getUser.strEmail}}</span>
          </div>
        </Content>
        <Sider hide-trigger class="tag_sider_c" :style="{width: '350px','max-width':'350px',flex:'0 0 350px'}">
          <div class="d_3">
            <Button shape="circle" to="#/Publish" target="_blank"><Icon type="md-create" />发布文章</Button>
          </div>
        </Sider>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import CCHeader from './CCHeader'
  import { getCookie } from '../net/CookieUtil'
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'CCUserInfo',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      CCHeader
    },
    computed: {
      ...mapGetters(['getUser']),  // 从vuex中获取当前用户信息
      ...mapState(['user'])        // 指定usermodule，若没有设置module则不需要设置这句
    },
    created () {
      this.init()
    },
    methods: {
      getQuestPath (lId) {
        return '/question/' + lId
      },
      init () {
        var strUserId = getCookie('strUserId').replace(/\s+/g, '')
        if (strUserId === '') {
          this.$router.push({path: '/login'}) // 未登录状态跳转登录页面
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
    width: 50%;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 18px;
  }
  .d_4{
    width: 45%;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 16px;
  }
  .tag_sider_c{
    background-color: #fff;
  }
</style>
