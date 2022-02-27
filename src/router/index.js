import { createRouter, createWebHashHistory } from 'vue-router'
import Top from '../views/Top.vue'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('../views/Skill.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
