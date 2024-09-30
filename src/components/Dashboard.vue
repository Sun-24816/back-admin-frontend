<template>
  <div class="dashboard">
    <el-form>
      <el-row :gutter="20">
        <el-col v-for="item in columns" :key="item.title" :span="6">
          <el-form-item :label="item.title + ':'" label-width="100px">
            <el-input v-model="selectForms[item.formItem]" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" show-overflow-tooltip />
        <el-table-column label="序号" width="120" show-overflow-tooltip>
          <template #default="scope">{{ scope.row.userId }}</template>
        </el-table-column>
        <el-table-column property="name" label="用户名" width="120" show-overflow-tooltip />
        <el-table-column property="address" label="居住地址" show-overflow-tooltip />
        <el-table-column property="telephone" label="手机号码" show-overflow-tooltip />
        <el-table-column property="createTime" label="创建时间" show-overflow-tooltip />
        <el-table-column property="updateTime" label="更新时间" show-overflow-tooltip />
        <el-table-column label="操作" show-overflow-tooltip>
          <el-icon><EditPen /></el-icon> <span class="edit">编辑</span>
          <el-icon><Delete /></el-icon>
          <span class="delete">删除</span></el-table-column
        >
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const selectForms = ref({
  userId: undefined,
  name: "",
  address: "",
  telephone: "",
  createTime: "",
  updateTime: "",
});

const columns = [
  { title: "序号", formItem: "userId" },
  { title: "用户名", formItem: "name" },
  { title: "居住地址", formItem: "address" },
  { title: "手机号码", formItem: "telephone" },
  { title: "创建时间", formItem: "createTime" },
  { title: "更新时间", formItem: "updateTime" },
];

const tableData = ref([
  {
    userId: 1,
    name: "CY YYDS",
    address: "南昌",
    telephone: "17612345678",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 2,
    name: "LXL YYDS",
    address: "成都",
    telephone: "17612345679",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 3,
    name: "JHY YYDS",
    address: "北京",
    telephone: "17612345677",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 4,
    name: "YYDS",
    address: "合肥",
    telephone: "17612345278",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
]);

watchEffect(() => {
  //筛选表单数据发生改变 就发送网络请求
  if (selectForms.value.userId) {
    console.log("abc");
  }
});
</script>
<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
}
.table {
  margin-top: 60px;
}
</style>
