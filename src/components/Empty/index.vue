<template>
  <div class="empty-container">
    <!-- <div class="items">
        <Icon type="empty"/>
      <label> {{text}}</label>
    </div>   -->
        <Icon type="empty"/>
        <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon'
export default {
   
    components:{
        Icon,
    },
    props:{
        text:{
            type:String,
            required:false,
            default:'无数据',
        }
    }
}
</script>

<style lang="less" scoped>
/* .empty-container{
    display:flex;
    width:100%;
    height:100%;
    justify-content: center;
    align-items: center;
    
}
.items {
    text-align: center;
}
.icon-container{
    display: block;
} */
.empty-container{
    @import '~@/styles/styles/position.less';
    .self-center(@pos:absolute);
    font-size: 30px;
    color: #ddd;
    text-align: center;
}
.icon-container{
    font-size:70px;
}
</style>