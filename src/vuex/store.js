/**
 * Created by lan on 17/7/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const newList = []
const hotList = []

axios({
    url: 'http://1.teashop.applinzi.com/php/shop.php',
    method: 'GET',
    data: {
        classify: "new"
    }
}).then((res) => {
    var re = res.data;
    newList.push(re.slice(3,6))
    newList.push(re.slice(0,3))
})

axios({
    url: 'http://1.teashop.applinzi.com/php/hotProduct.php',
    method: 'GET',
    data: {
        classify: "hot"
    }
}).then((res) => {
    var re = res.data;
    hotList.push(re);
})
const state = {
    newList,
    hotList,
    carList: [],
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
    myCount:0,
    popLock:false,
    argPopLock:false,
    exits:false
}

const mutations = {
    show:function(state){
        alert(state.a)
    },
    increase ( state) {
        state.myCount++;
    },
    vipPopup (state){
        state.popLock = !state.popLock
    },
    argPopup (state){
        state.argPopLock = !state.argPopLock
    },
    insertCar (state,item) {
        state.carList.push(item)
    },
    removeCar (state, index) {
        state.carList.splice(index, 1)
    },
    gogo (state){
        state.exits = !state.exits
    }
}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})