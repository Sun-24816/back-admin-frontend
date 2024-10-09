<template>
  <div class="breadcrumb">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="item in pathArr" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { watchEffect, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["menuInfo"]);
const router = useRouter();

const pathArr = ref([]);

watchEffect(() => {
  const activePath = router.currentRoute.value.path.split("/main")[1];
  pathArr.value = [];

  props.menuInfo.map((item) => {
    if (!item.children.length) {
      if (item.path === activePath) {
        pathArr.value.push({
          label: item.label,
          path: "/main" + item.path,
        });
      }
    } else {
      const subItem = item.children.find((item) => item.path === activePath);
      if (subItem) {
        pathArr.value.push(
          {
            label: item.label,
            path: item.path,
          },
          {
            label: subItem.label,
            path: subItem.path,
          },
        );
      }
    }
  });
  console.log(pathArr.value);
});
</script>
<style scoped></style>
