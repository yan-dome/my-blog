<template>
  <div class="carouse-container" ref="container" @mousemove="hanldMousemove">
    <div class="carpuse-img" ref="imgContainer" :style="{ imagesPage }" >
      <ImagesLoader
        :placeholder="carouse.midImg"
        :src="carouse.bigImg"
        :duration="500"
        @load="showtxt()"
      />
    </div>
    <div class="title" ref="title">
      {{ carouse.title }}
    </div>
    <div class="description" ref="description">
      {{ carouse.description }}
    </div>
  </div>
</template>

<script>
import ImagesLoader from "../../components/ImagesLoader";
export default {
  props: ["carouse"],
  components: {
    ImagesLoader,
  },
  data() {
    return {
      // 标题的宽度
      titleWidth: 0,
      // 描述的宽度
      descriptionWidth: 0,
      // 外层容器的尺寸
      containerSize: null,
      // 图片的尺寸
      imgContainerSize: null,
      // 鼠标位置
      mouseX: 0, // 鼠标横坐标
      mouseY: 0, // 鼠标纵坐标
    };
  },
  mounted() {
    // 获取到元素的宽度
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    // 注册一个事件 窗口变化 调用这个事件
    window.addEventListener("resize", this.setSize);
  },
  // 销毁 注册的事件
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    // 得到图片的位置
   imagesPage() {
     // 如果没有值 说明没有挂载 返回 undefined
     if(!this.containerSize || !this.imgContainerSize){
       return;
     }
     const extrWidth = this.imgContainerSize.width - this.containerSize.width //多出来的宽度
     const extrHeight = this.imgContainerSize.height - this.containerSize.height //多出来的高度
      const left =  -extrWidth / this.containerSize.width * this.mouseX;
      const top = -extrHeight / this.containerSize.height * this.mouseY;
      console.log(left,top);
    return {
      // transform:`translate(${left}px,${top}px)`,
      left:left + 'px',
      top: top + 'px',
     
     };
   },
   // 鼠标中间位置 坐标
   center() {
     return {
       x:this.containerSize.width / 2,
       y:this.containerSize.height / 2,
     }
   }
  },
  
  methods: {
    // 调用方法 显示文字
    showtxt() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制渲染一次
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = `2s`;
      this.$refs.title.style.width = this.titleWidth + "px";

      //描述
      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      // 强制渲染一次
      this.$refs.description.clientWidth;
      this.$refs.description.style.transition = `2s`;
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
    // 设置 各种尺寸
    setSize() {
      // 获取到外层容器的尺寸
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      // 获取到图片的尺寸
      this.imgContainerSize = {
        width: this.$refs.imgContainer.clientWidth,
        height: this.$refs.imgContainer.clientHeight,
      };

    },
    // 给鼠标位置重新赋值
    hanldMousemove(e) {
      // 获取容器的位置
      const rect = this.$refs.container.getBoundingClientRect();

      this.mouseX = e.clientX - rect.left ;
      this.mouseY = e.clientY - rect.top ;
      
    },
    hanldMouseleave() {
      this.mouseY = this.center.y;
      this.mouseX = this.center.x;
    }
  },
};
</script>

<style lang='less' scoped>
.carouse-container {
  position: relative;
  width: 100%;
  height: 100%;
  
  background-color: #000;
  .carpuse-img {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: 3s;
    left: 0;
    top: 0;
    
  }
  .title,
  .description {
    position: absolute;
    left: 30px;
    letter-spacing: 3px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .description {
    font-size: 1.2em;
    top: calc(50% + 40px);
  }
}
</style>