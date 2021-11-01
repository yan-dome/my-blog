<template>
  <div class="test-empty">
      <Empty  text="无数据"/>
  </div>
</template>

<script>
import Empty from './'
export default {
  components:{
    Empty,
  },
}
</script>

<style scoped>
.test-empty{
  width:100%;
  height:500px;
  background-color: #123456;
  margin:0 auto;
}
</style>