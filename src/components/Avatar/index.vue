<template>
<!-- 头像展示 -->
    <img class="avatar-container"
      :src="url"
      alt="头像"
      :style="{width:size + 'px', height:size + 'px',
      }"
    />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //该属性必须是字符串
      required: true, //此属性必须传
    },
    size: {
      type: Number,
      default: 50,  // 默认值为50
    },
  },
  methods: {},
};
</script>
<style  scoped >
.avatar-container {
    display: block;
    border-radius:50%;
    object-fit:cover;
}
</style>
