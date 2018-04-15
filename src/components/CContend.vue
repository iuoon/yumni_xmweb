<template>
  <div class="contend">
    <div style="margin-top: 20px;border-bottom: 1px solid #DDD;">
      <a href="#" style="font-size: 16px;color: #787b7b;">提问答疑</a>
      <a href="#" style="float: right;margin-right: 20px;margin-top: 5px;">更多</a>
    </div>
    <div>
      <div v-for="question in questions" :key="question.lId">
        <!-- 内容 -->
        <header><a :href="getQuestPath(question.lId)"><h2>{{question.strTitle}}</h2></a></header>
        <span>{{question.strSummary}}</span>
      </div>
    </div>
    <div style="margin-top: 20px;border-bottom: 1px solid #DDD;">
      <a href="#" style="font-size: 16px;color: #787b7b;">解你所需</a>
      <a href="#" style="float: right;margin-right: 20px;margin-top: 5px;">更多</a>
    </div>
    <div>
      <div v-for="question in questions" :key="question.lId">
        <!-- 内容 -->
        <header><a :href="getQuestPath(question.lId)"><h2>{{question.strTitle}}</h2></a></header>
        <span>{{question.strSummary}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CContendBox from './CContendBox.vue'
  import { getQuestionList } from '../net/api'

  export default {
    name: 'CContend',
    data () {
      return {
        questions: []
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
        let data = await getQuestionList(0, 20)
        console.log(data)
        this.questions = data.questions
      },
      getQuestPath (lId) {
        return '/question/' + lId
      }
    }
  }
</script>
<style>
  .contend{
    margin-left: 200px;
  }
</style>
