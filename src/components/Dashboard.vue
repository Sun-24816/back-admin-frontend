<template>
  <el-container>
    <el-aside class="side" width="20%">
      <el-scrollbar>
        <el-menu>
          <el-sub-menu index="1">
            <template #title>
              <el-icon class="icon"><message /></el-icon>
              <span class="item">系统总览</span>
            </template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon class="icon"><Setting /></el-icon>
              <span class="item">系统管理</span>
            </template>
            <el-menu-item index="2-1">用户管理</el-menu-item>
            <el-menu-item index="2-2">部门管理</el-menu-item>
            <el-menu-item index="2-3">菜单管理</el-menu-item>
            <el-menu-item index="2-4">角色管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon class="icon"><Shop /></el-icon>
              <span class="item">商品中心</span>
            </template>
            <el-menu-item index="3-1">衣服</el-menu-item>
            <el-menu-item index="3-2">裤子</el-menu-item>
            <el-menu-item index="3-3">杯子</el-menu-item>
            <el-menu-item index="3-4">鞋子</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
        <div>
          <el-avatar class="avater" :icon="UserFilled"></el-avatar>
        </div>
        <el-button type="primary" class="search" :icon="Search">搜索</el-button></el-header
      >
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55" />
          <el-table-column label="序号" width="120">
            <template #default="scope">{{ scope.row.userId }}</template>
          </el-table-column>
          <el-table-column property="name" label="用户名" width="120" />
          <el-table-column property="address" label="居住地址" />
          <el-table-column property="telephone" label="手机号码" />
          <el-table-column property="createTime" label="创建时间" />
          <el-table-column property="updateTime" label="更新时间" />
          <el-table-column label="操作">
            <el-icon><EditPen /></el-icon> <span class="edit">编辑</span>
            <el-icon><Delete /></el-icon>
            <span class="delete">删除</span></el-table-column
          >
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { Menu as IconMenu, House, Delete, EditPen, Shop, Message, Setting } from "@element-plus/icons-vue";
import { UserFilled } from "@element-plus/icons-vue";
console.log("abc");
const tableData = [
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
];
</script>

<style scoped>
.avater {
  margin-right: 60px;
  float: right;
  margin-right: 60px;
}

.edit,
.delete {
  color: blue;
}

.search {
  margin-right: 30px;
  margin-top: 60px;
  float: right;
}

.el-header {
  height: 15%;
}

.el-aside {
  height: 100vh;
  color: white;
  background-color: #112130;
}

.el-menu-item,
.el-sub-menu,
el-menu {
  color: white;
  background-color: #112130;
}

.item {
  color: white;
}

.el-menu-item:hover {
  background-color: #2961b4;
}

.icon {
  color: white;
}

.el-sub-menu {
  color: red;
}

.el-sub-menu__title {
  align-items: center;
  box-sizing: border-box;
  color: white;
}
</style>
