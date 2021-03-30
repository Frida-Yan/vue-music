<template>
  <div class="tab">
    <div class="setting">设置</div>
    <div class="title">ONE MUSIC</div>
    <div class="search">搜索</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.tab {
  display: flex;
  width: 100vw;
  height: 50px;
  background: #c41d7f;
  align-items: center;
  color: #fff;
  div {
    height: 100%;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
  }
  .setting {
    width: 20%;
  }
  .title {
    width: 60%;
  }
  .search {
    width: 20%;
  }
}
</style>
