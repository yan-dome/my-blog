<template>
  <div class="container">
      <Contact  />
  </div>
</template>

<script>
import Contact from './'
export default {
    components:{
      Contact,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/styles/global.less";
.container{
 width:230px;
 height:300px;
 border:1px solid red;
 margin: 0 auto;
 padding-top:200px ;
}
</style>