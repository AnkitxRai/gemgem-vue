import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Listing from '../components/Listing.vue'
import Create from '../components/Create.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Listing',
    component: Listing,
  },
    {
    path: '/create',
    name: 'Create',
    component: Create,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
