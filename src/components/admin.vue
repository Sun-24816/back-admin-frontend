<template>
  <div class="admin">
    <div class="main">
      <el-form :model="userInfo" label-width="auto" style="max-width: 600px">
        <el-form-item label="请输入账号:">
          <el-input v-model="userInfo.username" />
        </el-form-item>
        <el-form-item label="请输入密码:">
          <el-input v-model="userInfo.password" type="password" placeholder="Please input password" show-password />
        </el-form-item>
      </el-form>
      <div class="login">
        <el-button @click="handleLogin">点击登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { ElMessage } from "element-plus";

const router = useRouter();

const userInfo = ref({
  username: "cy",
  password: "123456",
});
let hasAuthority = ref(false);

const handleLogin = () => {
  //利用userName和passWord发送网络请求 校验是否有登录权限
  //如果校验通过 会返回一个token 后续所有请求需携带这个token 并且localStorage保存这个token
  //用户路由直接输入/main时 判断本地localStorage是否有token 如果没有 就让前置守卫跳转到/admin登录页面
  //见router/index.js
  if (userInfo.value.username === "cy" && userInfo.value.password === "123456") {
    hasAuthority.value = true;
    localStorage.setItem("token", "我是token");
    ElMessage({
      message: "登录成功",
      type: "success",
    });
  } else {
    ElMessage.error("登录失败");
  }
  if (hasAuthority.value) {
    router.push("/main");
  }
};
</script>
<style scoped>
.admin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
