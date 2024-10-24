<template>
  <div>
    <el-dialog
      destroy-on-close
      v-model="isShowDialog"
      @close="handleClose"
      title="编辑数据"
      width="500"
    >
      <el-form
        v-for="(value, key) in detailFormData"
        label-width="auto"
        style="max-width: 800px"
      >
        <el-form-item
          :label="key + ':'"
          v-if="key.includes('Time')"
          label-width="100px"
        >
          <el-date-picker
            v-model="detailFormData[key]"
            type="datetime"
            placeholder="Pick a Date"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            style="width: 400px"
          ></el-date-picker>
        </el-form-item>
        <el-form-item :label="key + ':'" v-else label-width="100px">
          <el-input
            v-model="detailFormData[key]"
            :disabled="key === 'userId'"
            style="width: 400px"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button @click="editConfirm" type="primary">确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps(["isShow", "detailData"]);
const emit = defineEmits(["editConfirm2", "editDialogClose", "editConfirm"]);
const isShowDialog = ref(false);
const detailFormData = ref({});
const handleClose = () => {
  emit("editDialogClose");
  console.log("提交关闭");
};
const editConfirm = () => {
  emit("editConfirm", detailFormData);
};
const handleCancel = () => {
  // 这里视图提交什么啊
  emit("editDialogClose");
};
watchEffect(() => {
  isShowDialog.value = props.isShow;
});
// 只读数据，实现单项修改
watchEffect(() => {
  detailFormData.value = { ...props.detailData };
  console.log("DHSADHSAKK");
  console.log(detailFormData.value);
});
</script>
<style scoped></style>
