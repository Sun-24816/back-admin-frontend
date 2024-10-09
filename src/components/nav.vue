<template>
    <div class="nav">
        <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">
                <el-icon :size="20" style="color: #ffffff;" @click="handleisCollapse">
            <Edit />
        </el-icon>
            </div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
</template>

<script setup>
const props = defineProps(["isCollapse"]);
const handleisCollapse = () => {
    isCollapse.value = !isCollapse.value;
};
</script>

<style scoped>
.bg-purple {
    background: #d3dce6;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>