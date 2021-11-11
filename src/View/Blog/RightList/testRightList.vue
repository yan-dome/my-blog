<template>
  <div class="contianer">
    <RightList :list="list"  @seleck="hanldClick"/>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  data() {
    return {
      list: [
        {
          name: "a",
          isSelect: false,
          children: [],
        },
        {
          name: "b",
          isSelect: true,
          children: [
            {
              name: "b-1",
              isSelect: false,
              children: [],
            },
            {
              name: "b-2",
              isSelect: false,
              children: [],
            },
            {
              name: "b-3",
              isSelect: true,
              children: [
                {
                  name: "b-3-1",
                  isSelect: false,
                  children: [],
                },
                {
                  name: "b-3-2",
                  isSelect: false,
                  children: [],
                },
                {
                  name: "b-3-3",
                  isSelect: true,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "c",
          isSelect: false,
          children: [],
        },
      ],
    };
  },
  components: {
    RightList,
  },
  methods:{
      hanldClick(item){
          console.log(item);
      }
  }
};
</script>

<style lang='less' scoped>
.contianer {
  width: 400px;
  height: 500px;
  border: 1px solid;
  margin: 0 auto;
  padding: 0;
}
</style>