// 全局路由守卫
import { Router } from 'vue-router'
type RouterAuth = (router: Router) => void

const routerAuth: RouterAuth = (router) => {
  router.beforeEach((_to, _from, next) => {
    next()
  })
}

export default routerAuth
