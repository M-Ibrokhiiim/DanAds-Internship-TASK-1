import { createRouter, createWebHistory } from 'vue-router';
import ComposeWith from '../components/week3/composable-with/ComposeWith.vue';
import FoundationConcepts from '../components/week3/concepts-with/FoundationConcepts.vue';

const routes = [
  {
    path: '/',
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
