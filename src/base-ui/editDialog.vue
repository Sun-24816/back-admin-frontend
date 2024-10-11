<template>
  <div>
    <el-dialog v-model="isShowDialog" destroy-on-close @close="handleClose" title="编辑数据" width="500">
      <el-form v-for="(value, key) in detailFormData" label-width="auto" style="max-width: 800px">
        <el-form-item v-if="key.includes('Time')" label-position="right" :label="key + ':'" label-width="100px">
          <el-date-picker
            v-model="detailFormData[key]"
            type="datetime"
            placeholder="Pick a Date"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            style="width: 400px"
          />
        </el-form-item>
        <el-form-item v-else label-position="right" :label="key + ':'" label-width="100px">
          <el-input :disabled="key === 'userId'" v-model="detailFormData[key]" style="width: 400px" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps(["isShow", "detailData"]);
const emit = defineEmits(["editConfirm", "editDialogClose"]);
const isShowDialog = ref(false);
const detailFormData = ref({});

const handleConfirm = () => {
  emit("editConfirm", detailFormData.value);
};
const handleCancel = () => {
  emit("editDialogClose");
};
const handleClose = () => {
  emit("editDialogClose");
};

watchEffect(() => {
  isShowDialog.value = props.isShow;
});
watchEffect(() => {
  detailFormData.value = { ...props.detailData };
});
</script>
<style scoped></style>
