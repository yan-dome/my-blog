<template>
  <div class="image-container">
      <ImagesLoader  
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F82e822d591371e92604cda2ab3da648440915d10.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637398084&t=5b634941068f179f25d46d1296d8f078"
      placeholder="https://img2.baidu.com/it/u=114342751,3594679667&fm=26&fmt=auto"
      @load="handload"
      :duration="2000"
    />
  </div>
</template>

<script>
import ImagesLoader from './'
export default {  

    components:{
      ImagesLoader
    },
    methods:{
      handload() {
        console.log('加载完成了,运行此函数');

      }
    }

}
</script>

<style scoped>
.image-container {
  width:400px;
  height:400px;
  margin:0 auto;
  border: 1px solid red;
}
</style>