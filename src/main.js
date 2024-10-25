import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css"; // 引入 Element Plus 的样式
import * as ElementPlusIconVue from "@element-plus/icons-vue";
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component);
}

//   .use(ElementPlus, {
// locale: zhCn,
// })

app.use(store).use(router).use(ElementPlus, { locale: zhCn }).mount("#app");
