<template>
  <div class="admin">
    <div class="main">
      <el-form :model="formData" label-width="auto" :rules="rules">
        <el-form-item label="用户名 :" prop="userName">
          <el-input v-model="formData.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码 :" prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="login">
        <el-button @click="handleLogin">点击登录</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
let hasAuthority = ref(false);
const rules = {
  userName: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { min: 3, message: "用户名长度至少为3个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
      message: "密码必须包含数字、大小写字母和特殊符号，且至少8位",
      trigger: "blur",
    },
  ],
};

const formData = ref({
  userName: "LXL",
  password: "Lxl666...",
});

const handleLogin = () => {
  if (
    formData.value.userName === "LXL" &&
    formData.value.password === "Lxl666..."
  ) {
    hasAuthority.value = "true";
    localStorage.setItem("token", "登录成功");
    ElMessage({
      message: "登录成功",
      type: "success",
    });
  } else {
    ElMessage({
      message: "登录失败",
      type: "error",
    });
  }
  if (hasAuthority.value) {
    console.log("登录成功");
    router.push("/main");
  }
};
</script>
<style scoped>
.admin {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
