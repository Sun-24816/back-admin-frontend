import { createRouter, createWebHistory } from 'vue-router'
import Dashboard2 from '@/components/Dashboard2.vue'
import Dashboard from '@/components/Dashboard.vue'
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
