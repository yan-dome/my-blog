<template>
  <div class="container">
    <Layout>
      <template #left><SiteAside /> </template>
      <template #main
        ><ImagesLoader
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0531%2F40fae16cf686999482d8ab01af629453.jpg&refer=http%3A%2F%2Ffile06.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638535948&t=045204acf12cbeec8940ce365c009ce7"
          placeholder="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1112%2F11291Q41F8%2F1Q129141F8-2.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638535948&t=f8d6f84c57b37374df82845a08ab88bc"
          :duration="5000"
        />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./Layout";
import SiteAside from "./SiteAside";
import ImagesLoader from "./ImagesLoader";
export default {
  components: {
    Layout,
    SiteAside,
    ImagesLoader,
  },
};
</script>

<style  lang="less" scoped>
@import "~@/styles/styles/global.less";
.container {
  width: 100%;
  height: 100%;
}
</style>