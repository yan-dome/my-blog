<template>
  <div class="pager-container">
    <a  @click="hanldClick(1)" :class="{disabled:current===PageNumbersmin}">首页</a>
    <a  @click="hanldClick(current -1)" :class="{disabled:current===1}">上一页</a>
    <a v-for="(n, i ) in numbers" :key="i" 
    :class="{active:n===current}"
    @click="hanldClick(n)" >{{ n }}</a>
    <a @click="hanldClick(current+1)" :class="{disabled:current===PageNumbers}">下一页</a>
    <a @click="hanldClick(PageNumbers)" :class="{disabled:current===PageNumbers} ">尾页</a>
  </div>
</template>

<script>
export default {
  props:{
    //当前页码
    current:{
        type:Number,
        requierd: false,
        default: 1,
    },
    // 总数据量
    total:{
        type:Number,
        requierd: false,
        default: 10,
    },
    //页容量
    limit:{
        type:Number,
        requierd: false,
        default: 10,
    },
    //可见页容量 
    visibleNumber:{
        type:Number,
        requierd: false,
        default: 10,
    },
  },
  computed:{
    //总页码
    PageNumbers(){
      return  Math.ceil(this.total / this.limit);
    },
    //最小页码
    PageNumbersmin(){
     let min =  this.current - Math.floor(this.visibleNumber / 2);
     if(min < 1 ) {
       min = 1;
     }
     return min;
    },
    //最大页码
    PageNumbersMax() {
      let Max = this.PageNumbersmin + this.visibleNumber-1;
      if(Max >= this.PageNumbers)
      Max = this.PageNumbers;
    return Max;
    },
    //
    numbers() {
      let numbers = [];
      for(let i = this.PageNumbersmin; i<= this.PageNumbersMax;i++)
      numbers.push(i);
      return numbers;
    }
  },
  methods:{
    hanldClick(page){
      if(page < 1){
        page = 1;
      }
      if(page > this.PageNumbers){
        page = this.PageNumbers
      }
      if(page == this.current) {
        return;
      }
      this.$emit('PageChange',page)

    }
  }
}
</script>

<style  lang="less" scoped>
@import '~@/styles/styles/var.less';
.pager-container {
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  a {
    cursor: pointer;
    margin:0 8px;
    color:@primary;
    &.disabled {
      color:@lightWords;
      //鼠标样式 
      cursor: not-allowed;
    }
    &.active {
      color:@dark;
      font-weight: 700;
      cursor: text;
    }
  }
}
</style>