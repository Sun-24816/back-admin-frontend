import { createRouter, createWebHistory } from "vue-router";
import { ElMessage } from "element-plus";
import path11 from "../components/path1/path1-1.vue";
import path12 from "../components/path1/path1-2.vue";
import path13 from "../components/path1/path1-3.vue";

import path21 from "../components/path2/path2-1.vue";
import path22 from "../components/path2/path2-2.vue";
import path23 from "../components/path2/path2-3.vue";

import path3 from "../components/path3/path3.vue";

import admin from "../pages/admin.vue";
import main from "../pages/main.vue";

const mainChildrenRoutes = [
  {
    path: "path1-1",
    name: "path11",
    component: path11,
  },
  {
    path: "path1-2",
    name: "path12",
    component: path12,
  },
  {
    path: "path1-3",
    name: "path13",
    component: path13,
  },
  {
    path: "path2-1",
    name: "path21",
    component: path21,
  },
  {
    path: "path2-2",
    name: "path22",
    component: path22,
  },
  {
    path: "path2-3",
    name: "path23",
    component: path23,
  },
  {
    path: "path3",
    name: "path3",
    component: path3,
  },
];
const routes = [
  {
    path: "/",
    redirect: "/admin",
  },
  {
    path: "/admin",
    component: admin,
    name: "admin",
  },
  {
    path: "/main",
    name: "main",
    component: main,
    redirect: "/main/" + mainChildrenRoutes[0].path,
    children: mainChildrenRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isJumpToMain = to.path != "/" && to.path != "/admin";
  // 没权限 & 跳转到非登录页
  if (!Boolean(localStorage.getItem("token")) && isJumpToMain) {
    //只有登录过之后 才能跳转/main 没登录过的话 跳转到/admin
    next("/admin");
    ElMessage.error("请先登录!");
  } else {
    next();
  }
});

export default router;
