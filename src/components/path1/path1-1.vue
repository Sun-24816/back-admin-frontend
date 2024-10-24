<template>
  <div class="dashBoard">
    <el-form>
      <el-form>
        <el-row :gutter="20">
          <el-col v-for="item in columns" :span="6">
            <el-form-item :label="item.label + ':'" label-width="100px">
              <el-date-picker
                v-if="item.formItem.includes('Time')"
                v-model="selectForms[item.formItem]"
                type="date"
                placeholder="Pick a Date"
                format="YYYY-MM-DD HH:mm:ss"
                value-format="YYYY-MM-DD HH:mm:ss"
                style="width: 800px"
              >
              </el-date-picker>
              <el-input v-else v-model="selectForms[item.formItem]"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-form>
    <div class="add-btn"><el-button type="primary">新增数据</el-button></div>
    <div class="table">
      <el-table
        :data="tableData"
        v-loading="isLoading"
        height="600"
        style="width: 100%"
      >
        <el-table-column
          label="用户id"
          property="userId"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="用户名"
          property="name"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="居住地址"
          property="address"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="手机号码"
          property="telephone"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="创建时间"
          property="createTime"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="更新时间"
          property="updateTime"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">
              编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <editDialog
      :isShow="detailDialogVisible"
      :detailData="propDetailData"
      @editDialogClose="handerEditDialogClose"
      @editConfirm="handleEditConfirm"
    ></editDialog>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import editDialog from "@/base-ui/editDialog.vue";
const detailDialogVisible = ref(false);
const propDetailData = ref({});
const isLoading = ref(false);
//实际的详情数据
const detailData = ref({});
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

const data = [
  {
    userId: 1,
    name: "CY YYDS",
    address: "南昌",
    telephone: "17612345678",
    createTime: "2000-08-19 13:57:34",
    updateTime: "2024-08-19 13:57:34",
  },
  {
    userId: 2,
    name: "LXL YYDS",
    address: "成都",
    telephone: "17612345679",
    createTime: "2021-08-19 13:57:34",
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
    createTime: "2023-08-19 13:57:34",
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
    createTime: "2021-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 7,
    name: "JHY YYDS",
    address: "北京",
    telephone: "17612345677",
    createTime: "2024-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 8,
    name: "YYDS",
    address: "合肥",
    telephone: "17612345278",
    createTime: "2008-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 9,
    name: "CY YYDS",
    address: "南昌",
    telephone: "17612345678",
    createTime: "2009-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 10,
    name: "LXL YYDS",
    address: "成都",
    telephone: "17612345679",
    createTime: "2010-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 11,
    name: "JHY YYDS",
    address: "北京",
    telephone: "17612345677",
    createTime: "2011-08-19 13:57:34",
    updateTime: "2022-08-19 13:57:34",
  },
  {
    userId: 12,
    name: "YYDS",
    address: "合肥",
    telephone: "17612345278",
    createTime: "2012-08-19 13:57:34",
    updateTime: "2021-08-19 13:57:34",
  },
];

const tableData = ref([...data.slice(0, 10)]);

const selectForms = ref({
  userId: "",
  name: "",
  address: "",
  telephone: "",
  createTime: "",
  updateTime: "",
});

const handleDelete = () => {};

const handleEdit = (row) => {
  detailDialogVisible.value = true;
  propDetailData.value = row;

  console.log("进入handlerEdit");
  console.log(propDetailData.value);
};

const handleEditConfirm = (detail) => {
  console.log("确认添加");
  // console.log(detail.value);
  // console.log(detail);
  detailDialogVisible.value = false;
  detailData.value = detail.value;
  console.log(detailData.value);
  console.log("createTime:", detailData.value.createTime); // 确保可以访问
};

const handerEditDialogClose = () => {
  detailDialogVisible.value = false;
  console.log("执行 handerEditDialogClose");
};

watchEffect(() => {
  console.log("path1-1 watchEffect userId");
  console.log(selectForms.value);
  console.log(selectForms["userId"]);
  // console.log(selectForms[userId]);
});

watchEffect(() => {
  isLoading.value = true;
  console.log("编辑框的数据");
  console.log(detailData.value);
  console.log(detailData.value.updateTime);
  const tableDataIndex = tableData.value.findIndex(
    (item) => item.userId === detailData.value.userId
  );
  const dataIndex = data.findIndex(
    (item) => item.userId === detailData.value.userId
  );
  // 展示的tableData数据和data数据库中的数据都得改
  console.log("桌面数据 index");
  // tableDataIndex = 1;
  console.log(tableDataIndex);
  console.log(detailData.value.userId);
  tableData.value[tableDataIndex] = detailData.value;
  data[dataIndex] = detailData.value;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>
<style scoped>
.dashBoard {
  height: 100%;
  width: 100%;
}

.add-btn {
  width: 100%;
  display: flex;
  justify-content: end;
}
</style>
