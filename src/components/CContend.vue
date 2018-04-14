<template>
  <div class="contend">
    <div style="margin-top: 20px;border-bottom: 1px solid #DDD;">
      <h2>阅读推荐</h2>
    </div>
    <div>
      <div v-for="article in articlelist" :key="article.lId">
        <!-- 内容 -->
        <header><a href="/article/1233"><h2>{{article.strTitle}}</h2></a></header>
        <span>{{article.strSummary}}</span>
      </div>
    </div>
    <div style="margin-top: 20px;border-bottom: 1px solid #DDD;">
      <h2>解你所需</h2>
    </div>
    <div>
      <div v-for="article in articlelist" :key="article.lId">
        <!-- 内容 -->
        <header><a href="/article/1233"><h2>{{article.strTitle}}</h2></a></header>
        <span>{{article.strSummary}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CContendBox from './CContendBox.vue'
  import { getArticleList } from '../net/api'

  export default {
    name: 'CContend',
    data () {
      return {
        articlelist: []
      }
    },
    components: {
      CContendBox
    },
    created () {
      this.loadList()
    },
    methods: {
      async loadList () {
        let data = await getArticleList(0, 20)
        console.log(data)
        this.articlelist = data.articles
      }
    }
  }
</script>
<style>
  .contend{
    margin-left: 200px;
  }
</style>
