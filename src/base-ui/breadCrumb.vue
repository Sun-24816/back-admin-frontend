<template>
  <div class="breadCrumb">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="item in pathArr" :to="item.path">
        {{ item.label }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>
<script setup>
import { watchEffect, ref } from "vue";
import { useRouter } from "vue-router";
const pathArr = ref([]);
const router = useRouter();
const props = defineProps(["menuInfo"]);
watchEffect(() => {
  const activePath = router.currentRoute.value.path.split("main")[1];
  pathArr.value = [];

  console.log(props.menuInfo);
  props.menuInfo.map((item) => {
    if (item.children.length === 0) {
      if (activePath === item.path) {
        pathArr.value.push({
          label: item.label,
          path: item.path,
        });
      }
    } else {
      console.log(activePath);
      for (let i = 0; i < item.children.length; i++) {
        if (item.children[i].path == activePath) {
          pathArr.value.push({
            label: item.label,
          });
          pathArr.value.push({
            label: item.children[i].label,
            path: "/main" + item.children[i].path,
          });
        }
      }
      console.log("ITEM.VALUE");
      console.log(item);
      console.log("jieshu1");
    }
  });
});
</script>
<style scoped></style>
