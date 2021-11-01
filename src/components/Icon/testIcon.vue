<template>
  <div class="icon">
      <div class="item" v-for=" t in types" :key="t">
         <Icon  :type='t'/>
      <label> {{ t }} </label>  
      </div>
     
  </div> 
</template>

<script>
import Icon, { types } from './'
export default {
    data() {
        return {
            types
        };
    },
    components:{
        Icon,
    }
}
</script>

<style scoped>
/* 让整个盒子为弹性盒子   居中    换行  */
.icon{
    display: flex;
    justify-content: conter;
    align-items: center;
    margin:100px auto;
    width:500px;
    flex-wrap: wrap;
}
/* 文字居中 有点间距 */
.item{
    margin: 1em;
    text-align: center;
}
    /* 让每个I标签 都转换成块级元素 */
.icon-container{
    display: block;
}
</style>