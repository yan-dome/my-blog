<template>
  <!-- 此组件为递归组件   自我递归 组件 用name 属性  不用注册 -->
  <ul class="rightlist-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="hanldclick(item)">{{
        item.name
      }}</span>
      <!--  显示当前组件 事件 抛出 -->
      <RightList :list="item.children" @seleck="hanldclick(item)"  />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  data() {
    return {};
  },
  props: {
    // 数据类型 [{name:'xxx',isSelect:true,children:[{name:'yyy'isSelect:true,}]}]
    // name (必须)为显示的数据 isSelect(可选)为是否选中 children(可选) 是否有子项
    //
    list: {
      // 类型是一个数组
      type: Array,
      // 默认值是  数组  或者对象 要写成函数
      default: () => [],
      isSelect: true,
    },
  },
  methods: {
    hanldclick(item) {
      this.$emit("seleck", item);
    },
  },
};
</script>

<style lang='less' scoped>
.rightlist-container {
  list-style: none;
  padding: 0;
  margin-left: 1em;
  min-height: 10px;

  .rightlist-container {
    margin-left: 2em;
    .rightlist-container {
      min-height: 20px;
      margin-left: 3em;
    }
  }
  .active {
    color: hotpink;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>