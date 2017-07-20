import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/homePage/HomePage'
import ServicePage from '@/components/servicePage/ServicePage'
import CarPage from '@/components/carPage/CarPage'
import MinePage from '@/components/minePage/MinePage'
<<<<<<< HEAD
import ClassifyPage from '@/components/classifyPage/ClassifyPage'
	import flowerT from '@/components/classifyPage/sons/flowerT'
	import sixT from '@/components/classifyPage/sons/sixT'
	import puerT from '@/components/classifyPage/sons/puerT'
	import middleT from '@/components/classifyPage/sons/middleT'
	import yusanT from '@/components/classifyPage/sons/yusanT'
	import windT from '@/components/classifyPage/sons/windT'
	import goldT from '@/components/classifyPage/sons/goldT'
=======
import Login from '@/components/minePage/Login'
import Register from '@/components/minePage/Register'
>>>>>>> 9f917c26b3b9ba7c94987c2ebc1ce3cf8eb384e0

import DetailsPage from '@/components/classifyPage/details/DetailsPage'
import Screen from '@/components/classifyPage/details/Screen'
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
        component: ClassifyPage,
        children:[
        		{path: '/classify/flowerT',component:flowerT},
        		{path: '/classify/sixT',component:sixT},
        		{path: '/classify/puerT',component:puerT},
        		{path: '/classify/middleT',component:middleT},
        		{path: '/classify/yusanT',component:yusanT},
        		{path: '/classify/windT',component:windT},
        		{path: '/classify/goldT',component:goldT},
        ]
    },
    {
        path: '/mine',
        name: 'MinePage',
        component: MinePage,
        children:[
        		{path:'/mine/login',name:'Login',component:Login}
        ]
    },
    {
    		path: '/details',
        name: 'details',
        component: DetailsPage
    },
    {
      path: '/screen',
      name: 'screen',
      component: Screen
    },
  ]
})
