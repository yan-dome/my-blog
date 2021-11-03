<template>
  <div class="container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from './'
export default {
  components:{
    SiteAside,
  }
}
</script>

<style lang='less' scoped>
.container {
  width: 250px;
  height: 600px ;
  margin: 0 auto;
  overflow-x:hidden ;
  overflow-y: auto ;
  
}
</style>