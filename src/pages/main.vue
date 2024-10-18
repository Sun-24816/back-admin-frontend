<template>
  <el-container style="height: 100%">
    <el-aside :width="asideWidth + 'px'"
      ><menuVue :menuInfo="menuInfo"></menuVue
    ></el-aside>
    <el-container>
      <el-header>头部</el-header>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import menuVue from "@/base-ui/menu.vue";
import { ref } from "vue";
const menuInfo = ref([
  {
    label: "菜单1",
    key: "1",
    children: [
      { label: "菜单1-1", key: "1-1", path: "/path1-1" },
      { label: "菜单1-2", key: "1-2", path: "/path1-2" },
      { label: "菜单1-3", key: "1-3", path: "/path1-3" },
    ],
  },
  {
    label: "菜单2",
    key: "2",
    children: [
      { label: "菜单2-1", key: "2-1", path: "/path2-1" },
      { label: "菜单2-2", key: "2-2", path: "/path2-2" },
      { label: "菜单2-3", key: "2-3", path: "/path2-3" },
    ],
  },
  {
    label: "菜单3",
    key: "3",
    children: [],
  },
]);
const asideWidth = ref(200);
</script>
<style scoped></style>
