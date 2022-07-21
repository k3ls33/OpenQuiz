import { createRouter, createWebHistory } from 'vue-router'
import HomeV from '../views/HomeV.vue'
import QuizV from '../views/QuizV.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeV
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/quiz/:category',
    name: 'quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/QuizV.vue')
    component: QuizV
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
