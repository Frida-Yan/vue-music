import Vue from "vue"
import Home from "../views/home"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    // 动态路径参数 以冒号开头
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        component: Home,
    },
]

const router = new VueRouter({
    routes,
})
export default router