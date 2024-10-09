import { createRouter, createWebHistory } from "vue-router";
import path11 from "../components/path1/path1-1.vue";
import path12 from "../components/path1/path1-2.vue";
import path13 from "../components/path1/path1-3.vue";

import path21 from "../components/path2/path2-1.vue";
import path22 from "../components/path2/path2-2.vue";
import path23 from "../components/path2/path2-3.vue";

import path3 from "../components/path3/path3.vue";

const routes = [
  {
    path: "/",
    redirect: "/path1-1",
  },
  {
    path: "/path1-1",
    name: "path11",
    component: path11,
  },
  {
    path: "/path1-2",
    name: "path12",
    component: path12,
  },
  {
    path: "/path1-3",
    name: "path13",
    component: path13,
  },
  {
    path: "/path2-1",
    name: "path21",
    component: path21,
  },
  {
    path: "/path2-2",
    name: "path22",
    component: path22,
  },
  {
    path: "/path2-3",
    name: "path23",
    component: path23,
  },
  {
    path: "/path3",
    name: "path3",
    component: path3,
  },
  // {
  //   path: "/",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
