<template>
  <div class="banner">
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="" alt="" srcset="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.banner {
  margin: 20px auto;
  width: $main-view-base;
  min-width: $main-view-base;
  max-width: $main-view-base;
  .el-carousel-item {
    background: #666;
  }
}
img {
  width: 100%;
  height: 100%;
  background: #eee;
}
</style>
