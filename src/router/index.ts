import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Listing from '../components/Listing.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Listing',
    component: Listing,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
