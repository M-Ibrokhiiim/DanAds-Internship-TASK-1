import { createRouter, createWebHistory } from 'vue-router';
import ComposeWith from '@/components/WEEK3/composable-with/ComposeWith.vue';
import FoundationConcepts from '@/components/WEEK3/concepts-with/FoundationConcepts.vue';
import FormLayout from '@/components/week4/pages/FormLayout.vue';
import DashboardLayout from '@/components/week4/pages/DashboardLayout.vue';


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
    }  
  }
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isLogged: boolean = true;  
  

  if (to.meta.requiresAuth && isLogged) {
    next('/loginPage'); 
  } else {
    next(); 
  }
});


export default router;
