<template>
  <div class="tabbar">
    <div class="tabbar-item">首页</div>
    <div class="tabbar-item">视频</div>
    <div class="tabbar-item">我的</div>
  </div>
</template>
<style lang="less" scoped>
.tabbar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  background: red;
  .tabbar-item {
    width: 30%;
    height: 100%;
    padding: 10px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
