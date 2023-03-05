import { createRouter, createWebHistory } from 'vue-router'
import userDashboard from '../views/user-dashboard.vue'
import userProfile from '../views/user-profile.vue'
import { useRouteConstants } from '@/composables/use-route-constants'

const {routePath, routeName} = useRouteConstants()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routePath.home,
      name: routeName.home,
      component: userDashboard
    },
    {
      path: routePath.profile,
      name: routeName.profile,
      component: userProfile
    },
  ]
})

export default router
