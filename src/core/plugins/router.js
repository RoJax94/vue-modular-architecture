import { createRouter, createWebHistory } from 'vue-router';
import config from '@/config.json';

const router = createRouter({
  history: createWebHistory(config.router.base),
  routes: [],
});

export const registerRoutes = (routes, parentName = '') => {
  routes.forEach((route) => {
    if (parentName) {
      router.addRoute(parentName, route);
    } else {
      router.addRoute(route);
    }
  });
};

export default router;
