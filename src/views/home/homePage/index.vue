<template>
  <div class="homepage-wrap">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      v-show="bannerList.length"
    >
      <van-swipe-item v-for="item in bannerList" :key="item.imageUrl">
        <div class="banner-container">
          <img alt="" :src="item.imageUrl" />
        </div>
      </van-swipe-item>
    </van-swipe>
    <RecommendCard :list="bannerList" />
    <MVRecommendCard />
  </div>
</template>
<script>
import RecommendCard from "./RecommendCard";
import MVRecommendCard from "./MVRecommendCard";
import { getBannerList } from "../../../api/homepage";
export default {
  name: "HomePage",
  components: {
    RecommendCard,
    MVRecommendCard,
  },
  data() {
    return {
      bannerList: [],
    };
  },
  methods: {
    async _getBannerList() {
      const res = await getBannerList();
      const { banners } = res;
      this.bannerList = banners;
    },
  },
  mounted() {
    this._getBannerList();
  },
};
</script>
<style lang="less">
.homepage-wrap {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }
  .banner-container {
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
