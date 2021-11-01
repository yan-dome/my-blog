<template>
<!-- 根组件 字体图标 -->
      <i class="iconfont icon-container" :class="iconName"></i>
</template>

<script>
const IconMap = {
    //主页
  home:"iconzhuye",
  // QQ
  qq:'iconqq' ,
  // 成功 
  success:'iconzhengque1',
  //错误
  error:'iconcuowu1',
  //关闭
  close:'iconguanbi',
  //警告
  warn:'iconjinggao',
  // 信息
  info:'iconxinxi1',
  //博客
  blog:'iconxieboke',
  //代码
  code:'iconcode',
  //关于
  about:'iconabout',
  // 微信
  weixin:'iconweixin1',
  // 邮箱
  mail:'iconEmail',
  // github
  gihub:'icongithub1',
  // 上箭头
  arrowUp:'iconico_back',
  // 下箭头
  arrowDown:'iconico_open',
  // 空
  empty:"iconempty",
  // 留言
  chat:"iconliuyan",
};
export const types = Object.keys(IconMap);
export default {
    data() {
        return {
        }
    },
    props: {
        type: { // 图标属性的名字
            type: String, //类型
            required: true,
        }
    },
    computed:{
        //图标的样式
      iconName() {
          //返回对应的图标
          return IconMap[this.type] 
      }
    }
}
</script>

<style scoped>
@import url(//at.alicdn.com/t/font_2512912_e7u4n4e9vuf.css);
.iconfont{
    font-size:inherit;
    color:inherit;
}
</style>