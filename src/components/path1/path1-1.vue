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
      <el-table :data="tableData" height="600" style="width: 100%">
        <el-table-column type="selection" width="55" show-overflow-tooltip />
        <el-table-column label="序号" width="120" show-overflow-tooltip>
          <template #default="scope">{{ scope.row.userId }}</template>
        </el-table-column>
        <el-table-column property="name" label="用户名" width="120" show-overflow-tooltip />
        <el-table-column property="address" label="居住地址" show-overflow-tooltip />
        <el-table-column property="telephone" label="手机号码" show-overflow-tooltip />
        <el-table-column property="createTime" label="创建时间" show-overflow-tooltip />
        <el-table-column property="updateTime" label="更新时间" show-overflow-tooltip />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> 编辑 </el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index)"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="paginationInfo.currentPage"
        v-model:page-size="paginationInfo.pageSize"
        :page-sizes="paginationInfo.pageSizeDefine"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="paginationInfo.totalNum"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog v-model="detailDialogVisible" title="编辑数据" width="500">
      <detail v-model="detailData"></detail>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="detailDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

import detail from "../../base-ui/detail.vue";

const columns = [
  { title: "序号", formItem: "userId" },
  { title: "用户名", formItem: "name" },
  { title: "居住地址", formItem: "address" },
  { title: "手机号码", formItem: "telephone" },
  { title: "创建时间", formItem: "createTime" },
  { title: "更新时间", formItem: "updateTime" },
];
const data = [
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
  {
    userId: 5,
    name: "CY YYDS",
    address: "南昌",
    telephone: "17612345678",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 6,
    name: "LXL YYDS",
    address: "成都",
    telephone: "17612345679",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 7,
    name: "JHY YYDS",
    address: "北京",
    telephone: "17612345677",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 8,
    name: "YYDS",
    address: "合肥",
    telephone: "17612345278",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 9,
    name: "CY YYDS",
    address: "南昌",
    telephone: "17612345678",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 10,
    name: "LXL YYDS",
    address: "成都",
    telephone: "17612345679",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 11,
    name: "JHY YYDS",
    address: "北京",
    telephone: "17612345677",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 12,
    name: "YYDS",
    address: "合肥",
    telephone: "17612345278",
    createTime: "2022-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
];

const selectForms = ref({
  userId: undefined,
  name: "",
  address: "",
  telephone: "",
  createTime: "",
  updateTime: "",
});
const tableData = ref([...data.slice(0, 10)]);
const paginationInfo = ref({
  totalNum: data.length,
  currentPage: 1,
  pageSize: 10,
  pageSizeDefine: [10, 20, 30],
});
const detailData = ref({});
const detailDialogVisible = ref(false);

const handleSizeChange = (currentSize) => {
  console.log(currentSize, "currentSize");
  paginationInfo.value.pageSize = currentSize;
  getTableData();
};

const handleCurrentChange = (currentPage) => {
  console.log(currentPage, "currentPage");
  paginationInfo.value.currentPage = currentPage;
  getTableData();
};

const handleEdit = (index, rowData) => {
  detailData.value = rowData;
  detailDialogVisible.value = true;
};

const handleDelete = (index) => {
  //模拟删除时 发送网络请求 并且重新拉取table列表的过程
  tableData.value.splice(index, 1);
};

const handleConfirm = () => {
  detailDialogVisible.value = false;
};

const getTableData = () => {
  //模拟发送网络请求获取table data数据
  const startIndex = (paginationInfo.value.currentPage - 1) * paginationInfo.value.pageSize;
  tableData.value = data.slice(startIndex, startIndex + paginationInfo.value.pageSize);
};

watchEffect(() => {
  //筛选表单数据发生改变 就发送网络请求
  if (selectForms.value.userId) {
    console.log("abc");
  }
});

watchEffect(() => {
  console.log(detailData, "detailData");
  //编辑时detailData发生改变 此时table应重新请求列表 模拟发送网络重新请求列表 列表数据改变的过程
  const index = tableData.value.findIndex((item) => item.userId === detailData.value.userId);
  tableData.value[index] = detailData.value;
});
</script>
<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
}
.table {
  margin-top: 60px;
  height: 600px;
}
.pagination {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: end;
}
</style>
