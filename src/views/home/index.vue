<template>
  <div class="home-wrap">
    <van-tabs color="#f759ab">
      <van-tab
        v-for="(item, index) in TabList"
        :title="item.title"
        :key="index"
      >
        <HomePage />
      </van-tab>
    </van-tabs>
    <!-- <router-view></router-view> -->
    <!-- <div @click="changeroute">aa</div> -->
    <!-- <router-link to="/home/child">11</router-link> -->
  </div>
</template>
<script>
import { TabList } from "./const"
import HomePage from "./homePage"
export default {
  name: "Home",
  components: {
    HomePage,
  },
  data: function() {
    return {
      TabList,
    }
  },
  // methods: {
  //   getBannerList(){
  //     fetch('/api/banner').then(res=>{
  //       console.log(res);
  //     })
  //   }
  // },
  // mounted(){
  //   this.getBannerList()
  // }
}
</script>
