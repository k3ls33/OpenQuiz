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
      component: QuizV
    }
  ]
})

export default router
