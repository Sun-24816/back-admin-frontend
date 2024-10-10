<template>
  <div>
    <el-form v-for="(value, key) in detailFormData" label-width="auto" style="max-width: 800px">
      <el-form-item v-if="key.includes('Time')" label-position="right" :label="key + ':'" label-width="100px">
        <el-date-picker
          v-model="detailFormData[key]"
          @change="(val) => handleFormInput(val, key)"
          type="datetime"
          placeholder="Pick a Date"
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
          style="width: 400px"
        />
      </el-form-item>
      <el-form-item v-else label-position="right" :label="key + ':'" label-width="100px">
        <el-input v-model="detailFormData[key]" @input="(val) => handleFormInput(val, key)" style="width: 400px" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const detailFormData = ref({ ...props.modelValue });

const handleFormInput = (value, key) => {
  console.log(value);

  emit("update:modelValue", { ...props.modelValue, [key]: value });
};
</script>
<style scoped></style>
