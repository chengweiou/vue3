import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      components: { full: () => import('./full.vue') },
      children: [
        { name: 'log', path: 'log', component: () => import('@/view/log/index.vue') },
        { name: 'refresh', path: 'refresh', component: () => import('@/view/refresh.vue') },
        { name: 'login', path: '', component: () => import('@/view/login/index.vue') },
      ],
    },
    {
      path: '/test',
      components: { full: () => import('./admin.vue') },
      children: [
        { name: 'restapi', path: 'restapi', component: () => import('@/view/restapi/index.vue') },
      ],
    },
  ],
})
