import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import Loginview from '@/views/loginview.vue';
import CategoriaView from '@/views/CategoriaView.vue';
import CustomView from '@/views/CustomView.vue';
import CrossView from '@/views/CrossView.vue';
import NimbusView from '@/views/NimbusView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categoria',
      name: 'categoria',
      component: CategoriaView,
      meta: { requiresAuth: true }
    },
    {
      path: '/custom',
      name: 'custom',
      component: CustomView,
      meta: { requiresAuth: true }
    },
    {
      path: '/cross',
      name: 'cross',
      component: CrossView,
      meta: { requiresAuth: true }
    },
    {
      path: '/nimbus',
      name: 'nimbus',
      component: NimbusView,
      meta: { requiresAuth: true }
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
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
