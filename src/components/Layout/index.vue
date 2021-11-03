<template>
  <div class="Lyaout-container">
    <header class="left">
      <slot name="left"> </slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
    <footer class="footer">
      <slot name="right"> </slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.Lyaout-container {
  display: flex;
  width: 100%;
  height: 100%;
 .left .footer {
     flex: 0 0 auto ;
     overflow: hidden;
 }
 .main {
     flex:  1 1 auto;
     overflow: hidden;

 }
  
}
</style>