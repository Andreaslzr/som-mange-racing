import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MotoView from '@/views/MotoView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import loginview from '@/views/loginview.vue'
import Loginview from '@/views/loginview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/moto',
      name: 'moto',
      component: MotoView
    },
    {
      path: '/login',
      name: 'login',
      component: Loginview
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    },
  ]
})

export default router
