import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: () => import('@/view/xxx/list.vue') },
    { name: 'xxxList', path: '/xxx', component: () => import('@/view/xxx/list.vue') },
    { name: 'xxx', path: '/xxx/:id', component: () => import('@/view/xxx/detail.vue') },
    { name: 'log', path: '/log', component: () => import('@/view/log/index.vue') },
  ],
})
