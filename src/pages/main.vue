<template>
  <el-container style="height: 100%; display: flex">
    <el-aside :width="asideWidth + 'px'" class="aside">
      <Menu :isCollapse="isCollapse" :menuInfo="menuInfo"></Menu>
    </el-aside>
    <el-container style="flex: 1">
      <el-header>
        <div class="top-nav">
          <el-icon size="30" @click="handleCollapseMenu" class="icon">
            <component :is="isCollapse ? 'Fold' : 'Expand'" />
          </el-icon>
          <Breadcrumb :menuInfo="menuInfo"></Breadcrumb>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import Menu from "../base-ui/menu.vue";
import Breadcrumb from "../base-ui/breadcrumb.vue";
import { ref } from "vue";

const isCollapse = ref(false);
const asideWidth = ref(200);

//后端拿菜单栏的数据
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
    path: "/path3",
    children: [],
  },
]);

const handleCollapseMenu = () => {
  isCollapse.value = !isCollapse.value;
  asideWidth.value = isCollapse.value ? 63 : 200;
};
</script>

<style>
.aside {
  transition: all 0.5s linear;
}
.top-nav {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 20px;
}
</style>
