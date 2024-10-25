<template>
  <div>
    <el-dialog v-model="isShowDialog" @close="handleClose" title="添加数据">
      <el-form v-for="item in colomn">
        <el-form-item :label="item.label + ':'" label-width="100px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script setup>
import { watchEffect, ref } from "vue";
const emits = defineEmits(["closeInsertDialog"]);
const props = defineProps(["isShow", "colomns"]);
const isShowDialog = ref(false);
const colomn = ref([]);
watchEffect(() => {
  console.log("inser_dialog");
  isShowDialog.value = props.isShow;
  colomn.value = props.colomns;
  console.log(colomn.value);
});
const handleClose = () => {
  emits("closeInsertDialog");
};
</script>
<style scoped></style>
