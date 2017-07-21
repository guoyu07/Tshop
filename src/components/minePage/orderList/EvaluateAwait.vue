<template>
    <div class="evaluate">
        <list-page :list="evaluateList" :title="title"></list-page>
    </div>
</template>

<script>
    import ListPage from '../common/ListPage'

    export default {
        data: function () {
            return {
                "title": "待评价",
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
                ]
            }
        },
        components: {
            ListPage
        }
    }
</script>

<style>

</style>