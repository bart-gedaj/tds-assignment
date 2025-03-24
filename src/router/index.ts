import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

export enum RouteNames {
  Home = 'home',
  Stats = 'stats',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.Home,
      component: MainView,
    },
    {
      path: '/stats',
      name: RouteNames.Stats,
      component: import('@/views/StatsView.vue'),
    },
  ],
})

export default router
