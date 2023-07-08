import { comment } from 'postcss'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import("../views/Login.vue")
    },
    {
      path: '/home',
      name: 'home',
      component: () => import("../views/HomePage.vue")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../views/Register.vue")
    }
  ]
})

export default router
