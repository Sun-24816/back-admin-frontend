<template>
  <div>
    <el-dialog
      v-model="isShowDialog"
      @close="handleClose"
      title="添加数据"
      width="500"
    >
      <el-form>
        <el-form-item
          v-for="item in colomn"
          :label="item.label + ':'"
          label-width="100px"
        >
          <el-date-picker
            v-model="insertInfoData[item.formItem]"
            type="datetime"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            style="width: 400px"
            v-if="item.label.includes('时间')"
          ></el-date-picker>
          <el-input v-else v-model="insertInfoData[item.formItem]"></el-input>
        </el-form-item>
        <div class="btn">
          <el-button @click="handleClose">取消</el-button>
          <el-button @click="handleAddData" type="primary">确认添加</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>
<script setup>
import { watchEffect, ref } from "vue";
const emits = defineEmits(["closeInsertDialog", "addDataConfirm"]);
const props = defineProps(["isShow", "colomns"]);
const isShowDialog = ref(false);
const insertInfoData = ref({});
const colomn = ref([]);

watchEffect(() => {
  // console.log("inser_dialog");
  console.log("HFIUDSFH");
  isShowDialog.value = props.isShow;
  colomn.value = props.colomns;
  console.log(insertInfoData.value);
});

const init = (colomn) => {
  // 清空 insertInfoData 的属性
  insertInfoData.value = {};
  colomn.forEach((item) => {
    // 使用 item.formItem 的值作为 insertInfoData 的属性名
    insertInfoData.value[item.formItem] = null; // 设置属性值为 null
  });
};
init(colomn.value);

const handleAddData = () => {
  console.log("提交千的数据");
  console.log(insertInfoData.value);
  emits("addDataConfirm", insertInfoData);
};

const handleClose = () => {
  emits("closeInsertDialog");
};
</script>
<style scoped>
.btn {
  display: flex;
  justify-content: end;
}
</style>
