import { createRouter, createWebHistory } from 'vue-router';
import { Week4HeaderRoutes } from './week4.header.routes';
import { Week3HeaderRoutes } from './week3.header.routes';

const routes = [
  ...Week3HeaderRoutes,
  ...Week4HeaderRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes 
});

 

export default router;
