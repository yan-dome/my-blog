<template>
  <ul class="blog-container">
    <li v-for="item in items" :key="item.title">
      <a
        :href="item.link"
        :class="{ active: isActive(item) }"
        
        
      >
        <div class="icon">
          <Icon :type="item.type" />
        </div>
        <span>{{ item.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "../Icon";
export default {
  data() {
    return {
      items: [
        { title: "主页", type: "home", link: "/" },
        { title: "微信", type: "weixin", link: "/weixin",statWideh:true },
        { title: "gihub", type: "gihub", link: "/gihub" },
        { title: "qq", type: "qq", link: "/qq" },
      ],
    };
  },
  components: {
    Icon,
  },
  methods: {
    isActive(item) {
        let path = item.link.toLowerCase();
        let pathname = location.pathname.toLowerCase();
        if(item.statWideh) {
            return pathname.startsWith(path);
        }else{
          return  path === pathname;
        }
      
    },
  },
};
</script>

<style lang='less' scoped>
.blog-container {
  list-style: none;
  margin: 0;
  padding: 20px;

  & li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    margin: 5px;
    padding: 0 5px;
    background-color: hotpink;
  }
  & a {
    display: flex;
    text-decoration: none;
    color: inherit;
    margin: 0 10px;
    align-items: center;
    cursor: pointer;
  }
  .icon {
    font-size: 20px;
    margin: 0 5px;
  }
  .active {
    color: red;
  }
}
</style>