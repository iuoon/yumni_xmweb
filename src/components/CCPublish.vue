<template>
  <div>
    <div>
      <Header class="tag_head_c"><CCHeader></CCHeader></Header>
      <div  class="context_edit_c">
        <div>
          <span style="color:#7ed8e2;">当前位置：<a href="javascript:void(0)" @click="goUserCenter">个人中心</a>/发布文章</span>
        </div>
        <div style="margin-top: 20px;">
          <Input v-model="article.title" placeholder="输入文章标题"/>
        </div>
        <div style="margin-top: 20px;">
          <Input v-model="article.subTitle" type="textarea" :rows="2" placeholder="输入简介" />
        </div>
        <div style="margin-top: 20px;">
          <span style="color:#ccc;">请在下面输入框编辑文章内容</span>
        </div>
        <div ref="contextEditor" style="min-height: 450px;"></div>
        <div style="margin-top: 20px;">
          <Button>保存</Button>
          <Button type="info">发布</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  import CCHeader from './CCHeader'

  export default {
    name: 'editor',
    data () {
      return {
        article: {
          title: '',
          subTitle: '',
          context: ''
        }
      }
    },
    components: {
      CCHeader
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      },
      goUserCenter: function () {
        this.$router.push({path: '/userInfo'})
      }
    },
    mounted () {
      var editor = new E(this.$refs.contextEditor)
      editor.customConfig.onchange = (html) => {
        this.article.context = html
      }
      editor.create()
    }
  }
</script>
<style type="text/css">
  .tag_head_c{
    background-color: #fff;
    border-bottom: 1px solid #DDD;
  }
  .context_edit_c{
    margin-top: 40px;
    text-align:left;
    left: 15%;
    right: 15%;
    position: absolute
  }
  .w-e-text-container{
    height: 450px !important;
  }
</style>
