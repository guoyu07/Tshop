import Vue from 'vue'
import Router from 'vue-router'
//vue-baidu-map
import BaiDu from '@/components/homePage/Baidu'
import Search from '@/components/homePage/Search'
//五个主页面
import HomePage from '@/components/homePage/HomePage'
import ServicePage from '@/components/servicePage/ServicePage'
import CarPage from '@/components/carPage/CarPage'
import MinePage from '@/components/minePage/MinePage'
import ClassifyPage from '@/components/classifyPage/ClassifyPage'
//我的页面
import Login from '@/components/minePage/Login'
import Register from '@/components/minePage/Register'

import PayAwait from '@/components/minePage/orderList/PayAwait'
import OrderList from '@/components/minePage/orderList/OrderList'
import EvaluateAwait from '@/components/minePage/orderList/EvaluateAwait'

//ClassifyPage下面的页面***********************************************************************
import DetailsPage from '@/components/classifyPage/details/DetailsPage'
import Screen from '@/components/classifyPage/details/Screen'
//ClassifyPage下面的页面***********************************************************************


import BrandDisplay from '@/components/homePage/BrandDisplay'
import LimitTime from '@/components/homePage/LimitTime'
import Bargain from '@/components/homePage/Bargain'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/home',
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
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/payAwait',
            component: PayAwait
        },
        {
            path: '/orderList',
            component: OrderList
        },
        {
            path: '/evaluateAwait',
            component: EvaluateAwait
        },
        {
            path: '/BaiDu',
            component: BaiDu,
            name: 'BaiDu'
        },
        {
            path:'/brand',
            name:'brand',
            component:BrandDisplay
        },
        {
            path:'/limit',
            name:'LimitTime',
            component:LimitTime
        },
        {
            path:'/bargain',
            name:'Bargain',
            component:Bargain
        },
        {
            path:'/Search',
            component:Search,
            name:'Search'
        }
    ]
})
