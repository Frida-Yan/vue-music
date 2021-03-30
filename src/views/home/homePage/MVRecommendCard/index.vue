<template>
   <div class="MV-card-wrap">
      <div class="title-wrap">
        <span class="title">MV精选</span>
        <span class="btn">
          <span class="iconfont">&#xe619;</span> 获取新内容
        </span>
      </div>
    </div>
</template>
<style lang="less" scoped>
@import "../../../../assets/css/subject.less";

.MV-card-wrap {
  background: #fff;
  padding: 10px;
  font-size: 12px;
  .title-wrap {
    display: flex;
    justify-content: space-between;
    .title {
      color: @text-color;
    }
    .btn {
      color: @low-tip-text-color;
    }
  }
}

</style>