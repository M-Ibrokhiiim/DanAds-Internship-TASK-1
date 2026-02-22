import type { RouteRecordRaw } from 'vue-router'
import ComposeWith from '@/components/week3/composable-with/ComposeWith.vue';
import FoundationConcepts from '@/components/week3/concepts-with/FoundationConcepts.vue';


export const Week3HeaderRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Composable',
    component: ComposeWith
  },
  {
    path: '/conceptual',
    name: 'Concepts',
    component: FoundationConcepts
  }

]