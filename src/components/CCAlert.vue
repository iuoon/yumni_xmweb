<template>
  <div>
    <Modal v-model="model1" draggable scrollable title="提示" class-name="vertical-center-modal">
      <div>{{msg}}</div>
    </Modal>
    <Modal v-model="model2" draggable scrollable title="提示" class-name="vertical-center-modal">
      <div><p style="color: red">{{msg}}</p></div>
    </Modal>
  </div>
</template>
<script>
  export default {
    name: 'CCAlert',
    data () {
      return {
        model1: false,
        model2: false,
        msg: ''
      }
    },
    methods: {
      showMsg (type, msg) {
        if (type === 1) {
          this.model1 = true
        }
        if (type === 2) {
          this.model2 = true
        }
        this.msg = msg
      }
    }
  }
</script>
<style lang="less">

</style>
