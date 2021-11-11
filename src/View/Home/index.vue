<template>
  <div
    class="home-container"
    ref="container"
    @wheel="hanldScroll"
    v-loading="isLoading"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="hanldTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carouse="item" />
      </li>
    </ul>
    <div class="icon arrowUp" v-show="index >= 1" @click="swiTop(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon arrowDown"
      v-show="index < data.length - 1"
      @click="swiTop(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="swiTop(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Icon from "../../components/Icon";
import Carouselitem from "./Carouselitem.vue";
import { Getbanner } from "../../api/banner";
import fatchData from "../../mixins/fatchData";
export default {
  mixins: [fatchData([])],
  data() {
    return {
      // isLoading: true, // 自定义组件所需要的参数
      // banners: [], // 需要生成几条数据

      index: 0, // 第几张图
      containerHeight: 0, // 整个容器的高度
      switching: false, //是否正在切换
    };
  },
  components: {
    Icon,
    Carouselitem,
  },
  // async created() {
  //   // 请求数据 渲染
  //   // this.banners = await Getbanner();
  //   // 自定义指令 loading 参数
  //   // this.isLoading = false;
  // },
  mounted() {
    // 获取元素高度
    this.containerHeight = this.$refs.container.clientHeight;
  },
  computed: {
    // 显示第几张
    marginTop() {
      return  -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // 提供给混入的方法
    async fatchData() {
      return await Getbanner();
    },
    // 切换轮播图  点击
    swiTop(i) {
      this.index = i;
    },
    // 鼠标滚轮事件
    hanldScroll(e) {
      if (this.switching) {
        return;
      }
      // 下一页  最大值小于数据数目减一
      if (e.deltaY > 10 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
      // 上一页  最小值为1
      if (e.deltaY < -10 && this.index > 0) {
        this.switching = true;
        this.index--;
      }
    },
    //过渡完成 事件
    hanldTransitionend() {
      this.switching = false;
    },
  },
};
</script>

<style lang='less' scoped>
@import "~@/styles/styles/position.less";
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  // 轮播图样式
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      height: 100%;
      width: 100%;
    }
  }
  // 箭头样式
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    font-size: 50px;
    color: #ccc;
    cursor: pointer;
    @distance: 25px;
    // 上箭头 动画
    @keyframes ups {
      0% {
        transform: translate(-50%, 10px);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 10px);
      }
    }
    // 下箭头动画
    @keyframes downs {
      0% {
        transform: translate(-50%, -10px);
      }
      50% {
        transform: translate(-50%, 10px);
      }
      100% {
        transform: translate(-50%, -10px);
      }
    }
    //上箭头
    &.arrowUp {
      top: @distance;
      animation: ups 2s infinite;
    }
    // 下箭头
    &.arrowDown {
      top: auto;
      bottom: @distance;
      animation: downs 2s infinite;
    }
  }
  // 右侧小圆点 样式
  .indicator {
    .self-center(absolute);
    transform: translateY(-50%);
    left: auto;
    right: 50px;
    li {
      background-color: inherit;
      border: 1px solid;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-bottom: 10px;
      box-sizing: border-box;
      cursor: pointer;
      // 选中状态
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>