import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/HomePage/HomePage.vue'
import SuperLottoPage from '@/pages/HomePage_SuperLottoPage/SuperLottoPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页',
    },
    redirect: '/SuperLottoPage',
    children: [
      {
        path: 'SuperLottoPage',
        name: 'SuperLottoPage',
        component: SuperLottoPage,
        meta: {
          title: '双色球',
        },
      },
    ],
  },
]
export default routes
