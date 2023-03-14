import { createRouter, createWebHistory } from 'vue-router'
import userDashboard from '../views/user-dashboard.vue'
import userProfile from '../views/user-profile.vue'
import route from '@/constants/route-constants'

const {routeName} = route();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/users",
      name: routeName.home,
      component: userDashboard
    },
    {
      path: '/users/:id',
      name: routeName.profile,
      component: userProfile
    },
  ]
})

export default router
