<template>
<!-- 测试 单组件的文件 -->
  <div class="container">
      首页
      <Page  :current="current" :total="total" @PageChange="change"/>
  </div>
</template>

<script>
import Page from './'
export default {
  //组件所需要的数据
    data() {
      return {
        current:1,
        total:300,

      }
    },
    components:{
      Page,
    },
    methods:{
      change(page){
        console.log(page);
        this.current = page;
      }
    }
}
</script>

<style  lang="less" scoped>
.icon-container {
  font-size:40px;
  color:lightcoral;
}
</style>