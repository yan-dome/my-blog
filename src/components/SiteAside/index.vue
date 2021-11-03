<template>
  <div class="siteAside-container">
    <nav class="touxiang">
      <Avatar
        url="https://img2.baidu.com/it/u=1429175118,2649084526&fm=26&fmt=auto"
        :size="100"
      />
    </nav>
    <h1>闫豪华的空间</h1>
    <Blog />

    <Contact />

    <footer class="footer">
      <p>准字号1122131313</p>
    </footer>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Blog from "./Blog";
import Contact from "./Contact";
// import Contact from '../Contact'
export default {
  components: {
    Avatar,
    Blog,
    Contact,
  },
};
</script>

<style lang='less' scoped>
@import "~@/styles/styles/var.less";
.siteAside-container {
  margin: 0;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  background-color: @dark;
  color: @lightWords;

  text-align: center;
  .touxiang {
    h1 {
      font-size: 30px;
      color: #fff;
    }
  }
  img {
    margin: 10px auto;
  }
  .footer {
    font-size: 14px;
    color: lighten(@dark, 10%);
  }
}
</style>