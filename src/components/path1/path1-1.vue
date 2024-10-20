<template>
  <div class="dashBoard">
    <el-form>
      <el-form>
        <el-row :gutter="20">
          <el-col v-for="item in columns" :span="6">
            <el-form-item :label="item.label + ':'" label-width="100px">
              <el-input v-model="selectForms[item.formItem]"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-form>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
const columns = [
  {
    label: "用户id",
    formItem: "userId",
  },
  {
    label: "用户名",
    formItem: "name",
  },
  {
    label: "居住地址",
    formItem: "address",
  },
  {
    label: "电话号码",
    formItem: "telephone",
  },
  {
    label: "创建时间",
    formItem: "createTime",
  },
  {
    label: "更新时间",
    formItem: "updateTime",
  },
];

const selectForms = ref({
  userId: "",
  name: "",
  address: "",
  telephone: "",
  createTime: "",
  updateTime: "",
});

watchEffect(() => {
  console.log("path1-1 watchEffect userId");
  console.log(selectForms.value);
  console.log(selectForms["userId"]);
  // console.log(selectForms[userId]);
});
</script>
<style scoped>
.dashBoard {
  height: 100%;
}
</style>
