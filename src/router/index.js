import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/homePage/HomePage'
import ServicePage from '@/components/servicePage/ServicePage'
import CarPage from '@/components/carPage/CarPage'
import ClassifyPage from '@/components/classifyPage/ClassifyPage'
import MinePage from '@/components/minePage/MinePage'
import Login from '@/components/minePage/Login'
import Register from '@/components/minePage/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/service',
        name: 'ServicePage',
        component: ServicePage
    },
    {
        path: '/car',
        name: 'CarPage',
        component: CarPage
    },
    {
        path: '/classify',
        name: 'ClassifyPage',
        component: ClassifyPage
    },
    {
        path: '/mine',
        name: 'MinePage',
        component: MinePage,
        children:[
        		{path:'/mine/login',name:'Login',component:Login}
        ]
    },
  ]
})
