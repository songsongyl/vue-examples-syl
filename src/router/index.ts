import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/example01/example01-1.vue')
  },
  {
    path: '/example02-1',
    component: () => import('@/views/example02/example02-1.vue')
  },
  {
    path: '/example02-2',
    component: () => import('@/views/example02/example02-2.vue')
  },
  {
    path: '/example02-3',
    component: () => import('@/views/example02/example02-3.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
