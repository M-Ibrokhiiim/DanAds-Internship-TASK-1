import { createRouter, createWebHistory } from 'vue-router';
import ComposeWith from '../components/WEEK3/composableWith/ComposeWith.vue';
import FoundationConcepts from '../components/WEEK3/conceptsWith/FoundationConcepts.vue';

const routes = [
  {
    path: '/composable',
    name: 'Composable',
    component: ComposeWith
  },
  {
    path: '/conceptual',
    name: 'Conceptual',
    component: FoundationConcepts
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
