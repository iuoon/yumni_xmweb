<template>
  <div>
    <div class="d_logo">
      <a class="a_head_title" href="/">奇点</a>
    </div>
    <div class="d_1">
      <a href="#/register" class="a2">注册</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CCHeaderLogin',
    data () {
      return {
        msg: ''
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
      }
    }
  }
</script>

<style>
  .d_logo{
    float:left;
  }
  .d_1{
    float:right;
  }
  .a_head_title{
    font-size: large;
    color: #bcfe65;
  }
</style>
