<template>
    <div class="menu">
        <el-menu :default-openeds="['1', '3']" :collapse="isCollapse">
        <el-sub-menu index="1">
          <template v-shot:title>
            <el-icon :size="30" style="color: #ffffff;">
              <Edit />
            </el-icon>
            导航一
          </template>
          <!-- <el-menu-item-group title="Group One"> -->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-sub-menu>
        <el-sub-menu index="2">
          <template v-slot:title><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template v-slot:title><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template v-slot:title><i class="el-icon-edit-outline"></i>导航四</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["isCollapse"]);
</script>
<style scoped>
.menu {
    width: 100%;
    height: 100%;
}

.el-menu {
    height: 100%;
}
</style>
