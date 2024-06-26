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
  },
  {
    path: '/example02-4',
    component: () => import('@/views/example02/example02-4.vue')
  },
  {
    path: '/example03-1/students/:sid/homeworks/:hid',
    // 路径中传参
    component: () => import('@/views/example03/example03-1.vue')
  },
  {
    path: '/example04-1/students/:sid/homeworks/:hid',
    component: () => import('@/views/example04/example04-1.vue')
  },
  {
    path: '/example05-1',
    component: () => import('@/views/example05/example05-1.vue')
  },
  {
    path: '/example05-2',
    component: () => import('@/views/example05/example05-2.vue')
  },
  {
    path: '/example05-3',
    component: () => import('@/views/example05/example05-3.vue')
  },
  {
    path: '/example06-1',
    component: () => import('@/views/example06/example06-1.vue')
  },
  {
    path: '/example06-2',
    component: () => import('@/views/example06/example06-2.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
