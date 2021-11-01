<template>
  <div class="image-container-loader">
    <img v-if="!complete" class="placeholder" :src="placeholder" alt=" 图片" title="加载" />
    <img
      class="src"
      @load="hanldload"
      :src="src"
     
      alt=" 图片1"
      title="原图"
      :style="{ opacity: loadedd, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      //原图是否加载完成
      loaded: false,
      //一切完成
      complete: false,
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 1500,
    },
  },
  computed: {
    //计算是否显示
    loadedd() {
      return this.loaded ? 1 : 0;
    },
  },
  methods: {
    hanldload() {
      // 原图加载文成更改属性
      this.loaded = true,

        setTimeout(() => {
          // 定时器开启经过一段时间 删除占位图
          
          this.complete = true,
          // 抛出事件通知父组件
          this.$emit("load");
        }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/styles/position.less";
.image-container-loader {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill(absolute);
    //防止拉伸
    object-fit: cover;
  }
  .placeholder {
    // 模糊
    filter: blur(2vw);
  }
}
</style>