<template>
  <el-container style="height: 100%; display: flex">
    <el-aside :width="asideWidth + 'px'" class="aside">
      <Menu :isCollapse="isCollapse"></Menu>
    </el-aside>
    <el-container style="flex: 1">
      <el-header>
        <div class="top-nav">
          <el-icon size="30" @click="handleCollapseMenu">
            <component :is="isCollapse ? 'Fold' : 'Expand'" />
          </el-icon>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import Menu from "./components/menu.vue";
import { ref } from "vue";

const isCollapse = ref(false);
const asideWidth = ref(200);

const handleCollapseMenu = () => {
  isCollapse.value = !isCollapse.value;
  asideWidth.value = isCollapse.value ? 63 : 200;
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
.aside {
  transition: all 0.5s linear;
}
</style>
