<template>
  <div class="notFound">
    <el-result
      icon="error"
      title="404 error"
      sub-title="404 Not Found"
    ></el-result>
  </div>
</template>
<script setup></script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.notFound {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
