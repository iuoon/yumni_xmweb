<template>
  <div>
    <div class="qr_d_0">
      <h3>热点问题</h3>
      <div class="qr_d_1" v-for="(question,index) in questions" :key="question.lId">
        <div>
          <span>{{addNum(index)}}.</span>
          <a :href="getQuestPath(question.lId)">{{question.strTitle}}</a>
        </div>
      </div>
    </div>
    <div class="qr_d_0">
      <h3>金牌答主</h3>
    </div>
  </div>
</template>

<script>
  import { getHotQuestions } from '../net/api'
  export default {
    name: 'QustionRank',
    data () {
      return {
        questions: []
      }
    },
    created () {
      this.loadList()
    },
    methods: {
      async loadList () {
        let data = await getHotQuestions()
        console.log(data)
        this.questions = data.questions
      },
      getQuestPath (lId) {
        return '/question/' + lId
      },
      addNum (num) {
        return num + 1
      }
    }
  }
</script>
<style>
  .qr_d_0{
    margin-left: 28px;
    margin-top: 20px;
    height: 200px;
  }
  .qr_d_1{
    margin-top: 5px;
  }
</style>
