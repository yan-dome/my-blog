<template>
  <div class="Lycontainer">
    <Layout>
      
        <template v-slot:left>
          <div class="left"> 左边的</div>
        </template>
     
     
        <template v-slot:main>
           <div class="main">中间边边fsdfsdfsdf的asdfsdfsdfsadfsdf </div>
        </template>
     
      
        <template v-slot:right>
         <div class="right">右边边的</div>
        </template>
      
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang='less' scoped >
.Lycontainer {
  width: 80%;
  height: 600px;
  margin: 0 auto;
  
  .left {
      
    width: 150px;
    height: 100%;
    background-color: pink;
  }
  .main {
    width: 100%;
    background-color: hotpink;
    height: 100%;
  white-space: nowrap;
  }
  .right {
    width: 200px;
    background-color: deeppink;
    height: 100%;

  }
}
</style>