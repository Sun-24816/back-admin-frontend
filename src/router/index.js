import { createRouter, createWebHistory } from 'vue-router';
import usermanage from "../components/usermanage.vue";
import setting from "../components/setting.vue";
import App from "../App.vue";

const routes = [
    {
        path: '/App',
        name: 'APP',
        component: App,
        meta: {
            title: '主页'
        }
    },
    {
        path: '/setting',
        name: 'setting',
        component: setting,
        meta: {
            title: '系统设置'
        },
    },
    {
        path: '/usermanage',
        name: 'usermanage',
        component: usermanage,
        meta: {
            title: '用户设置'
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;