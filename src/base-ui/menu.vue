<template>
  <div class="menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu"
      :default-active="activeMenuIndex"
      text-color="#fff"
      :collapse="isCollapse"
    >
      <template v-for="item in menuInfo" :key="item.key">
        <el-sub-menu v-if="item.children.length" :index="item.key">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.key"
            :index="subItem.key"
            @click="handleRouteJump(subItem.path)"
          >
            {{ subItem.label }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.key" @click="handleRouteJump(item.path)">
          <el-icon><location /></el-icon>
          <span>{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps(["isCollapse", "menuInfo"]);
const router = useRouter();
const store = useStore();

const activeMenuIndex = ref("1-1");

watchEffect(() => {
  activeMenuIndex.value = router.currentRoute.value.path.split("/path")[1];
});

const handleRouteJump = (path) => {
  router.push("/main" + path);
};
</script>
<style scoped>
.menu {
  width: 100%;
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
