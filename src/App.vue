<template>
  <div id="app">
    <Tab />
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Tab from "components/Tab"
export default {
  name: "App",
  components: {
    Tab,
  },
}
</script>

<style lang="less">
@import "index.css";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background: #f5f5f5;
}
.app-container {
  //   padding-top: 100px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
