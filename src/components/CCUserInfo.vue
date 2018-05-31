<template>
  <div class="layout">
    <Layout>
      <Header class="tag_head_c"><CCHeader></CCHeader></Header>
      <Layout class="tag_layout_c1">
        <Content class="tag_content_c">
          <div class="d_3">
            <div class="title_s"><span>个人信息</span></div>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import CCHeader from './CCHeader'
  export default {
    name: 'CCUserInfo',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      CCHeader
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
  }
  .d_3{
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }
</style>
