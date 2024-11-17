import { createRouter, createWebHistory } from 'vue-router'
import routerAuth from './router-auth'
import Home from './routes/home'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Home,
  ],
})

routerAuth(router) // 绑定全局路由守卫

export default router
