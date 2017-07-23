// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        "carList": [

        ],
        "payList": [
            {
                "title": "大益普洱茶熟茶 琥珀方砖60g*4盒组合装云南勐海茶厂砖茶",
                "src": "static/images/carPage/car1.jpg",
                "count": 2,
                "price": 79.60,
                "pre_price": 95.52,
                "check": true,
                "merchant": "商家1",
                "status": "等待买家付款"
            },
            {
                "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                "src": "static/images/carPage/car2.jpg",
                "count": 1,
                "price": 478.00,
                "pre_price": 573.60,
                "check": true,
                "merchant": "商家2",
                "status": "等待买家付款"
            },
            {
                "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                "src": "static/images/carPage/car2.jpg",
                "count": 2,
                "price": 478.00,
                "pre_price": 573.60,
                "check": true,
                "merchant": "商家3",
                "status": "等待买家付款"
            },
            {
                "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                "src": "static/images/carPage/car2.jpg",
                "count": 3,
                "price": 478.00,
                "pre_price": 573.60,
                "check": true,
                "merchant": "商家4",
                "status": "等待买家付款"
            }
        ],
        "evaluateList": [
            {
                "title": "大益普洱茶熟茶 琥珀方砖60g*4盒组合装云南勐海茶厂砖茶",
                "src": "static/images/carPage/car1.jpg",
                "count": 2,
                "price": 79.60,
                "pre_price": 95.52,
                "check": true,
                "merchant": "商家1",
                "status": "交易成功"
            },
            {
                "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                "src": "static/images/carPage/car2.jpg",
                "count": 1,
                "price": 478.00,
                "pre_price": 573.60,
                "check": true,
                "merchant": "商家2",
                "status": "交易成功"
            },
            {
                "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                "src": "static/images/carPage/car2.jpg",
                "count": 2,
                "price": 478.00,
                "pre_price": 573.60,
                "check": true,
                "merchant": "商家3",
                "status": "交易成功"
            },
            {
                "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                "src": "static/images/carPage/car2.jpg",
                "count": 3,
                "price": 478.00,
                "pre_price": 573.60,
                "check": true,
                "merchant": "商家4",
                "status": "交易成功"
            }
        ],
        //新品上市
        newProd: [

        ],
    },
    getters:{

    },
    mutations:{
        show:function(state){
            alert(state.a)
        },
    }
})

import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'mtYHYx1V1nWLvQiH03ExnzQHVW0VL6UK'
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
