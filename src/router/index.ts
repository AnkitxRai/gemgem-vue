import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Parent from '../components/Parent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Parent',
    component: Parent,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
