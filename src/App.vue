<template>
  <el-container style="height: 100%;">
  <el-aside :width="asideWidth + 'px'" style="background-color: rgb(238, 241, 246);">
    <Menu :isCollapse="isCollapse"></Menu>
  </el-aside>
  <el-container>
    <el-header>
      <div class="nav">
        <el-row :gutter="20">
            <el-col :span="1"><div class="grid-content bg-purple" style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <el-icon :size="30" style="color: #ffffff;" @click="handleisCollapse">
                   <Edit />
                </el-icon>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
              <el-breadcrumb separator="/" style="display: inline-block;">
                <el-breadcrumb-item :to="{ path: '/' }">
                 首页
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/setting' }">
                <!-- <router-link to="/setting">系统管理</router-link> -->
                系统管理
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/usermanage' }">
                <!-- <router-link to="/usermanage">用户管理</router-link> -->
                用户管理
              </el-breadcrumb-item>
              </el-breadcrumb>
            </div></el-col>
            <el-col :span="14"><div class="grid-content">
              <!-- <el-breadcrumb separator=">">
     <template v-for="(item, index) in breadList">
       <el-breadcrumb-item
         v-if="item.name"
         :key="index"
         :to="item.path"
       >{{ item.meta.title }}
      </el-breadcrumb-item>
     </template>
   </el-breadcrumb> -->
            </div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple" style="display: flex; justify-content: center; align-items: center; height: 100%;">
              <el-icon :size="30" style="color: #ffffff;" >
                   <User />
                </el-icon>
                <span>user</span>
            </div></el-col>
        </el-row>
      </div>
    </el-header>
    <el-main>
      <!-- <router-link to="/usermanage">用户</router-link> -->
      <router-view></router-view>
      <!-- <usermanage :isDisplay="isDisplay"></usermanage> -->
       <!-- <usermanage></usermanage> -->
    </el-main>
  </el-container>
</el-container>
</template>
<script setup>
import Menu from "./components/menu.vue";
import usermanage from "./components/usermanage.vue";
import setting from "./components/setting.vue";
import { ref, watch, onMounted } from 'vue';
import { useRouter,useRoute } from 'vue-router';

const router = useRouter();

const isCollapse = ref(true);
const isDisplay = ref(false);
const asideWidth = ref(63);
const breadList = ref([]);
const getBreadcrumb = () => {
  if (router.matched.length > 0 && Object.keys(router.matched[0].meta).length > 0) {
    breadList.value = router.matched;
  } else {
    breadList.value = [];
  }
};

onMounted(() => {
  getBreadcrumb();
});

watch(
  () => router,
  () => {
    getBreadcrumb();
  }
);
const handleisCollapse = () => {
    isCollapse.value = !isCollapse.value;
    asideWidth.value = isCollapse.value ? 63 : 200;
};
const handleisDisplay = () => {
    // isDisplay.value = !isDisplay.value;
    // router.push({path:'/usermanage'});
};
const handleclick = () => {
  router.push('/usermanage');
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.aside {
  transition: all 0s linear;
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
.bg-purple {
    /* background: #d3dce6; */
}

.grid-content {
    height: 100%;
    text-align: center;
}
</style>
