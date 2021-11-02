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
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      items: [
        { title: "主页", type: "home", link: "/" },
        { title: "博客", type: "blog", link: "/blog",statWideh:true },
        { title: "关于我", type: "about", link: "/about" },
        { title: "项目&效果", type: "code", link: "/code" },
        { title: "留言板", type: "chat", link: "/meagges" },
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
@import "~@/styles/styles/var.less";

.blog-container {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0px;

  & li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 0px 5px;
    background-color: inherit;
  }
  & a {
    display: flex;
    text-decoration: none;
    color: inherit;
    margin: 0 10px;
    align-items: center;
    cursor: pointer;
    font-size: 22px;
  }
  .icon {
    font-size: 22px;
    margin: 0 10px;
  }
  .active {
    background-color:lighten(@dark,10%) ;
    color: #ccc;
  }
}
</style>