<template>
  <div class="container">
      <Blog />
  </div>
</template>

<script>
import Blog from './'
export default {
  components:{
    Blog,
  }
}
</script>

<style lang='less' scoped>
.container {
  width:300px;
  height: 400px;
  border:1px solid red;
  margin:0 auto;
  margin-top: 50px;
  background-color: #ccc;
}
</style>