import { createRouter, createWebHistory } from 'vue-router'
import HomeV from '../views/HomeV.vue'
import QuizV from '../views/QuizV.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeV
    },
    {    
      path: '/quiz/:category',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizV.vue')
    }
  ]
})

export default router
