<template>
  <ul class="contact-container">
    <!-- github -->
    <li>
      <a>
        <div class="icon">
          <Icon type="gihub" />
        </div>
        <span>yan_di</span>
      </a>

      
    </li>
    <!-- 微信 -->
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>shuaihao</span>
      </a>

      <div class="pop">
        <img
          src="https://img1.baidu.com/it/u=1135835839,1157164578&fm=26&fmt=auto"
          alt="二维码"
        />
      </div>
    </li>
    <!-- qq -->
    <li>
      <a href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=qq&menu=yes" target="_blank">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>1165213576</span>
      </a>

      
    </li>
    
    <!-- 邮箱 -->
    <li>
      <a href="https://mail.qq.com/" target="_blank">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>1165213576@qq.com</span>
      </a>

      
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang='less' scoped>
@import "~@/styles/styles/var.less";
.contact-container {
  
  list-style: none;
  width: 100%;
  color: @lightWords;
  box-sizing: border-box;
  
  padding: 5px;
  @hseight: 30px;
  & li {
    position: relative;
    height: @hseight;
    line-height: 30px;
    margin: 8px 0px;
  }
  & li:hover {
    color: lighten( @lightWords,20%) ;
    .pop {
      transform: scale(1);
    }
  }
  & a {
    color: inherit;
    text-decoration: none;
    display: flex;
    cursor: pointer;
    align-items: center;
  }
  .icon {
    font-size: 20px;
    width: 36px;
  }
  .pop {
    position: absolute;
    width: 180px;
    height: 180px;
    left: 0;
    bottom: @hseight + 5px;
    border: 1px solid #fff;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px;
    transform: scale(0);
    transform-origin: center bottom;
    transition: all 0.5s;

    img {
      width: 180px;
      height: 180px;
    }
  }
  .pop::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);

    width: 8px;
    height: 8px;
    background-color: #fff;
  }
}
</style>