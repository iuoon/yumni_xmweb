<template>
  <div class="layout">
      <Layout>
        <Header class="tag_head_c"><CCHeader></CCHeader></Header>
        <Layout class="tag_layout_c1">
          <Content class="tag_content_c"><CContend></CContend></Content>
          <Sider hide-trigger class="tag_sider_c" :style="{width: '300px','max-width':'300px',flex:'0 0 300px'}">
            <QustionRank></QustionRank>
          </Sider>
        </Layout>
        <Footer class="tag_footer_c">Copyright © 2018 www.iuoon.com All Rights Reserved版权所有 武汉浔梦文化有限公司</Footer>
      </Layout>
    </div>
</template>
<script>
  import CCHeader from './CCHeader'
  import CContend from './CContend.vue'
  import QustionRank from './QustionRank.vue'
  export default {
    name: 'Index',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      CCHeader,
      CContend,
      QustionRank
    }
  }
</script>
<style>
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
 .tag_sider_c{
   background-color: #fff;
 }
 .tag_footer_c{
   text-align: center;
 }
</style>
