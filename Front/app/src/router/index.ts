import { createRouter, createWebHistory } from 'vue-router';
import ComposeWith from '@/components/WEEK3/composable-with/ComposeWith.vue';
import FoundationConcepts from '@/components/WEEK3/concepts-with/FoundationConcepts.vue';
import FormLayout from '@/components/week4/pages/FormLayout.vue';
import DashboardLayout from '@/components/week4/pages/dashboard/DashboardLayout.vue';

import DashboardHomePage from '@/components/week4/pages/dashboard/pages/DashboardHomePage.vue';
import DashboardFavouritedPage from '@/components/week4/pages/dashboard/pages/DashboardFavouritedPage.vue';
import DashboardLocationPage from '@/components/week4/pages/dashboard/pages/DashboardLocationPage.vue';
import DashboardSettingPage from '@/components/week4/pages/dashboard/pages/DashboardSettingPage.vue';


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
  },
  {
    path: '/form',
    name: 'FormLayout',
    components: {
      week4Layout: FormLayout
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    components: {
      week4Layout: DashboardLayout
    },
    children:[
      {
        path:'',
        name:'DashboardHomePage',
        component: DashboardHomePage
      },
      {
        path: 'favourited',
        name: 'DashboardFavouritedPage',
        component: DashboardFavouritedPage
      },
      {
        path: 'location',
        name: 'DashboardLocationPage',
        component: DashboardLocationPage
      },
      {
        path: 'setting',
        name: 'DashboardSettingPage',
        component: DashboardSettingPage
      }
    ]
  }
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

 

export default router;
