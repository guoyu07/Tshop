<template>
    <div class="car">
        <div class="head">
            <!--<div class="mui mui-input-row mui-checkbox mui-left">-->
                <!--<label></label>-->
                <!--<input name="checkbox1" value="Item 1" type="checkbox">-->
            <!--</div>-->
            <div @click="checkAll">
                <input type="checkbox" v-model="isCheckAll">
            </div>
            <p>网站自营</p>
            <span @click="isEdit=!isEdit">{{ isEdit? '完成' : '编辑' }}</span>
        </div>
        <ul>
            <li v-for="(item,index) in carList">
                <div  class="check">
                    <input type="checkbox" v-model="item.check">
                </div>
                <div class="img">
                    <img :src="item.src" alt="">
                </div>
                <div class="title" v-show="!isEdit">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.price }} <span>{{ item.pre_price }}</span></p>
                    <span class="count">x{{ item.count }}</span>
                </div>
                <div class="edit" v-show="isEdit">
                    <div>
                        <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined" @click="decrease(index)">-</button>
                        <input type="text" v-model="item.count">
                        <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined" @click="crease(index)">+</button>
                    </div>
                    <input type="button" value="删除" @click="removeItem(index)">
                </div>
            </li>
        </ul>
        <div class="settle">
            <div @click="checkAll">
                <input type="checkbox" v-model="isCheckAll"><span>全选</span>
            </div>
            <div>结算({{ checked_count }})</div>
            <div>
                <p>合计：<span>￥{{ price_all }}</span></p>
                <span>已优惠：￥{{30}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                carList: [
                    {
                        "title": "大益普洱茶熟茶 琥珀方砖60g*4盒组合装云南勐海茶厂砖茶",
                        "src": "static/images/carPage/car1.jpg",
                        "count": 2,
                        "price": 79.60,
                        "pre_price": 95.52,
                        "check": true
                    },
                    {
                        "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                        "src": "static/images/carPage/car2.jpg",
                        "count": 1,
                        "price": 478.00,
                        "pre_price": 573.60,
                        "check": true
                    },
                    {
                        "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                        "src": "static/images/carPage/car2.jpg",
                        "count": 2,
                        "price": 478.00,
                        "pre_price": 573.60,
                        "check": true
                    },
                    {
                        "title": "中茶普洱 云南普洱熟茶07年十周年中茶牌圆茶380g 茶叶中粮出品",
                        "src": "static/images/carPage/car2.jpg",
                        "count": 3,
                        "price": 478.00,
                        "pre_price": 573.60,
                        "check": true
                    }
                ],
                isEdit: false,
                isCheckAll: true,
                checked_count: 0,
                price_all: 0
            }
        },
        methods: {
            crease: function (index) {
                this.carList[index].count += 1;
            },
            decrease: function (index) {
                this.carList[index].count -= 1;
            },
            checkAll: function () {
                if (this.isCheckAll){
                    for (var i=0; i<this.carList.length;i++){
                        this.carList[i].check = false;
                    }
                    this.isCheckAll = false;
                }else{
                    for (var i=0; i<this.carList.length;i++){
                        this.carList[i].check = true;
                    }
                    this.isCheckAll = true;
                }
            },
            removeItem: function (index) {
                this.carList.splice(index,1);
            }
        },
        mounted: function () {
            this.checked_count = this.carList.length;
            for (var i=0;i<this.carList.length;i++){
                this.price_all += this.carList[i].count * 1 * this.carList[i].price
            }

        },
        watch: {
            'carList': {
                handler: function(val){
                    var checked = 0
                    var price = 0
                    var f = true;
                    var t = true;
                    for (var i=0;i<val.length;i++){
                        if (val[i].check){
                            f = false;
                            checked++
                            price += val[i].count * 1 * val[i].price
                        }else{
                            t = false;
                        }
                    }
                    if (t){
                        this.isCheckAll = true;
                    }
                    if (f){
                        this.isCheckAll = false;
                    }
                    this.checked_count = checked;
                    this.price_all = price

                },
                deep: true
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .car
        position relative
        background-color #fff
        margin-top 1rem
        padding 0 0.2rem
        .head
            overflow hidden
            height 1rem
            div
                float left
                padding 0.3rem 0.2rem
                input
                    width 0.4rem
                    height 0.4rem
            p
                float left
                padding-left 0.5rem
                line-height 1rem
                font-size 0.32rem
            span
                line-height 1rem
                float right
                padding 0 0.32rem
                border-left 1px solid #ccc
        ul
            li
                position relative
                margin-top 0.2rem
                overflow hidden
                background-color #f5f5f5
                .check
                    float left
                    line-height 2rem
                    padding 0 0.2rem
                    input
                        line-height 2rem
                        width 0.4rem
                        height 0.4rem
                .img
                    width 2rem
                    height 2rem
                    padding 0.2rem
                    float left
                    img
                        width 100%
                        display block
                .title
                    padding 0.2rem 0
                    float left
                    width 5rem
                    margin-left 0.5rem
                    h4
                        line-height 0.5rem
                        color #636363
                    p
                        color #e82620
                        font-size 0.32rem
                        line-height 0.5rem
                        span
                            color #9a9a9a
                            padding-left 0.1rem
                            text-decoration line-through
                    >span
                        position absolute
                        right 0.4rem
                        top 1.1rem
                        font-size 0.4rem
                .edit
                    float left
                    margin-left 1rem
                    >div
                        height 2rem
                        line-height 2rem
                        input
                            width 1rem
                            text-align center
                        button
                            vertical-align middle
                            height 0.5333rem
                            font-size 0.32rem
                            line-height 0.3333rem
                    >input
                        position absolute;
                        right 0
                        top 0
                        height 2rem
                        width 1rem
                        line-height 2rem
                        background-color #ff4852
                        color #fff
                        font-size 0.4rem
        .settle
            position fixed
            background-color #f2f2f2
            bottom 1.3333rem
            left 0
            overflow hidden
            width 100%
            div:nth-child(1)
                float left
                line-height 1rem
                input
                    width 0.4rem
                    height 0.4rem
                    vertical-align middle
                    margin 0 0.1rem
            div:nth-child(2)
                float right
                width 1.5rem
                background-color red
                height 1rem
                line-height 1rem
                text-align center
                color #fff
            div:nth-child(3)
                margin-right 0.1rem
                float right
                font-size 0.24rem
                p
                    padding-top 0.2rem
                    line-height 0.4rem
                    span
                        color red
                        font-size 0.32rem
                span
                    line-height 0.3rem

</style>