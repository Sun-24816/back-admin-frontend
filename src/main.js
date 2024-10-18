import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // 引入 Element Plus 的样式
import * as ElementPlusIconVue from "@element-plus/icons-vue";
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component);
}

app.use(ElementPlus).use(store).use(router).mount("#app");
