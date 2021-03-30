import Vue from "vue"
import App from "./App.vue"
import router from "./route"
import axios from "axios"
import less from "less"
import { NavBar, Tab, Tabs, Swipe, SwipeItem } from "vant"

// rem h5 适配
import "amfe-flexible"

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(less)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app")
