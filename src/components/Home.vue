<template>
  <div class="container">
      首页
      <Avatar url='https://img0.baidu.com/it/u=3289845292,2145186468&fm=26&fmt=auto' :size="70" />
      <Icon type='mail'/>
      <Page  :current="current" :total="total" @PageChange="change"/>
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue'
import Icon from '../components/Icon.vue'
import Page from '../components/Pager.vue'
export default {
  //组件所需要的数据
    data() {
      return {
        current:1,
        total:300,

      }
    },
    components:{
      Avatar,
      Icon,
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