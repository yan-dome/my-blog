<template>
  <div class="app-container">
    <Layout>
      <template #left>
       <div> <SiteAside /></div>
      </template>
    <template #main>
      
      <RouterView />
        
      
    </template>
    <template #right>
      
    </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from './components/SiteAside'
import Layout from "./components/Layout";
export default {
  components:{
    Layout,
    SiteAside,
  }
}
</script>

<style lang='less' scoped>
@import "~@/styles/styles/global.less";
.app-container {
  width: 100%;
  height: 100%;
}
</style>