<template>
  <el-container style="height: 100%">
    <el-aside :width="asideWidth + 'px'" class="aside"
      ><menuVue :menuInfo="menuInfo"></menuVue
    ></el-aside>
    <el-container>
      <el-header>
        <div class="top-nav">
          <el-icon
            size="30"
            style="margin-right: 20px"
            @click="handIsCollapseMenu"
          >
            <component :is="isCollapse ? 'Fold' : 'Expand'"></component>
          </el-icon>
          <breadCrumb :menuInfo="menuInfo"></breadCrumb>
          <exitLogin class="exitLogin"></exitLogin>
        </div>
      </el-header>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import menuVue from "@/base-ui/menu.vue";
import breadCrumb from "../base-ui/breadCrumb.vue";
import exitLogin from "../base-ui/exitLogin.vue";
import { ref } from "vue";
const isCollapse = ref(false);
const asideWidth = ref(200);
const menuInfo = ref([
  {
    label: "菜单1",
    key: "1",
    children: [
      {
        label: "菜单1-1",
        key: "1-1",
        path: "/path1-1",
      },
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
    path: "/path3",
  },
]);

const handIsCollapseMenu = () => {
  isCollapse.value = !isCollapse.value;
  asideWidth.value = asideWidth.value == 63 ? 200 : 63;
  console.log(asideWidth.value);
};
</script>
<style scoped>
.top-nav {
  display: flex;
  align-items: center;
}

.aside {
  transition: all 0.3s linear;
}

.exitLogin {
  position: absolute;
  right: 0;
}
</style>
