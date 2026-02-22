import  type { RouteRecordRaw } from 'vue-router'
import FormLayout from "@/components/week4/pages/FormLayout.vue";
import DashboardLayout from "@/components/week4/pages/dashboard/DashboardLayout.vue";

import DashboardHomePage from "@/components/week4/pages/dashboard/pages/DashboardHomePage.vue";
import DashboardFavouritedPage from "@/components/week4/pages/dashboard/pages/DashboardFavouritedPage.vue";
import DashboardLocationPage from "@/components/week4/pages/dashboard/pages/DashboardLocationPage.vue";
import DashboardSettingPage from "@/components/week4/pages/dashboard/pages/DashboardSettingPage.vue";


export  const Week4HeaderRoutes: RouteRecordRaw[] = [
    {
        path: '/form',
        name: 'Form',
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
]


 