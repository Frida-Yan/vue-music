<template>
  <div class="homepage-wrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <RecommendCard :list="list" />
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
      list: [
        {
          pic:
            "http://d.musicapp.migu.cn/prod/playlist-service/playListimg/0290d748-fa8a-4218-9251-d1403dbc44c1.jpg",
          title: "[新歌周报]一周新歌推荐（2.11-2.28）",
          desc: "[新歌周报]一周新歌推荐（2.11-2.28）",
          id: 1,
        },
        {
          pic:
            "http://d.musicapp.migu.cn/prod/playlist-service/playListimg/0e2b788f-fd09-4380-bdc4-2df861228207.jpg",
          title: "华语女声|经典时尚依旧",
          desc: "华语女声|经典时尚依旧",
          id: 2,
        },
        {
          pic:
            "http://d.musicapp.migu.cn/prod/playlist-service/playListimg/0290d748-fa8a-4218-9251-d1403dbc44c1.jpg",
          title: "请让胡夏用这首歌打动你",

          id: 3,
        },
        {
          pic:
            "http://d.musicapp.migu.cn/prod/playlist-service/playListimg/2a2eb7a4-58ea-49bc-9b3d-21371ba2d7b2.jpg",
          title: "[新歌周报]一周新歌推荐（2.11-2.28）",
          desc: "[新歌周报]一周新歌推荐（2.11-2.28）",
          id: 4,
        },
        {
          pic:
            "http://d.musicapp.migu.cn/prod/playlist-service/playListimg/0290d748-fa8a-4218-9251-d1403dbc44c1.jpg",
          title: "请让胡夏用这首歌打动你",
          id: 5,
        },
        {
          pic:
            "http://d.musicapp.migu.cn/prod/playlist-service/playListimg/0290d748-fa8a-4218-9251-d1403dbc44c1.jpg",
          title: "[新歌周报]一周新歌推荐（2.11-2.28）",
          desc: "[新歌周报]一周新歌推荐（2.11-2.28）",
          id: 6,
        },
      ],
    };
  },
  methods: {
    _getBannerList() {
      getBannerList().then((res) => {
        console.log(res);
      });
      // console.log(getBannerList());
      // console.log(res);
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
    line-height: 170px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
