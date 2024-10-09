<template>
    <div class="body">
        <div class="head">
          <el-row type="flex" class="head-row-bg" justify="space-between">
            <el-col :span="4">
              <div class="head-row-bg">
                <span>用户列表</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="head-row-bg">
                <el-button type="primary">新建用户</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="table">
          <!-- <el-button @click="filterData('条件1')">筛选条件1</el-button>
          <el-button @click="filterData('条件2')">筛选条件2</el-button> -->
            <el-table :data="tableData" style="width: 100%;">
              <el-table-column label="日期" width="180px" class="el-table-column-height">
                <template v-slot="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="姓名" width="180px" class="el-table-column-height">
                <template v-slot="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <template v-slot:reference >
                    <div class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div></template>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作" class="el-table-column-height">
                <template v-slot="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
        </el-table>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
// const props = defineProps(["tableData"]);
const tableData = ref([{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.body {
    width: 100%;
    height: 100%;
    background-color: white;
}
.bg-purple {
      background: #d3dce6;
    }
  
    .bg-purple-light {
      background: #e5e9f2;
    }
  
    .grid-content {
      /* border-radius: 4px; */
      /* min-height: 36px; */
      height: 100%;
      text-align: center;
      line-height: 60px;
    }
  
    .row-bg {
      height: 100%;
      background-color: #f9fafc;
      text-align: center;
    }
i {
  font-size:20px;
}
a {
  text-decoration: none;
  color: inherit;
}
.active {
  color: red;
}
.head {
  height:40px;
  width: 100%;
  margin-bottom: 10px;
}
.head-row-bg {
  height: 100%;
  line-height: 40px;
  text-align: center;
}
span {
  display: inline-block;
  height: 100%;
  /* line-height:40px; */
}
.el-button {
  width: 100%;
  height: 100%;
}
.el-main {
  background-color: #fff;
  margin-top:20px;
  margin-left:20px;
}
/* .el-table-column {
  line-height:40px;
} */

.el-table-column-height {
  line-height:40px;
}
</style>
