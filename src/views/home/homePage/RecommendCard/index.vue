<template>
  <div class="songs-card-wrap">
    <div class="title">
      <span>为你推荐</span>
      <span
        >查看更多
        <span class="iconfont">&#xe715;</span>
      </span>
    </div>
    <div class="container">
      <SongCard v-for="item in list" :key="item.id" :song="item" />
    </div>
  </div>
</template>
<script>
import SongCard from "../../../../components/SongCard"
export default {
  name: "RecommendCard",
  props: {
    list: Array,
  },
  components: { SongCard },
  methods: {},
}
</script>
<style lang="less">
.songs-card-wrap {
  background: #fff;
  padding: 10px;
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    span:first-of-type {
      font-size: 20px;
      color: #646566;
    }
    span:last-of-type {
      font-size: 14px;
      color: #ff85c0;
      .iconfont {
        font-size: 12px;
      }
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    line-height: 12px;
    .img-container {
      width: 32%;
      margin-bottom: 12px;
    }
    img {
      width: 100%;
      display: flex;
      margin-bottom: 8px;
    }
    .img-title {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
    .img-desc {
      font-size: 12px;
      color: rgba(49, 9, 9, 0.6);
    }
  }
}
</style>
