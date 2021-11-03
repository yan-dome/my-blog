<template>
  <div id="app">

 <Home />
  </div>
  
</template>

<script>

import Home from './components/Home.vue'
export default {
  name: 'App', //如果组件在注册的时候没有指定名字，则使用该属性
  components: { // 局部注册组件
       Home,
  }
}
</script>

<style  lang='less' scoped>
@import '~@/styles/styles/global.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
