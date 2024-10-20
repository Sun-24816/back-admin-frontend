<template>
  <div class="menu2">
    <el-menu
      active-text-color="#ffc0cb"
      background-color="#545c64"
      style="height: 100%"
      text-color="#ffffff"
      :default-active="activeMenuIndex"
    >
      <template v-for="item in menuInfo" :index="item.key">
        <el-sub-menu v-if="item.children.length" :index="item.key">
          <template #title>
            <el-icon><Menu /></el-icon>
            {{ item.label }}
          </template>
          <el-menu-item
            v-for="subItem in item.children"
            :index="subItem.key"
            @click="handleRouteJump(subItem.path)"
          >
            {{ subItem.label }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          v-else
          :index="item.key"
          @click="handleRouteJump(item.path)"
          ><el-icon><Menu /></el-icon>{{ item.label }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
const activeMenuIndex = ref("1-2");
const router = useRouter();
const props = defineProps(["menuInfo"]);

watchEffect(() => {
  // console.log(router.currentRoute.value.path.split("/path")[1]);
  // console.log("watchEffect: " + menuInfo.length);
  activeMenuIndex.value = router.currentRoute.value.path.split("/path")[1];
});

const handleRouteJump = (path) => {
  router.push("/main" + path);
};
</script>
<style scoped>
.menu2 {
  width: 100%;
  height: 100%;
}
</style>
