<template>
  <div class="dashboard">
    <el-form>
      <el-row :gutter="20">
        <el-col v-for="item in columns" :key="item.title" :span="6">
          <el-form-item :label="item.title + ':'" label-width="100px">
            <el-date-picker
              v-if="item.formItem.includes('Time')"
              v-model="selectForms[item.formItem]"
              type="date"
              placeholder="Pick a Date"
              format="YYYY-MM-DD HH:mm:ss"
              value-format="YYYY-MM-DD HH:mm:ss"
              style="width: 400px"
            />
            <el-input v-else v-model="selectForms[item.formItem]" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="add-btn">
      <el-button type="primary" @click="handleAddData">新增数据</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" v-loading="isLoading" height="600" style="width: 100%">
        <el-table-column type="selection" width="55" show-overflow-tooltip />
        <el-table-column label="用户id" width="120" show-overflow-tooltip>
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
    <editDialog
      :isShow="detailDialogVisible"
      :detailData="propDetailData"
      @editDialogClose="handleEditDialogClose"
      @editConfirm="handleEditConfirm"
    ></editDialog>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

import editDialog from "../../base-ui/editDialog.vue";

const columns = [
  { title: "用户id", formItem: "userId" },
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
//实际的详情数据
const detailData = ref({});

//传给组件的
const propDetailData = ref({});

const detailDialogVisible = ref(false);
const isLoading = ref(false);

const handleEditDialogClose = () => {
  detailDialogVisible.value = false;
};
const handleEditConfirm = (detail) => {
  detailDialogVisible.value = false;
  detailData.value = detail;
};
const handleAddData = () => {};

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
  propDetailData.value = rowData;
  detailDialogVisible.value = true;
};

const handleDelete = (index) => {
  isLoading.value = true;
  //模拟删除时 发送网络请求 并且重新拉取table列表的过程
  const startIndex = (paginationInfo.value.currentPage - 1) * paginationInfo.value.pageSize + index;
  data.splice(startIndex, 1);
  getTableData();
  paginationInfo.value.totalNum = data.length;
  //延时1s模拟发送网络请求的时间
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

const getTableData = () => {
  isLoading.value = true;
  //模拟发送网络请求获取table data数据
  const startIndex = (paginationInfo.value.currentPage - 1) * paginationInfo.value.pageSize;
  tableData.value = data.slice(startIndex, startIndex + paginationInfo.value.pageSize);
  //延时1s模拟发送网络请求的时间
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

watchEffect(() => {
  isLoading.value = true;
  //筛选非空的字段
  const notEmptyKeyData = [];
  Object.keys(selectForms.value).map((key) => {
    if (selectForms.value[key]) {
      notEmptyKeyData.push(key);
    }
  });

  //对非空字段过滤
  const filterFn = (item) => {
    let filters = true;
    notEmptyKeyData.map((key) => {
      if (key.includes("Time")) {
        //对时间进行特殊处理 筛选出当天的数据即可 而不是精确到每秒
        filters = filters && item[key].includes(selectForms.value[key].split(" ")[0]);
      } else {
        filters = filters && item[key].includes(selectForms.value[key]);
      }
    });
    return filters;
  };
  tableData.value = data.filter(filterFn);
  //延时1s模拟发送网络请求的时间
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

watchEffect(() => {
  console.log(detailData, "detailData");
  //编辑时detailData发生改变 此时table应重新请求列表 模拟发送网络重新请求列表 列表数据改变的过程
  isLoading.value = true;
  const tableDataIndex = tableData.value.findIndex((item) => item.userId === detailData.value.userId);
  const dataIndex = data.findIndex((item) => item.userId === detailData.value.userId);
  tableData.value[tableDataIndex] = detailData.value;
  data[dataIndex] = detailData.value;
  //延时1s模拟发送网络请求的时间
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
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
.add-btn {
  width: 100%;
  display: flex;
  justify-content: end;
}
</style>
