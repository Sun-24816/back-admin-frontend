<template>
  <div class="exitLogin">
    <el-icon size="30" @click="exitLogin"><Avatar /> </el-icon>
    {{ userName }}
  </div>
</template>
<script setup>
import { computed, watchEffect } from "vue"; // 导入 computed
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex"; // 引入 useStore 函数
import { ElMessage } from "element-plus";
const store = useStore();
const userName = ref();
const router = useRouter();
watchEffect(() => {
  userName.value = store.state.userName;
});
const exitLogin = () => {
  localStorage.clear();
  ElMessage({
    message: "退出登录",
    type: "success",
  });
  router.push("/");
};
</script>
<style scoped></style>
